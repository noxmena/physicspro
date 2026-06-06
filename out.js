(() => {
  // src/data/questionBankNew.ts
  var moreQuestions = [
    // Group 1 :Write the scientific term:
    { id: "new_1", unit: 2, unitTitle: "Unit 2: Electromagnetic Induction", type: "term", typeLabel: "Scientific Term", question: "The total number of magnetic flux lines passing through a surface and measured in weber.", correctAnswer: "magnetic flux", modelAnswer: "Magnetic flux" },
    { id: "new_2", unit: 1, unitTitle: "Unit 1: Magnetic Effect of Electric Current", type: "term", typeLabel: "Scientific Term", question: "The point at which the total magnetic flux density vanishes.", correctAnswer: "neutral point", modelAnswer: "Neutral point" },
    { id: "new_3", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Scientific Term", question: "It is the ability of medium to penetrate the magnetic flux lines.", correctAnswer: "magnetic permeability", modelAnswer: "Magnetic permeability" },
    { id: "new_4", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Scientific Term", question: "It is the magnetic flux density which exerts a force of 1 N on a wire of 1m length carrying a current of intensity 1A placed perpendicularly to the magnetic field.", correctAnswer: "tesla", modelAnswer: "Tesla (Magnetic flux density)" },
    { id: "new_5", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Scientific Term", question: "The magnetic force exerts on a wire of 1m length carrying a current of intensity 1 A and placed perpendicularly to the magnetic field.", correctAnswer: "magnetic flux density", modelAnswer: "Magnetic flux density (Tesla definition)" },
    { id: "new_6", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Scientific Term", question: "The magnetic torque acting on a coil carrying current placed parallel to a uniform magnetic field of flux density of 1 Tesla.", correctAnswer: "magnetic dipole moment", modelAnswer: "Magnetic dipole moment" },
    { id: "new_7", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Scientific Term", question: "The induced current must be in a direction such as to oppose the change producing it.", correctAnswer: "lenz's law", modelAnswer: "Lenz's law" },
    { id: "new_8", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Scientific Term", question: "The phenomenon of inducing emf in a coil due to change in current in the same coil and hence the change in magnetic flux in the coil.", correctAnswer: "self induction", modelAnswer: "Self induction" },
    { id: "new_9", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Scientific Term", question: "They are induced currents that circulate in closed paths due to the change in magnetic flux through a solid conductor associating with heating effect.", correctAnswer: "eddy currents", modelAnswer: "Eddy currents" },
    { id: "new_10", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Scientific Term", question: "The ratio of output electric power to the input electric power.", correctAnswer: "transformer efficiency", modelAnswer: "Transformer efficiency" },
    { id: "new_11", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "Electromagnetic rays of shortest wavelength lie between ultraviolet and Gamma rays in the invisible range.", correctAnswer: "x-rays", modelAnswer: "X-rays" },
    { id: "new_12", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "The law which states that the wavelength (\u03BBm) at maximum radiation intensity is inversely proportional to temperature on kelvin scale.", correctAnswer: "wien's law", modelAnswer: "Wien's law" },
    { id: "new_13", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "They are invisible electromagnetic waves of short wavelengths, located between gamma rays and UV rays.", correctAnswer: "x-rays", modelAnswer: "X-rays" },
    { id: "new_14", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "It is an ideal system that absorbs all radiation falling on it. Then re-emit this radiation totally again.", correctAnswer: "black body", modelAnswer: "Black body" },
    { id: "new_15", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "It is the attractive force between the positive ions and free electrons in metal which make the electrons cannot leave it.", correctAnswer: "surface work barrier", modelAnswer: "Surface work barrier" },
    { id: "new_16", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "It is the minimum energy needed to free (release) an electron from the surface of the metal.", correctAnswer: "work function", modelAnswer: "Work function" },
    { id: "new_17", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "An external photon of energy E2 - E1 passes by excited atom at E2 to relax it to E1 before life time is over.", correctAnswer: "stimulated emission", modelAnswer: "Stimulated emission" },
    { id: "new_18", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "The emission of electron due to falling light on a metal surface.", correctAnswer: "photoelectric emission", modelAnswer: "Photoelectric emission" },
    { id: "new_19", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "The component in a CRT that emits electrons by heating the cathode.", correctAnswer: "electron gun", modelAnswer: "Electron gun (or Filament)" },
    { id: "new_20", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "Small packets of quantized energy emitted as radiation.", correctAnswer: "photons", modelAnswer: "Photons (Quanta)" },
    { id: "new_21", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "The ratio between the energy of photon and its frequency.", correctAnswer: "planck's constant", modelAnswer: "Planck's constant" },
    { id: "new_22", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Scientific Term", question: "Light Amplification by Stimulated Emission of Radiation.", correctAnswer: "laser", modelAnswer: "LASER" },
    { id: "new_23", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Scientific Term", question: "The number of bonds broken per second will be equal to the number of bonds mended per second.", correctAnswer: "dynamic thermal equilibrium", modelAnswer: "Dynamic thermal equilibrium" },
    { id: "new_24", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Scientific Term", question: "The ratio between the collector current and the base current.", correctAnswer: "current gain", modelAnswer: "Current gain (Beta)" },
    { id: "new_25", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Scientific Term", question: "The circuits that perform logic operations and depend on digital electronics.", correctAnswer: "logic gates", modelAnswer: "Logic gates" },
    // Group 2: Choose the correct answer
    { id: "new_26", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "A square of area of cross section 10^-2 m2 is placed with its axis perpendicular to a uniform magnetic field of flux density 1 T. Then the total magnetic flux through the coil is:", options: ["10^-2 Wb", "5 * 10^-3 Wb", "5\u221A3 * 10^-3 Wb", "5 * 10^-2 Wb"], correctAnswer: "10^-2 Wb", modelAnswer: "10^-2 Wb", detailedSolution: "When the axis is perpendicular to the field, the plane of the coil is parallel. Wait! 'axis perpendicular to field' implies plane is parallel to field -> flux = 0? Or if 'axis' means normal to plane, then flux = B*A = 1 * 10^-2 = 10^-2 Wb." },
    { id: "new_27", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "When the density of magnetic field in a given area is increased to its double value. The magnetic flux through this area would be:", options: ["unchanged", "doubled", "increased four times", "increased eight times"], correctAnswer: "doubled", modelAnswer: "doubled", detailedSolution: "Magnetic flux \u03A6 = B * A. If B is doubled, \u03A6 is doubled." },
    { id: "new_29", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "A solenoid is connected to a battery in a closed circuit, if its turns are compressed regularly. The magnetic flux density at a point on its axis inside it will:", options: ["increase.", "decrease.", "remain the same.", "Vanish."], correctAnswer: "increase.", modelAnswer: "increase.", detailedSolution: "B = (\u03BCNI)/L. Compressing turns decreases L. So B increases." },
    { id: "new_30", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "A solenoid is connected to a battery in a closed circuit, if its turns are away regularly. The magnetic flux density at a point on its axis inside it will:", options: ["increase", "decrease", "remain the same", "vanish"], correctAnswer: "decrease", modelAnswer: "decrease", detailedSolution: "Moving turns away increases length L. B is inversely proportional to L, so B decreases." },
    { id: "new_32", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "The magnetic force acting on a wire carrying an electric current and placed in a magnetic field vanishes when the wire is:", options: ["Perpendicular to the field.", "parallel to the field.", "Making angle 60 with the field.", "Making angle 30 with the field."], correctAnswer: "parallel to the field.", modelAnswer: "parallel to the field.", detailedSolution: "Force F = BIL sin(\u03B8). If it's parallel, \u03B8 = 0 or 180, so sin(\u03B8) = 0 and F = 0." },
    { id: "new_33", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "The torque acting on a coil carrying current in a uniform magnetic field becomes zero when the plane of the coil is:", options: ["perpendicular.", "parallel.", "inclined by an angle 30\xB0.", "inclined by an angle 60\xB0."], correctAnswer: "perpendicular.", modelAnswer: "perpendicular.", detailedSolution: "Torque = BIAN cos(\u03B8) where \u03B8 is angle of plane to field. If plane is perpendicular, torque is zero." },
    { id: "new_34", unit: 1, unitTitle: "Unit 1", type: "mcq", typeLabel: "Multiple Choice", question: "A length of straight conductor, carrying a current of 3A perpendicular to a magnetic field of 0.5 T, experiences a force of 1.5 N. What is the length of the conductor?", options: ["0.5 m", "1 m", "2 m", "4 m"], correctAnswer: "1 m", modelAnswer: "1 m", detailedSolution: "F = BIL -> L = F / (BI) = 1.5 / (0.5 * 3) = 1 m." },
    { id: "new_35", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "In Faraday's Experiment electro-magnetic induction, the induced emf in the coil increases when:", options: ["Speeding up the magnet motion relative to the coil.", "Increasing the spacing between the coil turns.", "Connecting a galvanometer to the coil.", "Keeping the magnet still inside the coil."], correctAnswer: "Speeding up the magnet motion relative to the coil.", modelAnswer: "Speeding up the magnet motion relative to the coil.", detailedSolution: "EMF depends on the rate of change of magnetic flux." },
    { id: "new_36", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "According to the Lenz's law,", options: ["The direction of the induced emf will be such that it helps the change in magnetic flux", "The direction of the induced current will be such that it opposes the change in magnetic flux.", "The magnitude of the induced electromotive force (emf) is directly proportional to the rate of change of flux.", "The direction of the induced electromotive force (emf ) will be along the direction of the magnetic field."], correctAnswer: "The direction of the induced current will be such that it opposes the change in magnetic flux.", modelAnswer: "The direction of the induced current will be such that it opposes the change in magnetic flux." },
    { id: "new_38", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "When the number of turns in the dynamo's coil is doubled at constant other factors then the maximum electromotive force generated from it:", options: ["Increases to the double.", "Decreases to half of its value.", "remains constant.", "Increases three times of its value."], correctAnswer: "Increases to the double.", modelAnswer: "Increases to the double.", detailedSolution: "Max EMF = NAB\u03C9. Doubling N doubles the EMF." },
    { id: "new_39", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "A straight wire 1m long is moving in a uniform magnetic field of flux density 0.1T at a uniform velocity 10m/s. an induced potential difference of 0.5V is generated between its terminals. The angle between the direction of the wire motion and the direction of the magnetic field is.", options: ["0\xB0", "30\xB0", "60\xB0", "90\xB0"], correctAnswer: "30\xB0", modelAnswer: "30\xB0", detailedSolution: "E = BLv sin(\u03B8) -> 0.5 = 0.1 * 1 * 10 * sin(\u03B8) -> 0.5 = 1 * sin(\u03B8) -> sin(\u03B8) = 0.5 -> \u03B8 = 30\xB0." },
    { id: "new_40", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "A coil which carries current I is wound on iron core. The self-induced electromotive force in the coil is not affected by:", options: ["Variation in coil current", "Variation in voltage to the coil", "Change of number of turns of coil", "The resistance of coil wire"], correctAnswer: "The resistance of coil wire", modelAnswer: "The resistance of coil wire", detailedSolution: "Self-inducted EMF depends on L and dI/dt. Resistance does not change L or the rate directly in the formula." },
    { id: "new_43", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "A simple AC generator is made by rotating a flat rectangular coil in a uniform magnetic field. The instantaneous value of emf produced when the coil is parallel to the magnetic field is (100 V). If the frequency of rotation is doubled, then the instantaneous value of emf produced at the same position is:", options: ["50V", "100V", "200V", "400V"], correctAnswer: "200V", modelAnswer: "200V", detailedSolution: "E_max = NAB\u03C9. If frequency gives 2\u03C9, E_max is doubled to 200V." },
    { id: "new_44", unit: 2, unitTitle: "Unit 2", type: "mcq", typeLabel: "Multiple Choice", question: "In an ideal step up transformer, which of the following statements is incorrect", options: ["The current ratio of secondary to primary is smaller than one.", "The turn's ratio of primary to secondary is smaller than one.", "The voltage ratio of primary to secondary is greater than one.", "The output-to-input electric power ratio is smaller than one"], correctAnswer: "The output-to-input electric power ratio is smaller than one", modelAnswer: "The output-to-input electric power ratio is smaller than one", detailedSolution: "In an ideal transformer, power ratio is exactly one. ('step up' -> Vs > Vp, so Vp/Vs < 1, so option C is also incorrect if it means Vp/Vs, but if it means it's >1, well, power ratio in ideal transformer is exactly one (100% efficient). So option D is incorrect because it is not smaller, it's 1, or option D says 'smaller than one' which is incorrect. Both C and D? Step up means Vs > Vp so Vp/Vs < 1. Option C says Vp/Vs > 1 which is incorrect. Actually, D is 'smaller than one' which is incorrect. Wait! For ideal transformer power ratio is 1, so D is incorrect. Actually, 'step up' means Vs > Vp, so voltage ratio primary to secondary Vp:Vs is smaller than one. Thus C is incorrect. But D is also incorrect. Both C & D... but usually power ratio is 1, so D is definitely incorrect as an ideal transformer." },
    { id: "new_46", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "A black body is heated to a temperature of 3000 K so the wavelength that is associating with its radiation of the maximum intensity was (\u03BB). If it is cooled to an absolute temperature (T) then the wavelength associating with its radiation of the maximum intensity became (10 \u03BB) so the temperature (T) is", options: ["300 K", "2700 K", "270 K", "1800 K"], correctAnswer: "300 K", modelAnswer: "300 K", detailedSolution: "Wien's law: \u03BB \u221D 1/T. If \u03BB becomes 10\u03BB, T becomes T/10. 3000 / 10 = 300 K." },
    { id: "new_47", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "The process in which electrons are emitted from a metallic surface when heat given to it is called:", options: ["Photoelectric effect.", "Thermionic emission.", "Compton effect.", "Black body radiation."], correctAnswer: "Thermionic emission.", modelAnswer: "Thermionic emission." },
    { id: "new_48", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "To increase the number of photoelectrons emitted per second when light falling on a metallic surface,", options: ["The frequency of incident photon increases.", "Kinetic energy of emitted electron increases.", "The wavelength of incident photon increases.", "The intensity of the radiation increases."], correctAnswer: "The intensity of the radiation increases.", modelAnswer: "The intensity of the radiation increases.", detailedSolution: "Number of emitted electrons (photoelectric current) is proportional to the intensity (number of photons) of the incident light, assuming frequency is above threshold." },
    { id: "new_49", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "Which of the following electromagnetic wave have the shortest wavelength:", options: ["Infrared.", "X-rays.", "Ultraviolet.", "Visible light."], correctAnswer: "X-rays.", modelAnswer: "X-rays." },
    { id: "new_50", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "The common feature of laser and (x) rays photons are that they:", options: ["are coherent", "are monochromatic", "have the same speed", "have the same energy"], correctAnswer: "have the same speed", modelAnswer: "have the same speed", detailedSolution: "Both are electromagnetic waves, so they travel at the speed of light in vacuum." },
    { id: "new_51", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "Laser beam production is based on the principle of:", options: ["Induced absorption.", "Spontaneous emission.", "Ionization.", "Stimulated emission."], correctAnswer: "Stimulated emission.", modelAnswer: "Stimulated emission." },
    { id: "new_52", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "Using x-rays in studying the crystalline structure of materials because it", options: ["Faster than light.", "Invisible.", "Diffract through atoms.", "ionizing radiation."], correctAnswer: "Diffract through atoms.", modelAnswer: "Diffract through atoms.", detailedSolution: "X-rays have wavelengths comparable to atomic spacing, so they diffract." },
    { id: "new_53", unit: 4, unitTitle: "Unit 4", type: "mcq", typeLabel: "Multiple Choice", question: "Which of the following statements is correct when connecting the diode in reverse direction?", options: ["The width of depletion layer increases and diode resistance decreases.", "The width of depletion layer decreases and diode resistance decreases.", "Neither the width of depletion layer nor the diode resistance changes.", "The width of depletion layer increases and the diode resistance increases."], correctAnswer: "The width of depletion layer increases and the diode resistance increases.", modelAnswer: "The width of depletion layer increases and the diode resistance increases." },
    { id: "new_54", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "All of the following are from the properties of photons Except:", options: ["They travel in straight line with constant speed equals the speed of light.", "They have linear momentum(PL).", "They can be deflected under the effect of electric and magnetic fields.", "They travel in space in the form discrete packets of energy (quanta)."], correctAnswer: "They can be deflected under the effect of electric and magnetic fields.", modelAnswer: "They can be deflected under the effect of electric and magnetic fields.", detailedSolution: "Photons have no charge, so they are not deflected by electric or magnetic fields." },
    { id: "new_55", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "A monochromatic light falls on a metallic surface, the electrons with kinetic energy are emitted when:", options: ["the frequency of incident photon decreases.", "the energy of the incident photon is greater than the work function of the metal.", "the energy of the incident photon is less than the work function of the metal.", "the energy of the incident photon equal to the work function of the metal."], correctAnswer: "the energy of the incident photon is greater than the work function of the metal.", modelAnswer: "the energy of the incident photon is greater than the work function of the metal." },
    { id: "new_56", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "In Compton effect, when a photon of X-rays collides with a free electron initially at rest, the photon energy after collision:", options: ["Increases", "decreases", "remain the same", "vanishes"], correctAnswer: "decreases", modelAnswer: "decreases" },
    { id: "new_57", unit: 3, unitTitle: "Unit 3", type: "mcq", typeLabel: "Multiple Choice", question: "When emitted photons propagate having the same phase, it is said that they are:", options: ["Spreading", "collimated", "monochromatic", "coherent"], correctAnswer: "coherent", modelAnswer: "coherent" },
    { id: "new_58", unit: 4, unitTitle: "Unit 4", type: "mcq", typeLabel: "Multiple Choice", question: "When the temperature of pure silicon crystal (Si) rises, so its electrical Conductivity:", options: ["decreases", "does not change", "increases", "vanishes"], correctAnswer: "increases", modelAnswer: "increases", detailedSolution: "Heating breaks more covalent bonds, generating more electron-hole pairs." },
    { id: "new_59", unit: 4, unitTitle: "Unit 4", type: "mcq", typeLabel: "Multiple Choice", question: "Doping a semiconductor with impurities of atoms creates an n-type material.", options: ["trivalent", "tetravalent", "pentavalent", "divalent"], correctAnswer: "pentavalent", modelAnswer: "pentavalent" },
    { id: "new_60", unit: 4, unitTitle: "Unit 4", type: "mcq", typeLabel: "Multiple Choice", question: "When connecting the p-n Junction (diode) in reverse biasing, then the width of depletion layer:", options: ["increases", "decreases", "does not change", "becomes zero"], correctAnswer: "increases", modelAnswer: "increases" },
    { id: "new_61", unit: 4, unitTitle: "Unit 4", type: "mcq", typeLabel: "Multiple Choice", question: "Which of the following gates that if both inputs are low the output is high?", options: ["OR gate", "AND gate", "NAND gate", "NOT gate"], correctAnswer: "NAND gate", modelAnswer: "NAND gate", detailedSolution: "NOR and NAND both give high output when inputs are low. From the options, NAND is (0 AND 0)' = 0' = 1." }
  ];

  // src/data/questionBankNew2.ts
  var moreQuestions2 = [
    // Group 3: Correct the underlined
    { id: "new_62", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The maximum value of magnetic flux cutting a certain area when the magnetic flux lines is [parallel to] that area.", correctAnswer: "perpendicular to", modelAnswer: "perpendicular to" },
    { id: "new_63", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: Magnetic flux the total number of magnetic flux lines passing through [a unit] area.", correctAnswer: "a certain", modelAnswer: "a certain" },
    { id: "new_64", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The magnetic flux density at center of a circular coil carrying a current decreases by [decreasing] the cross sectional area of the coil.", correctAnswer: "increasing", modelAnswer: "increasing" },
    { id: "new_65", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The magnetic dipole moment |md| is given by the following relation [|md| = IANsin\u03B8]", correctAnswer: "|md| = IAN", modelAnswer: "|md| = IAN" },
    { id: "new_66", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: Existence of a [repulsive] force between parallel wires of copper each carrying current in same direction.", correctAnswer: "attractive", modelAnswer: "attractive" },
    { id: "new_67", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The maximum value of magnetic flux cutting a certain area when the magnetic flux lines is [parallel to] that area.", correctAnswer: "perpendicular to", modelAnswer: "perpendicular to" },
    { id: "new_68", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The induced electromotive force (emf) generated in a coil increases to [double] if the rate of change of current in the same coil increases 4 times.", correctAnswer: "four times", modelAnswer: "four times" },
    { id: "new_69", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: Maximum induced emf in a straight wire moving [parallel] to a magnetic field.", correctAnswer: "perpendicular", modelAnswer: "perpendicular" },
    { id: "new_70", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The mutual induction coefficient measured in [Ampere/second].", correctAnswer: "henry", modelAnswer: "Henry" },
    { id: "new_71", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The electromotive force induced in a rectangular coil rotating in a magnetic field becomes zero when the coils' plane is [parallel to] magnetic field.", correctAnswer: "perpendicular to", modelAnswer: "perpendicular to" },
    { id: "new_72", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The coefficient of mutual inductance between two coils [increases] as the rate of change of current in the primary coil decreases.", correctAnswer: "does not change", modelAnswer: "does not change (it depends on physical properties like geometry and permeability)" },
    { id: "new_73", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The ac generator is a device based on the principle of [magnetic torque].", correctAnswer: "electromagnetic induction", modelAnswer: "electromagnetic induction" },
    { id: "new_74", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: A laminated iron core is used in an electric transformer to [increase] eddy currents.", correctAnswer: "decrease", modelAnswer: "decrease (or reduce)" },
    { id: "new_75", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: Emission of photoelectron with kinetic energy from metal occurs when the energy of incident radiation [smaller] than the work function of the metal.", correctAnswer: "greater", modelAnswer: "greater" },
    { id: "new_76", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: Function of [Grid] in cathode ray tube (CRT) is heating up the cathode.", correctAnswer: "filament", modelAnswer: "filament" },
    { id: "new_77", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: [The anode] in a CRT controls the number of electrons in the beam.", correctAnswer: "the grid", modelAnswer: "The grid" },
    { id: "new_78", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The [photoelectric effect] is responsible for the working of a cathode ray tube.", correctAnswer: "thermionic emission", modelAnswer: "thermionic emission" },
    { id: "new_79", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The minimum wavelength of the continuous radiation decreases when the potential difference between the cathode and the anode [decreases].", correctAnswer: "increases", modelAnswer: "increases" },
    { id: "new_80", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: Stimulated emission is dominant in [ordinary light] sources.", correctAnswer: "laser", modelAnswer: "laser" },
    { id: "new_81", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The wavelength of the scattered photon (\u03BB scattered) is [smaller than] the wavelength of the incident photon (\u03BB incident).", correctAnswer: "greater than", modelAnswer: "greater than" },
    { id: "new_82", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The wavelength of the characteristic radiation of X- rays [increases] as the atomic number of target material increases.", correctAnswer: "decreases", modelAnswer: "decreases" },
    { id: "new_83", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The ordinary light is [not subject] to the inverse square law.", correctAnswer: "subject", modelAnswer: "subject" },
    { id: "new_84", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: [Decrease] the temperature is one of the methods to increases the electric conductivity of semiconductors.", correctAnswer: "increase", modelAnswer: "Increase" },
    { id: "new_85", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: In the [reverse] connection the diode should have a small resistance hence a large current will flow through the diode.", correctAnswer: "forward", modelAnswer: "forward" },
    { id: "new_86", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Correct Statement", question: "Correct the underlined: The emitter current is [smaller than] the sum of the collector current and the base current.", correctAnswer: "equal to", modelAnswer: "equal to" },
    // Group 4: Answer the following (Selected Problems)
    { id: "new_87", unit: 1, unitTitle: "Unit 1", type: "problem", typeLabel: "Numerical Problem", question: "An electric current of intensity 10 A is flowing in a long straight wire. Calculate the density of magnetic field at a distance 0.1m from the wire (Permeability of air = 4\u03C0 x 10^-7 Wb /A .m)", correctAnswer: "2e-5", modelAnswer: "2 \xD7 10^-5 T", detailedSolution: "B = (\u03BC I) / (2\u03C0 d) = (4\u03C0 \xD7 10^-7 \xD7 10) / (2\u03C0 \xD7 0.1) = (2 \xD7 10^-6) / 0.1 = 2 \xD7 10^-5 T" },
    { id: "new_88", unit: 1, unitTitle: "Unit 1", type: "problem", typeLabel: "Numerical Problem", question: "Calculate the intensity of electric current which passes through a circular coil of diameter 22 cm, 49 turns and produces a magnetic flux density in its center equal to 7 \xD7 10^-7 T.", correctAnswer: "0.0025", modelAnswer: "0.0025 A", detailedSolution: "B = (\u03BC N I) / (2r) -> I = (B \xD7 2r) / (\u03BC N) \nr = 11 cm = 0.11 m\nI = (7 \xD7 10^-7 \xD7 2 \xD7 0.11) / (4\u03C0 \xD7 10^-7 \xD7 49) = (1.54 \xD7 10^-7) / (615.75 \xD7 10^-7) \u2248 0.0025 A" },
    { id: "new_91", unit: 2, unitTitle: "Unit 2", type: "problem", typeLabel: "Numerical Problem", question: "When the current in a coil changes from 5A to 2A in 0.05 s, an e m f of 15 V is induced in the coil. Calculate the coefficient of self-induction of the coil.", correctAnswer: "0.25", modelAnswer: "0.25 H", detailedSolution: "emf = - L (\u0394I/\u0394t)\n15 = - L ((2 - 5) / 0.05)\n15 = - L (-3 / 0.05)\n15 = L \xD7 60\nL = 15 / 60 = 0.25 H" },
    { id: "new_92", unit: 2, unitTitle: "Unit 2", type: "problem", typeLabel: "Numerical Problem", question: "A metallic ring is placed in a uniform magnetic field perpendicular to the plane of the ring. If the magnetic flux changes from 0.05 Wb to - 0.05 Wb in 0.05 s. Calculate the average induced EMF in the loop.", correctAnswer: "2", modelAnswer: "2 V", detailedSolution: "emf = - N (\u0394\u03A6/\u0394t)\n\u0394\u03A6 = -0.05 - 0.05 = -0.1 Wb\nemf = - (1) \xD7 (-0.1) / 0.05 = 2 V" },
    // Group 7: Put sign √ or X
    { id: "new_125", unit: 1, unitTitle: "Unit 1", type: "true-false", typeLabel: "True/False", question: "The magnetic dipole moment doesn't depend on the electric current intensity.", correctAnswer: false, modelAnswer: "False", detailedSolution: "Magnetic dipole moment md = IAN, so it is directly proportional to current intensity." },
    { id: "new_126", unit: 2, unitTitle: "Unit 2", type: "true-false", typeLabel: "True/False", question: "When the magnet is moved away from the solenoid, magnetic flux link with the coil increases, the coil's near end forms like pole which tends to repel it.", correctAnswer: false, modelAnswer: "False", detailedSolution: "Moving it away decreases flux. By Lenz's law, a pole is formed to attract (opposite pole) not repel." },
    { id: "new_127", unit: 3, unitTitle: "Unit 3", type: "true-false", typeLabel: "True/False", question: "The maximum frequency of the continuous radiation of X-rays does not depend on the potential difference between the cathode and anode.", correctAnswer: false, modelAnswer: "False", detailedSolution: "The maximum frequency is directly proportional to the potential difference (E = h\u03BD = eV)." },
    { id: "new_128", unit: 3, unitTitle: "Unit 3", type: "true-false", typeLabel: "True/False", question: "At low temperatures, the wavelengths of the thermal radiation are mainly in the infrared region.", correctAnswer: true, modelAnswer: "True", detailedSolution: "According to Wien's displacement law." },
    { id: "new_129", unit: 3, unitTitle: "Unit 3", type: "true-false", typeLabel: "True/False", question: "In Compton Effect the frequency of the scattered photon is greater than the frequency of the incident photon.", correctAnswer: false, modelAnswer: "False", detailedSolution: "The scattered photon loses energy, so its frequency is smaller than the incident photon." },
    { id: "new_130", unit: 3, unitTitle: "Unit 3", type: "true-false", typeLabel: "True/False", question: "In the Compton effect the speed of incident photon equal to speed of scattered photon.", correctAnswer: true, modelAnswer: "True", detailedSolution: "Both are photons travels at the speed of light." },
    { id: "new_131", unit: 3, unitTitle: "Unit 3", type: "true-false", typeLabel: "True/False", question: "Spontaneous emission occurs after life time finished. And produce one photon.", correctAnswer: true, modelAnswer: "True" },
    { id: "new_132", unit: 4, unitTitle: "Unit 4", type: "true-false", typeLabel: "True/False", question: "The resistance of PN junction obeys Ohm's law.", correctAnswer: false, modelAnswer: "False", detailedSolution: "It is a non-ohmic device; its resistance changes depending on the applied voltage direction and magnitude." },
    { id: "new_133", unit: 4, unitTitle: "Unit 4", type: "true-false", typeLabel: "True/False", question: "In an NPN transistor, the emitter is doped with a higher concentration of impurities than the collector.", correctAnswer: true, modelAnswer: "True", detailedSolution: "The emitter is heavily doped to provide many charge carriers." }
  ];

  // src/data/questionBankNew3.ts
  var moreQuestions3 = [
    // Group 4: Answer the following (Remaining Problems)
    { id: "new_89", unit: 1, unitTitle: "Unit 1", type: "problem", typeLabel: "Numerical Problem", question: "A loop of cross-sectional area 0.1 m\xB2 and 100 turns, carries a current of intensity 20 A is placed parallel to a uniform magnetic field of flux density 0.5 T. Calculate the torque acting on the loop.", correctAnswer: "100", modelAnswer: "100 N.m", detailedSolution: "Torque = B I A N cos(\u03B8). Since the loop is parallel to the field, the angle to the field is 0, so angle to normal is 90, meaning max torque. Torque = 0.5 \xD7 20 \xD7 0.1 \xD7 100 = 100 N.m." },
    { id: "new_90", unit: 1, unitTitle: "Unit 1", type: "problem", typeLabel: "Numerical Problem", question: "A rectangular coil of 500 turns has dimensions 0.2m \xD7 0.1 m, carries a current 5A. The plane of the coil makes angle 60\xB0 to a uniform magnetic field of flux density 0.8 T. Calculate the magnetic torque acting on the coil.", correctAnswer: "20", modelAnswer: "20 N.m", detailedSolution: "Area A = 0.2 \xD7 0.1 = 0.02 m\xB2. Torque = B I A N cos(\u03B8). The angle between the plane and the field is 60\xB0, so cos(60) = 0.5. Torque = 0.8 \xD7 5 \xD7 0.02 \xD7 500 \xD7 0.5 = 20 N.m." },
    { id: "new_93", unit: 2, unitTitle: "Unit 2", type: "problem", typeLabel: "Numerical Problem", question: "An electric current of intensity 5 A flowing through a coil of self-inductance 0.001 H. If the current vanishes in 0.5 second, calculate The induced electromotive force (emf) generated in the coil.", correctAnswer: "0.01", modelAnswer: "0.01 V", detailedSolution: "emf = - L (\u0394I/\u0394t) = - 0.001 \xD7 ((0 - 5) / 0.5) = 0.001 \xD7 (5 / 0.5) = 0.001 \xD7 10 = 0.01 V." },
    { id: "new_94", unit: 2, unitTitle: "Unit 2", type: "problem", typeLabel: "Numerical Problem", question: "In an ideal transformer, the secondary coil has twice as many turns as the primary. If the alternating current in the primary coil is 2 A. Calculate the current in the secondary coil.", correctAnswer: "1", modelAnswer: "1 A", detailedSolution: "Is / Ip = Np / Ns. Since Ns = 2 \xD7 Np, Is / 2 A = Np / 2Np = 1/2. Is = 1 A." },
    { id: "new_95", unit: 2, unitTitle: "Unit 2", type: "problem", typeLabel: "Numerical Problem", question: "An ideal step-down transformer is used to operate an electric lamp, which works on a potential difference of 30 volts. If an electric source of 240 volts is used & the number of turns of the primary coil is 480 turns, calculate the number of turns of the secondary coils.", correctAnswer: "60", modelAnswer: "60 turns", detailedSolution: "Vs / Vp = Ns / Np. 30 / 240 = Ns / 480. 1/8 = Ns / 480. Ns = 480 / 8 = 60 turns." },
    { id: "new_96", unit: 3, unitTitle: "Unit 3", type: "problem", typeLabel: "Numerical Problem", question: "A metal has a work function 3.85 \xD7 10\u207B\xB9\u2079 J. Calculate the maximum kinetic energy of electrons emitted from the metal when light of frequency 7.5 \xD7 10\xB9\u2074 Hz is shone on the surface (Given that Planck's constant (h) = 6.6 \xD7 10\u207B\xB3\u2074 J.s)", correctAnswer: "1.1e-19", modelAnswer: "1.1 \xD7 10\u207B\xB9\u2079 J", detailedSolution: "Energy of incident photon E = h\u03BD = 6.6 \xD7 10\u207B\xB3\u2074 \xD7 7.5 \xD7 10\xB9\u2074 = 4.95 \xD7 10\u207B\xB9\u2079 J. Max Kinetic Energy = E - work function = 4.95 \xD7 10\u207B\xB9\u2079 - 3.85 \xD7 10\u207B\xB9\u2079 = 1.1 \xD7 10\u207B\xB9\u2079 J." },
    { id: "new_97", unit: 3, unitTitle: "Unit 3", type: "problem", typeLabel: "Numerical Problem", question: "A photon of wavelength 5.6 \xD7 10\u207B\u2077 m falls on a metallic surface of work function 3.42 \xD7 10\u207B\xB9\u2079 J, calculate the kinetic energy of emitted electron from the metallic surface. (Planck's constant = 6.625 \xD7 10\u207B\xB3\u2074 J.s, speed of light in air = 3 \xD7 10\u2078 m/s)", correctAnswer: "1.29e-20", modelAnswer: "0.129 \xD7 10\u207B\xB9\u2079 J (or 1.29 \xD7 10\u207B\xB2\u2070 J)", detailedSolution: "E = hc/\u03BB = (6.625 \xD7 10\u207B\xB3\u2074 \xD7 3 \xD7 10\u2078) / 5.6 \xD7 10\u207B\u2077 = 3.549 \xD7 10\u207B\xB9\u2079 J. KE = E - Ew = 3.549 \xD7 10\u207B\xB9\u2079 - 3.42 \xD7 10\u207B\xB9\u2079 = 0.129 \xD7 10\u207B\xB9\u2079 J." },
    { id: "new_98", unit: 4, unitTitle: "Unit 4", type: "problem", typeLabel: "Numerical Problem", question: "The current gain (\u03B2) of a transistor in common emitter mode is 50. Calculate the collector current if the base current is 50\u03BCA.", correctAnswer: "2.5", modelAnswer: "2.5 mA", detailedSolution: "Ic = \u03B2 \xD7 Ib = 50 \xD7 50 \xB5A = 2500 \u03BCA = 2.5 mA." },
    { id: "new_99", unit: 4, unitTitle: "Unit 4", type: "problem", typeLabel: "Numerical Problem", question: "An npn transistor is used as a current amplifier, if the base current equals 1 mA and the current gain (\u03B2e) is 200 calculate the collector current (in mA).", correctAnswer: "200", modelAnswer: "200 mA", detailedSolution: "Ic = \u03B2 \xD7 Ib = 200 \xD7 1 mA = 200 mA." },
    // Group 5: Mention one factor
    { id: "new_100", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: Magnetic flux density due to a straight wire.", correctAnswer: "current intensity", modelAnswer: "Electric current intensity (I) or perpendicular distance from the wire (d)" },
    { id: "new_101", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The density of magnetic field at a point along the axis of a solenoid carrying current.", correctAnswer: "number of turns", modelAnswer: "Number of turns per unit length (n) or Current intensity (I) or Permeability of the core (\u03BC)" },
    { id: "new_102", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: Magnetic flux density Due to circular coil.", correctAnswer: "current intensity", modelAnswer: "Current intensity (I) or Radius of the coil (r) or Number of turns (N)" },
    { id: "new_103", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The magnetic force acting on a wire carrying current placed perpendicular to a uniform magnetic field.", correctAnswer: "magnetic flux density", modelAnswer: "Magnetic flux density (B) or Current intensity (I) or Length of wire (L)" },
    { id: "new_104", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The magnetic torque acting on a rectangular coil carrying current placed parallel in a magnetic field.", correctAnswer: "area", modelAnswer: "Magnetic flux density (B) or Current (I) or Area (A) or Number of turns (N)" },
    { id: "new_105", unit: 1, unitTitle: "Unit 1", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The magnetic dipole moment.", correctAnswer: "current intensity", modelAnswer: "Current intensity (I) or Area of the coil (A) or Number of turns (N)" },
    { id: "new_106", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The mutual induction coefficient between two coils.", correctAnswer: "number of turns", modelAnswer: "Number of turns of the coils or Volume/geometry of coils or Distance between coils or Core permeability" },
    { id: "new_107", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The self-inductance (coefficient of self-induction) of a coil.", correctAnswer: "number of turns", modelAnswer: "Number of turns or Cross-sectional area or Length of coil or Core permeability" },
    { id: "new_108", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The induced emf in a straight wire moving normal to a magnetic field.", correctAnswer: "velocity", modelAnswer: "Magnetic flux density (B) or Length of the wire (L) or Velocity (v)" },
    { id: "new_109", unit: 2, unitTitle: "Unit 2", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The instantaneous value of induced emf generated in the dynamo.", correctAnswer: "angular velocity", modelAnswer: "Magnetic flux density (B) or Area (A) or Number of turns (N) or Angular velocity (\u03C9) or Angle of rotation" },
    { id: "new_110", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The wave length at maximum radiation intensity in Planck's curve.", correctAnswer: "absolute temperature", modelAnswer: "The absolute temperature of the radiating body (Wien's displacement law)" },
    { id: "new_111", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The velocity of electron emitted from the cathode in a cathode ray tube.", correctAnswer: "potential difference", modelAnswer: "The potential difference between the anode and cathode" },
    { id: "new_112", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The minimum wavelength in the continuous radiation of X-rays.", correctAnswer: "potential difference", modelAnswer: "The potential difference applied across the X-ray tube" },
    { id: "new_113", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Mention one factor", question: "Mention one factor only that affects the following: The wavelength of the characteristic X- rays.", correctAnswer: "atomic number", modelAnswer: "The atomic number of the target material" },
    // Group 6: Compare
    { id: "new_114", unit: 4, unitTitle: "Unit 4", type: "compare", typeLabel: "Comparison", question: "Compare between NOR gate and NAND gate in terms of: Output when both Input A and Input B are 1.", correctAnswer: "0 and 0", modelAnswer: "NOR gate output: 0. NAND gate output: 0.", detailedSolution: "When both inputs are 1 (High): OR is 1, so NOR (inverse) is 0. AND is 1, so NAND (inverse) is 0." },
    { id: "new_115", unit: 1, unitTitle: "Unit 1", type: "compare", typeLabel: "Comparison", question: "Compare between Magnetic dipole moment and Magnetic permeability in terms of Measuring unit.", correctAnswer: "a.m2 and weber/a.m", modelAnswer: "Magnetic dipole moment: N.m/Tesla or Amp.m\xB2.\nMagnetic permeability: Wb/A.m or T.m/A or N/A\xB2.", detailedSolution: "From the physical quantities table: \n- Magnetic dipole moment = N.m/Tesla = Amp.m\xB2.\n- Permeability (\xB5) = Wb/A.m = T.m/A = N/A\xB2." },
    { id: "new_116", unit: 2, unitTitle: "Unit 2", type: "compare", typeLabel: "Comparison", question: "Compare between Direct current (DC) and Alternating current (AC) in terms of The direction.", correctAnswer: "dc constant ac periodic", modelAnswer: "DC: The current that flows in one direction only in a circuit.\nAC: The current which flows to and fro in two opposite directions in a circuit, changing direction and intensity periodically.", detailedSolution: "DC has constant intensity and constant direction. AC produces a variable magnetic field, has a frequency, and its direction changes periodically." },
    { id: "new_117", unit: 1, unitTitle: "Unit 1", type: "compare", typeLabel: "Comparison", question: "Compare between Lenz's rule and The right Cork Screw rule in terms of The use.", correctAnswer: "lenz induced current cork magnetic field", modelAnswer: "Lenz's law: It is used to determine the direction of induced current in the coil.\nRight hand screw rule: It is used to determine the direction of the magnetic field when passing an electric current in a conductor." },
    { id: "new_118", unit: 1, unitTitle: "Unit 1", type: "compare", typeLabel: "Comparison", question: "Compare between Fleming left hand rule and Ampere's right hand rule in terms of The use.", correctAnswer: "fleming magnetic force ampere magnetic field", modelAnswer: "Fleming's left hand rule: It is used to determine the direction of Magnetic force of a wire carrying current and placed normally to a magnetic field.\nAmpere's right hand rule: It is used to determine the direction of the magnetic field when passing an electric current in a conductor." },
    { id: "new_119", unit: 2, unitTitle: "Unit 2", type: "compare", typeLabel: "Comparison", question: "Compare between The electric generator and The electric motor in terms of The scientific base.", correctAnswer: "generator electromagnetic induction motor magnetic torque", modelAnswer: "Electric Generator (Dynamo): Electromagnetic induction.\nElectric Motor: Magnetic torque acting on a current-carrying coil in a magnetic field." },
    { id: "new_120", unit: 3, unitTitle: "Unit 3", type: "compare", typeLabel: "Comparison", question: "Compare between Cathode ray tube and Transformer in terms of The use.", correctAnswer: "cathode display images transformer change voltage", modelAnswer: "Cathode Ray Tube (CRT): Display screens of TV and computer.\nTransformer: Step up and step down voltage and it transfers electric power from one circuit to another." },
    { id: "new_121", unit: 3, unitTitle: "Unit 3", type: "compare", typeLabel: "Comparison", question: "Compare between The continuous spectrum and The line spectrum of X-rays in terms of dependence on voltage and target material.", correctAnswer: "continuous voltage line target material", modelAnswer: "Continuous X-ray Radiation: Depends on the potential difference (voltage) of the Coolidge tube.\nCharacteristic (Line) X-ray Radiation: Depends on the target material (atomic number)." },
    { id: "new_122", unit: 1, unitTitle: "Unit 1", type: "compare", typeLabel: "Comparison", question: "Compare between The magnetic flux density at the center of a circular loop and At a point on the axis of a solenoid in terms of The physical relation used (formula).", correctAnswer: "loop uin/2r solenoid uin/l", modelAnswer: "Circular loop: B = (\u03BC N I) / (2r)\nSolenoid: B = (\u03BC N I) / L" },
    { id: "new_123", unit: 3, unitTitle: "Unit 3", type: "compare", typeLabel: "Comparison", question: "Compare between Ordinary light and LASER in terms of Monochromaticity.", correctAnswer: "ordinary polychromatic laser monochromatic", modelAnswer: "Ordinary light: Large band in wavelengths (polychromatic).\nLASER: Limited bandwidth (highly monochromatic).", detailedSolution: "Ordinary light has a broad spectrum with varying frequencies, whereas LASER has a very specific and concentrated wavelength." },
    { id: "new_124", unit: 4, unitTitle: "Unit 4", type: "compare", typeLabel: "Comparison", question: "Compare between P-type semiconductor and N-type semiconductor in terms of Type of impurity.", correctAnswer: "p-type trivalent n-type pentavalent", modelAnswer: "P-type Crystal: Trivalent atoms (Ga, Al and B).\nN-type Crystal: Pentavalent atoms (As, P and Sb).", detailedSolution: "A pure semiconductor is doped with trivalent impurities to create holes (P-type), or pentavalent impurities to provide extra free electrons (N-type)." },
    // Group 7 (Remaining)
    { id: "new_134", unit: 4, unitTitle: "Unit 4", type: "true-false", typeLabel: "True/False", question: "In NPN transistor, the collector current is 10mA. If 90% of the electrons emitted reach the collector, then the emitter current will be 11.3 mA", correctAnswer: false, modelAnswer: "False", detailedSolution: "Collector current Ic = 0.9 \xD7 Ie. So Ie = Ic / 0.9 = 10 / 0.9 = 11.11 mA. So the statement's 11.3 mA is incorrect." },
    // Group 8
    { id: "new_135", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Mathematical Law", question: "Write the mathematical law used to calculate: Momentum of photon", correctAnswer: "h/lambda", modelAnswer: "p = h / \u03BB (or p = mc)" },
    { id: "new_136", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Mathematical Law", question: "Write the mathematical law used to calculate: Kinetic energy of emitted electron when light falling on a metallic surface.", correctAnswer: "ke = hf - ew", modelAnswer: "K.E. = E - Ew   (or K.E. = h\u03BD - h\u03BDc)" },
    { id: "new_137", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Give Reason", question: "Give a reason: At very low temperature, pure silicon crystal is an insulator.", correctAnswer: "absence of free moving electrons", modelAnswer: "Because at absolute zero (0 K), all the covalent bonds are completely intact and there are no free electrons or holes to conduct electricity." },
    { id: "new_138", unit: 4, unitTitle: "Unit 4", type: "term", typeLabel: "Give Reason", question: "Give a reason: The thickness of the base of the bipolar junction transistor must be very small.", correctAnswer: "minimize recombination", modelAnswer: "To minimize the recombination of electrons and holes in the base region, ensuring that almost all the charge carriers emitted by the emitter reach the collector." },
    { id: "new_139", unit: 3, unitTitle: "Unit 3", type: "term", typeLabel: "Give Reason", question: "Mention without explanation the two conditions necessary for laser action.", correctAnswer: "population inversion stimulated emission", modelAnswer: "1. Achieving Population Inversion. 2. Stimulated emission inside a resonant cavity." }
  ];

  // src/data/questionBank.ts
  var questionBank = [
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
      hint: "Symbolized by Greek letter Phi (\u03A6)."
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
      hint: "Usually symbolized by mu (\u03BC)."
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
      hint: "Given by \u03C4 = BIAN sin\u03B8."
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
      hint: "Symbolized by md, given by md = I\xB7A\xB7N."
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
            "Proposes Einstein-Planck relationship: photon energy is quantized as E = h\xB7\u03BD."
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
      question: "A straight wire carries a current of 5 A. Calculate the magnetic field density at a point 2 cm away from the wire (Assume permeability \u03BC\u2080 = 4\u03C0 \xD7 10\u207B\u2077 Wb/m.A).",
      correctAnswer: "5e-5",
      modelAnswer: "5 \xD7 10\u207B\u2075 Tesla",
      detailedSolution: "Using straight wire formula: B = (\u03BC\u2080\xB7I) / (2\u03C0\xB7d)\nGiven values: I = 5 A, d = 2 cm = 0.02 m\nB = (4\u03C0 \xD7 10\u207B\u2077 \xD7 5) / (2\u03C0 \xD7 0.02)\nB = (20\u03C0 \xD7 10\u207B\u2077) / (0.04\u03C0) = 500 \xD7 10\u207B\u2077 = 5 \xD7 10\u207B\u2075 T.",
      extraDetails: {
        formula: "B = (\u03BC\u2080 \xB7 I) / (2\u03C0 \xB7 d)",
        variables: [
          { name: "Current (I)", value: "5", displayUnit: "A" },
          { name: "Distance (d)", value: "0.02", displayUnit: "m" },
          { name: "\u03BC\u2080 Permeability", value: "4\u03C0 \xD7 10\u207B\u2077", displayUnit: "Wb/m.A" }
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
      modelAnswer: "1 N\xB7m",
      detailedSolution: "Using torque formula for a parallel coil (where \u03B8 = 90\xB0 for normal to surface): \u03C4 = B\xB7I\xB7A\xB7N\nDimensions: 10 cm \xD7 5 cm = 0.1 m \xD7 0.05 m = 0.005 m\xB2\nSubstituting values: \u03C4 = 0.5 T \xD7 2 A \xD7 0.005 m\xB2 \xD7 200 turns = 1 N\xB7m.",
      extraDetails: {
        formula: "\u03C4 = B \xB7 I \xB7 A \xB7 N",
        variables: [
          { name: "Field (B)", value: "0.5", displayUnit: "T" },
          { name: "Current (I)", value: "2", displayUnit: "A" },
          { name: "Area (A)", value: "0.005", displayUnit: "m\xB2" },
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
      question: "A circular coil of radius 5 cm has 100 turns and carries a current of 2 A. Calculate the magnetic field density at the center of the coil. (Assume \u03BC\u2080 = 4\u03C0 \xD7 10\u207B\u2077 Wb/m.A)",
      correctAnswer: "8e-4",
      modelAnswer: "8\u03C0 \xD7 10\u207B\u2074 Tesla",
      detailedSolution: "Step 1 (Formula): B = (N\xB7\u03BC\u2080\xB7I) / (2r)\nStep 2 (Given): N=100, I=2A, r=5cm=0.05m\nStep 3 (Substitute): B = (100 \xD7 4\u03C0 \xD7 10\u207B\u2077 \xD7 2) / (2 \xD7 0.05)\nStep 4: B = (800\u03C0 \xD7 10\u207B\u2077) / 0.1 = 8000\u03C0 \xD7 10\u207B\u2077\nStep 5: B = 8\u03C0 \xD7 10\u207B\u2074 T.",
      extraDetails: {
        formula: "B = (N \xB7 \u03BC\u2080 \xB7 I) / (2r)",
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
      question: "A solenoid is 20 cm long and has 500 turns. If the solenoid carries a current of 3 A, calculate the magnetic field density at a point on its interior axis. (Assume \u03BC\u2080 = 4\u03C0 \xD7 10\u207B\u2077 Wb/m.A)",
      correctAnswer: "3e-3",
      modelAnswer: "3\u03C0 \xD7 10\u207B\xB3 Tesla",
      detailedSolution: "Step 1 (Formula): B = (N\xB7\u03BC\u2080\xB7I) / L\nStep 2 (Given): N=500, I=3A, L=20cm=0.2m\nStep 3 (Substitute): B = (500 \xD7 4\u03C0 \xD7 10\u207B\u2077 \xD7 3) / 0.2\nStep 4: B = (6000\u03C0 \xD7 10\u207B\u2077) / 0.2 = 30000\u03C0 \xD7 10\u207B\u2077\nStep 5: B = 3\u03C0 \xD7 10\u207B\xB3 T.",
      extraDetails: {
        formula: "B = (N \xB7 \u03BC\u2080 \xB7 I) / L",
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
      detailedSolution: "Step 1 (Formula): F = I\xB7B\xB7L\xB7sin(\u03B8)\nStep 2: Perpendicular means sin(90\xB0) = 1.\nStep 3 (Given): I=4A, B=0.2T, L=0.5m\nStep 4 (Substitute): F = 4 \xD7 0.2 \xD7 0.5\nStep 5: F = 0.4 N.",
      extraDetails: {
        formula: "F = I \xB7 B \xB7 L",
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
      detailedSolution: "Using Faraday's Law: \u03B5 = -N \xB7 (\u0394\u03A6 / \u0394t)\nGiven: N = 500 turns\n\u0394\u03A6 = 0.8 - 0.2 = 0.6 Wb\n\u0394t = 0.1 s\nEMF = -500 * (0.6 / 0.1) = -500 * 6 = -3000 V\nMagnitude is 3000 Volts.",
      extraDetails: {
        formula: "\u03B5 = -N \xB7 (\u0394\u03A6 / \u0394t)",
        variables: [
          { name: "Turns (N)", value: "500", displayUnit: "" },
          { name: "Flux Change (\u0394\u03A6)", value: "0.6", displayUnit: "Wb" },
          { name: "Time Span (\u0394t)", value: "0.1", displayUnit: "s" }
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
        formula: "Vs = Vp \xB7 (Ns / Np)",
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
      detailedSolution: "Step 1 (Formula): \u03B5 = B\xB7l\xB7v\nStep 2 (Given): B = 0.5 T, l = 0.2 m, v = 3 m/s\nStep 3 (Substitute): \u03B5 = 0.5 \xD7 0.2 \xD7 3\nStep 4: \u03B5 = 0.3 V.",
      extraDetails: {
        formula: "\u03B5 = B \xB7 l \xB7 v",
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
      detailedSolution: "Step 1 (Formula): \u03B5 = -L \xB7 (\u0394I / \u0394t)\nStep 2 (Given): L = 0.5 H, \u0394I = 6 - 2 = 4 A, \u0394t = 0.2 s\nStep 3 (Substitute): \u03B5 = -0.5 \xD7 (4 / 0.2)\nStep 4: \u03B5 = -0.5 \xD7 20 = -10 V.\nStep 5: Magnitude is 10 Volts.",
      extraDetails: {
        formula: "\u03B5 = -L \xB7 (\u0394I / \u0394t)",
        variables: [
          { name: "Inductance (L)", value: "0.5", displayUnit: "H" },
          { name: "Current Change (\u0394I)", value: "4", displayUnit: "A" },
          { name: "Time Span (\u0394t)", value: "0.2", displayUnit: "s" }
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
      question: "According to Wien's Law, if the absolute temperature of an emitting blackbody increases, the peak intensity wavelength (\u03BB_max) will:",
      options: [
        "Increase proportionally.",
        "Decrease inversely.",
        "Remain completely constant.",
        "Fluctuate randomly."
      ],
      correctAnswer: "Decrease inversely.",
      modelAnswer: "Decrease inversely.",
      detailedSolution: "Wien's law dictates \u03BB_max is inversely proportional to Temperature: \u03BB_max \u221D 1/T."
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
      question: "A black body radiates peak intensity at 500 nm wavelength. Find the absolute temperature of the body using Wien's Law (Wien constant = 2.9 \xD7 10\u207B\xB3 m\xB7K).",
      correctAnswer: "5800",
      modelAnswer: "5800 Kelvin",
      detailedSolution: "Wien's Law: \u03BB_max * T = constant\nGiven: \u03BB_max = 500 nm = 500 \xD7 10\u207B\u2079 m\nConstant = 2.9 \xD7 10\u207B\xB3 m\xB7K\nT = (2.9 \xD7 10\u207B\xB3) / (500 \xD7 10\u207B\u2079) = 5800 K.",
      extraDetails: {
        formula: "T = Constant / \u03BB_max",
        variables: [
          { name: "Max Wavelength (\u03BB_max)", value: "500 \xD7 10\u207B\u2079", displayUnit: "m" },
          { name: "Wien's Constant", value: "2.9 \xD7 10\u207B\xB3", displayUnit: "m\xB7K" }
        ]
      }
    },
    {
      id: "u3_problem_2",
      unit: 3,
      unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
      type: "problem",
      typeLabel: "Numerical Problem",
      question: "A metal has a work function of 3.2 \xD7 10\u207B\xB9\u2079 J. If monochromatic light of frequency 1.0 \xD7 10\xB9\u2075 Hz hits the metal, calculate the max kinetic energy of emitted photoelectrons. (h = 6.625 \xD7 10\u207B\xB3\u2074 J\xB7s).",
      correctAnswer: "3.425e-19",
      modelAnswer: "3.425 \xD7 10\u207B\xB9\u2079 Joules",
      detailedSolution: "K.E._max = h\xB7\u03BD - E_w\nh\xB7\u03BD = 6.625 \xD7 10\u207B\xB3\u2074 \xD7 1.0 \xD7 10\xB9\u2075 = 6.625 \xD7 10\u207B\xB9\u2079 J\nK.E._max = (6.625 \xD7 10\u207B\xB9\u2079) - (3.2 \xD7 10\u207B\xB9\u2079) = 3.425 \xD7 10\u207B\xB9\u2079 Joules.",
      extraDetails: {
        formula: "K.E._max = (h \xB7 \u03BD) - E_w",
        variables: [
          { name: "Work Function (E_w)", value: "3.2 \xD7 10\u207B\xB9\u2079", displayUnit: "J" },
          { name: "Frequency (\u03BD)", value: "1.0 \xD7 10\xB9\u2075", displayUnit: "Hz" },
          { name: "Planck Standard (h)", value: "6.625 \xD7 10\u207B\xB3\u2074", displayUnit: "J\xB7s" }
        ]
      }
    },
    {
      id: "u3_problem_3",
      unit: 3,
      unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
      type: "problem",
      typeLabel: "Numerical Problem",
      question: "A photon has a wavelength of 200 nm. Calculate the energy of the photon. (h = 6.625 \xD7 10\u207B\xB3\u2074 J.s, c = 3 \xD7 10\u2078 m/s)",
      correctAnswer: "9.94e-19",
      modelAnswer: "9.9375 \xD7 10\u207B\xB9\u2079 Joules",
      detailedSolution: "Step 1 (Formula): E = h\xB7\u03BD = (h\xB7c) / \u03BB\nStep 2 (Given): \u03BB = 200 nm = 200 \xD7 10\u207B\u2079 m\nStep 3 (Substitute): E = (6.625 \xD7 10\u207B\xB3\u2074 \xD7 3 \xD7 10\u2078) / (200 \xD7 10\u207B\u2079)\nStep 4: E = (19.875 \xD7 10\u207B\xB2\u2076) / (200 \xD7 10\u207B\u2079)\nStep 5: E = 9.9375 \xD7 10\u207B\xB9\u2079 J.",
      extraDetails: {
        formula: "E = (h \xB7 c) / \u03BB",
        variables: [
          { name: "Wavelength (\u03BB)", value: "200 \xD7 10\u207B\u2079", displayUnit: "m" }
        ]
      }
    },
    {
      id: "u3_problem_4",
      unit: 3,
      unitTitle: "Unit 3: Modern Physics & X-Rays/Lasers",
      type: "problem",
      typeLabel: "Numerical Problem",
      question: "A photon has a wavelength of 150 pm. Calculate the momentum of the photon. (h = 6.625 \xD7 10\u207B\xB3\u2074 J.s)",
      correctAnswer: "4.42e-24",
      modelAnswer: "4.4167 \xD7 10\u207B\xB2\u2074 kg\xB7m/s",
      detailedSolution: "Step 1 (Formula): p = h / \u03BB\nStep 2 (Given): \u03BB = 150 pm = 150 \xD7 10\u207B\xB9\xB2 m\nStep 3 (Substitute): p = (6.625 \xD7 10\u207B\xB3\u2074) / (150 \xD7 10\u207B\xB9\xB2)\nStep 4: p = 4.4167 \xD7 10\u207B\xB2\u2074 kg\xB7m/s.",
      extraDetails: {
        formula: "p = h / \u03BB",
        variables: [
          { name: "Wavelength (\u03BB)", value: "150 \xD7 10\u207B\xB9\xB2", displayUnit: "m" }
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
      question: "A transistor operates with a collector current (Ic) of 5 mA and a base current (Ib) of 0.1 mA. Determine the current gain (\u03B2) of the transistor.",
      correctAnswer: "50",
      modelAnswer: "50",
      detailedSolution: "Current Gain (\u03B2) is the ratio of collector current to base current:\n\u03B2 = Ic / Ib = 5 mA / 0.1 mA = 50.",
      extraDetails: {
        formula: "\u03B2 = Ic / Ib",
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
      question: "In a common-emitter configuration, a transistor has an alpha current gain (\u03B1e) of 0.98. Calculate the value of the beta current gain (\u03B2).",
      correctAnswer: "49",
      modelAnswer: "49",
      detailedSolution: "Relationship: \u03B2 = \u03B1e / (1 - \u03B1e)\nSubstitute \u03B1e = 0.98:\n\u03B2 = 0.98 / (1 - 0.98) = 0.98 / 0.02 = 49.",
      extraDetails: {
        formula: "\u03B2 = \u03B1e / (1 - \u03B1e)",
        variables: [
          { name: "Alpha Gain (\u03B1e)", value: "0.98", displayUnit: "" }
        ]
      }
    },
    {
      id: "u4_problem_3",
      unit: 4,
      unitTitle: "Unit 4: Semiconductors & Electronics",
      type: "problem",
      typeLabel: "Numerical Problem",
      question: "A silicon sample is doped with phosphorus. If the concentration of phosphorus atoms is 10\xB9\u2075 atoms/cm\xB3, is the material an n-type or p-type semiconductor? Explain your reasoning.",
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
      detailedSolution: "Magnetic flux (\u03A6) explicitly measures the total number of field lines passing perpendicularly through a given area."
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
      detailedSolution: "Magnetic flux density (B) is measured in Tesla (T) or Weber/m\xB2. Total magnetic flux (\u03A6) is measured in Weber (Wb)."
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
      detailedSolution: "Magnetic force is DIRECTLY proportional to the length of the wire interacting with the field (F = BIL sin\u03B8)."
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
      detailedSolution: "When the coil plane is perpendicular to the field, the normal (vector area) is parallel (\u03B8 = 0). Torque \u03C4 = BIAN sin(0) = 0."
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
      detailedSolution: "Magnetic force is given by F = BIL sin(\u03B8). If parallel, \u03B8 = 0, sin(0) = 0, so Force = 0."
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
      detailedSolution: "When the coil plane is perpendicular to the B-field, the normal vector to the coil is parallel to B (\u03B8 = 0), making torque \u03C4 = BIAN sin(0) = 0."
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
      detailedSolution: "Flux \u03A6 = B A cos(\u03B8). Thus, any change in angle changes the magnetic flux."
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
})();
