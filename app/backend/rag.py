# import os
# from typing import Annotated, TypedDict
# from dotenv import load_dotenv

# from langchain_google_genai import ChatGoogleGenerativeAI
# from langchain_core.tools import tool
# from langgraph.graph import StateGraph, START, END
# from langgraph.graph.message import add_messages
# from langgraph.prebuilt import ToolNode, tools_condition
# from pinecone import Pinecone
# from langchain_community.embeddings import OllamaEmbeddings

# # Load environment variables
# load_dotenv()

# # --- API Keys ---
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
# PINECONE_INDEX_NAME = "agentic-rag"

# # --- Embedding Model ---
# embed_model = OllamaEmbeddings(model="nomic-embed-text")

# # --- Pinecone Setup ---
# pc = Pinecone(api_key=PINECONE_API_KEY)
# index = pc.Index(PINECONE_INDEX_NAME)

# # --- Tool: Embed Query ---
# @tool
# def embed_query(query: str, top_k: int = 5) -> str:
#     """
#     Convert query to vector → search Pinecone → return text chunks.
#     """
#     try:
#         vector = embed_model.embed_query(query)

#         results = index.query(vector=vector, top_k=top_k, include_metadata=True)
#         matches = results.get("matches", [])
#         if not matches:
#             return ""

#         context_parts = []
#         for match in matches:
#             text = match["metadata"].get("text", "")
#             source = match["metadata"].get("source", "Unknown")
#             context_parts.append(f"Source ({source}): {text}")

#         return "\n\n".join(context_parts)

#     except Exception as e:
#         print(f"❌ Retrieval Error: {e}")
#         return ""

# # --- Graph State ---
# class State(TypedDict):
#     messages: Annotated[list, add_messages]

# # --- LLM Setup ---
# llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0)
# llm_with_tools = llm.bind_tools([embed_query])

# def call_model(state: State):
#     system_prompt = (
#         "You are a helpful assistant. If the user asks for an embedding, "
#         "use the embed_query tool. For other topics, answer directly."
#     )
#     messages = [{"role": "system", "content": system_prompt}] + state["messages"]
#     response = llm_with_tools.invoke(messages)
#     return {"messages": [response]}

# # --- Build Graph ---
# builder = StateGraph(State)
# builder.add_node("agent", call_model)
# builder.add_node("tools", ToolNode([embed_query]))

# builder.add_edge(START, "agent")
# builder.add_conditional_edges("agent", tools_condition)
# builder.add_edge("tools", "agent")

# graph = builder.compile()

# --- Async Helper ---







import os
from typing import Annotated, TypedDict
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.tools import tool
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode, tools_condition
from pinecone import Pinecone
from langchain_community.embeddings import OllamaEmbeddings

# Load environment variables
load_dotenv()

# --- API Keys ---
GEMINI_API_KEY = os.getenv("GOOGLE_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_INDEX_NAME = "agentic-rag"

# --- Embedding Model ---
embed_model = OllamaEmbeddings(model="nomic-embed-text")

# --- Pinecone Setup ---
pc = Pinecone(api_key=PINECONE_API_KEY)
index = pc.Index(PINECONE_INDEX_NAME)

# --- Tool: Embed Query ---
@tool
def embed_query(query: str, top_k: int = 5) -> str:
    """
    Convert query to vector → search Pinecone → return text chunks.
    """
    try:
        print(f"🔍 Embedding: '{query}'")
        vector = embed_model.embed_query(query)

        results = index.query(vector=vector, top_k=top_k, include_metadata=True)
        matches = results.get("matches", [])
        if not matches:
            return ""

        context_parts = []
        for match in matches:
            text = match["metadata"].get("text", "")
            source = match["metadata"].get("source", "Unknown")
            context_parts.append(f"Source ({source}): {text}")

        return "\n\n".join(context_parts)

    except Exception as e:
        print(f"❌ Retrieval Error: {e}")
        return ""

# --- Graph State ---
class State(TypedDict):
    messages: Annotated[list, add_messages]

# --- LLM Setup ---
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0)
llm_with_tools = llm.bind_tools([embed_query])

def call_model(state: State):
    system_prompt = (
        "You are a helpful assistant. If the user asks for an embedding, "
        "use the embed_query tool. For other topics, answer directly."
    )
    messages = [{"role": "system", "content": system_prompt}] + state["messages"]
    response = llm_with_tools.invoke(messages)
    return {"messages": [response]}

# --- Build Graph ---
builder = StateGraph(State)
builder.add_node("agent", call_model)
builder.add_node("tools", ToolNode([embed_query]))

builder.add_edge(START, "agent")
builder.add_conditional_edges("agent", tools_condition)
builder.add_edge("tools", "agent")

graph = builder.compile()

# --- Async Helper ---
async def get_agent_response(query: str):
    final_state = await graph.ainvoke({"messages": [("user", query)]})
    return final_state["messages"][-1].content
