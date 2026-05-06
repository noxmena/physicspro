import { useState } from "react";
import { definitions, laws, usages, experiments, factors } from "../data";
import { Search, Hash, BookMarked, Calculator, FlaskConical, Wrench, Grid2X2, Lightbulb, ArrowRight, BookOpen, ChevronDown, ChevronUp, FileText, Zap, Image as ImageIcon } from "lucide-react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { StraightWireDiagram, CircularCoilDiagram, SolenoidDiagram, MagneticForceDiagram, DynamoDiagram } from "../components/PhysicsDiagrams";

const DiagramRenderer = ({ diagramKey }: { diagramKey?: string }) => {
  switch (diagramKey) {
    case "straight_wire": return <StraightWireDiagram />;
    case "circular_coil": return <CircularCoilDiagram />;
    case "solenoid": return <SolenoidDiagram />;
    case "magnetic_force": return <MagneticForceDiagram />;
    case "dynamo": return <DynamoDiagram />;
    default: return null;
  }
};

type Category = "all" | "definitions" | "laws" | "usages" | "experiments" | "factors";

export default function Reference() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null);

  const termLower = searchTerm.toLowerCase();

  const filteredDefs = definitions.filter(item => 
    item.term.toLowerCase().includes(termLower) || 
    item.definition.toLowerCase().includes(termLower)
  );

  const filteredLaws = laws.filter(item => 
    item.name.toLowerCase().includes(termLower)
  );

  const filteredUsages = usages.filter(item => 
    item.item.toLowerCase().includes(termLower) || 
    item.usage.toLowerCase().includes(termLower)
  );

  const filteredExperiments = experiments.filter(item => 
    item.name.toLowerCase().includes(termLower) || 
    item.description.toLowerCase().includes(termLower)
  );

  const filteredFactors = factors.filter(item =>
    item.subject.toLowerCase().includes(termLower) ||
    item.items.some(i => i.toLowerCase().includes(termLower))
  );

  const categories = [
    { id: "all", label: "All Items", icon: Grid2X2 },
    { id: "definitions", label: "Definitions", icon: BookMarked },
    { id: "laws", label: "Laws & Formulas", icon: Calculator },
    { id: "usages", label: "Applications", icon: Wrench },
    { id: "experiments", label: "Experiments", icon: FlaskConical },
    { id: "factors", label: "Factors", icon: Hash },
  ] as const;

  const showDefs = (activeCategory === "all" || activeCategory === "definitions") && filteredDefs.length > 0;
  const showLaws = (activeCategory === "all" || activeCategory === "laws") && filteredLaws.length > 0;
  const showUsages = (activeCategory === "all" || activeCategory === "usages") && filteredUsages.length > 0;
  const showExperiments = (activeCategory === "all" || activeCategory === "experiments") && filteredExperiments.length > 0;
  const showFactors = (activeCategory === "all" || activeCategory === "factors") && filteredFactors.length > 0;

  const isEmpty = !showDefs && !showLaws && !showUsages && !showExperiments && !showFactors;

  return (
    <div className="space-y-12">
      <header className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3 h-3" />
              Comprehensive Reference
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Reference <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Guide</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
              Searchable glossary of definitions, laws, and concepts organized for quick lookup.
            </p>
          </div>
          <div className="relative w-full md:w-96 shrink-0 group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search concepts..." 
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all outline-none shadow-sm text-slate-900 font-medium placeholder:text-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                activeCategory === cat.id 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 -translate-y-0.5" 
                  : "bg-white text-slate-500 border border-slate-200/60 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50"
              )}
            >
              <cat.icon className={cn("w-4 h-4", activeCategory === cat.id ? "text-indigo-100" : "text-slate-400")} />
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-20 pb-12">
        <AnimatePresence mode="popLayout">
          {showDefs && (
            <motion.section 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="definitions"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                  <BookMarked className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Scientific Definitions</h2>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-widest">{filteredDefs.length} items</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDefs.map((def, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:border-indigo-200 hover:-translate-y-1 transition-all group flex flex-col">
                    <h3 className="font-extrabold text-xl tracking-tight text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{def.term}</h3>
                    <div className="text-slate-600 font-medium leading-relaxed mb-6 pb-6 border-b border-slate-50 flex-1 italic">
                      "{def.definition}"
                    </div>
                    {def.explanation && (
                      <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/50 space-y-2">
                        <div className="flex items-center gap-2 text-indigo-700">
                          <Lightbulb className="w-4 h-4" />
                          <span className="font-bold text-xs uppercase tracking-widest">Concept Note</span>
                        </div>
                        <p className="text-xs text-indigo-900/80 leading-relaxed font-medium">
                          {def.explanation.replace('Detailed Explanation:\\n', '').replace('Detailed Explanation:\n', '')}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {showLaws && (
            <motion.section 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="laws"
            >
              <div className="flex items-center gap-4 mb-8 pt-8">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                  <Calculator className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Laws & Formulas</h2>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-widest">{filteredLaws.length} items</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredLaws.map((law, idx) => {
                  const isExpanded = expandedLaw === law.name;
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 group hover:border-purple-200 transition-all flex flex-col",
                        isExpanded ? "ring-2 ring-purple-100 border-purple-200" : ""
                      )}
                    >
                      <h3 className="font-black text-xl tracking-tight text-slate-900 mb-8 text-center group-hover:text-purple-700 transition-colors uppercase">{law.name}</h3>
                      <div className="flex flex-col xl:flex-row gap-8 items-center justify-between mb-8">
                        <div className="bg-slate-50 flex-1 w-full p-8 rounded-3xl overflow-x-auto flex items-center justify-center border border-slate-100 group-hover:bg-purple-50/20 transition-colors shadow-inner">
                          <BlockMath math={law.formula} />
                        </div>
                        {law.diagramKey && (
                          <div className="p-4 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0">
                             <DiagramRenderer diagramKey={law.diagramKey} />
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-6">
                        {law.explanation && (
                          <div className="w-full text-sm text-slate-600 leading-relaxed bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100/50">
                            <span className="font-black text-indigo-700 block uppercase tracking-widest text-[10px] mb-4">Logical Basis</span>
                            <div className="space-y-3">
                              {law.explanation
                                .replace('Detailed Explanation:\\n', '')
                                .replace('Detailed Explanation:\n', '')
                                .split('\n')
                                .filter(l => l.trim())
                                .map((line, lIdx) => {
                                  const isPoint = line.trim().startsWith('-') || line.trim().startsWith('*');
                                  const cleanLine = isPoint ? line.trim().substring(1).trim() : line.trim();
                                  return (
                                    <div key={lIdx} className="flex gap-3">
                                      <div className="w-1 h-1 rounded-full bg-indigo-300 mt-2 shrink-0" />
                                      <p className="font-medium text-slate-700 leading-snug text-xs">
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

                        {law.examples && law.examples.length > 0 && (
                          <div className="pt-4 border-t border-slate-50">
                            <button 
                              onClick={() => setExpandedLaw(isExpanded ? null : law.name)}
                              className={cn(
                                "flex items-center justify-between w-full p-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all",
                                isExpanded ? "bg-purple-600 text-white shadow-lg shadow-purple-100" : "bg-slate-50 text-slate-500 hover:bg-purple-50 hover:text-purple-600"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <FileText className="w-3.5 h-3.5" />
                                {isExpanded ? "Hide Examples" : `View Solved Examples (${law.examples.length})`}
                              </div>
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-4 space-y-4">
                                    {law.examples.map((ex, exIdx) => (
                                      <div key={exIdx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                                        <div className="flex gap-3">
                                          <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-[10px] font-black">Q</div>
                                          <p className="text-sm font-bold text-slate-900 leading-relaxed">{ex.problem}</p>
                                        </div>
                                        <div className="flex gap-3">
                                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-[10px] font-black">S</div>
                                          <div className="text-sm font-medium text-slate-600 bg-white p-4 rounded-xl border border-slate-100 w-full whitespace-pre-line leading-relaxed shadow-sm">
                                            {ex.solution}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {showUsages && (
            <motion.section 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="usages"
            >
              <div className="flex items-center gap-4 mb-8 pt-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <Wrench className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Practical Applications</h2>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-widest">{filteredUsages.length} items</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUsages.map((usage, idx) => (
                  <div key={idx} className="bg-white flex flex-col p-8 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:border-emerald-300 hover:-translate-y-1 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <span className="font-black text-emerald-700 group-hover:text-white">{idx + 1}</span>
                    </div>
                    <h3 className="font-black text-lg text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors leading-tight">{usage.item}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{usage.usage}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {showExperiments && (
            <motion.section 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="experiments"
            >
              <div className="flex items-center gap-4 mb-8 pt-8">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center border border-fuchsia-100">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Key Experiments</h2>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-widest">{filteredExperiments.length} items</div>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {filteredExperiments.map((exp, idx) => (
                  <div key={idx} className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:border-fuchsia-300 transition-all flex flex-col md:flex-row gap-8 items-center md:items-start group">
                    <div className="w-20 h-20 rounded-[2rem] bg-fuchsia-600 flex items-center justify-center text-white shadow-lg shadow-fuchsia-200 group-hover:scale-110 transition-transform duration-500 shrink-0">
                      <FlaskConical className="w-10 h-10" />
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight italic group-hover:text-fuchsia-700 transition-colors">"{exp.name}"</h3>
                      <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 text-slate-700 relative group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                        <p className="text-lg font-medium leading-relaxed italic">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {showFactors && (
            <motion.section 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key="factors"
            >
              <div className="flex items-center gap-4 mb-8 pt-8">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
                  <Hash className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Factors Affecting Measurements</h2>
                <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-black uppercase tracking-widest">{filteredFactors.length} items</div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredFactors.map((factor, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 hover:border-orange-300 transition-all flex flex-col group">
                    <h3 className="font-black text-xl tracking-tight text-slate-900 mb-6 pb-4 border-b border-slate-50 group-hover:text-orange-700 transition-colors">
                      {factor.subject}
                    </h3>
                    <ul className="space-y-4">
                      {factor.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-4 text-slate-600 font-medium group/item hover:text-orange-950 transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {isEmpty && (
          <div className="text-center py-32 bg-white border border-slate-200 rounded-[3rem] shadow-xl shadow-slate-200/30">
            <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-8 border border-slate-100">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-500 font-medium">Try adjusting your search terms or filters for "{searchTerm}"</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
              className="mt-10 px-8 py-3 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto"
            >
              Reset Filters <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
