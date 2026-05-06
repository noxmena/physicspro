import React from "react";

export const StraightWireDiagram = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
    {/* Wire */}
    <line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M60 20 L65 15 M60 20 L55 15" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="65" y="15" className="text-[8px] font-bold" fill="currentColor">I</text>
    
    {/* Magnetic Circles */}
    <ellipse cx="60" cy="40" rx="30" ry="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
    <ellipse cx="60" cy="60" rx="40" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="60" cy="80" rx="30" ry="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
    <text x="105" y="65" className="text-[8px] font-bold" fill="currentColor">B</text>
  </svg>
);

export const CircularCoilDiagram = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
    {/* Coil */}
    <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.2" />
    <path d="M20 60 A 40 40 0 1 1 100 60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    
    {/* Field line in center */}
    <line x1="60" y1="20" x2="60" y2="100" stroke="currentColor" strokeWidth="2" />
    <path d="M60 40 L65 45 M60 40 L55 45" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="65" y="45" className="text-[8px] font-bold" fill="currentColor">B</text>
    
    <text x="100" y="55" className="text-[8px] font-bold" fill="currentColor">I</text>
    <text x="65" y="85" className="text-[8px] font-bold" fill="currentColor">r</text>
    <line x1="60" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

export const SolenoidDiagram = () => (
  <svg width="160" height="100" viewBox="0 0 160 100" className="opacity-80">
    {/* Loops */}
    {[0, 1, 2, 3, 4].map(idx => (
      <path key={idx} d={`M${40 + idx*20} 30 A 10 20 0 1 1 ${40 + idx*20} 70`} fill="none" stroke="currentColor" strokeWidth="2" />
    ))}
    
    {/* Internal Field Lines */}
    <line x1="30" y1="50" x2="130" y2="50" stroke="currentColor" strokeWidth="3" opacity="0.3" />
    <line x1="30" y1="40" x2="130" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="30" y1="60" x2="130" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    
    <path d="M120 50 L115 45 M120 50 L115 55" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="135" y="55" className="text-[8px] font-bold" fill="currentColor">B</text>
  </svg>
);

export const MagneticForceDiagram = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-80">
    {/* 3 Axes */}
    <line x1="60" y1="60" x2="60" y2="20" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" /> {/* Force - F */}
    <line x1="60" y1="60" x2="100" y2="60" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" /> {/* Field - B */}
    <line x1="60" y1="60" x2="30" y2="90" stroke="#10b981" strokeWidth="3" strokeLinecap="round" /> {/* Current - I */}
    
    <text x="65" y="25" className="text-[10px] font-black" fill="#ef4444">F (Force)</text>
    <text x="85" y="55" className="text-[10px] font-black" fill="#3b82f6">B (Field)</text>
    <text x="35" y="100" className="text-[10px] font-black" fill="#10b981">I (Current)</text>
  </svg>
);

export const DynamoDiagram = () => (
  <svg width="140" height="100" viewBox="0 0 140 100" className="opacity-80">
    {/* Magnets */}
    <rect x="10" y="20" width="30" height="60" fill="#ef4444" opacity="0.8" rx="4" />
    <text x="20" y="55" fill="white" className="font-bold">N</text>
    <rect x="100" y="20" width="30" height="60" fill="#3b82f6" opacity="0.8" rx="4" />
    <text x="110" y="55" fill="white" className="font-bold">S</text>
    
    {/* Coil */}
    <rect x="45" y="35" width="50" height="30" fill="none" stroke="currentColor" strokeWidth="2" rx="2" transform="rotate(15 70 50)" />
    
    {/* Rotation arrow */}
    <path d="M70 20 A 40 40 0 0 1 90 30" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
  </svg>
);
