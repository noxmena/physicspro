import { Link } from "react-router-dom";
import { BookOpen, AlertCircle, PlayCircle, Trophy, Lightbulb, Zap, HelpCircle, ArrowRight } from "lucide-react";
import { definitions, laws } from "../data";
import { motion } from "motion/react";

export default function Dashboard() {
  const stats = [
    { label: "Total Definitions", value: definitions.length, icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Laws & Formulas", value: laws.length, icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Active Quizzes", value: 3, icon: PlayCircle, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3 h-3" />
          Second Edition Now Live
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Welcome to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">PhysicsPro</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-medium">
          Master your Secondary Physics content. From Black Body Radiation to semiconductor electronics, everything you need is organized here.
        </p>
      </header>

      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xl shadow-slate-200/40 flex items-center gap-6 group hover:border-indigo-200 transition-colors"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/40 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="relative flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-4 rounded-2xl shadow-lg shadow-indigo-200">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div className="space-y-6 max-w-3xl">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Recommended for Your Study</h2>
              <p className="mt-2 text-slate-500 font-medium leading-relaxed">Based on your physics curriculum, we've structured optimal learning paths. We suggest exploring:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/30 transition-all cursor-default">
                <Trophy className="w-6 h-6 text-amber-500 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Spaced Repetition</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Memorize 40+ definitions effectively using our structured Hub.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/30 transition-all cursor-default">
                <AlertCircle className="w-6 h-6 text-indigo-500 mb-3" />
                <h4 className="font-bold text-slate-900 mb-1">Interactive Labs</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Visualize P-N junction drift currents graphically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link 
          to="/lessons" 
          className="group relative bg-gradient-to-br from-indigo-600 to-indigo-700 text-white p-10 rounded-[2.5rem] shadow-xl shadow-indigo-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <BookOpen className="w-64 h-64 -mb-20 -mr-20" />
          </div>
          <BookOpen className="w-10 h-10 mb-6 text-indigo-100" />
          <h3 className="text-3xl font-bold mb-3">Study Lessons</h3>
          <p className="text-indigo-100/80 font-medium text-lg max-w-xs">Review all units, experiments, and comparisons in a modern format.</p>
          <div className="mt-8 flex items-center gap-2 font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Get Started <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
        
        <Link 
          to="/quizzes" 
          className="group relative bg-gradient-to-br from-purple-600 to-purple-700 text-white p-10 rounded-[2.5rem] shadow-xl shadow-purple-200/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <HelpCircle className="w-64 h-64 -mb-20 -mr-20" />
          </div>
          <HelpCircle className="w-10 h-10 mb-6 text-purple-100" />
          <h3 className="text-3xl font-bold mb-3">Practice Quizzes</h3>
          <p className="text-purple-100/80 font-medium text-lg max-w-xs">Test yourself with multiple-choice and formula matching challenges.</p>
          <div className="mt-8 flex items-center gap-2 font-bold group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Start Quiz <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </section>
    </div>
  );
}
