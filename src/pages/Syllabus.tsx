import React from "react";
import { syllabus } from "../data";
import { motion } from "motion/react";
import { Calendar, Layers, Map } from "lucide-react";
import { cn } from "../lib/utils";

export default function Syllabus() {
  const term1 = syllabus.filter(s => s.term === "First Term");
  const term2 = syllabus.filter(s => s.term === "Second Term");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
          <Map className="w-3 h-3" />
          Academic Roadmap
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Syllabus <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Overview</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-medium">
          A week-by-week breakdown of the Third Secondary Physics curriculum, structured for comprehensive mastery.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          { title: "First Term", data: term1, accent: "text-indigo-600", bg: "from-indigo-600 to-indigo-500" },
          { title: "Second Term", data: term2, accent: "text-purple-600", bg: "from-purple-600 to-purple-500" }
        ].map((term, tIdx) => (
          <motion.div 
            key={tIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: tIdx * 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200/60 shadow-xl shadow-slate-200/40"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
               <h2 className={cn("text-2xl font-black uppercase tracking-tight", term.accent)}>{term.title}</h2>
               <Calendar className="w-5 h-5 text-slate-300" />
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {term.data.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group flex gap-5 items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105 group-hover:rotate-3",
                    tIdx === 0 ? "bg-indigo-50 text-indigo-600" : "bg-purple-50 text-purple-600"
                  )}>
                    <span className="text-[10px] font-black uppercase tracking-tighter opacity-60">Wk</span>
                    <span className="text-xl font-black leading-none">{item.week}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <Layers className="w-3 h-3 text-slate-400" />
                       <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Unit {item.unit}</span>
                    </div>
                    <span className="text-slate-800 font-bold text-lg tracking-tight group-hover:text-slate-900 transition-colors">{item.topic}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
