# import uvicorn
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from pydantic import BaseModel
# from fastapi.responses import StreamingResponse
# from dotenv import load_dotenv

# # Import the graph from rag.py
# from rag import graph

# # Load environment variables
# load_dotenv()

# # Initialize FastAPI app
# app = FastAPI()

# # Configure CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],   # Allow all origins (adjust for production)
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Request schema
# class ChatRequest(BaseModel):
#     message: str

# # Endpoint: get-response
# # main.py — replace the get_response function with this
# from fastapi import HTTPException

# from fastapi import HTTPException

# @app.post("/get-response")
# async def get_response(request: ChatRequest):
#     async def event_stream():
#         try:
#             inputs = {"messages": [("user", request.message)]}

#             async for event in graph.astream_events(inputs, version="v1"):
#                 if event.get("event") != "on_chat_model_stream":
#                     continue

#                 # Extract chunk content safely
#                 raw_chunk = event["data"]["chunk"].content

#                 # Normalize chunk to a string
#                 if isinstance(raw_chunk, str):
#                     out = raw_chunk
#                 elif isinstance(raw_chunk, list):
#                     # Gemini-like blocks: join text fields from dict blocks
#                     parts = []
#                     for block in raw_chunk:
#                         if isinstance(block, dict) and "text" in block:
#                             parts.append(str(block["text"]))
#                         else:
#                             parts.append(str(block))
#                     out = "".join(parts)
#                 else:
#                     # Fallback: stringify anything else
#                     out = str(raw_chunk)

#                 # Ensure we yield a string (StreamingResponse will encode it)
#                 yield out

#         except Exception as e:
#             # Yield an error message so the client sees something instead of crashing
#             yield f"[ERROR] {str(e)}"

#     return StreamingResponse(event_stream(), media_type="text/event-stream")



# # Run server
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)











import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# Import the graph from rag.py
from rag import graph

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Allow all origins (adjust for production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request schema
class ChatRequest(BaseModel):
    message: str

# Endpoint: get-response
@app.post("/get-response")
async def get_response(request: ChatRequest):
    try:
        # Prepare input for the graph
        inputs = {"messages": [("user", request.message)]}
        result = await graph.ainvoke(inputs)

        # Extract last message
        last_message = result["messages"][-1]
        raw_content = last_message.content

        # Clean response (Gemini sometimes returns list of dicts)
        if isinstance(raw_content, list):
            clean_answer = "".join(
                block["text"]
                for block in raw_content
                if isinstance(block, dict) and block.get("type") == "text"
            )
        else:
            clean_answer = raw_content

        return {"response": clean_answer, "status": "success"}

    except Exception as e:
        print(f"❌ Error: {e}")
        return {"error": str(e), "status": "failed"}

# Run server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7860)
