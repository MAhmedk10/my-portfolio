import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Let's Talk Business</h1>
          <p className="text-slate-400 mb-10 text-lg">
            Have a project in mind? Looking to automate a specific workflow? Fill out the form or reach us directly.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <Mail className="text-indigo-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email Us</h3>
                <p className="text-slate-400">consulting@ma-agency.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <Phone className="text-indigo-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Call Us</h3>
                <p className="text-slate-400">+1 (555) 012-3456</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <MapPin className="text-indigo-500" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Visit Us</h3>
                <p className="text-slate-400">123 Tech Park, Innovation Way<br />Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-sm mb-2">First Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Last Name</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-400 text-sm mb-2">Business Email</label>
              <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@company.com" />
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">Service Interest</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors">
                <option>AI Agents</option>
                <option>RAG Systems / Data Chat</option>
                <option>Workflow Automation</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 text-sm mb-2">Project Details</label>
              <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your automation needs..."></textarea>
            </div>

            <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}