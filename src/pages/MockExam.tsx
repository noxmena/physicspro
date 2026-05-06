import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, XCircle, Trophy, ArrowRight, RotateCcw, 
  Brain, Clock, ShieldCheck, HelpCircle, LayoutGrid, 
  List, Zap, FileText, ChevronRight, ChevronDown 
} from "lucide-react";
import { cn } from "../lib/utils";
import { examQuestions } from "../data/examQuestions";

export default function MockExam() {
  const [gameState, setGameState] = useState<"intro" | "playing" | "results">("intro");
  const [viewMode, setViewMode] = useState<"interactive" | "full">("interactive");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});

  const startExam = () => {
    setGameState("playing");
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswers({});
    setShowFeedback({});
  };

  const handleAnswer = (qId: number, idx: number) => {
    if (showFeedback[qId] && viewMode === "interactive") return;
    
    const isCorrect = idx === examQuestions.find(q => q.id === qId)?.correctAnswer;
    
    setSelectedAnswers(prev => ({ ...prev, [qId]: idx }));
    
    if (viewMode === "interactive") {
      setShowFeedback(prev => ({ ...prev, [qId]: true }));
      if (isCorrect) setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < examQuestions.length) {
      setCurrentIdx(i => i + 1);
    } else {
      setGameState("results");
    }
  };

  const submitFullExam = () => {
    let finalScore = 0;
    examQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    setGameState("results");
  };

  if (gameState === "intro") {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-indigo-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 p-12 text-center text-white relative">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <Brain className="w-64 h-64 -ml-20 -mt-20 transform rotate-12" />
             </div>
             <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-black uppercase tracking-widest text-indigo-100">
                  National Physics Exam 2023
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">OFFICIAL CERTIFICATION<br/>MOCK SESSION</h1>
                <p className="text-indigo-100 text-lg font-medium max-w-xl mx-auto opacity-90">
                  Authenticate your knowledge with all 50 questions from the 2023 National Exam paper.
                </p>
             </div>
          </div>
          
          <div className="p-12 space-y-12">
            {/* View Mode Selection */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100">
               <span className="font-black text-[10px] uppercase tracking-widest text-slate-400">Layout Selection</span>
               <div className="flex gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <button 
                    onClick={() => setViewMode("interactive")}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                      viewMode === "interactive" ? "bg-slate-900 text-white shadow-xl" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <Zap className="w-3.5 h-3.5" /> Interactive
                  </button>
                  <button 
                    onClick={() => setViewMode("full")}
                    className={cn(
                      "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                      viewMode === "full" ? "bg-slate-900 text-white shadow-xl" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <FileText className="w-3.5 h-3.5" /> Full Paper
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-indigo-200 transition-colors space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-wide">Interactive Mode</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed mt-1">One question at a time with instant feedback and deep dive rationales for every answer.</p>
                  </div>
               </div>
               <div className="p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-indigo-200 transition-colors space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-wide">Full Paper Mode</h4>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed mt-1">Display all questions grouped by section. Review the entire exam at once, just like the official PDF.</p>
                  </div>
               </div>
            </div>

            <button 
              onClick={startExam}
              className="w-full py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-indigo-600 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
            >
              Initialize Assessment <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (gameState === "results") {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-indigo-100 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800" />
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-indigo-200">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase">Session Archive</h2>
          <p className="text-slate-500 font-bold text-lg mb-12">Performance analysis of the 2023 session.</p>
          
          <div className="bg-slate-50 rounded-[2rem] p-10 mb-12 border border-slate-100">
            <div className="text-7xl font-black text-indigo-600 mb-2 leading-none">
              {score} / {examQuestions.length}
            </div>
            <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Scientific Grade Accuracy: {Math.round((score / examQuestions.length) * 100)}%</p>
          </div>

          <button 
            onClick={() => setGameState("intro")} 
            className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group shadow-xl"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Restart Application
          </button>
        </motion.div>
      </div>
    );
  }

  if (viewMode === "interactive") {
    const q = examQuestions[currentIdx];
    return (
      <div className="max-w-4xl mx-auto space-y-8 py-8 px-4">
        <div className="flex items-center justify-between">
          <div className="px-5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center gap-2">
            <span className="font-black text-xs uppercase tracking-widest text-slate-500">Q {q.displayId} / 50</span>
            <span className="hidden md:block text-slate-200">|</span>
            <span className="font-black text-[10px] uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{q.group}</span>
          </div>
          <button onClick={() => setGameState("intro")} className="text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest">Quit session</button>
        </div>

        <motion.div 
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-slate-200/40"
        >
          <div className="mb-6 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Authentic Exam Item {q.displayId}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12 tracking-tight leading-tight">
            {q.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(q.id, i)}
                disabled={!!showFeedback[q.id]}
                className={cn(
                  "p-6 rounded-2xl border-2 transition-all duration-300 text-left relative",
                  !showFeedback[q.id] 
                    ? "border-slate-50 bg-slate-50/50 text-slate-600 hover:border-indigo-400 hover:bg-white hover:shadow-xl" 
                    : (i === q.correctAnswer 
                        ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-lg" 
                        : (selectedAnswers[q.id] === i ? "border-red-500 bg-red-50 text-red-800" : "border-slate-50 opacity-40")
                      )
                )}
              >
                <div className="flex items-center gap-4">
                   <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0",
                      !showFeedback[q.id] ? "bg-white border border-slate-200 text-slate-400" : (i === q.correctAnswer ? "bg-emerald-500 text-white" : "bg-red-500 text-white")
                   )}>
                      {String.fromCharCode(65 + i)}
                   </div>
                   <span className="font-bold">{opt}</span>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showFeedback[q.id] && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-12 space-y-8"
              >
                <div className="p-8 rounded-[2rem] bg-indigo-50 border border-indigo-100 text-slate-700 font-medium">
                  <div className="flex items-center gap-2 text-indigo-700 mb-6">
                    <Brain className="w-5 h-5" />
                    <span className="font-black uppercase tracking-widest text-[10px]">Correction Rationale</span>
                  </div>
                  <div className="space-y-4">
                    {q.explanation.split('\n').filter(l => l.trim()).map((line, lIdx) => (
                      <div key={lIdx} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                        <p className="text-sm font-bold text-slate-700">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={nextQuestion} 
                  className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group shadow-xl"
                >
                  {currentIdx + 1 === examQuestions.length ? "View Final Grade" : "Confirm & Continue"} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  // Full Paper Mode
  const groups = Array.from(new Set(examQuestions.map(q => q.group)));

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="flex items-center justify-between">
        <div className="p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm inline-flex gap-2">
           <button 
            onClick={() => setGameState("intro")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-all"
           >
             <RotateCcw className="w-3.5 h-3.5" /> Switch Mode
           </button>
        </div>
        <div className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-100">
           Item Count: {examQuestions.length}
        </div>
      </div>

      <div className="space-y-16">
        {groups.map((group) => (
          <div key={group} className="space-y-8">
            <div className="sticky top-20 z-10 py-4 bg-slate-50/80 backdrop-blur-md">
               <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-slate-200" />
                  <h3 className="font-black text-xs text-indigo-700 uppercase tracking-[0.2em] px-6 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm">{group}</h3>
                  <div className="h-[1px] flex-1 bg-slate-200" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examQuestions.filter(q => q.group === group).map((q) => (
                <div key={q.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group relative">
                   <div className="absolute top-6 right-8 text-[10px] font-black text-slate-200 uppercase tracking-widest transition-colors group-hover:text-indigo-100">
                      Q {q.displayId}
                   </div>
                   
                   <h4 className="text-lg font-black text-slate-900 mb-8 leading-tight pr-10">
                     {q.question}
                   </h4>

                   <div className="space-y-3">
                      {q.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(q.id, i)}
                          className={cn(
                            "w-full flex items-center gap-4 p-4 rounded-2xl text-xs font-bold text-left transition-all border-2",
                            selectedAnswers[q.id] === i 
                              ? "bg-slate-900 text-white border-slate-900 shadow-xl" 
                              : "bg-slate-50/50 text-slate-500 border-transparent hover:border-slate-200 hover:bg-white"
                          )}
                        >
                          <div className={cn(
                            "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[10px] border",
                            selectedAnswers[q.id] === i ? "bg-white/10 border-white/20" : "bg-white border-slate-200"
                          )}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          {opt}
                        </button>
                      ))}
                   </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-8 z-20">
         <div className="max-w-xl mx-auto p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
               <h4 className="font-black text-slate-900 uppercase text-lg tracking-tight">Final Submission</h4>
               <p className="text-slate-500 font-bold text-xs">Answered {Object.keys(selectedAnswers).length} out of 50</p>
            </div>
            <button 
              onClick={submitFullExam}
              className="px-10 py-5 bg-indigo-600 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
            >
              Submit Results
            </button>
         </div>
      </div>
    </div>
  );
}
