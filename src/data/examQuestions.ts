export interface Question {
  id: number;
  displayId: string;
  group: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const examQuestions: Question[] = [
  // Group 1: Write the scientific term expressed by the following statements
  {
    id: 1,
    displayId: "1",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "It is the magnetic flux density which exerts a force of 1 N on a wire of 1m length carrying a current of intensity 1A placed perpendicularly to the magnetic field",
    options: ["Weber", "Tesla", "Henry", "Coulomb"],
    correctAnswer: 1,
    explanation: "Tesla (T) is the SI unit of magnetic flux density."
  },
  {
    id: 2,
    displayId: "2",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "They are induced currents that circulate in closed paths due to the change in magnetic flux through a solid conductor associating with heating effect",
    options: ["Direct currents", "Alternating currents", "Eddy currents", "Thermal currents"],
    correctAnswer: 2,
    explanation: "Eddy currents are loops of electrical current induced within conductors by a changing magnetic field."
  },
  {
    id: 3,
    displayId: "3",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "The phenomenon of inducing emf in a coil due to change in current in the same coil and hence the change in magnetic flux in the coil",
    options: ["Mutual induction", "Self-induction", "Electrolytic induction", "Static induction"],
    correctAnswer: 1,
    explanation: "Self-induction is the production of an electromotive force in a circuit when the magnetic flux linked with the circuit changes."
  },
  {
    id: 4,
    displayId: "4",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "The ratio of output electric power to the input electric power",
    options: ["Transformer Efficiency", "Current gain", "Power factor", "Voltage regulation"],
    correctAnswer: 0,
    explanation: "Efficiency (η) = (Output Power / Input Power) × 100%."
  },
  {
    id: 5,
    displayId: "5",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "It is an ideal system that absorbs all radiation falling on it. Then re-emit this radiation totally again",
    options: ["White body", "Gray body", "Black body", "Perfect reflector"],
    correctAnswer: 2,
    explanation: "A black body is a physical body that absorbs all incident electromagnetic radiation."
  },
  {
    id: 6,
    displayId: "6",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "It is the attractive force between the positive ions and free electrons in metal which make the electrons cannot leave it",
    options: ["Nuclear force", "Surface potential barrier", "Coulomb force", "Magnetic attraction"],
    correctAnswer: 1,
    explanation: "The surface potential barrier prevents electrons from escaping the metal surface at room temperature."
  },
  {
    id: 7,
    displayId: "7",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "It is the minimum energy needed to free (release) an electron from the surface of the metal",
    options: ["Threshold energy", "Kinetic energy", "Work function", "Potential energy"],
    correctAnswer: 2,
    explanation: "Work function is the minimum amount of energy required to remove an electron from a solid."
  },
  {
    id: 8,
    displayId: "8",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "They are invisible electromagnetic waves of short wavelengths, located between gamma rays and UV rays",
    options: ["Radio waves", "Microwaves", "X-rays", "Infrared waves"],
    correctAnswer: 2,
    explanation: "X-rays have wavelengths shorter than UV rays but longer than gamma rays."
  },
  {
    id: 9,
    displayId: "9",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "An external photon of energy E2 – E1 passes by excited atom at E2 to relax it to E1 before life time is over",
    options: ["Spontaneous emission", "Stimulated emission", "Photoelectric effect", "Compton scattering"],
    correctAnswer: 1,
    explanation: "Stimulated emission is the process by which an incoming photon of a specific frequency can interact with an excited atomic electron."
  },
  {
    id: 10,
    displayId: "10",
    group: "Group 1: Write the scientific term expressed by the following statements",
    question: "The circuits that perform logic operations and depend on digital electronics",
    options: ["Analog circuits", "Amplifiers", "Logic gates", "Rectifier circuits"],
    correctAnswer: 2,
    explanation: "Logic gates are the basic building blocks of any digital system."
  },

  // Group 2: Put circle around the correct answer (MCQs)
  {
    id: 11,
    displayId: "11",
    group: "Group 2: Put circle around the correct answer",
    question: "When the density of magnetic field in a given area is increased to its double value. The magnetic flux through this area would be.........",
    options: ["(a) unchanged", "(b) doubled", "(c) increased four times", "(d) increased eight times"],
    correctAnswer: 1,
    explanation: "Flux (Φ) = B × A. If B is doubled, Φ is doubled."
  },
  {
    id: 12,
    displayId: "12",
    group: "Group 2: Put circle around the correct answer",
    question: "Which the graph correctly gives the relation between the magnitude of the magnetic field density (B) outside an infinitely long straight current-carrying wire and the distance of point from the wire (d)?",
    options: ["(a) Straight line through origin", "(b) Straight line with negative slope", "(c) Parabolic curve", "(d) Hyperbolic curve (B ∝ 1/d)"],
    correctAnswer: 3,
    explanation: "According to Ampere's Law, B = (μ₀I)/(2πd), so B is inversely proportional to d."
  },
  {
    id: 13,
    displayId: "13",
    group: "Group 2: Put circle around the correct answer",
    question: "A solenoid is connected to a battery in a closed circuit, if its turns are compressed regularly. The magnetic flux density at a point on its axis inside it will ………",
    options: ["(a) increase", "(b) decrease", "(c) remain the same", "(d) vanish"],
    correctAnswer: 0,
    explanation: "B = μ₀NI / L. Compressing the turns decreases the length (L), which increases the magnetic flux density (B)."
  },
  {
    id: 14,
    displayId: "14",
    group: "Group 2: Put circle around the correct answer",
    question: "A length of straight conductor, carrying a current of 3A perpendicular to a magnetic field of 0.5 T, experiences a force of 1.5 N. What is the length of the conductor?",
    options: ["(a) 0.5 m", "(b) 1 m", "(c) 2 m", "(d) 4 m"],
    correctAnswer: 1,
    explanation: "F = BIL sinθ. 1.5 = 0.5 × 3 × L × sin(90°). 1.5 = 1.5L, so L = 1 m."
  },
  {
    id: 15,
    displayId: "15",
    group: "Group 2: Put circle around the correct answer",
    question: "A simple AC generator is made by rotating a flat rectangular coil in a uniform magnetic field. The instantaneous value of emf produced when the coil is parallel to the magnetic field is (100 V). If the frequency of rotation is doubled, then the instantaneous value of emf produced at the same position is…………",
    options: ["(a) 50V", "(b) 100V", "(c) 200V", "(d) 400V"],
    correctAnswer: 2,
    explanation: "EMF_max = NBA(2πf). When parallel, the instantaneous EMF is equal to the peak EMF. Doubling the frequency (f) doubles the peak EMF."
  },
  {
    id: 16,
    displayId: "16",
    group: "Group 2: Put circle around the correct answer",
    question: "A black body is heated to a temperature of 3000 K so the wavelength that is associating with its radiation of the maximum intensity was (λ). If it is cooled to an absolute temperature (T) then the wavelength associating with its radiation of the maximum intensity became (10 λ) so the temperature (T) is ………",
    options: ["(a) 300 K", "(b) 2700 K", "(c) 270 K", "(d) 1800 K"],
    correctAnswer: 0,
    explanation: "Wien's Displacement Law: λ₁T₁ = λ₂T₂. λ × 3000 = 10λ × T. T = 3000 / 10 = 300 K."
  },
  {
    id: 17,
    displayId: "17",
    group: "Group 2: Put circle around the correct answer",
    question: "Which of the following statements is correct when connecting the diode in reverse direction?",
    options: [
      "(a) The width of depletion layer increases and diode resistance decreases.",
      "(b) The width of depletion layer decreases and diode resistance decreases.",
      "(c) Neither the width of depletion layer nor the diode resistance changes.",
      "(d) The width of depletion layer increases and the diode resistance increases."
    ],
    correctAnswer: 3,
    explanation: "In reverse bias, the depletion layer widens and the resistance becomes very high."
  },
  {
    id: 18,
    displayId: "18",
    group: "Group 2: Put circle around the correct answer",
    question: "All of the following are from the properties of photons Except………",
    options: [
      "(a) they travel in straight line with constant speed equals the speed of light.",
      "(b) they have linear momentum(PL).",
      "(c) they can be deflected under the effect of electric and magnetic fields.",
      "(d) they travel in space in the form discrete packets of energy (quanta)."
    ],
    correctAnswer: 2,
    explanation: "Photons are neutral and are not affected by electric or magnetic fields."
  },
  {
    id: 19,
    displayId: "19",
    group: "Group 2: Put circle around the correct answer",
    question: "A monochromatic light falls on a metallic surface, the electrons with kinetic energy are emitted when …….",
    options: [
      "(a) the frequency of incident photon decreases",
      "(b) the energy of the incident photon is greater than the work function of the metal",
      "(c) the energy of the incident photon is less than the work function of the metal",
      "(d) the energy of the incident photon equal to the work function of the metal"
    ],
    correctAnswer: 1,
    explanation: "According to Einstein's photoelectric equation: K.E. = hf - Φ. Emission occurs if hf > Φ."
  },
  {
    id: 20,
    displayId: "20",
    group: "Group 2: Put circle around the correct answer",
    question: "In an ideal step up transformer, which of the following statements is incorrect",
    options: [
      "(a) The current ratio of secondary to primary is smaller than one.",
      "(b) The turn’s ratio of primary to secondary is smaller than one.",
      "(c) The voltage ratio of primary to secondary is greater than one.",
      "(d) The output-to-input electric power ratio is smaller than one."
    ],
    correctAnswer: 3,
    explanation: "For an ideal transformer, Efficiency = 1, so P_out / P_in = 1, not smaller than 1."
  },

  // Group 3: Correct underlined (Simulated as MCQs for quiz mechanics)
  {
    id: 21,
    displayId: "21",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The maximum value of magnetic flux cutting a certain area when the magnetic flux lines is [parallel to] that area",
    options: ["perpendicular to", "Making 45° with", "Parallel to", "Away from"],
    correctAnswer: 0,
    explanation: "Flux is maximum when lines are perpendicular to the area (θ=90°, sinθ=1)."
  },
  {
    id: 22,
    displayId: "22",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The magnetic flux density at center of a circular coil carrying a current decreases by [decreasing] the cross sectional area of the coil",
    options: ["increasing", "decreasing", "keeping constant", "halving"],
    correctAnswer: 0,
    explanation: "B = μ₀NI/2r. Decreasing the area (radius) increases B; to decrease B, we must increase the radius (increase area)."
  },
  {
    id: 23,
    displayId: "23",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The magnetic dipole moment |md| is given by the following relation [|md| = IANsinθ]",
    options: ["|md| = IAN", "|md| = BIAN", "|md| = BA", "|md| = t/B"],
    correctAnswer: 0,
    explanation: "The magnetic dipole moment is a vector quantity defined as current times area of the loop (for N turns: N×I×A)."
  },
  {
    id: 24,
    displayId: "24",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The mutual induction coefficient measured in [Ampere/second]",
    options: ["Henry", "Weber", "Tesla", "Coulomb"],
    correctAnswer: 0,
    explanation: "Inductance (both self and mutual) is measured in Henry (H)."
  },
  {
    id: 25,
    displayId: "25",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The wavelength of the scattered photon (λ scattered) is [smaller than] the wavelength of the incident photon (λ incident)",
    options: ["greater than", "smaller than", "equal to", "zero"],
    correctAnswer: 0,
    explanation: "In the Compton effect, the scattered photon loses energy, so its wavelength increases."
  },
  {
    id: 26,
    displayId: "26",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The wavelength of the characteristic radiation of X- rays [increases] as the atomic number of target material increases",
    options: ["decreases", "increases", "stays the same", "becomes zero"],
    correctAnswer: 0,
    explanation: "Moseley's Law states that frequency increases with atomic number, so wavelength decreases."
  },
  {
    id: 27,
    displayId: "27",
    group: "Group 3: Correct the underlined in the following statements",
    question: "The ordinary light is [not subject to] the inverse square law",
    options: ["subject to", "not subject to", "parallel to", "directional"],
    correctAnswer: 0,
    explanation: "Ordinary light spreads in all directions and obeys the inverse square law."
  },
  {
    id: 28,
    displayId: "28",
    group: "Group 3: Correct the underlined in the following statements",
    question: "[Decrease] the temperature is one of the methods to increases the electric conductivity of semiconductors.",
    options: ["Increasing", "Decreasing", "Keeping constant", "Freezing"],
    correctAnswer: 0,
    explanation: "For semiconductors, increasing temperature releases more charge carriers, thus increasing conductivity."
  },

  // Group 4: Problems
  {
    id: 29,
    displayId: "29, 30",
    group: "Group 4: Answer the following problems",
    question: "When the current in a coil changes from 5A to 2A in 0.05 s, an e m f of 15 V is induced in the coil. Calculate the coefficient of self-induction of the coil.",
    options: ["0.20 H", "0.25 H", "0.50 H", "0.75 H"],
    correctAnswer: 1,
    explanation: "emf = -L(ΔI/Δt). 15 = L × (3 / 0.05). 15 = L × 60. L = 15/60 = 0.25 Henry."
  },
  {
    id: 30,
    displayId: "31, 32",
    group: "Group 4: Answer the following problems",
    question: "A rectangular coil of 500 turns has dimensions 0.2m × 0.1 m, carries a current 5A. The plane of the coil makes angle 60° to a uniform magnetic field of flux density 0.8 T. Calculate the magnetic torque acting on the coil",
    options: ["20 N.m", "40 N.m", "34.6 N.m", "10 N.m"],
    correctAnswer: 0,
    explanation: "τ = BIAN sinθ. Note: θ is the angle between the normal to the coil and field. θ = 90° - 60° = 30°. τ = 0.8 × 5 × (0.2×0.1) × 500 × sin(30°) = 4 × 0.02 × 500 × 0.5 = 20 N.m."
  },
  {
    id: 31,
    displayId: "33, 34",
    group: "Group 4: Answer the following problems",
    question: "A metallic ring is placed in a uniform magnetic field perpendicular to the plane of the ring. If the magnetic flux changes from 0.05 Wb to – 0.05 in 0.05 s. Calculate the average induced EMF in the loop",
    options: ["1 V", "2 V", "4 V", "0 V"],
    correctAnswer: 1,
    explanation: "emf = -N(ΔΦ/Δt). N=1. ΔΦ = -0.05 - 0.05 = -0.1 Wb. emf = -1 * (-0.1 / 0.05) = 2 V."
  },
  {
    id: 32,
    displayId: "35, 36",
    group: "Group 4: Answer the following problems",
    question: "A metal has a work function 3.85 × 10⁻¹⁹ J. Calculate the maximum kinetic energy of electrons emitted from the metal when light of frequency 7.5 × 10¹⁴ Hz is shone on the surface (Given that Planck’s constant (h) = 6.6 × 10⁻³⁴ J.s)",
    options: ["1.1 × 10⁻¹⁹ J", "4.95 × 10⁻¹⁹ J", "8.8 × 10⁻¹⁹ J", "0.5 × 10⁻¹⁹ J"],
    correctAnswer: 0,
    explanation: "E_photon = hf = 6.6e-34 * 7.5e14 = 4.95e-19 J. K.E._max = E_photon - Ew = 4.95e-19 - 3.85e-19 = 1.1e-19 J."
  },
  {
    id: 33,
    displayId: "37, 38",
    group: "Group 4: Answer the following problems",
    question: "The current gain (β) of a transistor in common emitter mode is 50. Calculate the collector current if the base current 50μ A",
    options: ["2500 μA (2.5 mA)", "100 μA", "50 μA", "1 mA"],
    correctAnswer: 0,
    explanation: "β = Ic / Ib. Ic = β × Ib = 50 × 50μA = 2500 μA = 2.5 mA."
  },

  // Group 5: Factors
  {
    id: 34,
    displayId: "39",
    group: "Group 5: Mention one factor only that affects each of the following",
    question: "The density of magnetic field at a point along the axis of solenoid carrying current.",
    options: ["Permeability (μ)", "Resistance of wire", "Length of solenoid", "Radius of wire"],
    correctAnswer: 0,
    explanation: "B = μ₀nI. Permeability or the core material is a primary factor."
  },
  {
    id: 40,
    displayId: "40",
    group: "Group 5: Mention one factor only that affects each of the following",
    question: "The magnetic torque acting on a rectangular coil carrying current placed parallel in a magnetic field",
    options: ["Magnetic flux density B", "Coil mass", "Temperature", "Atmospheric pressure"],
    correctAnswer: 0,
    explanation: "τ = BIAN. The flux density B directly affects torque."
  },
  {
    id: 41,
    displayId: "41",
    group: "Group 5: Mention one factor only that affects each of the following",
    question: "The mutual induction coefficient between two coils",
    options: ["Distance between coils", "Current strength", "Resistance", "Shape of source"],
    correctAnswer: 0,
    explanation: "The relative position and distance between coils are key factors for mutual induction."
  },
  {
    id: 42,
    displayId: "42",
    group: "Group 5: Mention one factor only that affects each of the following",
    question: "The induced emf in a straight wire moving normal to a magnetic field",
    options: ["Wire velocity (v)", "Wire resistance", "Wire weight", "Screen brightness"],
    correctAnswer: 0,
    explanation: "emf = BLv. Velocity is a major factor."
  },
  {
    id: 43,
    displayId: "43",
    group: "Group 5: Mention one factor only that affects each of the following",
    question: "The velocity of electron emitted from the cathode in cathode ray tube",
    options: ["Potential difference between cathode and anode", "Filament current", "External lighting", "Screen size"],
    correctAnswer: 0,
    explanation: "Higher potential difference (Voltage) results in higher kinetic energy and velocity."
  },
  {
    id: 44,
    displayId: "44",
    group: "Group 5: Mention one factor only that affects each of the following",
    question: "The minimum wavelength in the continuous radiation of X-rays",
    options: ["Potential difference (V)", "Target atomic number (Z)", "Target mass", "Filament life"],
    correctAnswer: 0,
    explanation: "λ_min = hc/eV. It depends only on the accelerating potential difference."
  },

  // Group 6: Comparisons
  {
    id: 45,
    displayId: "45, 46",
    group: "Group 6: Compare between each of the following",
    question: "Compare NOR vs NAND gate: Complete the truth table where Input A=1, B=1. What is the output for each?",
    options: ["NOR: 0, NAND: 0", "NOR: 1, NAND: 0", "NOR: 0, NAND: 1", "NOR: 1, NAND: 1"],
    correctAnswer: 0,
    explanation: "For (1,1): 1 OR 1 is 1, so NOR is 0. 1 AND 1 is 1, so NAND is 0."
  },
  {
    id: 46,
    displayId: "47, 48",
    group: "Group 6: Compare between each of the following",
    question: "Compare Direct current (DC) vs Alternating current (AC) regarding Direction:",
    options: ["DC: Constant, AC: Periodic variable", "Both constant", "DC: Variable, AC: Constant", "Both zero"],
    correctAnswer: 0,
    explanation: "DC has a single direction; AC periodically reverses direction."
  },
  {
    id: 47,
    displayId: "49, 50",
    group: "Group 6: Compare between each of the following",
    question: "Compare Lenz’s rule vs The right Cork Screw rule regarding their use:",
    options: ["Lenz: Induced current direction, Cork Screw: Magnetic field lines direction", "Both for field", "Lenz: Intensity, Cork Screw: Voltage", "Lenz: Torque, Cork Screw: Flux"],
    correctAnswer: 0,
    explanation: "Lenz's rule is for the direction of induced current; Right Cork Screw is for magnetic field lines."
  }
];
