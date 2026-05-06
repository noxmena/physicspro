import React, { useState } from "react";
import { definitions, laws, problems } from "../data";
import { BlockMath, InlineMath } from "react-katex";
import { ArrowRight, CheckCircle2, XCircle, Trophy, Settings, Beaker, Calculator, BookOpen, Brain, Zap, Target, RotateCcw } from "lucide-react";
import "katex/dist/katex.min.css";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

type QuizMode = "menu" | "mcq_terms" | "write_term" | "match_law" | "solve_problem";

interface QuestionMCQ {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  isMathFormula?: boolean;
}

interface QuestionWrite {
  id: number;
  question: string;
  correctAnswers: string[];
}

export default function Quizzes() {
  const [mode, setMode] = useState<QuizMode>("menu");
  const [currentScore, setCurrentScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Configuration state
  const [configMode, setConfigMode] = useState<QuizMode | null>(null);
  const [questionCount, setQuestionCount] = useState<number | "all">("all");
  
  // MCQ state
  const [mcqQuestions, setMcqQuestions] = useState<QuestionMCQ[]>([]);

  // Write state
  const [writeQuestions, setWriteQuestions] = useState<QuestionWrite[]>([]);
  const [textInput, setTextInput] = useState("");

  const startQuiz = () => {
    if (!configMode) return;
    
    let count = 0;
    
    if (configMode === "mcq_terms" || configMode === "write_term") {
        count = questionCount === "all" ? definitions.length : Math.min(questionCount as number, definitions.length);
        const shuffledDefs = [...definitions].sort(() => 0.5 - Math.random()).slice(0, count);
        
        if (configMode === "mcq_terms") {
            const questions: QuestionMCQ[] = shuffledDefs.map((def, idx) => {
                const wrongOptions = definitions
                .filter((d) => d.term !== def.term)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map((d) => d.term);
                const options = [...wrongOptions, def.term].sort(() => 0.5 - Math.random());
                return {
                    id: idx,
                    question: def.definition,
                    options,
                    correctAnswer: def.term
                };
            });
            setMcqQuestions(questions);
        } else {
            const questions: QuestionWrite[] = shuffledDefs.map((def, idx) => {
                return {
                    id: idx,
                    question: def.definition,
                    correctAnswers: [def.term.toLowerCase(), def.term.toLowerCase().replace(/ \([^)]*\)/g, "")]
                };
            });
            setWriteQuestions(questions);
        }
    } else if (configMode === "match_law") {
        count = questionCount === "all" ? laws.length : Math.min(questionCount as number, laws.length);
        const shuffledLaws = [...laws].sort(() => 0.5 - Math.random()).slice(0, count);
        
        const questions: QuestionMCQ[] = shuffledLaws.map((law, idx) => {
            const wrongOptions = laws
            .filter((l) => l.name !== law.name)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((l) => l.formula);
            
            const options = [...wrongOptions, law.formula].sort(() => 0.5 - Math.random());
            
            return {
                id: idx,
                question: `Which is the formula for: ${law.name}?`,
                options,
                correctAnswer: law.formula,
                isMathFormula: true
            };
        });
        setMcqQuestions(questions);
    } else if (configMode === "solve_problem") {
        count = questionCount === "all" ? problems.length : Math.min(questionCount as number, problems.length);
        const shuffledProblems = [...problems].sort(() => 0.5 - Math.random()).slice(0, count);
        
        const questions: QuestionMCQ[] = shuffledProblems.map((prob, idx) => {
            return {
                id: idx,
                question: prob.question,
                options: [...prob.options].sort(() => 0.5 - Math.random()),
                correctAnswer: prob.correctAnswer,
                explanation: prob.explanation
            };
        });
        setMcqQuestions(questions);
    }

    setCurrentIndex(0);
    setCurrentScore(0);
    setMode(configMode);
    setShowResult(false);
    setSelectedOption(null);
    setTextInput("");
    setConfigMode(null);
  };

  const handleMCQAnswer = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
    if (option === mcqQuestions[currentIndex].correctAnswer) {
      setCurrentScore(s => s + 1);
    }
  };

  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (showResult) return;
    setShowResult(true);
    const isCorrect = writeQuestions[currentIndex].correctAnswers.some(ans => 
      textInput.trim().toLowerCase() === ans || ans.includes(textInput.trim().toLowerCase())
    );
    if (isCorrect) {
      setCurrentScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedOption(null);
    setTextInput("");
    setCurrentIndex(prev => prev + 1);
  };

  const resetQuizzes = () => {
    setMode("menu");
    setConfigMode(null);
  };

  const totalQuestionsTotal = (mode === "mcq_terms" || mode === "match_law" || mode === "solve_problem") ? mcqQuestions.length : writeQuestions.length;

  if (mode === "menu") {
    if (configMode) {
      return (
        <div className="max-w-2xl mx-auto py-12">
            <button 
              onClick={() => setConfigMode(null)} 
              className="group text-slate-400 hover:text-indigo-600 font-black mb-10 flex items-center gap-2 uppercase tracking-widest text-xs transition-colors"
            >
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Back to Selection
            </button>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-indigo-100/50 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600" />
                <div className="w-20 h-20 bg-indigo-50 border border-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <Settings className="w-10 h-10 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight uppercase">Quiz Settings</h2>
                <p className="text-slate-500 font-medium text-lg mb-10">Select the volume of questions for this session.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-12">
                    {[5, 10, 20, "all"].map(num => (
                        <button 
                            key={num}
                            onClick={() => setQuestionCount(num as any)}
                            className={cn("px-6 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border-2 transition-all duration-300",
                                questionCount === num 
                                  ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-lg shadow-indigo-100 scale-105" 
                                  : "border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200 hover:bg-white hover:text-slate-600"
                            )}>
                            {num === "all" ? "Whole Set" : `${num} Questions`}
                        </button>
                    ))}
                </div>

                <button 
                  onClick={startQuiz} 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm w-full shadow-xl shadow-indigo-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                    Start Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </div>
      );
    }

    return (
      <div className="space-y-12">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-3 h-3" />
            Competitive Prep
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Knowledge <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Assessment</span>
          </h1>
          <p className="text-slate-500 max-w-2xl text-lg leading-relaxed font-medium">
            Test your mastery with high-stakes MCQ, manual term writing, and complex formula matching.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: "mcq_terms", title: "Choose Term", icon: BookOpen, accent: "indigo", desc: "Select the correct term for given definitions from MCQ options." },
            { id: "write_term", title: "Write Term", icon: Zap, accent: "purple", desc: "Type out the scientific term from memory based on definitions." },
            { id: "match_law", title: "Match Laws", icon: Calculator, accent: "emerald", desc: "Connect concept names to their correct mathematical formulas." },
            { id: "solve_problem", title: "Problem Solver", icon: Beaker, accent: "amber", desc: "Work through multi-step physics problems and find solutions." }
          ].map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -8 }}
              className="bg-white group cursor-pointer"
              onClick={() => setConfigMode(item.id as QuizMode)}
            >
              <div className="h-full p-8 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 group-hover:border-indigo-300 group-hover:shadow-indigo-100/50 transition-all flex flex-col items-center text-center">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300",
                  item.accent === "indigo" ? "bg-indigo-50 text-indigo-600" :
                  item.accent === "purple" ? "bg-purple-50 text-purple-600" :
                  item.accent === "emerald" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                )}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 flex-1">{item.desc}</p>
                <div className={cn(
                  "w-full py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all",
                  "bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white"
                )}>
                  Select Mode
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // --- End Screen ---
  if ((currentIndex >= totalQuestionsTotal || (showResult && currentIndex >= totalQuestionsTotal - 1 && mode === "menu" /* special case handled below */)) && totalQuestionsTotal > 0) {
      // Logic handled via the result screen return below
  }

  if (currentIndex >= totalQuestionsTotal && totalQuestionsTotal > 0) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-indigo-100 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-600 to-purple-600" />
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-indigo-200">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase">Quiz Complete!</h2>
          <p className="text-slate-500 font-bold text-lg mb-12">Excellent progress toward mastery.</p>
          
          <div className="bg-slate-50 rounded-[2rem] p-10 mb-12 border border-slate-100">
            <div className="text-7xl font-black text-indigo-600 mb-2 leading-none">
              {Math.round((currentScore / totalQuestionsTotal) * 100)}%
            </div>
            <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">Achievement Score</p>
            <div className="mt-8 flex justify-center items-center gap-6">
               <div className="text-slate-800 font-bold px-6 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                  {currentScore} <span className="text-slate-400 font-medium">Correct</span>
               </div>
               <div className="text-slate-800 font-bold px-6 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
                  {totalQuestionsTotal} <span className="text-slate-400 font-medium">Total</span>
               </div>
            </div>
          </div>

          <button 
            onClick={resetQuizzes} 
            className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group shadow-xl"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Restart Center
          </button>
        </motion.div>
      </div>
    );
  }

  // --- MCQ Quiz View ---
  if ((mode === "mcq_terms" || mode === "match_law" || mode === "solve_problem") && currentIndex < mcqQuestions.length) {
    const q = mcqQuestions[currentIndex];
    return (
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <button 
            onClick={resetQuizzes} 
            className="group text-slate-400 hover:text-red-500 font-black flex items-center gap-2 uppercase tracking-widest text-[10px] transition-colors"
          >
            <XCircle className="w-4 h-4" /> Exit Session
          </button>
          
          <div className="flex items-center gap-4">
             <div className="px-5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-black text-xs uppercase tracking-widest text-slate-500">
                Question <span className="text-indigo-600">{currentIndex + 1}</span> of {mcqQuestions.length}
             </div>
             <div className="px-5 py-2 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-100 font-black text-xs uppercase tracking-widest text-white">
                Score: {currentScore}
             </div>
          </div>
        </div>

        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/50">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600" 
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / mcqQuestions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-slate-200/40 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <BookOpen className="w-32 h-32" />
          </div>
          
          <h2 className={cn("font-extrabold text-slate-900 leading-tight mb-12 italic text-center", mode === "match_law" ? "text-2xl" : "text-3xl")}>
             "{q.question}"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleMCQAnswer(opt)}
                disabled={showResult}
                className={cn(
                  "p-8 rounded-2xl border-2 transition-all duration-300 text-left relative group",
                  q.isMathFormula ? "flex items-center justify-center min-h-[140px]" : "font-bold text-lg",
                  (!showResult && selectedOption !== opt) 
                    ? "border-slate-50 bg-slate-50/50 text-slate-600 hover:border-indigo-400 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 hover:scale-[1.02]" 
                    : "",
                  (showResult && opt === q.correctAnswer) 
                    ? "border-emerald-500 bg-emerald-50 text-emerald-800 shadow-lg shadow-emerald-100 scale-[1.02] z-10" 
                    : "",
                  (showResult && selectedOption === opt && opt !== q.correctAnswer) 
                    ? "border-red-500 bg-red-50 text-red-800 scale-95 opacity-80" 
                    : "",
                  (showResult && selectedOption !== opt && opt !== q.correctAnswer) 
                    ? "border-slate-50 opacity-40 grayscale" 
                    : ""
                )}
              >
                {q.isMathFormula ? (
                    <div className="text-xl">
                        <InlineMath math={opt} />
                    </div>
                ) : (
                    <span>{opt}</span>
                )}
                
                {showResult && opt === q.correctAnswer && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white rounded-full p-1.5 shadow-lg shadow-emerald-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                )}
                {showResult && selectedOption === opt && opt !== q.correctAnswer && (
                   <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-1.5">
                    <XCircle className="w-5 h-5" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-12 space-y-8"
              >
                {q.explanation && (
                  <div className="p-8 rounded-[2rem] bg-indigo-50/50 border border-indigo-100/50 text-slate-700 leading-relaxed font-medium">
                    <div className="flex items-center gap-2 text-indigo-700 mb-6">
                      <Zap className="w-5 h-5" />
                      <span className="font-black uppercase tracking-widest text-[10px]">Deep Dive Explanation</span>
                    </div>
                    <div className="space-y-4">
                      {q.explanation
                        .replace('Detailed Explanation:\\n', '')
                        .replace('Detailed Explanation:\n', '')
                        .split('\n')
                        .filter(line => line.trim().length > 0)
                        .map((line, lIdx) => {
                          const isPoint = line.trim().startsWith('-') || line.trim().startsWith('*');
                          const cleanLine = isPoint ? line.trim().substring(1).trim() : line.trim();
                          
                          return (
                            <div key={lIdx} className="flex gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                              <p className="text-sm font-medium text-slate-700">
                                {cleanLine.split(': ').length > 1 ? (
                                  <>
                                    <span className="font-black text-indigo-900">{cleanLine.split(': ')[0]}:</span>
                                    {cleanLine.substring(cleanLine.indexOf(': ') + 1)}
                                  </>
                                ) : cleanLine}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}

                <button 
                  onClick={nextQuestion} 
                  className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group shadow-xl"
                >
                  {currentIndex + 1 === mcqQuestions.length ? "Finish Assessment" : "Move to Next"} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  // --- Write Term Quiz View ---
  if (mode === "write_term" && currentIndex < writeQuestions.length) {
    const q = writeQuestions[currentIndex];
    const isCorrect = showResult && q.correctAnswers.some(ans => textInput.trim().toLowerCase() === ans || ans.includes(textInput.trim().toLowerCase()));

    return (
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <button 
            onClick={resetQuizzes} 
            className="group text-slate-400 hover:text-red-500 font-black flex items-center gap-2 uppercase tracking-widest text-[10px] transition-colors"
          >
            <XCircle className="w-4 h-4" /> Exit Session
          </button>
          
          <div className="flex items-center gap-4">
             <div className="px-5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm font-black text-xs uppercase tracking-widest text-slate-500">
                Question <span className="text-indigo-600">{currentIndex + 1}</span> of {writeQuestions.length}
             </div>
             <div className="px-5 py-2 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-100 font-black text-xs uppercase tracking-widest text-white">
                Score: {currentScore}
             </div>
          </div>
        </div>

        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/50">
          <motion.div 
            className="h-full bg-gradient-to-r from-indigo-600 to-purple-600" 
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / writeQuestions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-slate-200/40"
        >
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight text-center italic">
              "{q.question}"
            </h2>
          </div>

          <form onSubmit={handleWriteSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                autoFocus
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                disabled={showResult}
                placeholder="Submit scientific term..."
                className={cn(
                  "w-full p-8 rounded-2xl border-2 font-black text-xl md:text-2xl outline-none transition-all duration-300 text-center tracking-tight",
                  !showResult 
                    ? "border-slate-100 bg-slate-50 focus:border-indigo-400 focus:bg-white focus:shadow-xl focus:shadow-indigo-100/50" 
                    : (isCorrect 
                        ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-lg shadow-emerald-100" 
                        : "border-red-500 bg-red-50 text-red-900 shadow-lg shadow-red-100")
                )}
              />
              {showResult && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                   {isCorrect ? <CheckCircle2 className="text-emerald-500 w-10 h-10" /> : <XCircle className="text-red-500 w-10 h-10" />}
                </div>
              )}
            </div>
            
            {!showResult ? (
              <button 
                type="submit" 
                disabled={!textInput.trim()} 
                className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm disabled:opacity-50 hover:bg-indigo-600 transition-all shadow-xl"
              >
                Evaluate Answer
              </button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {!isCorrect && (
                  <div className="bg-indigo-50 p-8 border border-indigo-100 rounded-3xl text-center space-y-2">
                    <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em] block">Certified Correction</span>
                    <span className="text-2xl font-black text-indigo-950 block tracking-tight uppercase">{writeQuestions[currentIndex].correctAnswers[0]}</span>
                  </div>
                )}
                <button 
                  onClick={nextQuestion} 
                  type="button" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-indigo-100"
                >
                  {currentIndex + 1 === writeQuestions.length ? "Finish Assessment" : "Move to Next"} <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    );
  }

  // Final fallback (should not hit if logic is careful)
  return (
    <div className="flex items-center justify-center py-32">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );
}

