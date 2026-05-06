/**
 * Study Material Data extracted from Physics Syllabus.
 * Covers Term 1 and Term 2 for Third Secondary.
 */

export const definitions = [
  { 
    term: "Magnetic field", 
    definition: "The area around a magnet (or a current-carrying conductor) where magnetic forces can act.",
    explanation: `Detailed Explanation:\nThink of the magnetic field as an 'invisible aura' surrounding a magnet. If you place a compass or a piece of iron anywhere inside this aura, it will feel a push or pull. It’s what allows magnets to interact without physically touching. In physics, any wire carrying electricity also generates its own magnetic field, which is the foundational principle of electromagnets.`
  },
  { 
    term: "Magnetic flux", 
    definition: "The total number of magnetic field lines passing through a surface Area.",
    explanation: `Detailed Explanation:\nImagine magnetic field lines like rain falling from the sky. If you hold out a piece of paper (the surface area), the 'magnetic flux' is simply counting the total number of raindrops that hit your paper. If you tilt the paper, fewer drops hit it, which means the flux decreases. It combines the strength of the magnet and the size of the area into one total value.`
  },
  { 
    term: "Magnetic flux Density", 
    definition: "The total number of magnetic field lines passing through unit area (one meter square).",
    explanation: `Detailed Explanation:\nWhile 'magnetic flux' is the total rain hitting your paper, 'flux density' tells you how heavily it is raining. It measures the concentration or intensity of the field. Stronger magnets have more clustered field lines, meaning higher density. The standard unit is the Tesla (T).`
  },
  { 
    term: "Magnetic permeability", 
    definition: "The ability of a medium to allow magnetic flux lines to penetrate it.",
    explanation: `Detailed Explanation:\nPermeability is like measuring how easy it is to dig through different soils. It's much easier to dig through soft sand than solid rock. Similarly, field lines travel very easily through iron (high permeability) compared to air or vacuum (low permeability). This is why cores of transformers and electromagnets use iron to help 'guide' and increase the magnetic field.`
  },
  { 
    term: "Neutral point", 
    definition: "The point at which the total magnetic flux density vanishes. Or the point where two magnetic fields are equal in magnitude and opposite in direction, resulting in a zero net magnetic field.",
    explanation: `Detailed Explanation:\nImagine two people pushing a box from opposite sides with the exact same strength: the box won't move because the forces cancel out. A neutral point is a location where multiple magnetic fields overlap but perfectly cancel each other out, making a compass placed there unable to point anywhere specific because the net magnetic force is literally zero.`
  },
  { 
    term: "Tesla", 
    definition: "It is the magnetic flux density which exerts a force of 1 N on a wire of 1m length carrying a current of intensity 1A placed perpendicularly to the magnetic field.",
    explanation: `Detailed Explanation:\nThe Tesla is the standard unit of magnetic field strength. It is defined using a physical experiment: if you have a 1-meter long wire, pump 1 Ampere of electricity through it, and place it completely perpendicular across a magnetic field, and the wire gets pushed with a force of exactly 1 Newton... then that magnetic field has a strength of exactly 1 Tesla.`
  },
  { 
    term: "Density of magnetic flux", 
    definition: "Magnetic force acting of a wire of length 1m carrying a current of 1A and placed perpendicular in magnetic field.",
    explanation: `Detailed Explanation:\nThis is essentially the definition of the physical quantity whose unit is the Tesla. The density (strength) of a magnetic field is fundamentally defined by the amount of physical force it can apply to a moving charge (current). If the field pushes harder on the same standard testing wire, the density is higher.`
  },
  { 
    term: "Magnetic dipole moment", 
    definition: "It is a vector emanating (خارج) from North Pole of the coil and perpendicular to its area. Or it is the magnetic torque acting on a coil carrying current placed parallel to a uniform magnetic field of flux density of 1 tesla.",
    explanation: `Detailed Explanation:\nWhen a coil carries an electric current, it effectively turns into a tiny bar magnet. The 'dipole moment' measures the 'strength' of this coil-magnet. A coil with a larger area, more turns of wire, or higher current will have a stronger dipole moment. It sits perpendicular to the coil and dictates how aggressively the coil will try to align itself with an external magnetic field.`
  },
  { 
    term: "Electromagnetic induction", 
    definition: "It is a phenomenon in which an induced electromotive force and also an induced current are generated in the conductor by a changing magnetic field (magnetic flux).",
    explanation: `Detailed Explanation:\nThis is the secret to generating electricity in power plants! If you move a magnet near a wire, or move a wire near a magnet, the 'changing field' forces the electrons in the wire to move, creating electricity from pure motion. As long as the magnetic field is changing (getting stronger or weaker), electricity is produced.`
  },
  { 
    term: "Lenz's law", 
    definition: "The law that states that the induced current must be in a direction to oppose the change that produced it.",
    explanation: `Detailed Explanation:\nLenz’s law is nature’s way of saying 'I don't like change.' If you try to push the North pole of a magnet into a coil, the coil generates electricity in such a way that the top of the coil becomes a North pole to repel your push. If you try to pull the magnet out, it turns into a South pole to drag it back. It ensures energy is conserved (you have to literally 'work' to create the electricity).`
  },
  { 
    term: "Mutual induction between two coils", 
    definition: "The electromagnetic effect takes place between two coils when an induced emf generated in one of them (secondary coil) due current variation in the other coil (primary coil), which opposes the change causing it.",
    explanation: `Detailed Explanation:\nImagine two coils side-by-side that are not wired together. If you switch ON Coil A, its magnetic field instantly grows. Coil B feels this growing field and reacts by generating electricity momentarily! This transfer of energy wirelessly from one coil to another via magnetic fields is the principle behind transformers, phone chargers, and induction stoves.`
  },
  { 
    term: "The Self Induction", 
    definition: "The phenomenon of inducing emf in a coil due to change in current in the same coil and hence the change in magnetic flux in the coil.",
    explanation: `Detailed Explanation:\nWhen you pour water quickly into a funnel, it backs up. Similarly, if you try to instantly pump a lot of current through a large coil, the coil's own sudden magnetic field cuts across its own wires. This creates a 'back-voltage' that fights your current. It delays the current from reaching its maximum instantly. This 'internal resistance to changing current' is self-induction.`
  },
  { 
    term: "The Eddy Currents", 
    definition: "They are induced currents that circulate in closed paths due to the change in magnetic flux through a solid conductor associating with heating effect.",
    explanation: `Detailed Explanation:\nIf you swing a solid block of metal through a magnetic field, the changing magnetic field induces random, swirling whirlpools of electric current inside the metal block itself. These currents bump around the metal's atoms, generating massive amounts of heat. This is very bad for transformers (causes energy loss) but extremely useful in induction cookers (heats the metal pan) and magnetic braking systems.`
  },
  { 
    term: "The Alternating Current (AC)", 
    definition: "It is the current whose intensity and direction changes periodically with time.",
    explanation: `Detailed Explanation:\nUnlike a battery that pushes current in a steady one-way stream, AC electricity sloshes back and forth like tides. It constantly reverses its direction (usually 50 or 60 times a second). This is the type of electricity produced by spinning generators and delivered to our home wall outlets because it easily passes through transformers to be transmitted across long distances without much loss.`
  },
  { 
    term: "The Direct current (DC)", 
    definition: "It is the current whose intensity and direction constant periodically with time.",
    explanation: `Detailed Explanation:\nProduced by batteries, solar panels, and DC dynamos. The electrons ALWAYS flow in exactly one direction with a steady pressure (intensity). It is used mostly in electronics, laptops, phones, and cars because transistors and microchips need a steady, unchanging voltage to process information correctly.`
  },
  { 
    term: "The Efficiency Of The Transformer", 
    definition: "The ratio of output electric power to the input electric Power.",
    explanation: `Detailed Explanation:\nA transformer takes in higher-voltage electricity and steps it down, or vice versa. If you put 100 Watts of power into the Primary coil, perfectly transferring it would give 100 Watts out of the Secondary coil (100% efficient). However, due to Eddy currents and heating, you might only get 95 Watts out. The efficiency is simply a measure of how little power was wasted as heat.`
  },
  { 
    term: "Planck's Curve", 
    definition: "It is a curve between the intensity of radiation and wavelengths.",
    explanation: `Detailed Explanation:\nIf you take an object (like a lightbulb filament or the Sun) and map out all the different colors (wavelengths) of light it's glowing with, you get a bell-shaped curve. This curve tells you what exact color stands out the most (is the most intense). It proves that objects don't radiate energy evenly; they follow this specific probability curve discovered by Max Planck.`
  },
  { 
    term: "Wien's Law", 
    definition: "The wavelength at the peak of the curve (maximum radiation) is inversely proportional to the absolute temperature.",
    explanation: `Detailed Explanation:\nAs things get hotter, the color they glow shifts! A warm piece of metal looks invisible (glows purely in infrared). As it gets crazy hot, the wavelength drops to something you can see: red, then yellow, then eventually blue-white. Wien's law mathematically states 'Higher Temp = Shorter Wavelength peak'. This is how astronomers know the temperature of stars just by looking at their color.`
  },
  { 
    term: "Black body", 
    definition: "It is an ideal system that absorbs all radiation (100% of the radiation that hits it) falling on it. Then re-emit this radiation totally again.",
    explanation: `Detailed Explanation:\nA 'Black Body' is a theoretical perfect object in physics. Because it absorbs all light, none bounces off, making it perfectly black when cold. When you heat it up, it radiates light absolutely perfectly with no interference. Stars are actually great examples of approximate 'black bodies' because they emit radiation purely based on their temperature, giving us perfect Planck Curves.`
  },
  { 
    term: "Thermo-ionic emission", 
    definition: "It is the phenomenon of emission of electrons from the metal surface when the metal is heated.",
    explanation: `Detailed Explanation:\nThink of boiling a pot of water—eventually, the liquid water gains so much heat energy it escapes as steam. If you heat up a metal wire fiercely, the electrons vibrating inside it will gain so much energy that they literally 'cook off' and boil away from the surface into empty space! This is the core functioning principle behind old TVs (Cathode Ray Tubes) and X-Ray machines.`
  },
  { 
    term: "Surface Potential Barrier", 
    definition: "The attractive forces acting on free electrons on the metal surface to prevent them from leaving it.",
    explanation: `Detailed Explanation:\nElectrons can wander around freely inside a metal wire, but they can't just fly away into the air because the positively charged protons in the metal pull them back. This 'invisible wall' of magnetic/electric attraction that keeps electrons trapped inside the metal is called the surface potential barrier. You must 'exceed' this barrier with heat or light to let an electron escape.`
  },
  { 
    term: "The Work Function Of A Metal", 
    definition: "It is the minimum energy needed to free electrons from surface without giving them additional kinetic energy.",
    explanation: `Detailed Explanation:\nThe Work Function is the strict 'fee' you must pay to free an electron. If the fee is 5 Joules, and you hit the metal with 4 Joules of light, the electron stays put. If you hit it with exactly 5 Joules, the electron is freed, but has zero speed (kinetic energy). If you hit it with 8 Joules, the electron pays the 5 Joule fee and escapes flying away with 3 Joules of speeding kinetic energy!`
  },
  { 
    term: "Compton Effect", 
    definition: "When a photon of high frequency (x-rays or gamma rays) collides with a free electron, the photon frequency decreased and changed its direction; also the electrons velocity increased and changed its direction.",
    explanation: `Detailed Explanation:\nThis was the definitive proof that light acts like particles! If you shine an intense X-Ray beam (massive energy light) at free-floating electrons, they crash perfectly like billiard balls. The incoming photon loses power, shifts to a lower frequency (longer wavelength), bounces away, and sends the electron flying forward. It proved photons carry real physical momentum.`
  },
  { 
    term: "Planck's Constant", 
    definition: "The ratio between the energy of a photon and its frequency.",
    explanation: `Detailed Explanation:\nMax Planck discovered that energy fundamentally comes in individual 'packets' rather than smooth constant streams. This ratio (represented by the letter 'h') is the fundamental scaling factor of the universe. It ties the mechanical energy of an object (E) strictly to its electromagnetic frequency (v) using the famous E = h*v equation.`
  },
  { 
    term: "The Photon", 
    definition: "It is a quantum of energy (hυ) has no charge and has a particle nature.",
    explanation: `Detailed Explanation:\nInstead of viewing light strictly as a continuous wave on the ocean, think of it as billions of tiny, invisible microscopic 'bullets' of energy arriving in bursts. These packets are photons. They zip around at the ultimate speed of light, possess ZERO resting mass, yet carry momentum that can physically strike objects. They are the fundamental particle carriers of all glowing raditation.`
  },
  { 
    term: "Classical physics (macroscopic model)", 
    definition: "It is that explains everything in our daily life and our common experiences.",
    explanation: `Detailed Explanation:\nThis is the physics developed by Newton and Maxwell. It involves things you can see, touch, and throw: gravity pulling a ball down, water making ripples, mechanics, thermodynamics, and large electrical currents. In classical physics, energy can be smooth and continuous, and objects have perfectly defined places and speeds at all times.`
  },
  { 
    term: "Modern (quantum) physics (microscopic model)", 
    definition: "It is that deals with scientific phenomena in the universe which might not be directly observed in our daily life, and classical physics cannot explain.",
    explanation: `Detailed Explanation:\nWhen scientists started looking closely at atoms, light, and electrons during the 1900s, classical physics completely failed to predict the results. Modern physics (Quantum Mechanics and Relativity) takes over here: light acts as both waves and particles, energy is broken into stepping-stones (quanta), and absolute certainty is replaced by probabilities.`
  },
  { 
    term: "X-Rays", 
    definition: "They are invisible electromagnetic waves of high energy and short wavelengths ranges between the wavelengths of gamma rays and the ultraviolet rays.",
    explanation: `Detailed Explanation:\nX-Rays pack vastly more energy than the visible colors we can see. Because their wavelength is incredibly short, they can slip right past the spaces between atoms in our soft tissue but they get blocked by tightly packed dense atoms (like the calcium in our bones), allowing doctors to see inside living bodies by casting a shadow outline.`
  },
  { 
    term: "Laser", 
    definition: "Light amplification by stimulated emission of radiation.",
    explanation: `Detailed Explanation:\nNormal light from a lightbulb is chaotic: millions of photons flying in every random direction, bouncing all out of step with different colors. A LASER produces 'Coherent' light. It causes millions of atoms to unleash perfectly identical photons traveling in identical lock-step in parallel direction. The result is a highly uniform, pencil-straight, singular beam of intense energy.`
  },
  { 
    term: "Spontaneous Emission", 
    definition: "It is the emission which is produced due to the transfer of an excited atom from a higher energy level to a lower energy level, after the life time is over, without any external effect.",
    explanation: `Detailed Explanation:\nWhen an atom absorbs energy, its electron jumps to a higher orbit (it becomes 'excited'). Atoms don't like staying excited, so after a tiny moment, the electron drops back down completely on its own, spitting out a random photon to get rid of the energy. This is entirely random and unpredictable. It's how neon signs and standard lightbulbs generate their chaotic light.`
  },
  { 
    term: "Stimulated Emission", 
    definition: "It is the emission which is produced due to the transfer of the atom from a higher energy level to a lower energy level when another photon has the same energy of the excited atom falls on it before its life time is over and so two coherent photons are produced.",
    explanation: `Detailed Explanation:\nThis is the secret to Laser! If you have an excited atom, and BEFORE it can spontaneously drop back down, you shoot a matching photon at it, the incoming photon 'triggers' the atom into dropping instantly. The atom spits out a clone photon that perfectly matches the incoming one. One photon went in, two identical lock-step photons popped out! This amplifies the light.`
  },
  { 
    term: "Population Inversion", 
    definition: "It is the state of a material in which the number of atoms in the excited state is greater than the number of atoms in the lower state.",
    explanation: `Detailed Explanation:\nUnder normal conditions, most atoms are sitting in the 'Ground State'. To make a Laser, you want to trigger billions of stimulated emissions. So you must 'pump' power into the system until more than 50% of the atoms are held artificially in an excited, high-energy state holding onto a photon. Once population inversion is reached, it acts as a loaded cannon ready to fire.`
  },
  { 
    term: "Optical Pumping In Laser", 
    definition: "It is the process of transferring energy to the active medium by means of light energy.",
    explanation: `Detailed Explanation:\nTo create Population Inversion and load your atoms up with energy, they need an external power source. Some lasers use electrical sparks, but 'Optical Pumping' uses extremely bright, intense flash-lamps. The bright light flashes the laser rod, exciting trillions of atoms simultaneously. Once excited, they are primed to begin the cascade of stimulated emission.`
  },
  { 
    term: "Resonant Cavity", 
    definition: "The container and the activating catalyst for amplification in laser.",
    explanation: `Detailed Explanation:\nA resonant cavity is essentially two mirrors placed at opposite ends of the laser tube. When the first few photons are emitted, they hit the mirrors and bounce back and forth perfectly straight. As they bounce back through the gas atoms, they trigger millions of more stimulated emissions. One mirror is 99% reflective to let a tiny bit of the beam escape—which is the laser beam you see.`
  },
  { 
    term: "Metastable Level", 
    definition: "An excitation level in the neon atom which has a relatively long life time (about 10^-3 sec).",
    explanation: `Detailed Explanation:\nMost excited states of an atom last for just 10^-8 seconds, meaning they instantly crash back down. For a laser to work, you need time to build up that massive 'Population Inversion'. A metastable state is an excited orbit where the electron magically decides to hang around for roughly 1000 times longer before dropping spontaneously. This gives the laser time to build up.`
  },
  { 
    term: "Semiconductor", 
    definition: "They are materials with conductivities somewhere between conductors and insulators (Silicon and germanium).",
    explanation: `Detailed Explanation:\nConductors (like copper) let electricity flow easily. Insulators (like rubber) block it. A semiconductor sits exactly between them. Crucially: as a semiconductor gets hotter, it allows MORE electricity to flow (unlike metals which get worse). Their conductivity can be intentionally manipulated, making them the absolute foundation ingredient of the modern computer CPU chip.`
  },
  { 
    term: "Crystal", 
    definition: "It is a regular arrangement of atoms in the solid state.",
    explanation: `Detailed Explanation:\nUnlike a messy jumble of atoms (like glass), a perfect crystal structure features a flawlessly repeating 3D geometric grid (a lattice). In an absolute pure Silicon crystal, every atom bonds tightly to four neighbors, locking up all free electrons perfectly making the crystal act as a flawless insulator at absolute zero temperatures.`
  },
  { 
    term: "Dynamic Equilibrium (Thermal Equilibrium)", 
    definition: "The number of bonds broken per second will be equal to the number of bonds mended per second in a Pure Silicon Crystal.",
    explanation: `Detailed Explanation:\nWhen the pure silicon crystal gets somewhat warm, heat energy breaks a few bonds, releasing a few electrons. At the very same moment, some wandering electrons randomly run into broken gaps and get trapped again. Dynamic equilibrium means that the overall number of free electrons flying around remains completely stable, like a busy classroom where the number of students standing vs sitting remains constant.`
  },
  { 
    term: "Pure semiconductor", 
    definition: "It is a semiconductor in which the concentration of free electrons (n) = the concentration of holes (P) at any temperature.",
    explanation: `Detailed Explanation:\nIn a pure (intrinsic) piece of silicon, the only way an electron becomes free is if it breaks off from an atom due to heat. When it breaks off (free electron - n), it leaves behind an empty space (a hole - P). Since every free electron leaves exactly one empty hole, their quantities are always perfectly balanced (n = p). They are naturally rather poor conductors of electricity.`
  },
  { 
    term: "Hole", 
    definition: "It is the process of adding impurities into pure semiconductor to increase its conductivity.",
    explanation: `Detailed Explanation:\nNote: A Hole is literally an empty space in a broken bond acting as a positive charge carrier. When an electron leaps away, it leaves a void. An adjacent moving electron might hop into this void, leaving a new empty space behind *it*. So the void appears to travel backwards! Since electrons are negative, the traveling empty space (hole) acts like a traveling 'positive' charge.`
  },
  { 
    term: "Impurity Atom (Doped Atom)", 
    definition: "It is an atom of trivalent or pentavalent element which is added to a crystal of pure semiconductor to increase its electrical conductivity.",
    explanation: `Detailed Explanation:\nPure silicon is a poor conductor. To make it amazing for electronics, scientists inject tiny amounts of very different atoms (doping) to mess up its perfect structure. Injecting Phosphorus (5 outer electrons) gives the grid 'too many' electrons. Injecting Boron (3 outer electrons) gives the grid 'too few' electrons. This radically increases conductivity.`
  },
  { 
    term: "P-Type Semiconductor", 
    definition: "It is a semiconductor which is doped with impurities of trivalent element where the concentration of the holes (P) is greater than concentration of free electron (n).",
    explanation: `Detailed Explanation:\nDoped heavily with atoms like Boron or Aluminum which only have 3 outer electrons. By trying to fit into a lattice needing 4, they instantly force a wide-open gap (a hole). Because the crystal is flooded with positively-acting 'holes', the Holes are the 'Majority Carriers' driving the current, making it a Positive-Type (P-Type) semiconductor.`
  },
  { 
    term: "N-Type Semiconductor", 
    definition: "It is a semiconductor which is doped with impurities of Pentavalent element where the concentration of the free electrons (n) is greater than concentration of free holes (P).",
    explanation: `Detailed Explanation:\nDoped heavily with atoms like Phosphorus or Arsenic which have 5 outer electrons. They lock 4 of them tightly into the silicon grid, but the 5th electron is left roaming wild without a home! Because the entire crystal is flooded with extra un-bonded, negatively-charged free electrons, electrons are the 'Majority Carriers', making it Negative-Type (N-Type).`
  },
  { 
    term: "Pn Junction (Diode)", 
    definition: "Two attached crystal one is (n-type) and the other is (P-type).",
    explanation: `Detailed Explanation:\nA 'Diode' is literally a one-way street for electricity. By fusing a P-Type block directly next to an N-Type block, you create an electronic valve. If you push positive voltage against the P side, electricity flies right through. If you push backwards, the junction forms an un-crossable wall and instantly blocks the electricity.`
  },
  { 
    term: "The Diffusion Current", 
    definition: "It is the net current arising due to the diffusion of the holes from the p-type crystal to the n-type crystal and the diffusion of electrons from the ntype crystal to the p-type crystal.",
    explanation: `Detailed Explanation:\nWhen the P and N blocks first touch, there are massive amounts of loose electrons on the N side, and loose holes on the P side. Like spraying perfume in a corner, they naturally want to spread out. The electrons drift naturally into the P side, and holes drift into the N side. This natural, unforced mixing is the diffusion current.`
  },
  { 
    term: "The Drift Current", 
    definition: "It is the net current arising due to the drift of electrons and holes by the effect of the electric field in the depletion region in a direction opposite to the direction of the diffusion current.",
    explanation: `Detailed Explanation:\nAs holes and electrons diffuse across the border and recombine, they leave behind rigid charged ions. This builds up a literal electric 'wall' (field) directly in the center blocking any more natural diffusion from occurring. Any random electrons born by heat inside this 'Wall Region' get violently thrown backwards by the field's electrical pressure. This reverse flow is the Drift Current.`
  },
  { 
    term: "The Depletion Region", 
    definition: "It is the middle region in the pn junction which is composed of positive ions on one side and negative ions on the other side while no electrons or holes exist in this region.",
    explanation: `Detailed Explanation:\
This is the neutral \"no-man’s land\" right at the border of the PN junction. All the roaming electrons have met the roaming holes and annihilated each other. All that is left are the rigid, immobile atoms forming an electric fence. Because all free charge carriers have been \"depleted\" or erased from this literal boundary zone, current cannot pass easily.`
  },
  { 
    term: "Current Gain Of Transistor (beta_e)", 
    definition: "It is the ratio between collector current (Ic) and the base current (Ib) in the transistor.",
    explanation: `Detailed Explanation:\nA bipolar transistor acts as a current amplifier: A tiny signal pumped into the 'Base' wire allows a massive avalanche of current to flow through the 'Collector' wire. The Beta parameter measures the muscle-power of the amplifier. If a Beta is 100, then pumping 2mA into the base will unleash 200mA (100x more) sweeping down the main collector channel.`
  },
  { 
    term: "Logic gates", 
    definition: "They are digital circuits that perform logic operations.",
    explanation: `Detailed Explanation:\nThese are the microscopic building blocks composing the intelligence of every computer on Earth. Usually built by chaining transistors together. An AND gate requires two signals to be high to pass. An OR gate requires just one. A NOT gate flips the signal. By combining millions of these extremely simple binary rules, computers can process complex video games, math, and AI logic.`
  },
  { 
    term: "Analog electronics", 
    definition: "All electronic systems deal with natural quantities and convert them to continuous electrical signals.",
    explanation: `Detailed Explanation:\nAn analog microphone works by converting the smooth varying pressure of sound waves into a smooth varying voltage wave moving through a wire. Analog represents the infinite, smooth shades of grey of the real world because the voltage signal fluctuates directly matching the strength of what it's measuring. A record player or old radio are pure analog.`
  },
  { 
    term: "Digital electronics", 
    definition: "A new branch of electronics where the electrical signal is not transmitted continuously, but is coded in terms of one of two possible values representing two states 0 or 1 (binary system).",
    explanation: `Detailed Explanation:\
Unlike analog's infinite shades of grey, Digital reduces the world to stark black or white. Voltage is either OFF (0) or ON (1). Because it only listens to \"high\" or \"low\" signals, it is practically immune to messy static, static hiss, and interference. All modern computing devices read media as purely mathematical strings of zeros and ones making quality identical no matter how many times it's copied.`
  }
];

