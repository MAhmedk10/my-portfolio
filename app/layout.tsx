import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ChatWidget from "@/app/components/ChatWidget";
import Link from "next/link";
import { Cpu, Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MA Agency | Enterprise AI Solutions",
  description: "Specialized B2B AI Agents, Automation, and RAG Systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

// Internal Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl tracking-tight">
          <Cpu className="text-indigo-500" />
          <span>MA AGENCY</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <Link href="/Services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/About" className="hover:text-white transition-colors">Company</Link>
          <Link href="/Contact" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all">
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Internal Footer Component
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-white font-bold text-lg mb-4">MA AGENCY</h3>
          <p className="text-slate-500 max-w-sm">
            Architecting the future of enterprise operations through intelligent agents, robust automations, and secure RAG infrastructure.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><Link href="/Services" className="hover:text-indigo-400">AI Agents</Link></li>
            <li><Link href="/Services" className="hover:text-indigo-400">Workflow Automation</Link></li>
            <li><Link href="/Services" className="hover:text-indigo-400">RAG Systems</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li>astrik410@gmail.com</li>
            <li>+92-337-2510160</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} MA Agency. All rights reserved.
      </div>
    </footer>
  );
}