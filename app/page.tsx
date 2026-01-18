import Link from "next/link";
import { ArrowRight, Bot, Database, Zap, ShieldCheck, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Enterprise AI Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Operational Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
              at Scale
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            We build custom AI infrastructure that empowers businesses to automate complex workflows, unlock data value, and deploy autonomous agents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/Contact" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Start Your Transformation <ArrowRight size={18} />
            </Link>
            <Link href="/Services" className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-slate-500 hover:text-white transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three pillars of modern AI adoption, engineered for reliability and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Bot className="text-indigo-400" size={32} />}
              title="Autonomous Agents"
              description="Deploy intelligent agents capable of planning, reasoning, and executing complex tasks without constant human oversight."
            />
            <ServiceCard 
              icon={<Zap className="text-indigo-400" size={32} />}
              title="Workflow Automation"
              description="End-to-end process automation connecting your existing software stack to reduce manual labor and error rates."
            />
            <ServiceCard 
              icon={<Database className="text-indigo-400" size={32} />}
              title="RAG Systems"
              description="Retrieval-Augmented Generation systems that allow AI to securely chat with your proprietary business data."
            />
          </div>
        </div>
      </section>

      {/* Trust/Social Proof */}
      <section className="py-20 border-y border-slate-900 bg-slate-900/50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Uptime Guaranteed</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-white mb-2">40%</h3>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Avg. Efficiency Gain</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Grade Security</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-indigo-500/50 transition-colors group">
      <div className="mb-6 p-4 bg-slate-950 rounded-lg inline-block group-hover:bg-indigo-950/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}