export const usages = [
  { item: "Ampere's right hand rule", usage: "Determine the direction of the magnetic field when passing an electric current in a conductor." },
  { item: "Fleming's left hand rule", usage: "Determine the direction of Magnetic force of a wire carrying current and placed normally to a magnetic field." },
  { item: "Lenz law", usage: "Determine the direction of induced current in the coil." },
  { item: "Fleming Right hand rule", usage: "Determine the direction of induced current in the wire when the wire cut magnetic flux lines." },
  { item: "Cathode ray tube (CRT)", usage: "Screen of TV and computer." },
  { item: "Filament", usage: "Used to heat up the cathode." },
  { item: "Grid", usage: "Control the number of electrons in the electron beam." },
  { item: "Anode", usage: "Used to accelerate the electron beam towards the screen." },
  { item: "Electron gun", usage: "Instrument to produce a beam of electrons at high speed." },
  { item: "Photoelectric cell", usage: "Change the light energy into electric energy." },
  { item: "Coolidge tube", usage: "Used to produce X-rays." },
  { item: "Pn Junction (Diode)", usage: "Switch, or used for rectification of AC current (Convert AC to DC)." },
  { item: "Transistor", usage: "Acts as a switch or as an amplifier." }
];

export const laws = [
  { 
    name: "Magnetic flux (Φm)", 
    formula: "\\Phi_m = B \\cdot A \\cos\\theta",
    explanation: `Detailed Explanation:\n- Concept: Imagine magnetic field lines as rain falling on a piece of paper. The total amount of rain hitting the paper is the 'flux'.
- B: Represents the intensity of the rain (Magnetic Field Density).
- A: Area of the paper.
- cos(θ): If you tilt the paper, less rain hits it. θ is the angle between the normal (a line perfectly straight up from the surface) and the magnetic field. If the given angle is with the surface itself, you would use sin(θ).`,
    examples: [
      {
        problem: "A coil of cross section area 0.2 m² is placed in a uniform magnetic field of density 0.4 T. Calculate the magnetic flux which passes through the coil if the coil is making an angle of 30° with the field lines.",
        solution: "Φm = B × A × sin(θ) = 0.4 × 0.2 × sin(30°) = 0.4 × 0.2 × 0.5 = 0.04 Wb"
      },
      {
        problem: "When the density of magnetic field in a given area is increased to its double value, what happens to the magnetic flux?",
        solution: "Since Φm = B × A (for perpendicular), if B doubles, Φm doubles (Direct relationship)."
      }
    ]
  },
  { 
    name: "Magnetic flux max", 
    formula: "\\Phi_m = (\\Phi_m)_{\\max} \\cos\\theta",
    explanation: `Detailed Explanation:\n- Concept: The maximum flux (Φm_max) happens when the coil is perfectly perpendicular to the field lines (like holding a bucket straight up to catch the rain).
- So, any flux at an angle is just a percentage (calculated via cosθ or sinθ depending on which angle is provided) of that maximum possible value.`
  },
  { 
    name: "Magnetic flux density of Straight wire", 
    formula: "B = \\frac{\\mu I}{2\\pi d}",
    diagramKey: "straight_wire",
    explanation: `Detailed Explanation: Ampere's Law for a Straight Wire.
- Concept: A current (I) flowing in a straight line creates circular magnetic field lines around it.
- B is the strength of the field at a certain distance.
- It gets stronger if the current (I) is higher.
- It gets weaker as you move further away (d = distance).
- µ represents permeability, which is the medium's ability to host the magnetic field.`,
    examples: [
      {
        problem: "Calculate the intensity of the electric current which produces a magnetic flux of density 2 × 10⁻⁴ Tesla at a point 4 cm far from a straight wire in air (µ = 4π × 10⁻⁷ Wb/A.m).",
        solution: "B = (µI) / (2πd) => 2 × 10⁻⁴ = (4π × 10⁻⁷ × I) / (2π × 0.04)\nI = (2 × 10⁻⁴ × 2π × 0.04) / (4π × 10⁻⁷) = 40 Amperes."
      },
      {
        problem: "A length of straight conductor (3A, 0.5T) experiences a force of 1.5N. What is the length of the conductor?",
        solution: "F = BIL => 1.5 = 0.5 × 3 × L => L = 1 meter."
      }
    ]
  },
  { 
    name: "Magnetic flux density of Circular coil", 
    formula: "B = \\frac{\\mu N I}{2 r}",
    diagramKey: "circular_coil",
    explanation: `Detailed Explanation:\n- Concept: When you bend a wire into a circle, the magnetic field lines concentrate at the very center of the circle.
- Compared to a straight wire, we replace '2πd' with '2r' (where r is the radius) and we multiply by 'N' (Number of turns) because each turn of the wire stacks its magnetic field on top of the others.`,
    examples: [
      {
        problem: "Calculate the intensity of the electric current which when passes in a circular loop of diameter 22 cm and the number of turns 50 turns it will produce a magnetic flux of density 2 × 10⁻⁴ Tesla at the center of the coil (µ = 4π × 10⁻⁷ Wb/A.m, π ≈ 22/7).",
        solution: "B = (µNI) / (2r) => 2 × 10⁻⁴ = (4π × 10⁻⁷ × 50 × I) / (2 × 0.11)\nI = (2 × 10⁻⁴ × 2 × 0.11) / (4 × (22/7) × 10⁻⁷ × 50) = 0.7 A"
      }
    ]
  },
  { 
    name: "Number of turns of coil", 
    formula: "N = \\frac{L_{wire}}{2\\pi r_{coil}}",
    explanation: `Detailed Explanation:\n- Concept: If you have a long piece of wire (L_wire) and you want to wrap it into a circular coil of a specific radius (r_coil).
- One full turn of the wire will equal the circumference of the circle (2πr).
- So, total turns (N) is simply the total length divided by the length of one single turn.`
  },
  { 
    name: "Magnetic flux density of Solenoid", 
    formula: "B = \\frac{\\mu N I}{L} = \\mu n I",
    diagramKey: "solenoid",
    explanation: `Detailed Explanation:\n- Concept: A solenoid is a long cylindrical coil (like a spring). It acts exactly like a bar magnet.
- The field inside is very strong and uniform.
- The strength (B) depends on the 'turn density' (n), which is N/L (total turns divided by total length).
- Notice radius does not appear in this formula; an ideal long solenoid's internal field strength doesn't depend on how wide it is!`,
    examples: [
      {
        problem: "A current of 3 ampere passed in a solenoid of length 62.8 cm. If the number of turns of the solenoid is 100 turns, calculate the density of magnetic flux in air at a point along the axis near its center (π = 3.14).",
        solution: "B = (µNI) / L = (4π × 10⁻⁷ × 100 × 3) / 0.628 = (12.56 × 10⁻⁷ × 300) / 0.628 = 6 × 10⁻⁴ Tesla."
      }
    ]
  },
  { 
    name: "Magnetic force", 
    formula: "F = B I L \\sin\\theta",
    diagramKey: "magnetic_force",
    explanation: `Detailed Explanation: The Motor Effect.
- Concept: When a wire carrying electricity is placed in someone else's magnetic field, it feels a physical push/pull.
- This is how electric motors work.
- F increases if the external field (B) is stronger, the current (I) is higher, or the wire is longer (L).
- sin(θ): The force is maximum when the wire is exactly perpendicular (90 degrees) to the field, and ZERO if the wire is parallel to the field.`,
    examples: [
      {
        problem: "A straight wire of length 20 cm carrying an electric current of 3 A is placed in a magnetic field of density 2 × 10⁻² Tesla. Calculate the magnetic force acting on the wire if it is placed perpendicular to the direction of the magnetic field.",
        solution: "F = BIL sin(θ) = (2 × 10⁻²) × 3 × 0.2 × sin(90°) = 0.012 = 1.2 × 10⁻² N = 12 × 10⁻³ N"
      }
    ]
  },
  { 
    name: "Magnetic torque", 
    formula: "\\tau = B I A N \\sin\\theta",
    explanation: `Detailed Explanation:\n- Concept: If you place a rectangular coil of wire in a magnetic field, the magnetic forces will push one side up and the other side down, making the coil spin. This spinning force is Torque (τ).
- It depends on B, I, A (Area of the coil), and N (Turns).
- 'sin(θ)' here is tricky: the Torque is MAXIMUM when the coil surface is PARALLEL to the field lines, because the 'lever arms' are at their maximum distance.`,
    examples: [
      {
        problem: "A rectangular coil of dimensions (5cm and 10cm) and its turns are 100Turn. The coil is placed in a magnetic field of flux density 0.2T and a current of intensity 3A passes in it. Calculate the magnetic torque when the plane of the coil is parallel to the magnetic field.",
        solution: "Area = 5 × 10 × 10⁻⁴ = 50 × 10⁻⁴ m²\nτ = BIAN sin(90°) = 0.2 × 3 × (50 × 10⁻⁴) × 100 × 1 = 0.3 N.m"
      },
      {
        problem: "A rectangular coil of 500 turns (0.2m x 0.1m, 5A) makes 60° with a field of 0.8T. Find torque.",
        solution: "Angle with normal θ = 90 - 60 = 30°.\nτ = BIAN sin(30°) = 0.8 × 5 × (0.02) × 500 × 0.5 = 20 N.m"
      }
    ]
  },
  { 
    name: "Magnetic dipole moment", 
    formula: "|\\vec{m_d}| = I A N = \\frac{\\tau}{B \\sin\\theta}",
    explanation: `Detailed Explanation:\n- Concept: The Magnetic Dipole Moment is an intrinsic property of the coil itself. It basically measures 'how much of a magnet' the coil has become due to its current.
- It ONLY depends on the coil's own characteristics: Current (I), Area (A), and Turns (N).
- It does NOT depend on the external magnetic field (B) or the angle.`
  },
  { 
    name: "Faraday's law", 
    formula: "\\text{emf} = - N \\frac{\\Delta\\Phi_m}{\\Delta t}",
    explanation: `Detailed Explanation: Electromagnetic Induction.
- Concept: A changing magnetic field creates electricity! If you push a magnet into a coil, you induce a voltage (emf).
- The voltage is higher if you have more turns (N) and if you move the magnet FASTER (meaning a large change in flux ΔΦm over a very tiny amount of time Δt).
- The negative sign simply means the induced voltage will try to 'fight back' against the change (Lenz's Law).`,
    examples: [
      {
        problem: "A coil of 200 turns each of area 5 cm² placed perpendicular to a magnetic flux of density 4 × 10⁻³ Tesla. Calculate the induced emf produced in the coil if the density of the magnetic flux is decreased to 15 × 10⁻⁴ T in 0.01 S.",
        solution: "emf = -N × A × (ΔB/Δt) = -200 × (5 × 10⁻⁴) × [(15 - 40) × 10⁻⁴] / 0.01 = +2.5 × 10⁻² Volts"
      },
      {
        problem: "A metallic ring is in field perpendicular to its plane. Flux changes from 0.05 Wb to -0.05 Wb in 0.05 s. Find average induced emf.",
        solution: "N = 1. ΔΦ = -0.05 - 0.05 = -0.1. Δt = 0.05.\nemf = -1 × (-0.1 / 0.05) = 2V."
      }
    ]
  },
  { 
    name: "Mutual induction between two coils", 
    formula: "(\\text{emf})_2 = - M \\frac{\\Delta I_1}{\\Delta t}",
    explanation: `Detailed Explanation:\n- Concept: You have two completely separate coils. You change the current rapidly in Coil 1.
- This creates a changing magnetic field that spills over and hits Coil 2.
- This induces a voltage in Coil 2! This is how wireless charging and transformers work.
- M is the 'Mutual Inductance', measuring how well the two coils are linked together.`,
    examples: [
      {
        problem: "Determine the mutual inductance between two coils when a current changing at 50 A/s in one coil induced an emf of 80 mV in the other.",
        solution: "emf₂ = M × (ΔI₁/Δt) => 80 × 10⁻³ = M × 50\nM = (80 × 10⁻³) / 50 = 1.6 × 10⁻³ Henrys"
      }
    ]
  },
  { 
    name: "Self induction of a coil", 
    formula: "\\text{emf} = - L \\frac{\\Delta I}{\\Delta t}",
    explanation: `Detailed Explanation:\n- Concept: When you switch on a circuit containing a large coil, the sudden rush of current creates a sudden magnetic field.
- The coil's OWN changing magnetic field cuts through its OWN turns, creating an opposing voltage (back-emf) that tries to stop the current from rising instantly.
- 'L' is the coefficient of self-induction (measured in Henrys).`,
    examples: [
      {
        problem: "The solenoid and its Self-inductance 0.8 H. If it is connected to a battery of emf 200 Volt, Calculate the rate of change of the current intensity at the moment of closing the circuit.",
        solution: "emf = -L × (ΔI/Δt) => 200 = 0.8 × (ΔI/Δt)\nΔI/Δt = 200 / 0.8 = 250 A/s"
      },
      {
        problem: "Current changes from 5A to 2A in 0.05s, inducing 15V. Find L.",
        solution: "emf = L × (ΔI / Δt) => 15 = L × (3 / 0.05) => L = 0.25H."
      }
    ]
  },
  { 
    name: "Induced emf in a straight wire", 
    formula: "\\text{emf} = B L v \\sin\\theta",
    explanation: `Detailed Explanation:\n- Concept: If you move a straight wire through a magnetic field like a sword cutting through grass, you generate electricity inside the wire.
- The voltage (emf) depends on the field's thickness (B), the sword's length (L), and how fast you swing it (v for velocity).
- You must CUT the lines. If you move parallel to the lines (sin 0), you get zero voltage.`,
    examples: [
      {
        problem: "A straight wire of length 40 cm moves with a velocity of 5 m/sec. in a uniform magnetic flux of density 0.2 T, perpendicular to each other. Calculate the induction emf generated.",
        solution: "emf = BLv = 0.2 × 0.4 × 5 = 0.4 volt"
      }
    ]
  },
  { 
    name: "AC Dynamo Instantaneous EMF", 
    formula: "\\text{emf}_{inst} = N B A \\omega \\sin\\theta",
    diagramKey: "dynamo",
    explanation: `Detailed Explanation:\n- Concept: A generator (Dynamo) works by spinning a coil inside a magnet. Because it spins in a circle, the voltage generated goes up and down in a sine wave.
- 'ω' (Omega) is the angular velocity (how fast it is spinning, 2πf).
- This formula tells you the exact voltage at any specific millisecond (instant) during the spin.`,
    examples: [
      {
        problem: "The instantaneous EMF produced in an AC dynamo is 100V when the coil is parallel to the field. If the frequency of rotation is doubled, what is the new instantaneous EMF at the same position?",
        solution: "emf_max = NBA(2πf). If frequency (f) is doubled, emf_max doubles. Since it's at the same position (parallel), θ = 90° and sin(90) = 1. New EMF = 2 × 100 = 200V."
      }
    ]
  },
  { 
    name: "AC Dynamo Max EMF", 
    formula: "\\text{emf}_{max} = N B A \\omega",
    explanation: `Detailed Explanation:\n- Concept: This is the highest peak voltage the dynamo can possibly reach during its spin (the peak of the sine wave).
- Notice there is no sin(θ) here, because the maximum happens when sin(θ) = 1.
- To get a higher maximum voltage, you can add more turns (N), use stronger magnets (B), a bigger coil (A), or spin it faster (ω).`
  },
  { 
    name: "Transformer Efficiency", 
    formula: "\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%",
    explanation: `Detailed Explanation:\n- Concept: A transformer transfers electrical power from a Primary coil to a Secondary coil. Power = Voltage × Current (VI).
- An ideal transformer would have 100% efficiency, meaning Power In = Power Out.
- In reality, energy is lost as heat. Efficiency is (Power Out / Power In).`,
    examples: [
      {
        problem: "A transformer near a power station raises voltage from 220V to 440kV. Efficiency is 80%. If the primary has 100 turns, how many turns does the secondary have?",
        solution: "Using (Vs/Vp) = η(Ns/Np) for efficiency: 440000 / 220 = 0.8 * (Ns / 100). Ns = 2000 * 100 / 0.8 = 250,000 turns."
      }
    ]
  },
  { 
    name: "Wien's law", 
    formula: "\\frac{\\lambda_{m1}}{\\lambda_{m2}} = \\frac{T_2}{T_1}",
    explanation: `Detailed Explanation:\n- Concept: Everything glows (radiates) based on its temperature. Hotter objects glow at shorter wavelengths.
- This law states that the peak wavelength (λ) of radiation is inversely proportional to the absolute temperature (T in Kelvin).
- So if you double the temperature (T2 is 2x T1), the wavelength halves. That's why extremely hot stars look blue (short wavelength) and cooler stars look red (long wavelength).`,
    examples: [
      {
        problem: "A black body at 3000 K has a peak wavelength λ. If it is cooled until the peak wavelength becomes 10λ, what is its new temperature?",
        solution: "T1λ1 = T2λ2 => 3000 * λ = T2 * 10λ => T2 = 3000/10 = 300 K."
      }
    ]
  },
  { 
    name: "Photon Energy", 
    formula: "E = h\
u = h\\frac{c}{\\lambda}",
    explanation: `Detailed Explanation: Planck's Equation.
- Concept: Light is made of tiny packets of energy called photons.
- The energy of these packets is directly proportional to the light's frequency (ν) and inversely proportional to its wavelength (λ).
- 'h' is Planck's constant. 'c' is the speed of light.
- This means X-Rays (high frequency, short wavelength) pack way more punch than Radio waves (low frequency, long wavelength).`,
    examples: [
      {
        problem: "Find the energy of photons for red light of wavelength 6000 Å. (h = 6.625 × 10⁻³⁴ J.s, c = 3 × 10⁸ m/s)",
        solution: "λ = 6000 × 10⁻¹⁰ m.\nE = hc / λ = (6.625 × 10⁻³⁴ × 3 × 10⁸) / (6000 × 10⁻¹⁰) = 3.31 × 10⁻¹⁹ Joule"
      },
      {
        problem: "A metal has a work function 3.85 × 10⁻¹⁹ J. Calculate the max kinetic energy of electrons emitted when light of frequency 7.5 × 10¹⁴ Hz is shone (h = 6.6 × 10⁻³⁴ J.s).",
        solution: "K.E = hf - Ew = (6.6 × 10⁻³⁴ × 7.5 × 10¹⁴) - 3.85 × 10⁻¹⁹\nK.E = 4.95 × 10⁻¹⁹ - 3.85 × 10⁻¹⁹ = 1.1 × 10⁻¹⁹ J"
      }
    ]
  },
  { 
    name: "Photoelectric effect", 
    formula: "K.E = E - E_w = \\frac{1}{2}mv^2",
    explanation: `Detailed Explanation: Einstein's Photoelectric Equation.
- Concept: If you shoot light (photons) at a metal surface, it can knock electrons out. 
- The metal holds onto its electrons tightly. The 'Work Function' (E_w) is the fee you must pay to free the electron.
- The Kinetic Energy (K.E) the escaping electron has is whatever energy the photon brought (E), minus the fee paid to the metal (E_w).`
  },
  { 
    name: "Compton Effect Energy", 
    formula: "\\Delta E = h\
u_1 - h\
u_2",
    explanation: `Detailed Explanation:\n- Concept: Proving light acts like a particle! When a high-energy photon (like an X-ray) hits a loose electron, they collide like billiard balls.
- The photon bounces off, losing some energy and gaining wavelength.
- The change in the photon's energy (ΔE) equals the energy it had before collision minus the energy it had after. This lost energy is exactly equal to the Kinetic Energy gained by the electron that was hit.`
  },
  { 
    name: "Transistor Emitter Current", 
    formula: "I_E = I_B + I_C",
    explanation: `Detailed Explanation:\n- Concept: In a transistor, current flows into the Emitter, and splits up into two paths: a tiny amount trickles out the Base (I_B), and the massive majority flows out the Collector (I_C).
- Therefore, following Kirchhoff's current law, the total current going into the part (I_E) must perfectly equal the sum of the currents coming out.`
  },
  { 
    name: "Current Gain (Beta)", 
    formula: "\\beta_e = \\frac{I_C}{I_B}",
    explanation: `Detailed Explanation:\n- Concept: When using a transistor as an amplifier, the Base is the 'control knob' and the Collector is the 'output channel'.
- Current Gain (β or hfe) asks: For every 1 amount of current I push into the Base, how much current flows through the Collector?
- Typical values are between 50 and 200. It measures the amplifier's 'strength'.`,
    examples: [
      {
        problem: "Calculate the collector current (Ic) in a transistor where the current gain (β) is 50 and the base current (Ib) is 50 μA.",
        solution: "Ic = β × Ib = 50 × 50 × 10⁻⁶ = 2500 × 10⁻⁶ = 2.5 mA."
      }
    ]
  },
  { 
    name: "Alpha", 
    formula: "\\alpha_e = \\frac{I_C}{I_E}",
    explanation: `Detailed Explanation:\n- Concept: Alpha (α) is another transistor ratio. It compares the Collector current (output) to the Emitter current (the total input).
- Because the Collector current is always slightly less than the Emitter current (since the Base steals a tiny bit), Alpha is ALWAYS a number very close to, but slightly less than 1 (e.g., 0.98 or 0.99).`
  }
];

