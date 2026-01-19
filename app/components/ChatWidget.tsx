// "use client";

// import { useState, useRef, useEffect } from "react";
// import { MessageSquare, X, Send, Loader2, Bot } from "lucide-react";

// type Message = {
//   role: "user" | "bot";
//   content: string;
// };

// export default function ChatWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [messages, setMessages] = useState<Message[]>([
//     { role: "bot", content: "Hello. I am the MA Agency AI. Ask me about our services, pricing, or technical capabilities." }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Auto-scroll to bottom of chat
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!query.trim()) return;

//   // Add User Message
//   const userMessage = query;
//   setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
//   setQuery("");
//   setIsLoading(true);

//   try {
//     const response = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: userMessage }),
//     });

//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(`Server error: ${response.status} ${text}`);
//     }

//     if (!response.body) throw new Error("No response body");

//     // Add an empty bot message placeholder to update progressively
//     setMessages((prev) => [...prev, { role: "bot", content: "" }]);

//     const reader = response.body.getReader();
//     const decoder = new TextDecoder();
//     let botMessage = "";

//     // Read chunks progressively
//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) break;
//       botMessage += decoder.decode(value, { stream: true });

//       // Update UI progressively on each chunk
//       setMessages((prev) => {
//         const last = prev[prev.length - 1];
//         if (last?.role === "bot") {
//           return [...prev.slice(0, -1), { role: "bot", content: botMessage }];
//         } else {
//           return [...prev, { role: "bot", content: botMessage }];
//         }
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     setMessages((prev) => [
//       ...prev,
//       { role: "bot", content: "Connection error. Please try again later." },
//     ]);
//   } finally {
//     setIsLoading(false);
//   }
// };



//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
//       {/* Chat Window */}
//       {isOpen && (
//         <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
//           {/* Header */}
//           <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
//               <span className="font-semibold text-white">MA Assistant</span>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
//               <X size={18} />
//             </button>
//           </div>

//           {/* Messages Area */}
//           <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
//                     msg.role === "user"
//                       ? "bg-indigo-600 text-white rounded-br-none"
//                       : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
//                   }`}
//                 >
//                    {msg.role === "bot" && <Bot size={16} className="mb-1 text-indigo-400" />}
//                   {msg.content}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-slate-800 p-3 rounded-lg rounded-bl-none border border-slate-700 flex items-center gap-2">
//                   <Loader2 size={16} className="animate-spin text-indigo-400" />
//                   <span className="text-xs text-slate-400">Retrieving context...</span>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Input Area */}
//           <form onSubmit={handleSubmit} className="p-4 bg-slate-950 border-t border-slate-800">
//             <div className="relative">
//               <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Ask about agents, RAG, or automation..."
//                 className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
//               />
//               <button
//                 type="submit"
//                 disabled={isLoading || !query.trim()}
//                 className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 <Send size={16} />
//               </button>
//             </div>
//             <div className="text-center mt-2">
//                <span className="text-[10px] text-slate-600">AI-generated response based on internal docs.</span>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-900/20 flex items-center justify-center transition-all hover:scale-105"
//       >
//         {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
//       </button>
//     </div>
//   );
// }












"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Bot } from "lucide-react";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello. I am the MA Agency AI. Ask me about our services, pricing, or technical capabilities." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Add User Message
    const userMessage = query;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setQuery("");
    setIsLoading(true);

    try {
      const response = await fetch("https://astrik10-my-portfolio-backend.hf.space/get-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // Add Bot Response
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.response || "Sorry, I encountered an error retrieving that information." },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Connection error. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-semibold text-white">MA Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700"
                  }`}
                >
                   {msg.role === "bot" && <Bot size={16} className="mb-1 text-indigo-400" />}
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-lg rounded-bl-none border border-slate-700 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-indigo-400" />
                  <span className="text-xs text-slate-400">Retrieving context...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-950 border-t border-slate-800">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about agents, RAG, or automation..."
                className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-slate-600">AI-generated response based on internal docs.</span>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-900/20 flex items-center justify-center transition-all hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}