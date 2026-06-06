import { useState, useEffect, useMemo } from "react";
import { 
  Tag, 
  Type, 
  HelpCircle, 
  ListOrdered, 
  AlertCircle, 
  Columns, 
  Calculator, 
  Flame, 
  Award, 
  RotateCcw, 
  Search, 
  Check, 
  X, 
  Lightbulb, 
  BookOpen, 
  Eye, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { questionBank, QuestionBankItem, QuestionType } from "../data/questionBank";

export default function Questions() {
  // State for user metrics
  const [answeredIds, setAnsweredIds] = useState<Record<string, { correct: boolean; inputAnswer?: string }>>(() => {
    const saved = localStorage.getItem("physics_pro_answered");
    return saved ? JSON.parse(saved) : {};
  });

  const [streak, setStreak] = useState<number>(() => {
    return parseInt(localStorage.getItem("physics_pro_streak") || "0", 10);
  });

  // Mode: 'flashcard' | 'workbook'
  const [viewMode, setViewMode] = useState<'flashcard' | 'workbook'>("flashcard");
  const [workbookGroupBy, setWorkbookGroupBy] = useState<'none' | 'unit' | 'type'>('unit');

  // Selection states
  const [selectedUnit, setSelectedUnit] = useState<number | "all">("all");
  const [selectedType, setSelectedType] = useState<QuestionType | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Flashcard carousel active index
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [viewIndexInput, setViewIndexInput] = useState("");

  // Input states for writing-based questions
  const [inputText, setInputText] = useState("");
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({});
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const handleRevealAll = () => {
    if (window.confirm("Are you sure you want to reveal all answers for the current view?")) {
      const allIds = filteredQuestions.reduce((acc, q) => {
        acc[q.id] = true;
        return acc;
      }, {} as Record<string, boolean>);
      setRevealedIds(prev => ({ ...prev, ...allIds }));
    }
  };

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem("physics_pro_answered", JSON.stringify(answeredIds));
  }, [answeredIds]);

  useEffect(() => {
    localStorage.setItem("physics_pro_streak", streak.toString());
  }, [streak]);

  // Handle answers and streak management
  const handleAnswerSubmit = (qId: string, isCorrect: boolean, inputAnswer?: string) => {
    if (answeredIds[qId]) return; // Already locked

    setAnsweredIds(prev => ({
      ...prev,
      [qId]: { correct: isCorrect, inputAnswer }
    }));

    if (isCorrect) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Are you sure you want to reset all of your progress, quiz records, and statistics?")) {
      setAnsweredIds({});
      setStreak(0);
      setRevealedIds({});
      setInputText("");
      setInputErrors({});
      setFlashcardIndex(0);
      localStorage.removeItem("physics_pro_answered");
      localStorage.removeItem("physics_pro_streak");
    }
  };

  const handleDirectJumpCard = (value: string) => {
    setViewIndexInput(value);
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1 && num <= filteredQuestions.length) {
      setFlashcardIndex(num - 1);
    }
  };

  const handleNextCard = () => {
    if (flashcardIndex < filteredQuestions.length - 1) {
      setFlashcardIndex(prev => prev + 1);
      setInputText("");
      setViewIndexInput("");
    }
  };

  const handlePrevCard = () => {
    if (flashcardIndex > 0) {
      setFlashcardIndex(prev => prev - 1);
      setInputText("");
      setViewIndexInput("");
    }
  };

  // Filtered Questions list
  const filteredQuestions = useMemo(() => {
    return questionBank.filter(q => {
      const matchUnit = selectedUnit === "all" || q.unit === selectedUnit;
      const matchType = selectedType === "all" || q.type === selectedType;
      const matchSearch = searchQuery === "" || 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.modelAnswer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchUnit && matchType && matchSearch;
    });
  }, [selectedUnit, selectedType, searchQuery]);

  // Adjust flashcard index if bounds change
  useEffect(() => {
    if (flashcardIndex >= filteredQuestions.length) {
      setFlashcardIndex(Math.max(0, filteredQuestions.length - 1));
    }
  }, [filteredQuestions, flashcardIndex]);

  // Sanitize text for tolerant validation of terms and fills
  const sanitizeStr = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  // Validate written answers
  const handleCheckTextAnswer = (q: QuestionBankItem) => {
    const errorKey = q.id;
    if (!inputText.trim()) {
      setInputErrors(prev => ({ ...prev, [errorKey]: "Please type or formulate your answer first!" }));
      return;
    }

    const userInput = sanitizeStr(inputText);
    const correctTarget = sanitizeStr(q.correctAnswer as string);

    // Let's also support matching sub-keywords safely
    const words = correctTarget.split(" ");
    const isCloseMatch = userInput === correctTarget || 
      (correctTarget.length > 3 && userInput.includes(correctTarget)) ||
      (correctTarget.includes("/") && correctTarget.split("/").some(sub => userInput.includes(sanitizeStr(sub)))) ||
      (correctTarget.includes("or") && correctTarget.split(" or ").some(sub => userInput.includes(sanitizeStr(sub))));

    handleAnswerSubmit(q.id, isCloseMatch, inputText);
    setInputErrors(prev => ({ ...prev, [errorKey]: "" }));
  };

  // Quick stats
  const totalInBank = questionBank.length;
  const totalCorrect = Object.values(answeredIds).filter(a => a.correct).length;
  const totalIncorrect = Object.values(answeredIds).filter(a => !a.correct).length;
  const activeAccuracy = useMemo(() => {
    const attempted = totalCorrect + totalIncorrect;
    return attempted > 0 ? Math.round((totalCorrect / attempted) * 100) : 0;
  }, [totalCorrect, totalIncorrect]);

  // Format Helper Utilities
  const getFormatIcon = (type: QuestionType) => {
    switch (type) {
      case "term": return Tag;
      case "fill": return Type;
      case "true-false": return HelpCircle;
      case "mcq": return ListOrdered;
      case "situation": return AlertCircle;
      case "compare": return Columns;
      case "problem": return Calculator;
    }
  };

  const getFormatColor = (type: QuestionType) => {
    switch (type) {
      case "term": return "text-emerald-600 bg-emerald-50 border-emerald-100";
      case "fill": return "text-cyan-600 bg-cyan-50 border-cyan-100";
      case "true-false": return "text-amber-600 bg-amber-50 border-amber-100";
      case "mcq": return "text-indigo-600 bg-indigo-50 border-indigo-100";
      case "situation": return "text-purple-600 bg-purple-50 border-purple-100";
      case "compare": return "text-pink-600 bg-pink-50 border-pink-100";
      case "problem": return "text-rose-600 bg-rose-50 border-rose-100";
    }
  };

  const unitsList = [
    { value: 1, label: "M1: Magnetic Effects" },
    { value: 2, label: "M2: EM Induction" },
    { value: 3, label: "M3: Modern & Quantum" },
    { value: 4, label: "M4: Semiconductors & Logic" }
  ];

  const typesList: { value: QuestionType; label: string }[] = [
    { value: "term", label: "Scientific Terms" },
    { value: "fill", label: "Fill in Blanks" },
    { value: "true-false", label: "True / False" },
    { value: "mcq", label: "Multiple Choice" },
    { value: "situation", label: "What will happen?" },
    { value: "compare", label: "Comparisons" },
    { value: "problem", label: "Physics Problems" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 py-6" id="lessons_curriculum_root">
      
      {/* HEADER HERO */}
      <div className="text-center md:text-left md:flex md:items-center md:justify-between border-b border-slate-200/60 pb-8 gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 tracking-wide mb-3 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Complete Question Bank
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-4">
            Questions Bank
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
            Practice authentic Advanced Physics exam and study guide items covering Units 1 to 4 with self-grading answers and formulas.
          </p>
        </div>

        <div className="mt-6 md:mt-0 flex gap-3 flex-wrap justify-center md:justify-end">
          <button
            onClick={() => setViewMode("flashcard")}
            className={`px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
              viewMode === "flashcard"
                ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10"
                : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200"
            }`}
          >
            🎓 Flashcard Trainer
          </button>
          <button
            onClick={() => {
              setViewMode("workbook");
              setViewIndexInput("");
            }}
            className={`px-5 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
              viewMode === "workbook"
                ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10"
                : "bg-white hover:bg-slate-50 text-slate-600 border border-slate-200"
            }`}
          >
            📋 Workbook Mode
          </button>
        </div>
      </div>

      {/* STATISTICS PANEL */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-xl shadow-slate-200/20">
        <div className="flex items-center gap-4 p-2">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Mastery Count</div>
            <div className="text-2xl font-black text-slate-900">{totalCorrect} / {totalInBank}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Study Streak</div>
            <div className="text-2xl font-black text-slate-900">{streak} 🔥</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Accuracy</div>
            <div className="text-2xl font-black text-slate-900">{activeAccuracy}%</div>
          </div>
        </div>

        <div className="flex items-center justify-start md:justify-end p-2">
          <button
            onClick={handleResetProgress}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-100 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <RotateCcw className="w-4 h-4" /> Reset Data
          </button>
        </div>
      </div>

      {/* CONTROLS & FILTER RAIL */}
      <div className="bg-slate-100/50 p-4 rounded-[1.5rem] border border-slate-200/40 flex flex-col lg:flex-row items-center gap-4">
        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions or answers..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setFlashcardIndex(0);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm placeholder:text-slate-400 transition-all"
          />
        </div>

        {/* Unit Filter */}
        <div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto no-scrollbar scroll-smooth">
          <button
            onClick={() => { setSelectedUnit("all"); setFlashcardIndex(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              selectedUnit === "all" ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            All Units
          </button>
          {unitsList.map((u) => (
            <button
              key={u.value}
              onClick={() => { setSelectedUnit(u.value); setFlashcardIndex(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedUnit === u.value ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {u.label}
            </button>
          ))}
        </div>

        {/* Format Filter */}
        <div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto lg:ml-auto no-scrollbar scroll-smooth">
          <button
            onClick={() => { setSelectedType("all"); setFlashcardIndex(0); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              selectedType === "all" ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            All Formats
          </button>
          {typesList.map((t) => (
            <button
              key={t.value}
              onClick={() => { setSelectedType(t.value); setFlashcardIndex(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedType === t.value ? "bg-indigo-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* CORE WORKSPACE */}
      <div>
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-slate-200/60 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No results matched your filters</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6">
              Try adjusting your query, selection units, or checking a different question format.
            </p>
            <button
              onClick={() => { setSelectedUnit("all"); setSelectedType("all"); setSearchQuery(""); }}
              className="px-5 py-2.5 bg-indigo-50 text-indigo-700 font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-indigo-100 transition-all font-mono"
            >
              Clear Filter Presets
            </button>
          </div>
        ) : viewMode === "flashcard" ? (
          
          /* ============================================================ */
          /* FLASHCARD INTERACTIVE TRANER MODE                            */
          /* ============================================================ */
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Diag Card {flashcardIndex + 1} / {filteredQuestions.length}
              </span>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2.5 py-1 rounded-md">
                Study Pool
              </span>
            </div>

            {/* Active Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredQuestions[flashcardIndex].id}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200/70 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/35 relative"
              >
                {/* Format and metadata tag */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                    getFormatColor(filteredQuestions[flashcardIndex].type)
                  }`}>
                    {(() => {
                      const Icon = getFormatIcon(filteredQuestions[flashcardIndex].type);
                      return <Icon className="w-3.5 h-3.5" />;
                    })()}
                    {filteredQuestions[flashcardIndex].typeLabel}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    {filteredQuestions[flashcardIndex].unitTitle.split(":")[0]}
                  </span>
                </div>

                {/* Main Question Body */}
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug tracking-tight mb-10">
                  {filteredQuestions[flashcardIndex].question}
                </h3>

                {/* Solution Workbench Section */}
                <div className="border-t border-slate-100 pt-8 mt-8">
                  {renderInteractiveSolutionArea(filteredQuestions[flashcardIndex])}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-[2rem] border border-slate-200/60 shadow-md">
              <button
                disabled={flashcardIndex === 0}
                onClick={handlePrevCard}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 font-black text-xs uppercase tracking-widest text-slate-600 bg-white hover:bg-slate-50 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={1}
                  max={filteredQuestions.length}
                  value={viewIndexInput !== "" ? viewIndexInput : flashcardIndex + 1}
                  onChange={(e) => handleDirectJumpCard(e.target.value)}
                  className="w-14 text-center py-2 border border-slate-200 rounded-xl text-slate-800 font-bold bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all font-mono"
                />
                <span className="text-sm font-bold text-slate-400">/ {filteredQuestions.length}</span>
              </div>

              <button
                disabled={flashcardIndex === filteredQuestions.length - 1}
                onClick={handleNextCard}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 font-black text-xs uppercase tracking-widest text-slate-600 bg-white hover:bg-slate-50 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* HINT AND TIP FOOTER */}
            {filteredQuestions[flashcardIndex].hint && !answeredIds[filteredQuestions[flashcardIndex].id] && (
              <div className="bg-amber-100/40 border border-amber-200/50 p-5 rounded-2xl flex gap-3 text-amber-800/90 text-sm font-semibold leading-relaxed shadow-sm">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold uppercase text-[10px] tracking-widest text-amber-600 block mb-1">Study Guide Hint</span>
                  {filteredQuestions[flashcardIndex].hint}
                </div>
              </div>
            )}
          </div>
        ) : (
          
          /* ============================================================ */
          /* WORKBOOK MODE (COMPREHENSIVE ALL QUESTIONS GRID)             */
          /* ============================================================ */
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Matching items: {filteredQuestions.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">Group By:</span>
                <select 
                  value={workbookGroupBy}
                  onChange={(e) => setWorkbookGroupBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-600 outline-none"
                >
                  <option value="none">None</option>
                  <option value="unit">Unit</option>
                  <option value="type">Question Type</option>
                </select>
                <button
                  onClick={handleRevealAll}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap bg-indigo-50 border border-indigo-100 text-indigo-600 hover:bg-indigo-100"
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" />
                  Reveal All
                </button>
              </div>
            </div>

            {(() => {
              if (workbookGroupBy === 'none') {
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredQuestions.map((q, idx) => renderWorkbookCard(q, idx))}
                  </div>
                );
              }

              const groups = filteredQuestions.reduce((acc, q) => {
                const key = workbookGroupBy === 'unit' ? q.unitTitle : q.typeLabel;
                if (!acc[key]) acc[key] = [];
                acc[key].push(q);
                return acc;
              }, {} as Record<string, QuestionBankItem[]>);

              return (
                <div className="space-y-10">
                  {Object.entries(groups).map(([groupKey, qs]) => (
                    <div key={groupKey} className="space-y-4">
                      <h3 className="text-xl font-black text-slate-800 border-b border-slate-200 pb-2">{groupKey} <span className="text-sm text-slate-400 ml-2">({qs.length})</span></h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {qs.map((q, idx) => renderWorkbookCard(q, idx))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );

  function renderWorkbookCard(q: QuestionBankItem, idx: number) {
    return (
      <div 
        key={q.id}
        className="bg-white border border-slate-200/70 p-6 md:p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all relative flex flex-col justify-between"
      >
        <div>
          {/* Top tags */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider border ${
              getFormatColor(q.type)
            }`}>
              {(() => {
                const Icon = getFormatIcon(q.type);
                return <Icon className="w-3.5 h-3.5" />;
              })()}
              {q.typeLabel}
            </span>
            <span className="text-[10px] font-mono text-slate-300 font-extrabold flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-100">{q.unitTitle.split(":")[0]}</span>
              #{idx + 1}
            </span>
          </div>

          {/* Question Statement */}
          <h4 className="text-lg font-black text-slate-900 leading-tight mb-6">
            {q.question}
          </h4>
        </div>

        {/* Solution block directly integrated */}
        <div className="border-t border-slate-100 pt-5 mt-auto">
          {renderInteractiveSolutionArea(q)}
        </div>
      </div>
    );
  }

  // RENDER INTERACTIVE SOLUTION BENCHWORK
  function renderInteractiveSolutionArea(q: QuestionBankItem) {
    const isAnswered = !!answeredIds[q.id];
    const isCorrect = answeredIds[q.id]?.correct || false;
    const isRevealed = !!revealedIds[q.id];
    const answerError = inputErrors[q.id];

    switch (q.type) {
      case "true-false":
        return (
          <div className="space-y-4">
            <div className="flex gap-4">
              <button
                disabled={isAnswered || isRevealed}
                onClick={() => handleAnswerSubmit(q.id, q.correctAnswer === true)}
                className={`flex-1 py-3 px-6 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all ${
                  isAnswered 
                    ? q.correctAnswer === true
                      ? "bg-emerald-500 border-emerald-600 text-white"
                      : answeredIds[q.id]?.correct === false && q.correctAnswer === false
                        ? "bg-rose-500 border-rose-600 text-white"
                        : "bg-slate-100 border-slate-200 text-slate-400"
                    : "bg-slate-50 border-slate-200 hover:border-indigo-400 hover:bg-slate-100"
                }`}
              >
                True
              </button>
              <button
                disabled={isAnswered || isRevealed}
                onClick={() => handleAnswerSubmit(q.id, q.correctAnswer === false)}
                className={`flex-1 py-3 px-6 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all ${
                  isAnswered 
                    ? q.correctAnswer === false
                      ? "bg-emerald-500 border-emerald-600 text-white"
                      : answeredIds[q.id]?.correct === false && q.correctAnswer === true
                        ? "bg-rose-500 border-rose-600 text-white"
                        : "bg-slate-100 border-slate-200 text-slate-400"
                    : "bg-slate-50 border-slate-200 hover:border-indigo-400 hover:bg-slate-100"
                }`}
              >
                False
              </button>
            </div>

            {/* Verification State */}
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  isCorrect 
                    ? "bg-emerald-50 border-emerald-200/50 text-emerald-800" 
                    : "bg-rose-50 border-rose-200/50 text-rose-800"
                }`}
              >
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider mb-1">
                  {isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />}
                  {isCorrect ? "Correct Grade!" : "Incorrect Statement"}
                </div>
                <p className="text-xs font-semibold leading-relaxed mb-3">
                  {q.detailedSolution}
                </p>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Model Answer: <span className="text-slate-800">{q.modelAnswer}</span>
                </div>
              </motion.div>
            )}

            {!isAnswered && isRevealed && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-700"
              >
                <div className="text-xs font-bold font-mono space-y-2">
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-wider block">Solution Revealed</span>
                  <div className="text-sm font-black mb-1">Correct Answer: {q.modelAnswer}</div>
                  <p className="text-slate-500 font-semibold">{q.detailedSolution}</p>
                </div>
              </motion.div>
            )}

            {!isAnswered && !isRevealed && (
              <button
                onClick={() => setRevealedIds(prev => ({ ...prev, [q.id]: true }))}
                className="w-full py-2 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all font-mono"
              >
                Reveal Model Answer
              </button>
            )}
          </div>
        );

      case "mcq":
      case "situation":
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-2.5">
              {q.options?.map((opt) => {
                const optLetter = opt.charAt(0).toLowerCase();
                const isThisSelected = answeredIds[q.id]?.inputAnswer === opt;
                const isThisCorrectOpt = opt === q.correctAnswer;

                let optBtnStyle = "bg-slate-50 border-slate-200 hover:border-indigo-400 hover:bg-slate-100 text-slate-700";
                
                if (isAnswered) {
                  if (isThisCorrectOpt) {
                    optBtnStyle = "bg-emerald-500 border-emerald-600 text-white";
                  } else if (isThisSelected) {
                    optBtnStyle = "bg-rose-500 border-rose-600 text-white";
                  } else {
                    optBtnStyle = "bg-slate-100 border-slate-200 text-slate-400";
                  }
                } else if (isRevealed && isThisCorrectOpt) {
                  optBtnStyle = "bg-amber-100 border-amber-300 text-amber-800 font-bold";
                }

                return (
                  <button
                    key={opt}
                    disabled={isAnswered || isRevealed}
                    onClick={() => handleAnswerSubmit(q.id, isThisCorrectOpt, opt)}
                    className={`w-full py-3 px-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-start gap-3 leading-snug ${optBtnStyle}`}
                  >
                    <span className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center text-[10px] font-mono font-black shrink-0 mt-0.5">
                      {optLetter}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanations */}
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  isCorrect 
                    ? "bg-emerald-50 border-emerald-200/50 text-emerald-800" 
                    : "bg-rose-50 border-rose-200/50 text-rose-800"
                }`}
              >
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider mb-1">
                  {isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />}
                  {isCorrect ? "Correct Answer!" : "Incorrect Option Selected"}
                </div>
                {q.detailedSolution && (
                  <p className="text-xs font-semibold leading-relaxed mb-2">
                    {q.detailedSolution}
                  </p>
                )}
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Model Answer: <span className="text-slate-800">{q.modelAnswer}</span>
                </div>
              </motion.div>
            )}

            {!isAnswered && isRevealed && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-700"
              >
                <div className="text-xs font-bold font-mono space-y-1">
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-wider block">Solution Key</span>
                  <div className="text-sm font-black">{q.modelAnswer}</div>
                  {q.detailedSolution && <p className="text-slate-500 font-semibold text-xs mt-1">{q.detailedSolution}</p>}
                </div>
              </motion.div>
            )}

            {!isAnswered && !isRevealed && (
              <button
                onClick={() => setRevealedIds(prev => ({ ...prev, [q.id]: true }))}
                className="w-full py-2 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all font-mono"
              >
                Reveal Model Answer
              </button>
            )}
          </div>
        );

      case "term":
      case "fill":
        return (
          <div className="space-y-4">
            {!isAnswered && !isRevealed ? (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder={q.type === "term" ? "Type the scientific term..." : "Type the missing word..."}
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setInputErrors(prev => ({ ...prev, [q.id]: "" }));
                  }}
                  onKeyDown={(e) => { if (e.key === "Enter") handleCheckTextAnswer(q); }}
                  className={`flex-grow px-4 py-2.5 bg-slate-50 border ${answerError ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-indigo-200'} rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                />
                <button
                  onClick={() => handleCheckTextAnswer(q)}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-100 active:scale-95 transition-all outline-none"
                >
                  Grade
                </button>
              </div>
            ) : null}

            {answerError && (
              <p className="text-rose-600 text-xs font-bold leading-none">{answerError}</p>
            )}

            {/* Answer Grade Result */}
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  isCorrect 
                    ? "bg-emerald-50 border-emerald-200/50 text-emerald-800" 
                    : "bg-rose-50 border-rose-200/50 text-rose-800"
                }`}
              >
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider mb-2">
                  {isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />}
                  {isCorrect ? "Perfect Assessment!" : "Incorrect Target Word"}
                </div>
                {!isCorrect && answeredIds[q.id]?.inputAnswer && (
                  <div className="text-xs font-bold text-rose-700 mb-2">
                    Your Response: <span className="font-mono text-[11px] underline">"{answeredIds[q.id]?.inputAnswer}"</span>
                  </div>
                )}
                <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Model Answer: <span className="text-slate-800">{q.modelAnswer}</span>
                </div>
              </motion.div>
            )}

            {/* Revealing solution directly */}
            {!isAnswered && isRevealed && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl text-slate-700"
              >
                <div className="text-xs font-mono">
                  <span className="text-indigo-600 text-[10px] font-black uppercase tracking-wider block mb-1">Standard Reference Answer</span>
                  <div className="text-sm font-black text-slate-900 mb-1">{q.modelAnswer}</div>
                </div>
              </motion.div>
            )}

            {!isAnswered && !isRevealed && (
              <button
                onClick={() => setRevealedIds(prev => ({ ...prev, [q.id]: true }))}
                className="w-full py-2 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all font-mono"
              >
                Reveal Model Answer
              </button>
            )}
          </div>
        );

      case "compare":
        return (
          <div className="space-y-4">
            {(!isAnswered && !isRevealed) ? (
              <button
                onClick={() => {
                  setRevealedIds(prev => ({ ...prev, [q.id]: true }));
                  handleAnswerSubmit(q.id, true); // Instantly graded as studied comparison
                }}
                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:opacity-95 transition-all shadow-md active:scale-98"
              >
                🔍 Analyze Comparison Columns
              </button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 shadow-sm">
                    <h5 className="text-xs font-black uppercase text-indigo-700 border-b border-slate-200 pb-2 mb-3 tracking-wider">
                      {q.extraDetails?.comparisonLeft?.title}
                    </h5>
                    <ul className="space-y-2 text-xs font-semibold text-slate-600 list-disc list-inside leading-relaxed pl-1">
                      {q.extraDetails?.comparisonLeft?.points.map((p, k) => (
                        <li key={k}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 shadow-sm">
                    <h5 className="text-xs font-black uppercase text-purple-700 border-b border-slate-200 pb-2 mb-3 tracking-wider">
                      {q.extraDetails?.comparisonRight?.title}
                    </h5>
                    <ul className="space-y-2 text-xs font-semibold text-slate-600 list-disc list-inside leading-relaxed pl-1">
                      {q.extraDetails?.comparisonRight?.points.map((p, k) => (
                        <li key={k}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200/50 text-emerald-800 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[10px] text-emerald-600 mb-1">
                    <Check className="w-4 h-4" /> Core Synthesis
                  </div>
                  {q.detailedSolution}
                </div>
              </motion.div>
            )}
          </div>
        );

      case "problem":
        return (
          <div className="space-y-4">
            {/* Show variables & formulas right away */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Core Formula</span>
                <code className="text-sm font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded font-mono">
                  {q.extraDetails?.formula}
                </code>
              </div>
              <div className="flex gap-3 flex-wrap">
                {q.extraDetails?.variables?.map((v) => (
                  <div key={v.name} className="px-2.5 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-semibold text-slate-500">
                    <span className="font-bold text-slate-800">{v.name}:</span> {v.value} {v.displayUnit}
                  </div>
                ))}
              </div>
            </div>

            {!isAnswered && !isRevealed ? (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Calculate net value..."
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    setInputErrors(prev => ({ ...prev, [q.id]: "" }));
                  }}
                  onKeyDown={(e) => { if (e.key === "Enter") handleCheckTextAnswer(q); }}
                  className={`flex-grow px-4 py-2.5 bg-slate-50 border ${inputText && parseFloat(inputText) ? 'border-indigo-300' : 'border-slate-200'} rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-indigo-100 transition-all`}
                />
                <button
                  onClick={() => handleCheckTextAnswer(q)}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-all outline-none"
                >
                  Verify Calculations
                </button>
              </div>
            ) : null}

            {answerError && (
              <p className="text-rose-600 text-xs font-bold leading-none">{answerError}</p>
            )}

            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  isCorrect 
                    ? "bg-emerald-50 border-emerald-200/50 text-emerald-800" 
                    : "bg-rose-50 border-rose-200/50 text-rose-800"
                }`}
              >
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider mb-2">
                  {isCorrect ? <Check className="w-4 h-4 text-emerald-600" /> : <X className="w-4 h-4 text-rose-600" />}
                  {isCorrect ? "Perfect Physics Calculations!" : "Calculations Mismatch"}
                </div>
                {!isCorrect && answeredIds[q.id]?.inputAnswer && (
                  <div className="text-xs font-bold text-rose-700 mb-2">
                    Your calculated raw value: <span className="font-mono text-xs">{answeredIds[q.id]?.inputAnswer}</span>
                  </div>
                )}
                
                <div className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                  Correct Answer: <span className="text-slate-800 font-bold">{q.modelAnswer}</span>
                </div>

                <div className="border-t border-slate-200/60 pt-3 mt-2 text-xs font-semibold text-slate-600 leading-relaxed font-mono">
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block mb-1">Step-by-Step Substition & Explanation:</span>
                  {q.detailedSolution?.split("\n").map((step, idx) => (
                    <div key={idx} className="pl-1 mb-1 border-l border-indigo-200">{step}</div>
                  ))}
                </div>
              </motion.div>
            )}

            {!isAnswered && isRevealed && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl font-mono text-xs"
              >
                <span className="text-indigo-600 text-[10px] font-black uppercase tracking-wider block mb-1">Solution Steps Revealed</span>
                <div className="text-sm font-black text-slate-900 mb-2">Correct Answer: {q.modelAnswer}</div>
                <div className="space-y-1 text-slate-500 font-semibold leading-relaxed">
                  {q.detailedSolution?.split("\n").map((step, idx) => (
                    <div key={idx} className="pl-1 border-l border-slate-300">{step}</div>
                  ))}
                </div>
              </motion.div>
            )}

            {!isAnswered && !isRevealed && (
              <button
                onClick={() => setRevealedIds(prev => ({ ...prev, [q.id]: true }))}
                className="w-full py-2 bg-slate-50 text-slate-400 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-slate-100 hover:text-slate-600 transition-all font-mono"
              >
                Reveal Model Answer
              </button>
            )}
          </div>
        );
    }
  }
}