export const syllabus = [
  { term: "First Term", week: 1, topic: "Meaning of magnetic field", unit: 1 },
  { term: "First Term", week: 2, topic: "Magnetic field due to current passing through a straight conductor", unit: 1 },
  { term: "First Term", week: 3, topic: "Magnetic field due to current passing through a circular coil at its center", unit: 1 },
  { term: "First Term", week: 4, topic: "Magnetic field due to current passing through a solenoid", unit: 1 },
  { term: "First Term", week: 5, topic: "The magnetic force acting on a wire carrying current placed in a uniform magnetic field", unit: 1 },
  { term: "First Term", week: 6, topic: "The magnetic torque acting on a coil carrying current placed in a uniform magnetic field", unit: 1 },
  { term: "First Term", week: 9, topic: "Meaning of electromagnetic induction and faraday's law", unit: 2 },
  { term: "First Term", week: 10, topic: "Lenz's rule", unit: 2 },
  { term: "First Term", week: 11, topic: "Mutual and self-induction", unit: 2 },
  { term: "First Term", week: 12, topic: "The electric generator (dynamo)", unit: 2 },
  { term: "First Term", week: 13, topic: "The electric transformer", unit: 2 },
  { term: "Second Term", week: 1, topic: "Black body radiation phenomenon", unit: 3 },
  { term: "Second Term", week: 2, topic: "Phenomenon of thermionic emission", unit: 3 },
  { term: "Second Term", week: 3, topic: "Photoelectric effect", unit: 3 },
  { term: "Second Term", week: 4, topic: "Compton scattering", unit: 3 },
  { term: "Second Term", week: 5, topic: "X-Rays", unit: 3 },
  { term: "Second Term", week: 6, topic: "LASER", unit: 3 },
  { term: "Second Term", week: 9, topic: "Classification of elements according to electric conductivity", unit: 4 },
  { term: "Second Term", week: 10, topic: "Doping with donors and acceptors", unit: 4 },
  { term: "Second Term", week: 11, topic: "The P-N junction (diode)", unit: 4 },
  { term: "Second Term", week: 12, topic: "Bipolar Transistor (P-N-P) and (N-P-N)", unit: 4 },
  { term: "Second Term", week: 13, topic: "Logic gates", unit: 4 }
];

