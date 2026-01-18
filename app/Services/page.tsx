import { Bot, Database, Workflow, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="pb-20">
      <div className="bg-slate-900 py-20 mb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Solutions</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Scalable, secure, and custom-engineered AI architectures designed for high-impact business environments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 space-y-24">
        
        {/* Service 1: AI Agents */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Bot className="text-indigo-500" size={28} />
              <h2 className="text-2xl font-bold text-white">Custom AI Agents</h2>
            </div>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Move beyond simple chatbots. We engineer autonomous agents capable of role-playing, reasoning, and tool usage. Whether it's a Customer Support Agent that processes refunds or a Sales Agent that qualifies leads, our systems act as digital employees.
            </p>
            <ul className="space-y-3">
              <ListItem text="24/7 Autonomous Operation" />
              <ListItem text="Multi-Step Reasoning Capabilities" />
              <ListItem text="Integration with CRM & ERPs" />
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
             {/* Abstract UI representation */}
             <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400"><Bot size={20}/></div>
                    <div className="bg-slate-800 p-4 rounded-lg rounded-tl-none w-full">
                        <p className="text-sm text-slate-300">Analyzing Q3 sales data. I have identified a 15% drop in the EMEA region. Initiating report generation...</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400"><Bot size={20}/></div>
                    <div className="bg-slate-800 p-4 rounded-lg rounded-tl-none w-full">
                        <p className="text-sm text-slate-300">Report generated. Emailing to Regional Manager now.</p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Service 2: RAG Systems */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-indigo-500" size={28} />
              <h2 className="text-2xl font-bold text-white">Enterprise RAG Systems</h2>
            </div>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Your data is your moat. Retrieval-Augmented Generation (RAG) allows Large Language Models to securely access your internal knowledge base—PDFs, Notion docs, SQL databases—to provide accurate, cited answers without hallucinating.
            </p>
            
            <ul className="space-y-3 mt-6">
              <ListItem text="Zero-Training Data Privacy" />
              <ListItem text="Instant Knowledge Updates" />
              <ListItem text="Source Citation for Every Answer" />
            </ul>
          </div>
          <div className="bg-slate-900 h-64 rounded-2xl border border-slate-800 flex items-center justify-center lg:order-1">
            <div className="text-center">
              <Database className="mx-auto text-slate-700 mb-4" size={48} />
              <p className="text-slate-500">Vector Database Architecture</p>
            </div>
          </div>
        </div>

        {/* Service 3: Automation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="text-indigo-500" size={28} />
              <h2 className="text-2xl font-bold text-white">Intelligent Automation</h2>
            </div>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              We replace repetitive manual workflows with intelligent pipelines. By connecting APIs and leveraging AI for decision-making nodes, we reduce operational drag and free your team for strategic work.
            </p>
            <ul className="space-y-3">
              <ListItem text="Cross-Platform API Integration" />
              <ListItem text="Human-in-the-Loop Handouts" />
              <ListItem text="Error Handling & Auto-Recovery" />
            </ul>
          </div>
          <div className="bg-slate-900 h-64 rounded-2xl border border-slate-800 flex items-center justify-center">
            <div className="text-center">
                <Workflow className="mx-auto text-slate-700 mb-4" size={48} />
                <p className="text-slate-500">Workflow Node Logic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-slate-300">
      <CheckCircle2 className="text-indigo-500" size={18} />
      <span>{text}</span>
    </li>
  );
}