import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, HelpCircle, FileText, Activity, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "./lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function Layout() {
  const location = useLocation();

  const links = [
    { to: "/", icon: Activity, label: "Dashboard" },
    { to: "/lessons", icon: BookOpen, label: "Lessons" },
    { to: "/reference", icon: FileText, label: "Reference Guide" },
    { to: "/quizzes", icon: HelpCircle, label: "Practice" },
    { to: "/questions", icon: Sparkles, label: "Questions Bank" },
    { to: "/exam", icon: ShieldCheck, label: "2023 Mock Exam" },
    { to: "/syllabus", icon: Layers, label: "Syllabus" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-slate-200/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform duration-200">
                <span className="font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Physics<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Pro</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                    location.pathname === link.to
                      ? "bg-indigo-50 text-indigo-700 shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <link.icon className={cn("w-4 h-4", location.pathname === link.to ? "text-indigo-600" : "text-slate-400")} />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation (Minimal for now, can be expanded if needed) */}
            <div className="flex md:hidden items-center gap-1 overflow-x-auto max-w-[200px] no-scrollbar">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap",
                    location.pathname === link.to
                      ? "bg-indigo-600 text-white"
                      : "text-slate-500 bg-slate-100"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200/60 bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">
            &copy; 2026 PhysicsPro Academy. Built for Secondary Physics Mastery.
          </p>
        </div>
      </footer>
    </div>
  );
}