export const problems = [
  {
    id: 1,
    question: "A coil of cross section area 0.2 m² is placed in a uniform magnetic field of density 0.4 T. Calculate the magnetic flux which passes through the coil if the coil is making an angle of 30° with the field lines.",
    options: ["0.08 Wb", "0.04 Wb", "0.02 Wb", "0 Wb"],
    correctAnswer: "0.04 Wb",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Concepts
- Magnetic Flux (Φm) represents the total number of magnetic field lines passing through a given surface area. It is measured in Webers (Wb).
- It depends on three factors:
  1. The strength of the field, known as Magnetic Flux Density (B), measured in Tesla (T).
  2. The Area (A) of the surface, measured in square meters (m²).
  3. The angle between the magnetic field lines and the surface.

Step 2: Identify the Given Information
- Area (A) = 0.2 m²
- Magnetic Flux Density (B) = 0.4 T
- The angle (θ) between the coil itself and the field lines = 30°.

Step 3: Choose the Correct Formula
- The formula for magnetic flux is: Φm = B × A × sin(θ)
- Note: We use sin(θ) because θ is the angle between the coil's surface and the field. If the angle was given between the normal (perpendicular) to the coil and the field, we would use cos(θ).

Step 4: Calculate
- Φm = 0.4 × 0.2 × sin(30°)
- We know that sin(30°) = 0.5
- Φm = 0.08 × 0.5 = 0.04 Wb.

Final Answer: 0.04 Wb`
  },
  {
    id: 2,
    question: "A coil of cross section area 0.2 m² is placed in a uniform magnetic field of density 0.4 T. Calculate the magnetic flux which passes through the coil if the coil is perpendicular on the field.",
    options: ["0.08 Wb", "0.04 Wb", "0.1 Wb", "0 Wb"],
    correctAnswer: "0.08 Wb",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Scenario
- When a coil is placed 'perpendicular' to a magnetic field, it means the field lines are hitting the surface straight on. This is the position where the maximum number of field lines can pass through the coil, meaning the magnetic flux will be at its absolute maximum.

Step 2: Identify the Given Information
- Area (A) = 0.2 m²
- Magnetic Flux Density (B) = 0.4 T
- Angle (θ) = 90° (because perpendicular means a 90-degree angle between the coil surface and the field lines).

Step 3: Formulate and Calculate
- Formula: Φm = B × A × sin(θ)
- sin(90°) = 1 (this mathematically proves that flux is maximum here!)
- Φm = 0.4 × 0.2 × 1
- Φm = 0.08 Wb.

Final Answer: 0.08 Wb`
  },
  {
    id: 3,
    question: "Calculate the intensity of the electric current which produces a magnetic flux of density 2 × 10⁻⁴ Tesla at a point 4 cm far from a straight wire in air (µ = 4π × 10⁻⁷ Wb/A.m).",
    options: ["20 A", "40 A", "10 A", "80 A"],
    correctAnswer: "40 A",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Physics Principle
- Whenever an electric current flows through a straight wire, it creates a magnetic field around it in the shape of concentric circles. 
- Ampere's Law gives us the formula to calculate the strength of this field (B) at a certain distance (d) from the wire: 
  B = (µ × I) / (2π × d)
  (where µ is the magnetic permeability of the medium, which dictates how well the medium supports a magnetic field. Air is essentially a vacuum for this purpose, with µ = 4π × 10⁻⁷).

Step 2: List the Knowns & Convert Units
- Magnetic Flux Density (B) = 2 × 10⁻⁴ T
- Distance (d) = 4 cm = 0.04 m (Always convert cm to meters!)
- Permeability of air (µ) = 4π × 10⁻⁷ Wb/A.m
- We need to find Current (I).

Step 3: Rearrange Formula & Solve
- Original: B = (µ × I) / (2π × d)
- Rearranged for I: I = (B × 2π × d) / µ
- Plug in numbers: I = (2×10⁻⁴ × 2π × 0.04) / (4π × 10⁻⁷)
- Notice that '2π' at the top and '4π' at the bottom cancel out to leave a '2' at the bottom.
- I = (2×10⁻⁴ × 0.04) / (2 × 10⁻⁷)
- I = (0.08 × 10⁻⁴) / (2 × 10⁻⁷) = 0.04 × 10³ = 40 Amperes.

Final Answer: 40 A`
  },
  {
    id: 4,
    question: "Calculate the intensity of the electric current which when passes in a circular loop of diameter 22 cm and the number of turns 50 turns it will produce a magnetic flux of density 2 × 10⁻⁴ Tesla at the center of the coil (µ = 4π × 10⁻⁷ Wb/A.m, π ≈ 22/7).",
    options: ["0.7 A", "1.4 A", "0.35 A", "7 A"],
    correctAnswer: "0.7 A",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Physics Principle
- When a wire is bent into a circular coil, the magnetic field lines concentrate at the center. The strength of the field (B) at the absolute center of a circular coil depends on the number of turns (N) in the coil, the current (I), and the radius (r) of the coil.
- The formula is: B = (µ × N × I) / (2 × r)

Step 2: List the Knowns & Convert Units
- Diameter = 22 cm. Therefore, Radius (r) = 11 cm = 0.11 m.
- Number of turns (N) = 50
- Magnetic Field (B) = 2 × 10⁻⁴ T
- µ = 4π × 10⁻⁷ Wb/A.m (use π = 22/7)

Step 3: Rearrange Formula & Solve
- Rearranged for I: I = (B × 2 × r) / (µ × N)
- Plug in numbers: I = (2×10⁻⁴ × 2 × 0.11) / (4π × 10⁻⁷ × 50)
- I = (4.4 × 10⁻⁵) / (4 × (22/7) × 10⁻⁷ × 50)
- I = 0.7 Amperes.

Final Answer: 0.7 A`
  },
  {
    id: 5,
    question: "An electric current intensity 49 Ampere passes in a wire of length 11 cm. If the wire is in the form of an arc from a circle of radius 3.5 cm, calculate the density of the magnetic flux at the center of the circle (µ = 4π × 10⁻⁷ Wb/A.m).",
    options: ["2.2 × 10⁻⁴ T", "4.4 × 10⁻⁴ T", "8.8 × 10⁻⁴ T", "1.1 × 10⁻⁴ T"],
    correctAnswer: "4.4 × 10⁻⁴ T",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Scenario
- We have a wire shaped like a piece of a circle (an arc), not a full circle. So we need to figure out exactly what 'fraction' of a circle this arc represents. This fraction is equivalent to the 'Number of turns' (N).

Step 2: Calculate N (Number of Turns)
- The full circumference of a complete circle would be 2πr.
- Our wire's length (L) is just a piece of that circumference.
- Therefore, N = L / (2πr)
- Convert units: L = 11 cm = 0.11 m. Radius r = 3.5 cm = 0.035 m.
- N = 0.11 / (2 × (22/7) × 0.035) = 0.11 / (44/7 × 0.035) = 0.11 / 0.22 = 0.5 turns. So it's exactly a semi-circle!

Step 3: Calculate Magnetic Flux Density (B)
- Now use the standard circular coil formula: B = (µ × N × I) / (2 × r)
- B = (4π × 10⁻⁷ × 0.5 × 49) / (2 × 0.035)
- B = (2π × 10⁻⁷ × 49) / 0.07
- Using π = 22/7: B = (2 × (22/7) × 10⁻⁷ × 49) / 0.07 = 4.4 × 10⁻⁴ Tesla.

Final Answer: 4.4 × 10⁻⁴ T`
  },
  {
    id: 6,
    question: "A current of 3 ampere passed in a solenoid of length 62.8 cm. If the number of turns of the solenoid is 100 turns, calculate the density of magnetic flux in air at a point along the axis near its center (π = 3.14).",
    options: ["3 × 10⁻⁴ T", "6 × 10⁻⁴ T", "1.2 × 10⁻³ T", "2 × 10⁻⁴ T"],
    correctAnswer: "6 × 10⁻⁴ T",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Solenoid
- A solenoid is a long coil of wire wrapped in many turns (like a spring). When current flows through it, it acts like a bar magnet.
- The magnetic field inside a long solenoid is very uniform and strong, while outside it is very weak. The formula for the field inside is: B = (µ × N × I) / L
  (where N is the total number of turns and L is the total length of the solenoid)

Step 2: List the Knowns & Convert
- Current (I) = 3 A
- Length (L) = 62.8 cm = 0.628 m
- Turns (N) = 100
- µ = 4π × 10⁻⁷ (and π = 3.14)

Step 3: Calculate
- B = (4 × 3.14 × 10⁻⁷ × 100 × 3) / 0.628
- The top becomes: (12.56 × 10⁻⁷ × 300) = 3768 × 10⁻⁷
- Divide by 0.628 = 6000 × 10⁻⁷ = 6 × 10⁻⁴ Tesla.

Final Answer: 6 × 10⁻⁴ T`
  },
  {
    id: 7,
    question: "A straight wire of length 20 cm carrying an electric current of 3 A is placed in a magnetic field of density 2 × 10⁻² Tesla. Calculate the magnetic force acting on the wire if it is placed perpendicular to the direction of the magnetic field.",
    options: ["12 × 10⁻³ N", "6 × 10⁻³ N", "0 N", "24 × 10⁻³ N"],
    correctAnswer: "12 × 10⁻³ N",
    explanation: `Detailed Explanation:\n
Step 1: Understand the Physics Principle
- The Motor Effect: A wire carrying a current that is placed inside an external magnetic field will experience a physical force. 
- The force depends on the magnetic field strength (B), the current (I), the length of the wire inside the field (L), and the angle (θ) at which it is placed.
- Formula: F = B × I × L × sin(θ)

Step 2: Analyze Given Data
- L = 20 cm = 0.2 m
- I = 3 A
- B = 2 × 10⁻² T
- θ = 90° (Because it says 'perpendicular'. sin(90°) = 1, giving us the maximum possible force).

Step 3: Calculate
- F = 2 × 10⁻² × 3 × 0.2 × 1
- F = 6 × 10⁻² × 0.2 = 1.2 × 10⁻² Newtons.
- To match the options, rewrite 1.2 × 10⁻² as 12 × 10⁻³ N.

Final Answer: 12 × 10⁻³ N`
  },
  {
    id: 8,
    question: "A coil of 200 turns each of area 5 cm² placed perpendicular to a magnetic flux of density 4 × 10⁻³ Tesla. Calculate the induced e.m.f produced in the coil if the density of the magnetic flux is decreased to 15 × 10⁻⁴ T in 0.01 S.",
    options: ["+2.5 × 10⁻² V", "-2.5 × 10⁻² V", "+0.25 V", "+5.0 × 10⁻² V"],
    correctAnswer: "+2.5 × 10⁻² V",
    explanation: `Detailed Explanation:\n
Step 1: Understand Faraday's Law of Electromagnetic Induction
- If the magnetic flux passing through a coil changes over time (either getting stronger or weaker), it creates an electrical 'pressure' called Electromotive Force (emf). This is how electrical generators work!
- Faraday's Law: emf = -N × (ΔΦ / Δt). The negative sign represents Lenz's Law (the induced emf opposes the change that created it).
- Remember, Φ = B × A. Since only the magnetic field (B) is changing here, we can write ΔΦ = A × ΔB = A × (Final B - Initial B).

Step 2: Prepare the Data
- Turns (N) = 200
- Area (A) = 5 cm² = 5 × 10⁻⁴ m² (conversion from cm² to m² requires multiplying by 10⁻⁴!)
- Initial B = 4 × 10⁻³ T = 40 × 10⁻⁴ T
- Final B = 15 × 10⁻⁴ T
- Change in time (Δt) = 0.01 seconds.

Step 3: Calculate
- ΔB = Final B - Initial B = (15 × 10⁻⁴) - (40 × 10⁻⁴) = -25 × 10⁻⁴ T. (The negative signifies it decreased).
- emf = -200 × (5 × 10⁻⁴) × (-25 × 10⁻⁴) / 0.01
- The two negatives cancel out to become positive.
- emf = (1000 × 10⁻⁴) × (25 × 10⁻⁴) / 0.01 = 0.1 × 0.0025 / 0.01 = +2.5 × 10⁻² Volts.

Final Answer: +2.5 × 10⁻² V`
  },
  {
    id: 9,
    question: "Determine the mutual inductance between two coils when a current changing at 50 A/s in one coil induced an emf of 80 mV in the other.",
    options: ["1.6 × 10⁻³ H", "1.6 H", "0.625 H", "8 × 10⁻³ H"],
    correctAnswer: "1.6 × 10⁻³ H",
    explanation: `Detailed Explanation:\n
Step 1: Understand Mutual Induction
- When two coils of wire are placed close to each other, a changing current in the first coil (Primary) creates a changing magnetic field. This field passes through the second coil (Secondary) and induces an emf in it.
- The relationship between the rate of current change in the first coil and the emf produced in the second is defined by Mutual Inductance (M), measured in Henrys (H).
- Formula: emf_secondary = -M × (ΔI_primary / Δt)

Step 2: Prepare Given Data
- Rate of current change (ΔI / Δt) = 50 Amperes per second.
- Induced emf = 80 mV = 80 × 10⁻³ Volts. (Always use standard SI units).
- We need to find M. (We can ignore the negative sign for calculating the magnitude).

Step 3: Calculate
- 80 × 10⁻³ = M × 50
- M = (80 × 10⁻³) / 50 
- M = (80 / 50) × 10⁻³ = 1.6 × 10⁻³ Henrys.

Final Answer: 1.6 × 10⁻³ H`
  },
  {
    id: 10,
    question: "The electrical signal in the base of a transistor is 200 µA, the collector current is to be 10 mA. Calculate beta_e (current gain).",
    options: ["20", "50", "100", "0.98"],
    correctAnswer: "50",
    explanation: `Detailed Explanation:\n
Step 1: Terminology of Transistors
- A Bipolar Junction Transistor acts as an amplifier. A tiny current entering the 'Base' controls a much larger current flowing through the 'Collector'.
- The ratio of how much it amplifies the current is called Current Gain (represented by β_e for common-emitter configuration).
- Formally: β_e = Collector Current (I_c) / Base Current (I_b).

Step 2: Convert Units Carefully
- Collector Current (I_c) = 10 mA = 10 × 10⁻³ Amperes.
- Base Current (I_b) = 200 µA = 200 × 10⁻⁶ Amperes. (Micro = 10⁻⁶).

Step 3: Calculate Current Gain
- β_e = (10 × 10⁻³) / (200 × 10⁻⁶)
- Let's simplify the math: 10 × 10⁻³ = 10,000 × 10⁻⁶.
- β_e = (10,000 × 10⁻⁶) / (200 × 10⁻⁶) = 10,000 / 200 = 50.
- This means the transistor amplifies the base current by 50 times.
  
Final Answer: 50`
  }
];

