export const curriculum = [
  {
    unit: "Unit 1: Magnetic Effect of Electric Current",
    description: "Study of magnetic fields created by electric currents, magnetic forces, and torques.",
    lessons: [
      {
        title: "Magnetic Field & Flux",
        content: `**Magnetic Field:** The area around a magnet or a current-carrying conductor where magnetic forces can act.\n\n**Magnetic Flux (Φm):** The total number of magnetic field lines passing through a surface area. Formula: \`Φm = B · A · cos(θ)\` where θ is the angle between the magnetic field and the normal to the surface.\n- **Maximum Flux:** When the coil surface is perpendicular to the magnetic field (normal is parallel, θ = 0°).\n- **Zero Flux:** When the coil surface is parallel to the magnetic field (normal is perpendicular, θ = 90°).\n\n**Magnetic Flux Density (B):** The number of magnetic field lines passing normally through a unit area. Unit: **Tesla (T)** or Wb/m².\n\n**Magnetic Permeability (µ):** The ability of a medium to allow magnetic flux lines to penetrate it.\n\n**Neutral Point:** The point where total magnetic flux density vanishes, because two magnetic fields are equal in magnitude and opposite in direction.`
      },
      {
        title: "Magnetic Field of Conductors",
        content: `**1. Straight Wire:**\n- **Formula:** \`B = (µ·I) / (2π·d)\`\n- **Factors:** Directly proportional to current (I), inversely proportional to perpendicular distance (d).\n- **Direction (Ampere's Right Hand Rule):** Point thumb in direction of current, curled fingers show direction of circular magnetic field lines.\n- **Visual Concept:** The magnetic field forms concentric circles around the wire. Iron filings spread on a paper around the wire will align in these circles.\n\n**2. Circular Coil (Loop):**\n- **Formula:** \`B = (µ·N·I) / (2r)\`\n- **Factors:** Number of turns (N), current (I), and inversely to radius (r).\n- **Direction:** Using Ampere's Right Hand Rule or Right-Hand Screw Rule. At the center, field lines are straight and parallel.\n\n**3. Solenoid:**\n- **Formula:** \`B = (µ·N·I) / L = µ·n·I\` (where n = N/L)\n- **Factors:** Number of turns (N), current (I), inversely to length (L).\n- **Direction:** Wrap fingers of right hand around solenoid in direction of current; thumb points to the North pole.\n- **Visual Concept:** Field lines inside are parallel uniform lines from South to North pole.`
      },
      {
        title: "Magnetic Forces & Torques",
        content: `**Magnetic Force on a Straight Wire:**\n- **Formula:** \`F = B·I·L·sin(θ)\`\n- **Maximum Force:** Wire placed perpendicular to the magnetic field (θ = 90°).\n- **Zero Force:** Wire placed parallel to the magnetic field (θ = 0°).\n- **Direction:** Determined by **Fleming's Left Hand Rule**.\n\n**Magnetic Torque on a Rectangular Coil:**\n- **Formula:** \`τ = B·I·A·N·sin(θ)\` where θ is the angle between the magnetic field and the **normal** to the coil.\n- **Maximum Torque:** Coil plane is parallel to the magnetic field (normal is perpendicular, θ = 90°).\n- **Zero Torque:** Coil plane is perpendicular to the magnetic field (normal is parallel, θ = 0°).\n\n**Magnetic Dipole Moment (md):**\n- **Formula:** \`|md| = I·A·N\` or \`|md| = τ / (B·sinθ)\`.\n- It is a vector emanating from the North Pole of the coil, perpendicular to its area.`
      }
    ]
  },
  {
    unit: "Unit 2: Electromagnetic Induction",
    description: "Principles of generating electromotive force (emf) from changing magnetic fields.",
    lessons: [
      {
        title: "Faraday's & Lenz's Laws",
        content: `**Electromagnetic Induction:** A phenomenon in which an induced electromotive force (emf) and an induced current are generated in a conductor by a changing magnetic field.\n\n**Faraday's Experiment:**\nWhen a magnet is plunged into and out of a coil, the galvanometer deflects momentarily in opposite directions. If the magnet is at rest inside, there is no deflection. This proves that a *change* in flux is required.\n\n**Faraday's Law:**\nAverage induced emf: \`emf = -N · (ΔΦm / Δt)\`\n\n**Lenz's Law (The Negative Sign):**\nThe induced current must be in a direction to oppose the change that produced it. Used to determine the direction of induced current in a coil.`
      },
      {
        title: "Self and Mutual Induction",
        content: `**Mutual Induction between two coils (M):**\nThe electromagnetic effect where changing current in a primary coil induces an emf in a nearby secondary coil, which opposes the change.\n- **Factors:** Volume/turns of coils, distance separating them, presence of an iron core.\n- **Experiment:** Plunging primary into secondary, switching circuit on/off, or changing rheostat alters flux.\n  - *Forward Induced EMF:* Created when breaking circuit, decreasing current, or moving coils away from each other.\n  - *Backward Induced EMF:* Created when making circuit, increasing current, or moving coils closer.\n\n**Self Induction (L):**\nInducing an emf in a coil due to changing current within the *same* coil.\n- **Experiment:** Opening a circuit with a strong electromagnet and neon lamp creates a bright spark and flashes the lamp momentarily. This happens because a large forward induced emf is generated when the circuit is abruptly opened.\n\n**Eddy Currents:**\nInduced currents that circulate in closed paths inside a solid conductor exposed to a changing magnetic field. They cause a heating effect (used to heat metals but wasteful in transformers).`
      },
      {
        title: "Applications: Dynamo & Transformer",
        content: `**AC Dynamo (Generator):**\n- **Scientific Idea:** Electromagnetic induction. Converts mechanical energy to electrical energy.\n- **Components:** Rectangular coil, strong magnet, two slip rings, two graphite brushes.\n- **Induced EMF Formula:** \`emf = N·B·A·ω·sin(θ)\` where ω = 2πf.\n- **Max EMF:** When the coil plane is parallel to the magnetic field (rate of cutting flux is maximum).\n- **Zero EMF:** When the coil plane is perpendicular to the magnetic field.\n\n**Electric Transformer:**\n- **Scientific Idea:** Mutual induction between two coils.\n- **Function:** Step up or step down alternating voltage.\n- **Core Structure:** Laminated soft-iron core to reduce energy loss from Eddy Currents.\n- **Efficiency Limits:** Connecting to DC battery yields zero induced emf because DC flux is constant.\n- **Step-Up Transformer:** N_s > N_p, V_s > V_p, but I_s < I_p (Decreases current to reduce power loss during transmission).`
      }
    ]
  },
  {
    unit: "Unit 3: Modern Physics & Quantum Theory",
    description: "The transition from classical mechanics to quantum principles, wave-particle duality.",
    lessons: [
      {
        title: "Blackbody Radiation & Planck",
        content: `**Classical vs Modern Physics:**\n- *Classical:* Explains everyday phenomena (macroscopic). Predicts radiation intensity increases indefinitely with frequency.\n- *Modern:* Deals with atomic/subatomic realms. Explains why radiation intensity decreases at very high frequencies.\n\n**Black Body:**\nAn ideal system that absorbs 100% of incident radiation, then re-emits it totally.\n\n**Planck's Distribution Curve:**\nPlots radiation intensity against wavelength. Shows that at very high frequencies (short wavelengths), intensity approaches zero.\n\n**Wien's Law:**\nThe wavelength at maximum radiation (λ_max) is inversely proportional to absolute temperature.\n\`λ1 / λ2 = T2 / T1\`\n\n**The Photon:**\nA quantum of energy (\`E = h·ν\`) with particle nature, no charge, and possessing momentum (\`PL = h/λ\`).`
      },
      {
        title: "Photoelectric & Compton Effects",
        content: `**Thermo-ionic Emission:**\nEmission of electrons from a metal surface when heated (Scientific idea behind the **Cathode Ray Tube / CRT**). \n- *CRT Structure:* Filament heats cathode, liberating electrons. Grid controls number of electrons. Anode accelerates them towards a fluorescent screen. Magnetic/electric fields deflect the beam to sweep the screen.\n\n**Photoelectric Effect:**\nEmission of electrons from a metal when struck by light. Used in photoelectric cells.\n- **Work Function (E_w):** Minimum energy needed to free electrons from the surface. Depends only on the metal's kind.\n- **Condition:** Incident photon energy must be greater than or equal to E_w.\n- **Einstein’s Equation:** \`K.E = E_photon - E_w = h·ν - E_w\`\n\n**Compton Effect:**\nWhen a high-frequency photon (X-ray or Gamma) collides with a free electron:\n- Photon: Loses energy, decreases frequency, increases wavelength, scatters at an angle.\n- Electron: Gains kinetic energy, increases velocity, recedes at an angle.\n- *Significance:* Proves the particle nature of photons.`
      }
    ]
  },
  {
    unit: "Unit 4: X-Rays & Lasers",
    description: "Production and application of high-energy electromagnetic radiation.",
    lessons: [
      {
        title: "X-Rays & The Coolidge Tube",
        content: `**X-Rays:**\nInvisible electromagnetic waves of high energy and short wavelength (between UV and Gamma rays).\n- **Properties:** Penetrate media easily, ionize gases, diffract in crystals, affect photographic plates.\n\n**The Coolidge Tube:**\nUsed to generate X-rays. A filament heats a cathode to emit electrons, which are accelerated by a high voltage towards a heavy metal anode target.\n\n**Types of X-Ray Radiation:**\n**1. Continuous (Soft/Bremsstrahlung):** Generated when accelerated electrons are slowed down by the target atoms' nuclei, losing kinetic energy as continuous electromagnetic radiation across all wavelengths.\n**2. Characteristic (Line/Hard):** Generated when a high-speed electron knocks an inner shell electron out of a target atom. An outer electron falls into the vacancy, emitting a sharp, definite X-ray wavelength characteristic of the target material's atomic number.`
      },
      {
        title: "Lasers",
        content: `**LASER:** Light Amplification by Stimulated Emission of Radiation.\n\n**Types of Emission:**\n- **Spontaneous:** Atom drops to lower level naturally after lifetime ends. Emits random, incoherent photons.\n- **Stimulated:** An incoming photon matching the energy gap hits the excited atom *before* its lifetime ends. The atom drops down, emitting a second photon identical to the first. *Result:* Two coherent, in-phase photons.\n\n**Requirements for Laser Action:**\n1. **Population Inversion:** More atoms in the excited (metastable) state than the ground state.\n2. **Optical Pumping:** Transferring external energy to Excite the medium.\n3. **Resonant Cavity:** Parallel mirrors reflecting photons back and forth through the medium to trigger an avalanche of stimulated emissions.\n\n**Laser Properties:**\nMonochromatic (single wavelength), highly collimated (doesn't spread out), coherent (photons in same phase), and retains high intensity over distance (defies inverse square law).`
      }
    ]
  },
  {
    unit: "Unit 5: Semiconductors & Electronics",
    description: "The foundation of digital devices: diodes, transistors, and logic gates.",
    lessons: [
      {
        title: "Semiconductors & Doping",
        content: `**Pure Semiconductors (e.g., Silicon):**\nConductivity is between conductors and insulators. At thermal equilibrium, the number of free electrons (n) equals the number of holes (p).\n- *Heating:* Breaks bonds, generating electron-hole pairs, increasing conductivity.\n\n**Doping:**\nAdding impurities to increase conductivity.\n- **N-Type Crystal:** Doped with pentavalent atoms (Phosphorus, Antimony, Arsenic). The 5th valence electron is free. *Majority carriers:* Electrons (n > p).\n- **P-Type Crystal:** Doped with trivalent atoms (Boron, Aluminum, Gallium). Leaves a vacant bond (hole). *Majority carriers:* Holes (p > n).`
      },
      {
        title: "The PN Junction (Diode)",
        content: `**PN Junction:** Formed by attaching P-type and N-type crystals.\n- **Depletion Region:** A neutral zone at the border where electrons and holes annihilate. It acts as a barrier with an internal electric field that stops further diffusion.\n- **Forward Bias:** P connected to Positive, N to Negative. Shrinks the depletion region, reduces resistance, current passes.\n- **Reverse Bias:** P connected to Negative, N to Positive. Widens depletion region, increases resistance, no current passes.\n- **Application:** Acts as a one-way switch, used for half-wave rectification of AC current.`
      },
      {
        title: "Transistors & Logic Gates",
        content: `**The Transistor (e.g., NPN):**\nHas three terminals: Emitter, Base, Collector.\n- **Current Equation:** \`I_E = I_B + I_C\`\n- **Current Gain (βe):** Ratio of Collector current to Base current (\`I_C / I_B\`). Indicates amplification power.\n- **Transistor as a Switch:**\n  - *Switch ON:* Forward bias at the base causes large I_C flow.\n  - *Switch OFF:* Zero or reverse bias at the base stops I_B, so I_C stops entirely.\n\n**Logic Gates:**\nDigital circuits using binary states (0/OFF and 1/ON).\n- **NOT Gate (Inverter):** 1 input, 1 output. Output is opposite of input. Equivalent to a switch parallel to a circuit lamp.\n- **AND Gate (Simultaneity):** Minimum 2 inputs. Outputs 1 *only* if ALL inputs are 1. Equivalent to switches in series.\n- **OR Gate (Optionality):** Minimum 2 inputs. Outputs 1 if *any* input is 1. Equivalent to switches in parallel.`
      }
    ]
  }
];
