import { curriculum } from "../curriculum";
import Markdown from "react-markdown";
import { BookOpen, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Lessons() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3 h-3" />
          Interactive Curriculum
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Physics <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Lessons</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg font-medium">
          Comprehensive course modules split into detailed units and structured lessons.
        </p>
      </header>

      <div className="space-y-16">
        {curriculum.map((unit, unitIdx) => (
          <motion.div 
            key={unitIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: unitIdx * 0.1 }}
            className="group"
          >
            <div className="bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40">
              <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 px-8 py-10 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="relative">
                  <span className="text-indigo-200 text-sm font-black uppercase tracking-[0.2em] mb-4 block opacity-80">Module {unitIdx + 1}</span>
                  <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">{unit.unit}</h3>
                  <p className="text-indigo-100/80 text-lg font-medium max-w-2xl">{unit.description}</p>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-12">
                {unit.lessons.map((lesson, lessonIdx) => (
                  <div key={lessonIdx} className="relative pl-12 group/lesson">
                    {/* Vertical timeline line */}
                    {lessonIdx !== unit.lessons.length - 1 && (
                      <div className="absolute left-[20px] top-[40px] bottom-[-20px] w-0.5 bg-slate-100 group-hover/lesson:bg-indigo-100 transition-colors" />
                    )}
                    
                    {/* Number badge */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center font-black text-sm group-hover/lesson:bg-indigo-600 group-hover/lesson:text-white group-hover/lesson:border-indigo-600 group-hover/lesson:shadow-lg group-hover/lesson:shadow-indigo-200 transition-all duration-300">
                      {lessonIdx + 1}
                    </div>

                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                        {lesson.title}
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover/lesson:text-indigo-400 group-hover/lesson:translate-x-1 transition-all" />
                      </h4>
                      <div className="prose prose-slate prose-indigo max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-indigo-900">
                        <Markdown>{lesson.content}</Markdown>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
