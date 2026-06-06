import { moreQuestions } from './questionBankNew';
import { moreQuestions2 } from './questionBankNew2';
import { moreQuestions3 } from './questionBankNew3';

export type QuestionType = 'term' | 'fill' | 'true-false' | 'mcq' | 'situation' | 'compare' | 'problem';

export interface QuestionBankItem {
  id: string;
  unit: 1 | 2 | 3 | 4;
  unitTitle: string;
  type: QuestionType;
  typeLabel: string;
  question: string;
  options?: string[]; // For MCQs
  correctAnswer: string | boolean; // Answer key for validation
  modelAnswer: string; // The explicit core correct answer text/term/option
  detailedSolution?: string; // Step-by-step explanation or calculation flow
  hint?: string;
  extraDetails?: {
    formula?: string;
    variables?: { name: string; value: string; displayUnit: string }[];
    comparisonLeft?: { title: string; points: string[] };
    comparisonRight?: { title: string; points: string[] };
  };
}

export const questionBank: QuestionBankItem[] = [
  // ================= UNIT 1 =================
  {
    id: "u1_term_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the area around a magnet (or a current-carrying conductor) where magnetic forces can act?",
    correctAnswer: "magnetic field",
    modelAnswer: "Magnetic field",
    hint: "Starts with 'M' and describes the space filled with magnetic influence."
  },
  {
    id: "u1_term_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What term describes the total number of magnetic field lines passing through a surface?",
    correctAnswer: "magnetic flux",
    modelAnswer: "Magnetic flux",
    hint: "Symbolized by Greek letter Phi (Φ)."
  },
  {
    id: "u1_term_3",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the density and direction of magnetic field lines passing through a certain area?",
    correctAnswer: "magnetic flux density",
    modelAnswer: "Magnetic flux density",
    hint: "Also known as magnetic B-field, measured in Tesla."
  },
  {
    id: "u1_term_4",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the ability of a medium to allow magnetic flux lines to penetrate it?",
    correctAnswer: "magnetic permeability",
    modelAnswer: "Magnetic permeability",
    hint: "Usually symbolized by mu (μ)."
  },
  {
    id: "u1_term_5",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for a long, straight coil of wire used to generate a magnetic field similar to that of a bar magnet?",
    correctAnswer: "solenoid",
    modelAnswer: "Solenoid",
    hint: "It acts as an electromagnet when current passes through it."
  },
  {
    id: "u1_term_6",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the point where two magnetic fields are equal in magnitude and opposite in direction, resulting in a zero net magnetic field?",
    correctAnswer: "neutral point",
    modelAnswer: "Neutral point",
    hint: "A magnetic compass needle experiences no deflection and is completely free to move here."
  },
  {
    id: "u1_term_7",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the force acting on a wire carrying current placed in a magnetic field?",
    correctAnswer: "magnetic force",
    modelAnswer: "Magnetic force",
    hint: "The direction is given by Fleming's Left Hand Rule."
  },
  {
    id: "u1_term_8",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the turning effect on a coil carrying current placed in a magnetic field?",
    correctAnswer: "magnetic torque",
    modelAnswer: "Magnetic torque",
    hint: "Given by τ = BIAN sinθ."
  },
  {
    id: "u1_term_9",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for a vector emanating from the North Pole of a coil, perpendicular to its area, representing magnetic torque over magnetic field?",
    correctAnswer: "magnetic dipole moment",
    modelAnswer: "Magnetic dipole moment",
    hint: "Symbolized by md, given by md = I·A·N."
  },
  {
    id: "u1_fill_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "fill",
    typeLabel: "Fill in the Space",
    question: "An object at any temperature emits electromagnetic radiation called _____ radiation.",
    correctAnswer: "thermal",
    modelAnswer: "thermal (or blackbody)",
    hint: "Think about heat and temperature radiation."
  },
  {
    id: "u1_fill_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "fill",
    typeLabel: "Fill in the Space",
    question: "A black surface will _____ all colors of light.",
    correctAnswer: "absorb",
    modelAnswer: "absorb",
    hint: "Opposite of reflecting."
  },
  {
    id: "u1_true_false_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic fields are produced by stationary electric charges.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Magnetic fields are produced by MOVING electric charges or electric currents. Stationary charges only produce static electric fields."
  },
  {
    id: "u1_true_false_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic field is generated due to the motion of electrons.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "The motion of electrons represents an electric current, which generates a magnetic field around its path."
  },
  {
    id: "u1_true_false_3",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic field is more concentrated in the center of a circular coil than outside the loop.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "At the center of a circular current-carrying coil, the magnetic field lines are concentrated, parallel, and uniform."
  },
  {
    id: "u1_mcq_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "Which of the following is NOT a common feature of electromagnetic waves?",
    options: [
      "They are vibrating electric and magnetic fields.",
      "They are transverse waves.",
      "They need a medium to travel through.",
      "They propagate at the speed of light in space."
    ],
    correctAnswer: "They need a medium to travel through.",
    modelAnswer: "They need a medium to travel through."
  },
  {
    id: "u1_mcq_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the range of wavelengths for visible light?",
    options: [
      "100nm - 300nm",
      "300nm - 500nm",
      "400nm - 700nm",
      "700nm - 1000nm"
    ],
    correctAnswer: "400nm - 700nm",
    modelAnswer: "400nm - 700nm"
  },
  {
    id: "u1_situation_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to a compass needle if it is placed near a metallic wire carrying an electric current?",
    options: [
      "The compass needle will not be affected.",
      "The compass needle will be deflected.",
      "The compass needle will be demagnetized.",
      "The compass needle will spin rapidly and continuously."
    ],
    correctAnswer: "The compass needle will be deflected.",
    modelAnswer: "The compass needle will be deflected.",
    detailedSolution: "According to Oersted's discovery, an electric current passing through a wire creates a surrounding magnetic field which exerts magnetic forces to deflect a magnetic compass needle."
  },
  {
    id: "u1_situation_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the direction of the magnetic field within a solenoid if the direction of current is reversed?",
    options: [
      "The direction of the magnetic field will remain unchanged.",
      "The direction of the magnetic field will be reversed.",
      "The magnetic field will become zero.",
      "The magnetic field lines will cross each other."
    ],
    correctAnswer: "The direction of the magnetic field will be reversed.",
    modelAnswer: "The direction of the magnetic field will be reversed.",
    detailedSolution: "Reversing current flips the north and south poles of the solenoid, fully reversing the internal field vectors according to Right-Hand Rule."
  },
  {
    id: "u1_compare_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "compare",
    typeLabel: "Comparison Study",
    question: "Compare between the Wave Theory of Light and Particle Theory of Light.",
    correctAnswer: "compare",
    modelAnswer: "Wave Theory vs. Particle Theory",
    detailedSolution: "Wave theory models light as continuous electromagnetic waves, explaining interference and diffraction. Particle theory treats light as composed of discrete energy packets called photons, explaining photoelectric emission, Compton scattering, and blackbody radiation.",
    extraDetails: {
      comparisonLeft: {
        title: "Wave Theory of Light",
        points: [
          "Treats light as a continuous electromagnetic wave.",
          "Explains wave propagation phenomena like interference, diffraction, and polarization.",
          "Suggests classical ideas like wave intensity rising continuously with radiation frequency."
        ]
      },
      comparisonRight: {
        title: "Particle Theory of Light",
        points: [
          "Treats light as discrete packets of energy called photons or quanta.",
          "Explains quantum phenomena like the photoelectric effect, Compton effect, and blackbody radiation.",
          "Proposes Einstein-Planck relationship: photon energy is quantized as E = h·ν."
        ]
      }
    }
  },
  {
    id: "u1_problem_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A straight wire carries a current of 5 A. Calculate the magnetic field density at a point 2 cm away from the wire (Assume permeability μ₀ = 4π × 10⁻⁷ Wb/m.A).",
    correctAnswer: "5e-5",
    modelAnswer: "5 × 10⁻⁵ Tesla",
    detailedSolution: "Using straight wire formula: B = (μ₀·I) / (2π·d)\nGiven values: I = 5 A, d = 2 cm = 0.02 m\nB = (4π × 10⁻⁷ × 5) / (2π × 0.02)\nB = (20π × 10⁻⁷) / (0.04π) = 500 × 10⁻⁷ = 5 × 10⁻⁵ T.",
    extraDetails: {
      formula: "B = (μ₀ · I) / (2π · d)",
      variables: [
        { name: "Current (I)", value: "5", displayUnit: "A" },
        { name: "Distance (d)", value: "0.02", displayUnit: "m" },
        { name: "μ₀ Permeability", value: "4π × 10⁻⁷", displayUnit: "Wb/m.A" }
      ]
    }
  },
  {
    id: "u1_problem_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A rectangular coil with 200 turns has dimensions 10 cm by 5 cm and carries a current of 2 A. Calculate the magnetic torque acting on the coil when placed parallel to a uniform magnetic field of 0.5 T.",
    correctAnswer: "1",
    modelAnswer: "1 N·m",
    detailedSolution: "Using torque formula for a parallel coil (where θ = 90° for normal to surface): τ = B·I·A·N\nDimensions: 10 cm × 5 cm = 0.1 m × 0.05 m = 0.005 m²\nSubstituting values: τ = 0.5 T × 2 A × 0.005 m² × 200 turns = 1 N·m.",
    extraDetails: {
      formula: "τ = B · I · A · N",
      variables: [
        { name: "Field (B)", value: "0.5", displayUnit: "T" },
        { name: "Current (I)", value: "2", displayUnit: "A" },
        { name: "Area (A)", value: "0.005", displayUnit: "m²" },
        { name: "Turns (N)", value: "200", displayUnit: "" }
      ]
    }
  },
  {
    id: "u1_problem_3",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A circular coil of radius 5 cm has 100 turns and carries a current of 2 A. Calculate the magnetic field density at the center of the coil. (Assume μ₀ = 4π × 10⁻⁷ Wb/m.A)",
    correctAnswer: "8e-4",
    modelAnswer: "8π × 10⁻⁴ Tesla",
    detailedSolution: "Step 1 (Formula): B = (N·μ₀·I) / (2r)\nStep 2 (Given): N=100, I=2A, r=5cm=0.05m\nStep 3 (Substitute): B = (100 × 4π × 10⁻⁷ × 2) / (2 × 0.05)\nStep 4: B = (800π × 10⁻⁷) / 0.1 = 8000π × 10⁻⁷\nStep 5: B = 8π × 10⁻⁴ T.",
    extraDetails: {
      formula: "B = (N · μ₀ · I) / (2r)",
      variables: [
        { name: "Turns (N)", value: "100", displayUnit: "" },
        { name: "Current (I)", value: "2", displayUnit: "A" },
        { name: "Radius (r)", value: "0.05", displayUnit: "m" }
      ]
    }
  },
  {
    id: "u1_problem_4",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A solenoid is 20 cm long and has 500 turns. If the solenoid carries a current of 3 A, calculate the magnetic field density at a point on its interior axis. (Assume μ₀ = 4π × 10⁻⁷ Wb/m.A)",
    correctAnswer: "3e-3",
    modelAnswer: "3π × 10⁻³ Tesla",
    detailedSolution: "Step 1 (Formula): B = (N·μ₀·I) / L\nStep 2 (Given): N=500, I=3A, L=20cm=0.2m\nStep 3 (Substitute): B = (500 × 4π × 10⁻⁷ × 3) / 0.2\nStep 4: B = (6000π × 10⁻⁷) / 0.2 = 30000π × 10⁻⁷\nStep 5: B = 3π × 10⁻³ T.",
    extraDetails: {
      formula: "B = (N · μ₀ · I) / L",
      variables: [
        { name: "Turns (N)", value: "500", displayUnit: "" },
        { name: "Current (I)", value: "3", displayUnit: "A" },
        { name: "Length (L)", value: "0.2", displayUnit: "m" }
      ]
    }
  },
  {
    id: "u1_problem_5",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A wire of length 0.5 m carrying a current of 4 A is placed perpendicular to a magnetic field of 0.2 T. Calculate the magnetic force acting on the wire.",
    correctAnswer: "0.4",
    modelAnswer: "0.4 Newton",
    detailedSolution: "Step 1 (Formula): F = I·B·L·sin(θ)\nStep 2: Perpendicular means sin(90°) = 1.\nStep 3 (Given): I=4A, B=0.2T, L=0.5m\nStep 4 (Substitute): F = 4 × 0.2 × 0.5\nStep 5: F = 0.4 N.",
    extraDetails: {
      formula: "F = I · B · L",
      variables: [
        { name: "Current (I)", value: "4", displayUnit: "A" },
        { name: "Field (B)", value: "0.2", displayUnit: "T" },
        { name: "Length (L)", value: "0.5", displayUnit: "m" }
      ]
    }
  },

  // ================= UNIT 2 =================
  {
    id: "u2_term_1",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the phenomenon in which an electromotive force is induced in a conductor by a changing magnetic field?",
    correctAnswer: "electromagnetic induction",
    modelAnswer: "Electromagnetic induction",
    hint: "Discovered by Michael Faraday."
  },
  {
    id: "u2_term_2",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the law that states that the induced current must be in a direction to oppose the change that produced it?",
    correctAnswer: "lenz's law",
    modelAnswer: "Lenz's law",
    hint: "It accounts for the negative sign in Faraday's law equation."
  },
  {
    id: "u2_term_3",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the electromagnetic effect that occurs between two coils when a changing current in primary induces an EMF in secondary?",
    correctAnswer: "mutual induction",
    modelAnswer: "Mutual induction",
    hint: "It is the main scientific operating principle behind the electric transformer."
  },
  {
    id: "u2_term_4",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is properties described as induced currents that circulate in closed paths inside solid conductors, causing heating effects?",
    correctAnswer: "eddy currents",
    modelAnswer: "Eddy currents",
    hint: "They are minimized by using laminated soft iron cores."
  },
  {
    id: "u2_true_false_1",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "The induced magnetic field always acts to oppose the motion causing the change.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "Lenz's law explicitly asserts that induced magnetic fields always oppose the change in magnetic flux that triggers them."
  },
  {
    id: "u2_true_false_2",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "A transformer can step up or step down constant direct current (DC) voltage from a battery.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Transformers require alternating current (AC). Steady DC generates a constant magnetic flux, so rate of change is zero, leading to zero induced EMF in secondary."
  },
  {
    id: "u2_mcq_1",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to Lenz's law, the direction of the induced current in a coil is:",
    options: [
      "In the same direction of magnetic flux increase.",
      "Such as to oppose the change in magnetic flux that produces it.",
      "Always clockwise to aid the external field.",
      "Always counter-clockwise in all situations."
    ],
    correctAnswer: "Such as to oppose the change in magnetic flux that produces it.",
    modelAnswer: "Such as to oppose the change in magnetic flux that produces it."
  },
  {
    id: "u2_situation_1",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the galvanometer inside a circuit connected to a coil if a magnet is plunged actively into it?",
    options: [
      "It will maintain a steady zero reading with no shift.",
      "It will deflect momentarily in a certain direction before resetting.",
      "It will deflect continuously and permanently in one direction.",
      "The galvanometer will fuse and suffer permanent destruction."
    ],
    correctAnswer: "It will deflect momentarily in a certain direction before resetting.",
    modelAnswer: "It will deflect momentarily in a certain direction before resetting.",
    detailedSolution: "Plunging a magnet increases the magnetic flux inside the coil, inducing an EMF and current causing momentary deflection. Once magnet movement stops, rate of change of flux is zero, and current resets."
  },
  {
    id: "u2_compare_1",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "compare",
    typeLabel: "Comparison Study",
    question: "Compare the characteristics of Mutual Induction and Self-Induction.",
    correctAnswer: "compare",
    modelAnswer: "Mutual induction vs. Self-induction",
    detailedSolution: "Mutual induction takes place between two distinct coils (primary and secondary), where flux change in primary induces EMF in secondary. Self-induction takes place in a single coil, where its own changing current creates a self-opposing EMF in itself.",
    extraDetails: {
      comparisonLeft: {
        title: "Mutual Induction",
        points: [
          "Occurs between TWO separate coils: Primary and Secondary.",
          "Changing current in Primary alters flux crossing Secondary, inducing an EMF.",
          "Basis of operation for generators and transformers."
        ]
      },
      comparisonRight: {
        title: "Self-Induction",
        points: [
          "Occurs within a SINGLE isolated coil.",
          "Changing current inside the coil induces an opposing back-EMF within itself.",
          "Often causes intense sparks when breaking circuits abruptly due to massive forward EMF."
        ]
      }
    }
  },
  {
    id: "u2_problem_1",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A coil with 500 turns is placed in a magnetic field. The magnetic flux changes from 0.2 Wb to 0.8 Wb in 0.1 seconds. Calculate the magnitude of the average induced EMF in the coil.",
    correctAnswer: "3000",
    modelAnswer: "3000 Volts",
    detailedSolution: "Using Faraday's Law: ε = -N · (ΔΦ / Δt)\nGiven: N = 500 turns\nΔΦ = 0.8 - 0.2 = 0.6 Wb\nΔt = 0.1 s\nEMF = -500 * (0.6 / 0.1) = -500 * 6 = -3000 V\nMagnitude is 3000 Volts.",
    extraDetails: {
      formula: "ε = -N · (ΔΦ / Δt)",
      variables: [
        { name: "Turns (N)", value: "500", displayUnit: "" },
        { name: "Flux Change (ΔΦ)", value: "0.6", displayUnit: "Wb" },
        { name: "Time Span (Δt)", value: "0.1", displayUnit: "s" }
      ]
    }
  },
  {
    id: "u2_problem_2",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "An ideal transformer has 200 turns in primary coil and 1000 turns in secondary. If input AC voltage in primary is 120 V, calculate the output voltage in the secondary coil.",
    correctAnswer: "600",
    modelAnswer: "600 Volts",
    detailedSolution: "Using transformer relation: Vp/Vs = Np/Ns\nGiven: Vp = 120 V, Np = 200, Ns = 1000\nVs = Vp * (Ns / Np) = 120 * (1000 / 200) = 120 * 5 = 600 Volts.",
    extraDetails: {
      formula: "Vs = Vp · (Ns / Np)",
      variables: [
        { name: "Primary Voltage (Vp)", value: "120", displayUnit: "V" },
        { name: "Primary Turns (Np)", value: "200", displayUnit: "" },
        { name: "Secondary Turns (Ns)", value: "1000", displayUnit: "" }
      ]
    }
  },
  {
    id: "u2_problem_3",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A straight wire of length 0.2 meters is moved perpendicularly to a magnetic field with a density of 0.5 T at a speed of 3 m/s. Calculate the magnitude of the induced EMF in the wire.",
    correctAnswer: "0.3",
    modelAnswer: "0.3 Volts",
    detailedSolution: "Step 1 (Formula): ε = B·l·v\nStep 2 (Given): B = 0.5 T, l = 0.2 m, v = 3 m/s\nStep 3 (Substitute): ε = 0.5 × 0.2 × 3\nStep 4: ε = 0.3 V.",
    extraDetails: {
      formula: "ε = B · l · v",
      variables: [
        { name: "Field (B)", value: "0.5", displayUnit: "T" },
        { name: "Length (l)", value: "0.2", displayUnit: "m" },
        { name: "Velocity (v)", value: "3", displayUnit: "m/s" }
      ]
    }
  },
  {
    id: "u2_problem_4",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A coil has a self-inductance of 0.5 H. If the current in the coil changes from 2 A to 6 A in 0.2 seconds, calculate the magnitude of the induced EMF in the coil.",
    correctAnswer: "10",
    modelAnswer: "10 Volts",
    detailedSolution: "Step 1 (Formula): ε = -L · (ΔI / Δt)\nStep 2 (Given): L = 0.5 H, ΔI = 6 - 2 = 4 A, Δt = 0.2 s\nStep 3 (Substitute): ε = -0.5 × (4 / 0.2)\nStep 4: ε = -0.5 × 20 = -10 V.\nStep 5: Magnitude is 10 Volts.",
    extraDetails: {
      formula: "ε = -L · (ΔI / Δt)",
      variables: [
        { name: "Inductance (L)", value: "0.5", displayUnit: "H" },
        { name: "Current Change (ΔI)", value: "4", displayUnit: "A" },
        { name: "Time Span (Δt)", value: "0.2", displayUnit: "s" }
      ]
    }
  },

  // ================= UNIT 3 =================
  {
    id: "u3_term_1",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What concept describes the dual nature of waves behaving as particles and particles behaving as waves?",
    correctAnswer: "wave-particle duality",
    modelAnswer: "Wave-particle duality",
    hint: "Championed heavily by Louis de Broglie and Albert Einstein."
  },
  {
    id: "u3_term_2",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the emission of electrons from a heated metal's surface?",
    correctAnswer: "thermionic emission",
    modelAnswer: "Thermionic emission",
    hint: "It is the primary operational basis behind Cathode Ray Tubes."
  },
  {
    id: "u3_term_3",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the emission of electrons from a metallic surface when light of suitable frequency falls on it?",
    correctAnswer: "photoelectric effect",
    modelAnswer: "Photoelectric effect",
    hint: "Einstein won his Physics Nobel Prize for explaining its mechanism."
  },
  {
    id: "u3_term_4",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term of scattering a high frequency photon by an electron, resulting in a decrease in the photon's frequency and increase in wavelength?",
    correctAnswer: "compton effect",
    modelAnswer: "Compton effect",
    hint: "Directly proves that photons have momentum, implying a particle nature."
  },
  {
    id: "u3_term_5",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the process where more atoms are maintained in metastably excited states rather than the ground state?",
    correctAnswer: "population inversion",
    modelAnswer: "Population inversion",
    hint: "An absolute necessity for stimulating light amplification in lasers."
  },
  {
    id: "u3_true_false_1",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "true-false",
    typeLabel: "True or False",
    question: "In the Compton effect, a photon gains energy and speeds up after colliding with a free electron.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "The photon always LOSES energy to the electron, resulting in decreased frequency and increased wavelength. Its speed remains constant at 'c' (the speed of light)."
  },
  {
    id: "u3_true_false_2",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "true-false",
    typeLabel: "True or False",
    question: "Laser light obeys the inverse square law and experiences normal beam spreading during travel.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Laser light possesses high collimation and does NOT obey the inverse square law; its intensity remains high and constant over vast distances."
  },
  {
    id: "u3_mcq_1",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to Wien's Law, if the absolute temperature of an emitting blackbody increases, the peak intensity wavelength (λ_max) will:",
    options: [
      "Increase proportionally.",
      "Decrease inversely.",
      "Remain completely constant.",
      "Fluctuate randomly."
    ],
    correctAnswer: "Decrease inversely.",
    modelAnswer: "Decrease inversely.",
    detailedSolution: "Wien's law dictates λ_max is inversely proportional to Temperature: λ_max ∝ 1/T."
  },
  {
    id: "u3_situation_1",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the color of a piece of iron as its heating temperature rises continuously?",
    options: [
      "It remains dull charcoal grey in all thermal stages.",
      "The color turns directly blue and jumps to green immediately.",
      "The color shifts from red, to orange, to yellow, to blue, and finally to white.",
      "The piece of iron loses color entirely and turns transparent."
    ],
    correctAnswer: "The color shifts from red, to orange, to yellow, to blue, and finally to white.",
    modelAnswer: "The color shifts from red, to orange, to yellow, to blue, and finally to white.",
    detailedSolution: "As temperature increases, peak emission shifts to shorter electromagnetic wavelengths (Wien's law) through the visible light spectrum from red (long) to white/blue (short)."
  },
  {
    id: "u3_compare_1",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "compare",
    typeLabel: "Comparison Study",
    question: "Compare Spontaneous Emission and Stimulated Emission.",
    correctAnswer: "compare",
    modelAnswer: "Spontaneous vs. Stimulated Emission",
    detailedSolution: "Spontaneous emission occurs when an excited atom naturally drops to a lower state when its lifetime ends, releasing random incoherent waves. Stimulated emission occurs when an external trigger photon matches the energy gap and hits the excited atom early, making it drop and emit an identical, coherent photon.",
    extraDetails: {
      comparisonLeft: {
        title: "Spontaneous Emission",
        points: [
          "Atom falls to a lower state randomly, without external interaction.",
          "Emitted photons have random phases, directions, and wave parameters (Incoherent).",
          "This is the source of light in ordinary illumination resources."
        ]
      },
      comparisonRight: {
        title: "Stimulated Emission",
        points: [
          "Forced transition triggered by an external matching photon.",
          "Emitted photon is perfectly identical to the trigger in phase, path, and polarization (Coherent).",
          "This is the mechanism used to build laser light."
        ]
      }
    }
  },
  {
    id: "u3_problem_1",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A black body radiates peak intensity at 500 nm wavelength. Find the absolute temperature of the body using Wien's Law (Wien constant = 2.9 × 10⁻³ m·K).",
    correctAnswer: "5800",
    modelAnswer: "5800 Kelvin",
    detailedSolution: "Wien's Law: λ_max * T = constant\nGiven: λ_max = 500 nm = 500 × 10⁻⁹ m\nConstant = 2.9 × 10⁻³ m·K\nT = (2.9 × 10⁻³) / (500 × 10⁻⁹) = 5800 K.",
    extraDetails: {
      formula: "T = Constant / λ_max",
      variables: [
        { name: "Max Wavelength (λ_max)", value: "500 × 10⁻⁹", displayUnit: "m" },
        { name: "Wien's Constant", value: "2.9 × 10⁻³", displayUnit: "m·K" }
      ]
    }
  },
  {
    id: "u3_problem_2",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A metal has a work function of 3.2 × 10⁻¹⁹ J. If monochromatic light of frequency 1.0 × 10¹⁵ Hz hits the metal, calculate the max kinetic energy of emitted photoelectrons. (h = 6.625 × 10⁻³⁴ J·s).",
    correctAnswer: "3.425e-19",
    modelAnswer: "3.425 × 10⁻¹⁹ Joules",
    detailedSolution: "K.E._max = h·ν - E_w\nh·ν = 6.625 × 10⁻³⁴ × 1.0 × 10¹⁵ = 6.625 × 10⁻¹⁹ J\nK.E._max = (6.625 × 10⁻¹⁹) - (3.2 × 10⁻¹⁹) = 3.425 × 10⁻¹⁹ Joules.",
    extraDetails: {
      formula: "K.E._max = (h · ν) - E_w",
      variables: [
        { name: "Work Function (E_w)", value: "3.2 × 10⁻¹⁹", displayUnit: "J" },
        { name: "Frequency (ν)", value: "1.0 × 10¹⁵", displayUnit: "Hz" },
        { name: "Planck Standard (h)", value: "6.625 × 10⁻³⁴", displayUnit: "J·s" }
      ]
    }
  },
  {
    id: "u3_problem_3",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A photon has a wavelength of 200 nm. Calculate the energy of the photon. (h = 6.625 × 10⁻³⁴ J.s, c = 3 × 10⁸ m/s)",
    correctAnswer: "9.94e-19",
    modelAnswer: "9.9375 × 10⁻¹⁹ Joules",
    detailedSolution: "Step 1 (Formula): E = h·ν = (h·c) / λ\nStep 2 (Given): λ = 200 nm = 200 × 10⁻⁹ m\nStep 3 (Substitute): E = (6.625 × 10⁻³⁴ × 3 × 10⁸) / (200 × 10⁻⁹)\nStep 4: E = (19.875 × 10⁻²⁶) / (200 × 10⁻⁹)\nStep 5: E = 9.9375 × 10⁻¹⁹ J.",
    extraDetails: {
      formula: "E = (h · c) / λ",
      variables: [
        { name: "Wavelength (λ)", value: "200 × 10⁻⁹", displayUnit: "m" }
      ]
    }
  },
  {
    id: "u3_problem_4",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A photon has a wavelength of 150 pm. Calculate the momentum of the photon. (h = 6.625 × 10⁻³⁴ J.s)",
    correctAnswer: "4.42e-24",
    modelAnswer: "4.4167 × 10⁻²⁴ kg·m/s",
    detailedSolution: "Step 1 (Formula): p = h / λ\nStep 2 (Given): λ = 150 pm = 150 × 10⁻¹² m\nStep 3 (Substitute): p = (6.625 × 10⁻³⁴) / (150 × 10⁻¹²)\nStep 4: p = 4.4167 × 10⁻²⁴ kg·m/s.",
    extraDetails: {
      formula: "p = h / λ",
      variables: [
        { name: "Wavelength (λ)", value: "150 × 10⁻¹²", displayUnit: "m" }
      ]
    }
  },

  // ================= UNIT 4 =================
  {
    id: "u4_term_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for materials with electrical conductivities between that of conductors and insulators?",
    correctAnswer: "semiconductors",
    modelAnswer: "Semiconductors",
    hint: "Common examples are Silicon and Germanium."
  },
  {
    id: "u4_term_2",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the specific term for pure semiconductors with zero added impurities?",
    correctAnswer: "intrinsic semiconductors",
    modelAnswer: "Intrinsic semiconductors",
    hint: "Their conductivity is low and increases primarily with temperature."
  },
  {
    id: "u4_term_3",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the process of adding very small percentages of trivalent or pentavalent impurities to semiconductor materials to boost their conductivity?",
    correctAnswer: "doping",
    modelAnswer: "Doping",
    hint: "Turns intrinsic semiconductors into extrinsic semiconductors."
  },
  {
    id: "u4_term_4",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the transitional region near a P-N junction where mobile charge carriers are fully depleted?",
    correctAnswer: "depletion region",
    modelAnswer: "Depletion region (or depletion layer / transition region)",
    hint: "Formed when electrons and holes recombine near the border."
  },
  {
    id: "u4_term_5",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What is the term for the process of converting alternating current (AC) to direct current (DC) using diodes?",
    correctAnswer: "rectification",
    modelAnswer: "Rectification",
    hint: "Diodes only allow current flow in one direction."
  },
  {
    id: "u4_term_6",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "term",
    typeLabel: "Scientific Term",
    question: "What are the fundamental building blocks of digital circuits that perform basic logical gating operations?",
    correctAnswer: "logic gates",
    modelAnswer: "Logic gates",
    hint: "Examples are AND, OR, NOT, NAND, and NOR gates."
  },
  {
    id: "u4_true_false_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "true-false",
    typeLabel: "True or False",
    question: "A diode will readily conduct electrical current when subjected to reverse bias.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Under reverse bias, the depletion layer widens and barrier resistance is extremely high. Thus, only a very negligible leakage current passes through."
  },
  {
    id: "u4_true_false_2",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "true-false",
    typeLabel: "True or False",
    question: "An OR logic gate gives a high output (1) only when all of its inputs are set to high (1).",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "An OR gate outputs high if ONE OR MORE of its inputs are high. The description describes an AND logic gate."
  },
  {
    id: "u4_mcq_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What type of impurity atoms should be doped into pure silicon to construct a P-type semiconductor?",
    options: [
      "Trivalent atoms (acceptor atoms, like Boron)",
      "Pentavalent atoms (donor atoms, like Phosphorus)",
      "Hexavalent atoms",
      "Monovalent atoms"
    ],
    correctAnswer: "Trivalent atoms (acceptor atoms, like Boron)",
    modelAnswer: "Trivalent atoms (acceptor atoms, like Boron)"
  },
  {
    id: "u4_situation_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the output of a NAND logic gate if both of its inputs are active (1)?",
    options: [
      "The output remains high (1).",
      "The output will switch to low (0).",
      "The output will fluctuate dynamically.",
      "The gate enters a floating high-impedance state."
    ],
    correctAnswer: "The output will switch to low (0).",
    modelAnswer: "The output will switch to low (0).",
    detailedSolution: "An AND gate outputs 1 when both inputs are 1. The NAND gate inverts this output using a following NOT gate, turning it into a low (0) output."
  },
  {
    id: "u4_compare_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "compare",
    typeLabel: "Comparison Study",
    question: "Compare between NPN and PNP Transistors.",
    correctAnswer: "compare",
    modelAnswer: "NPN vs. PNP Transistors",
    detailedSolution: "NPN and PNP transistors are two types of BJTs. NPN uses a lightly doped P-type base sandwiched between two N-type regions (emitter and collector), and its primary charge carriers are electrons. PNP sandwiches an N-type base between two P-type regions, and uses holes as its primary charge carriers.",
    extraDetails: {
      comparisonLeft: {
        title: "NPN Transistor",
        points: [
          "Consists of a lightly-doped P-type base between N-type regions.",
          "Free electrons are the primary majority charge carriers in current conduction.",
          "Electrons move from Emitter through Base into the Collector."
        ]
      },
      comparisonRight: {
        title: "PNP Transistor",
        points: [
          "Consists of a lightly-doped N-type base between P-type regions.",
          "Positive holes are the primary majority charge carriers in current conduction.",
          "Holes flow from Emitter through Base into the Collector."
        ]
      }
    }
  },
  {
    id: "u4_problem_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A transistor operates with a collector current (Ic) of 5 mA and a base current (Ib) of 0.1 mA. Determine the current gain (β) of the transistor.",
    correctAnswer: "50",
    modelAnswer: "50",
    detailedSolution: "Current Gain (β) is the ratio of collector current to base current:\nβ = Ic / Ib = 5 mA / 0.1 mA = 50.",
    extraDetails: {
      formula: "β = Ic / Ib",
      variables: [
        { name: "Collector Current (Ic)", value: "5", displayUnit: "mA" },
        { name: "Base Current (Ib)", value: "0.1", displayUnit: "mA" }
      ]
    }
  },
  {
    id: "u4_problem_2",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "In a common-emitter configuration, a transistor has an alpha current gain (αe) of 0.98. Calculate the value of the beta current gain (β).",
    correctAnswer: "49",
    modelAnswer: "49",
    detailedSolution: "Relationship: β = αe / (1 - αe)\nSubstitute αe = 0.98:\nβ = 0.98 / (1 - 0.98) = 0.98 / 0.02 = 49.",
    extraDetails: {
      formula: "β = αe / (1 - αe)",
      variables: [
        { name: "Alpha Gain (αe)", value: "0.98", displayUnit: "" }
      ]
    }
  },
  {
    id: "u4_problem_3",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "A silicon sample is doped with phosphorus. If the concentration of phosphorus atoms is 10¹⁵ atoms/cm³, is the material an n-type or p-type semiconductor? Explain your reasoning.",
    correctAnswer: "n-type",
    modelAnswer: "N-type semiconductor",
    detailedSolution: "Step 1: Phosphorus is a pentavalent impurity (it has 5 valence electrons).\nStep 2: When silicon is doped with a pentavalent impurity, the atoms donate free electrons to the crystal lattice.\nStep 3: Because free electrons become the majority charge carriers, the resulting material acts as an n-type semiconductor."
  },
  {
    id: "u4_problem_4",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "In a P-N junction, what is the effect of applying a forward bias on the width of the depletion region and the current flow through the junction?",
    correctAnswer: "narrow",
    modelAnswer: "Depletion region narrows, large current flows",
    detailedSolution: "Step 1: In forward bias, the positive terminal of the power source connects to the p-type region, and the negative to the n-type region.\nStep 2: This externally applied voltage opposes the natural internal electric field existing within the depletion region.\nStep 3: As a result, the depletion region becomes narrower, significantly lowering the junction resistance.\nStep 4: This drop in resistance allows a large current to flow easily through the diode."
  },
  {
    id: "u4_problem_5",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "problem",
    typeLabel: "Numerical Problem",
    question: "What is the output of a NAND gate if both of its inputs are high (1)? Provide a step-by-step logic trace.",
    correctAnswer: "0",
    modelAnswer: "Low (0)",
    detailedSolution: "Step 1: Understand that a NAND gate is essentially an AND gate connected in series with a NOT gate.\nStep 2: When both inputs are given a high (1) signal, the internal AND logic stage evaluates to a high (1) output.\nStep 3: The subsequent NOT logic stage takes this high (1) signal and inverts it into a low (0).\nResult: The final output produced by the NAND gate is 0."
  },
  {
    id: "u1_tf_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic fields are produced by stationary electric charges.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Magnetic fields are produced by moving charges (currents). Stationary charges only produce electric fields."
  },
  {
    id: "u1_tf_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic field is generated due to the motion of electrons.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "The motion of electrons constitutes an electric current, which generates a surrounding magnetic field."
  },
  {
    id: "u1_tf_3",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic field lines always cross each other.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Magnetic field lines never intersect. If they did, it would imply two different directions of the magnetic field at the point of intersection, which is impossible."
  },
  {
    id: "u1_tf_4",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic flux is the total number of magnetic flux lines passing through a surface.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "Magnetic flux (Φ) explicitly measures the total number of field lines passing perpendicularly through a given area."
  },
  {
    id: "u1_tf_5",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Magnetic flux density is measured in Weber.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Magnetic flux density (B) is measured in Tesla (T) or Weber/m². Total magnetic flux (Φ) is measured in Weber (Wb)."
  },
  {
    id: "u1_tf_6",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic lines of force around a straight wire carrying current are concentric circles.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "A straight current-carrying wire produces a magnetic field in the shape of concentric circles around it, determinable by the Right-Hand Grip Rule."
  },
  {
    id: "u1_tf_7",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Ampere's Right Hand Rule is used to determine the direction of the electric current due to a magnetic field.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Ampere's Right-Hand Rule (or Right-Hand Grip Rule) determines the direction of the magnetic field generated BY an electric current, not the other way around."
  },
  {
    id: "u1_tf_8",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic field is more concentrated in the center of a circular coil than outside the loop.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "Field lines converge and become parallel and uniform at the exact center of a circular coil, resulting in higher concentration."
  },
  {
    id: "u1_tf_9",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The right cork screw rule is used to determine the direction of the current in a circular coil.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Maxwell's corkscrew rule helps find the direction of the magnetic field relative to the current direction, not the current itself."
  },
  {
    id: "u1_tf_10",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "A solenoid is a long straight coil of wire used to generate a magnetic field.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "A solenoid is formed by winding wire into a long helical coil. It produces a uniform magnetic field inside its core when current passes."
  },
  {
    id: "u1_tf_11",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic field lines through the middle of a solenoid are straight and parallel.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "Inside an ideal solenoid, the magnetic field is highly uniform, meaning the lines are straight, parallel, and evenly spaced."
  },
  {
    id: "u1_tf_12",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The neutral point is formed when two magnetic fields are parallel to each other.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "A neutral point is formed when two magnetic fields are completely equal in magnitude but OPPOSITE in direction, canceling each other out."
  },
  {
    id: "u1_tf_13",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic force acting on a wire is always parallel to the magnetic field.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "The magnetic force on a wire is maximum when it is perpendicular to the field and ZERO when parallel. Force is always perpendicular to both current and field."
  },
  {
    id: "u1_tf_14",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "Fleming's left-hand rule is used to determine the direction of the force on a wire carrying current.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "With thumb (Force/Motion), forefinger (Magnetic Field), and middle finger (Current) held mutually perpendicular, Fleming's left-hand rule predicts the force direction."
  },
  {
    id: "u1_tf_15",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic force on a wire is inversely proportional to the length of the wire.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Magnetic force is DIRECTLY proportional to the length of the wire interacting with the field (F = BIL sinθ)."
  },
  {
    id: "u1_tf_16",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic torque acting on a coil is zero when the coil's plane is perpendicular to the magnetic field.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "When the coil plane is perpendicular to the field, the normal (vector area) is parallel (θ = 0). Torque τ = BIAN sin(0) = 0."
  },
  {
    id: "u1_tf_17",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic dipole moment is a vector emanating from the south pole.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "The magnetic dipole moment is defined as a vector emanating outward perpendicularly from the NORTH pole of a current loop."
  },
  {
    id: "u1_tf_18",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnetic torque acting on a coil is the basis for the operation of galvanometers and electric motors.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "Galvanometers use torque to deflect pointers, and electric motors use torque to create continuous rotational motion from electrical current."
  },
  {
    id: "u1_m_1",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the term for the transfer of heat by electromagnetic waves?",
    options: ["Conduction", "Convection", "Radiation", "Induction"],
    correctAnswer: "Radiation",
    modelAnswer: "Radiation"
  },
  {
    id: "u1_m_2",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "Which type of physics explains phenomena not directly observed in daily life, especially in atomic and subatomic systems?",
    options: ["Classical physics", "Modern (quantum) physics", "Newtonian physics", "Thermodynamic physics"],
    correctAnswer: "Modern (quantum) physics",
    modelAnswer: "Modern (quantum) physics"
  },
  {
    id: "u1_m_3",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What happens to the energy of absorbed radiation by an object?",
    options: [
      "It is converted to kinetic energy.",
      "It is converted to heat energy.",
      "It is converted to potential energy.",
      "It is reflected."
    ],
    correctAnswer: "It is converted to heat energy.",
    modelAnswer: "It is converted to heat energy."
  },
  {
    id: "u1_m_4",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to the text, why do different objects appear to be different colors?",
    options: [
      "Because they reflect all wavelengths equally.",
      "Because the dominant wavelength emitted varies with temperature and object properties.",
      "Because they absorb all wavelengths equally.",
      "Because the light source is different."
    ],
    correctAnswer: "Because the dominant wavelength emitted varies with temperature and object properties.",
    modelAnswer: "Because the dominant wavelength emitted varies with temperature and object properties."
  },
  {
    id: "u1_m_5",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to Planck's distribution, what happens to the intensity of radiation when the wavelength approaches zero or infinity?",
    options: ["It increases to infinity", "It tends to zero", "It remains constant", "It fluctuates randomly"],
    correctAnswer: "It tends to zero",
    modelAnswer: "It tends to zero"
  },
  {
    id: "u1_m_6",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What happens to the maximum intensity of radiation as the temperature of an object increases?",
    options: ["It decreases", "It remains constant", "It increases", "It fluctuates randomly"],
    correctAnswer: "It increases",
    modelAnswer: "It increases"
  },
  {
    id: "u1_m_7",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "Which law describes the relationship between the wavelength at maximum radiation intensity and temperature?",
    "options": ["Planck's law", "Wien's law", "Faraday's law", "Ampere's law"],
    correctAnswer: "Wien's law",
    modelAnswer: "Wien's law"
  },
  {
    id: "u1_m_8",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to Wien's law, if the temperature of an object increases, what happens to the wavelength at maximum radiation intensity?",
    options: ["It increases", "It decreases", "It remains constant", "It fluctuates randomly"],
    correctAnswer: "It decreases",
    modelAnswer: "It decreases"
  },
  {
    id: "u1_m_9",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is a black body defined as?",
    options: [
      "An object that reflects all radiation",
      "An object that emits no radiation",
      "An ideal system that absorbs all radiation and re-emits it totally",
      "An object that transmits all radiation"
    ],
    correctAnswer: "An ideal system that absorbs all radiation and re-emits it totally",
    modelAnswer: "An ideal system that absorbs all radiation and re-emits it totally"
  },
  {
    id: "u1_m_10",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What does the classical theory of light predict about the intensity of radiation at high frequencies?",
    options: ["It decreases", "It remains constant", "It increases to infinity", "It tends to zero"],
    correctAnswer: "It increases to infinity",
    modelAnswer: "It increases to infinity"
  },
  {
    id: "u3_m_11",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What did Max Planck propose about the energy of electromagnetic waves?",
    options: ["It is continuous", "It is quantized", "It is infinite", "It is zero"],
    correctAnswer: "It is quantized",
    modelAnswer: "It is quantized"
  },
  {
    id: "u3_m_12",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to Planck's theory, what is a quantum or photon?",
    options: [
      "A large unit of energy",
      "The smallest unit of energy",
      "A continuous wave of energy",
      "A unit of mass"
    ],
    correctAnswer: "The smallest unit of energy",
    modelAnswer: "The smallest unit of energy"
  },
  {
    id: "u3_m_13",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is thermionic emission?",
    options: [
      "Emission of electrons from a metal by light",
      "Emission of electrons from a heated metal surface",
      "Emission of photons from a heated metal",
      "Emission of protons from a metal"
    ],
    correctAnswer: "Emission of electrons from a heated metal surface",
    modelAnswer: "Emission of electrons from a heated metal surface"
  },
  {
    id: "u3_m_14",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the scientific idea behind the Cathode Ray Tube (CRT)?",
    options: [
      "Photoelectric effect",
      "Thermionic emission",
      "Compton scattering",
      "Black body radiation"
    ],
    correctAnswer: "Thermionic emission",
    modelAnswer: "Thermionic emission"
  },
  {
    id: "u3_m_15",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the function of the grid in a Cathode Ray Tube (CRT)?",
    options: [
      "To heat the cathode",
      "To control the number of electrons in the electron beam",
      "To accelerate the electron beam",
      "To emit light when struck by electrons"
    ],
    correctAnswer: "To control the number of electrons in the electron beam",
    modelAnswer: "To control the number of electrons in the electron beam"
  },
  {
    id: "u3_m_16",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the photoelectric effect?",
    options: [
      "Emission of electrons from a heated metal",
      "Emission of electrons from a metallic surface when light falls on it",
      "Emission of photons from a metal",
      "Emission of protons from a metal"
    ],
    correctAnswer: "Emission of electrons from a metallic surface when light falls on it",
    modelAnswer: "Emission of electrons from a metallic surface when light falls on it"
  },
  {
    id: "u3_m_17",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What are electrons emitted due to the photoelectric effect called?",
    options: [
      "Thermoelectrons",
      "Photoelectrons",
      "Compton electrons",
      "Blackbody electrons"
    ],
    correctAnswer: "Photoelectrons",
    modelAnswer: "Photoelectrons"
  },
  {
    id: "u3_m_18",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the work function of a metal?",
    options: [
      "The maximum energy of emitted electrons",
      "The minimum energy needed to release electrons from the metal's surface",
      "The energy of the incident photon",
      "The kinetic energy of the electrons"
    ],
    correctAnswer: "The minimum energy needed to release electrons from the metal's surface",
    modelAnswer: "The minimum energy needed to release electrons from the metal's surface"
  },
  {
    id: "u3_m_19",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "According to Einstein's theory of the photoelectric effect, the kinetic energy of the emitted electrons depends on",
    options: [
      "The intensity of the light",
      "The frequency of the incident light and the work function of the metal",
      "Both the intensity and frequency of the light",
      "The work function of the metal only"
    ],
    correctAnswer: "The frequency of the incident light and the work function of the metal",
    modelAnswer: "The frequency of the incident light and the work function of the metal"
  },
  {
    id: "u3_m_20",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the Compton effect?",
    options: [
      "The emission of electrons from a metal by light",
      "The emission of electrons from a heated metal surface",
      "The change in wavelength of a photon after colliding with a free electron",
      "The absorption of photons by electrons"
    ],
    correctAnswer: "The change in wavelength of a photon after colliding with a free electron",
    modelAnswer: "The change in wavelength of a photon after colliding with a free electron"
  },
  {
    id: "u1_sit_3",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the magnetic field lines around a straight wire if the current passing through the wire increases?",
    options: [
      "The magnetic field lines will become farther apart.",
      "The magnetic field lines will become more crowded.",
      "The magnetic field lines will disappear.",
      "The magnetic field lines will become weaker."
    ],
    correctAnswer: "The magnetic field lines will become more crowded.",
    modelAnswer: "The magnetic field lines will become more crowded."
  },
  {
    id: "u1_sit_4",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the magnetic field at the center of a circular coil if the direction of the current is reversed?",
    options: [
      "The magnetic field will disappear.",
      "The magnetic field will become stronger.",
      "The direction of the magnetic field will be reversed.",
      "The magnetic field will remain unchanged."
    ],
    correctAnswer: "The direction of the magnetic field will be reversed.",
    modelAnswer: "The direction of the magnetic field will be reversed."
  },
  {
    id: "u1_sit_5",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the magnetic field inside a solenoid if a soft iron bar is inserted?",
    options: [
      "The magnetic field will become weaker.",
      "The magnetic field will become stronger.",
      "The magnetic field will disappear.",
      "The magnetic field will remain unchanged."
    ],
    correctAnswer: "The magnetic field will become stronger.",
    modelAnswer: "The magnetic field will become stronger.",
    detailedSolution: "Iron has a much higher magnetic permeability than air. Inserting an iron bar increases total magnetic flux density significantly."
  },
  {
    id: "u1_sit_6",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the force on a wire carrying current in a magnetic field if the wire is placed parallel to the magnetic field?",
    options: [
      "The force will be at its maximum.",
      "The force will be zero.",
      "The force will be reversed.",
      "The force will be doubled."
    ],
    correctAnswer: "The force will be zero.",
    modelAnswer: "The force will be zero.",
    detailedSolution: "Magnetic force is given by F = BIL sin(θ). If parallel, θ = 0, sin(0) = 0, so Force = 0."
  },
  {
    id: "u1_sit_7",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the torque on a coil carrying current in a magnetic field if the plane of the coil is perpendicular to the magnetic field?",
    options: [
      "The torque will be at its maximum.",
      "The torque will be zero.",
      "The torque will be reversed.",
      "The torque will be doubled."
    ],
    correctAnswer: "The torque will be zero.",
    modelAnswer: "The torque will be zero.",
    detailedSolution: "When the coil plane is perpendicular to the B-field, the normal vector to the coil is parallel to B (θ = 0), making torque τ = BIAN sin(0) = 0."
  },
  {
    id: "u1_sit_8",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the magnetic flux through a surface if the angle between the surface and the magnetic field changes?",
    options: [
      "The magnetic flux will remain constant.",
      "The magnetic flux will change.",
      "The magnetic flux will disappear.",
      "The magnetic flux will double."
    ],
    correctAnswer: "The magnetic flux will change.",
    modelAnswer: "The magnetic flux will change.",
    detailedSolution: "Flux Φ = B A cos(θ). Thus, any change in angle changes the magnetic flux."
  },
  {
    id: "u1_sit_9",
    unit: 1,
    unitTitle: "Unit 1: Magnetic Effect of Electric Current",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to a magnetic needle placed at a neutral point?",
    options: [
      "It will deflect in the direction of the stronger magnetic field.",
      "It will not deflect (move freely).",
      "It will spin rapidly.",
      "It will be destroyed."
    ],
    correctAnswer: "It will not deflect (move freely).",
    modelAnswer: "It will not deflect (move freely).",
    detailedSolution: "At a neutral point, the net magnetic field is zero, so no magnetic torque acts on the needle."
  },
  {
    id: "u2_tf_3",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "An electromotive force (current) is induced in a conductor when it is moving across a magnetic field.",
    correctAnswer: true,
    modelAnswer: "True"
  },
  {
    id: "u2_tf_4",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "The magnitude of the induced electromotive force is proportional to the rate by which the conductor cuts the lines of the magnetic flux.",
    correctAnswer: true,
    modelAnswer: "True",
    detailedSolution: "This is a direct statement of Faraday's Law of Electromagnetic Induction."
  },
  {
    id: "u2_tf_5",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "The negative sign in Faraday's law indicates that the induced electromotive force tends to aid the cause producing it.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "The negative sign represents Lenz's Law, indicating the induced EMF OPPOSES the cause producing it."
  },
  {
    id: "u2_tf_6",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "When approaching a North Pole with a coil, the induced current will form a South Pole, opposing the motion.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "To oppose the approaching North Pole, the induced current will create a LIKE pole (North Pole) to repel it."
  },
  {
    id: "u2_tf_7",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "Mutual induction occurs between two coils when an induced emf is generated in one due to current variation in the other.",
    correctAnswer: true,
    modelAnswer: "True"
  },
  {
    id: "u2_tf_8",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "There is an induced emf in the secondary coil even when the current in the primary coil is constant.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Induced EMF only occurs when there is a CHANGE in magnetic flux. A constant primary current creates a constant flux, inducing 0 EMF."
  },
  {
    id: "u2_tf_9",
    unit: 2,
    unitTitle: "Unit 2: Electromagnetic Induction",
    type: "true-false",
    typeLabel: "True or False",
    question: "Self-induction is the phenomenon of inducing emf in a coil due to a change in current in a different coil.",
    correctAnswer: false,
    modelAnswer: "False",
    detailedSolution: "Self-induction is due to a change in current in the SAME coil."
  },
  {
    id: "u3_m_21",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What did Compton prove about the nature of light?",
    options: [
      "Light behaves only as a wave",
      "Light behaves only as a particle",
      "Light behaves as both a wave and a particle, with a particle having linear momentum",
      "Light has no momentum"
    ],
    correctAnswer: "Light behaves as both a wave and a particle, with a particle having linear momentum",
    modelAnswer: "Light behaves as both a wave and a particle, with a particle having linear momentum"
  },
  {
    id: "u3_m_22",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "Which type of X-ray radiation depends on the target material?",
    options: [
      "Visible Light",
      "Continuous radiation",
      "Characteristic radiation",
      "Bremsstrahlung"
    ],
    correctAnswer: "Characteristic radiation",
    modelAnswer: "Characteristic radiation"
  },
  {
    id: "u3_m_23",
    unit: 3,
    unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the process called when electrons emit radiation as they are decelerated inside the target?",
    options: [
      "Photoelectric effect",
      "Thermionic emission",
      "Bremsstrahlung (braking radiation)",
      "Compton scattering"
    ],
    correctAnswer: "Bremsstrahlung (braking radiation)",
    modelAnswer: "Bremsstrahlung (braking radiation)"
  },
  {
    id: "u4_m_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What are the two main categories of semiconductors?",
    options: [
      "Metals and non-metals.",
      "Intrinsic (pure) and extrinsic (doped).",
      "Solid and liquid.",
      "Organic and inorganic."
    ],
    correctAnswer: "Intrinsic (pure) and extrinsic (doped).",
    modelAnswer: "Intrinsic (pure) and extrinsic (doped)."
  },
  {
    id: "u4_m_2",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the effect of increasing the temperature on a pure semiconductor?",
    options: [
      "Its conductivity decreases.",
      "It becomes an insulator.",
      "Its conductivity increases.",
      "It remains unchanged."
    ],
    correctAnswer: "Its conductivity increases.",
    modelAnswer: "Its conductivity increases."
  },
  {
    id: "u4_m_3",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the process of doping a semiconductor?",
    options: [
      "Decreasing the temperature.",
      "Applying a magnetic field.",
      "Adding a small percentage of suitable impurity atoms.",
      "Increasing the pressure."
    ],
    correctAnswer: "Adding a small percentage of suitable impurity atoms.",
    modelAnswer: "Adding a small percentage of suitable impurity atoms."
  },
  {
    id: "u4_m_4",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "In a P-N junction, what is the depletion region?",
    options: [
      "A region with a high concentration of free electrons.",
      "A region with a high concentration of holes.",
      "A region with no free electrons or holes.",
      "A region where electrons and holes move freely."
    ],
    correctAnswer: "A region with no free electrons or holes.",
    modelAnswer: "A region with no free electrons or holes."
  },
  {
    id: "u4_m_5",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "A P-N junction is said to be forward biased when:",
    options: [
      "The p-type is connected to the negative terminal, and the n-type to the positive terminal.",
      "No voltage is applied.",
      "The p-type is connected to the positive terminal, and the n-type to the negative terminal.",
      "The current flow is negligible."
    ],
    correctAnswer: "The p-type is connected to the positive terminal, and the n-type to the negative terminal.",
    modelAnswer: "The p-type is connected to the positive terminal, and the n-type to the negative terminal."
  },
  {
    id: "u4_m_6",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What is the function of a diode?",
    options: [
      "To amplify electrical signals.",
      "To allow current to flow in one direction only.",
      "To store electrical charge.",
      "To convert mechanical energy into electrical energy."
    ],
    correctAnswer: "To allow current to flow in one direction only.",
    modelAnswer: "To allow current to flow in one direction only."
  },
  {
    id: "u4_m_7",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "What are the three terminals of a bipolar junction transistor?",
    options: [
      "Anode, cathode, and gate.",
      "Source, drain, and gate.",
      "Emitter, base, and collector.",
      "Positive, negative, and neutral."
    ],
    correctAnswer: "Emitter, base, and collector.",
    modelAnswer: "Emitter, base, and collector."
  },
  {
    id: "u4_m_8",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "mcq",
    typeLabel: "Multiple Choice Question",
    question: "In an NPN transistor, which region is lightly doped?",
    options: [
      "Emitter.",
      "Base.",
      "Collector.",
      "All regions are equally doped."
    ],
    correctAnswer: "Base.",
    modelAnswer: "Base."
  },
  {
    id: "u4_sit_1",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the width of the depletion region in a P-N junction if a forward bias is applied?",
    options: [
      "The width of the depletion region will increase.",
      "The width of the depletion region will remain the same.",
      "The width of the depletion region will decrease.",
      "The depletion region will disappear."
    ],
    correctAnswer: "The width of the depletion region will decrease.",
    modelAnswer: "The width of the depletion region will decrease."
  },
  {
    id: "u4_sit_2",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the current flow through a P-N junction if a reverse bias is applied?",
    options: [
      "A large current will flow through the diode.",
      "The current flow will remain the same.",
      "Only a very small (leakage) current will flow through the diode.",
      "No current will flow through the diode."
    ],
    correctAnswer: "Only a very small (leakage) current will flow through the diode.",
    modelAnswer: "Only a very small (leakage) current will flow through the diode."
  },
  {
    id: "u4_sit_3",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the output of an OR gate if all its inputs are low (0)?",
    options: [
      "The output will be high (1).",
      "The output will fluctuate.",
      "The output will be low (0).",
      "The output will be floating."
    ],
    correctAnswer: "The output will be low (0).",
    modelAnswer: "The output will be low (0)."
  },
  {
    id: "u4_sit_4",
    unit: 4,
    unitTitle: "Unit 4: Semiconductors & Electronics",
    type: "situation",
    typeLabel: "Situation Analysis",
    question: "What will happen to the output of an AND gate if all its inputs are high (1)?",
    options: [
      "The output will be low (0).",
      "The output will fluctuate.",
      "The output will be high (1).",
      "The output will be floating."
    ],
    correctAnswer: "The output will be high (1).",
    modelAnswer: "The output will be high (1)."
  },
  ...moreQuestions,
  ...moreQuestions2,
  ...moreQuestions3
];
