export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl font-bold text-white mb-6">About MA Agency</h1>
        <p className="text-xl text-slate-400">
          We bridge the gap between cutting-edge Artificial Intelligence and practical Business Utility.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            At MA Agency, we believe that AI is not a replacement for human ingenuity, but an amplifier. Our mission is to build robust, secure, and transparent AI systems that solve real operational bottlenecks.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We move beyond the hype cycle. We don't just "wrap ChatGPT." We engineer custom architectures using LangChain, Vector Databases, and AutoGen to deliver enterprise-grade reliability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatBox number="50+" label="Projects Delivered" />
          <StatBox number="3" label="Continents Served" />
          <StatBox number="10M+" label="Tokens Processed" />
          <StatBox number="24/7" label="Support Coverage" />
        </div>
      </div>
      
      <div className="bg-indigo-900/10 border border-indigo-900/30 p-10 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to modernize your stack?</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Our team is ready to audit your current workflow and propose a high-ROI AI implementation strategy.
        </p>
        <a href="/contact" className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors">
          Get in Touch
        </a>
      </div>
    </div>
  );
}

function StatBox({ number, label }: { number: string, label: string }) {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
      <div className="text-3xl font-bold text-indigo-400 mb-1">{number}</div>
      <div className="text-slate-500 text-sm">{label}</div>
    </div>
  );
}