export const experiments = [
  {
    name: "Faraday's Experiment (Electromagnetic Induction)",
    description: "When Faraday plunged a magnet (in and out) the coil, he noticed that the pointer of the galvanometer was deflected momentarily in a certain direction and opposite direction, while when the magnet put inside the coil at rest it didn't deflect the galvanometer."
  },
  {
    name: "Mutual Induction Experiment",
    description: "The induced emf generated in the secondary coil by many ways: 1) Plunge or take away primary coil. 2) Using rheostat. 3) Switch on/off. Forward induction generated when moving away, decreasing current, switching off. Backward induction generated when switching on, increasing current, moving near."
  },
  {
    name: "Self Induction Experiment",
    description: "On switching off the circuit, an electric spark is passed between the two terminals of the switch and the neon lamp glows for a very short period of time. A large forward induced emf is generated in the coil due to its big number of turns which cuts magnetic flux."
  }
];


export const factors = [
  {
    subject: "Magnetic flux density at a distance (d) from a straight wire",
    items: [
      "The electric current intensity passing through the wire (B α I)",
      "The normal distance between the point of measuring and the wire (B α 1/d)",
      "The magnetic permeability of a medium (B α μ)"
    ]
  },
  {
    subject: "Magnetic flux density at the center of a circular coil",
    items: [
      "Number of turns of the circular coil (B α N)",
      "The electric current intensity (B α I)",
      "The radius of circular coil (B α 1/r)",
      "The magnetic permeability of a medium (B α μ)"
    ]
  },
  {
    subject: "Magnetic flux density at a point on the axis of a solenoid",
    items: [
      "Number of turns (B α N)",
      "The electric current intensity (B α I)",
      "The length of solenoid (B α 1/L)",
      "The magnetic permeability of a medium (B α μ)"
    ]
  },
  {
    subject: "The magnetic force (F = BIL Sinθ)",
    items: [
      "The magnetic flux density (F α B)",
      "Electric current intensity (F α I)",
      "Length of the wire (F α L)",
      "Angle between wire and field (F α Sin θ)"
    ]
  },
  {
    subject: "The magnetic torque (τ = BIAN Sinθ)",
    items: [
      "The magnetic flux density (τ α B)",
      "Current intensity (τ α I)",
      "Surface area of a coil (τ α A)",
      "Number of turns (τ α N)",
      "The angle between flux lines and normal on the coil (τ α Sin θ)"
    ]
  },
  {
    subject: "The magnetic dipole moment",
    items: [
      "Number of turns of coil (|md| α N)",
      "Current intensity (|md| α I)",
      "Surface area of a coil (|md| α A)"
    ]
  },
  {
    subject: "The induced e.m.f. generated in a coil",
    items: [
      "The rate of change of magnetic flux lines (emf α ΔΦm/Δt)",
      "The number of turns (N) (emf α N)"
    ]
  },
  {
    subject: "The coefficient of mutual induction between two coils",
    items: [
      "The presence of an iron core inside the coil",
      "The volume of the coil and the number of its turns",
      "The distance separating them"
    ]
  },
  {
    subject: "The coefficient of self induction of a coil",
    items: [
      "The geometry of the coil (size, length and the number of turns)",
      "The distance between the turns",
      "The presence of an iron core inside the coil (magnetic permeability)"
    ]
  },
  {
    subject: "The induced e.m.f. in a straight wire moving in a magnetic field",
    items: [
      "The density of magnetic flux (B) (emf α B)",
      "The length of the wire (L) (emf α L)",
      "The velocity of motion of the wire (V) (emf α v)",
      "The angle (θ) between the magnetic field and the direction of motion of the wire (emf α Sin θ)"
    ]
  },
  {
    subject: "The induced e.m.f. produced in the dynamo coil",
    items: [
      "The number of turns of the coil (N) (emf α N)",
      "The density of magnetic flux of the used magnet (B) (emf α B)",
      "The area of the coil (A) (emf α A)",
      "The angular Velocity of the coil (ω) (emf α ω)",
      "Sinθ (emf α Sin θ), where θ is the angle between the direction of the magnetic field and the direction of motion"
    ]
  },
  {
    subject: "Maximum wavelength of Planck’s radiation (λmax)",
    items: [
      "Temperature in kelvin"
    ]
  },
  {
    subject: "Work function for a surface of metal (E_w)",
    items: [
      "Kind of material"
    ]
  },
  {
    subject: "Energy of a moving photon (E)",
    items: [
      "Frequency of the photon (E α ν)",
      "Wavelength of the photon (E α 1/λ)"
    ]
  },
  {
    subject: "Momentum of a moving photon (PL)",
    items: [
      "Mass of photon",
      "Energy of photon (PL α E)",
      "Frequency of a photon (PL α ν)",
      "The wavelength of photon (PL α 1/λ)"
    ]
  },
  {
    subject: "X-ray Soft radiation (continuous radiation)",
    items: [
      "Potential difference of the Coolidge tube"
    ]
  },
  {
    subject: "X-ray hard radiation (characteristic line radiation)",
    items: [
      "Target material (atomic number)"
    ]
  }
];

