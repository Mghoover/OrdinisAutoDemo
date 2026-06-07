import { business } from "../config/business";

export type DetailPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  heroImage?: string;
  heroAlt?: string;
  highlights: string[];
  sections: Array<{
    title: string;
    body: string[];
    bullets?: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaBody: string;
};

export const trustIndicators = [
  { label: "Former Toyota Technician", value: "Dealer-level diagnostic discipline" },
  { label: "Transparent Estimates", value: "Clear priorities before repairs begin" },
  { label: "Family Vehicles", value: "Maintenance plans for daily drivers" },
  { label: "Fleet Ready", value: "Practical scheduling for small businesses" },
];

export const services: DetailPage[] = [
  {
    slug: "diagnostics",
    title: "Automotive Diagnostics",
    eyebrow: "Root-cause testing",
    summary:
      "Electrical, drivability, warning light, and no-start diagnostics with a test-first process.",
    heroImage: "/images/auto/diagnostics.png",
    heroAlt: "Technician using a diagnostic tablet beside an open engine bay",
    highlights: ["Check engine lights", "No-start testing", "Electrical faults", "Drivability complaints"],
    sections: [
      {
        title: "Testing Before Parts",
        body: [
          "Good diagnostics protect your budget. We start with the symptom, verify the concern, scan modules when appropriate, and test the related systems before recommending parts.",
          "That process is especially important on modern vehicles where one warning light can point to wiring, sensors, software, mechanical wear, or a maintenance issue.",
        ],
      },
      {
        title: "What We Diagnose",
        body: ["Our diagnostic visits are built for clear answers and practical next steps."],
        bullets: [
          "Check engine lights and emissions faults",
          "Hard starts, stalls, misfires, and poor acceleration",
          "Battery drain and charging system concerns",
          "ABS, traction, air conditioning, and body electrical faults",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you diagnose a warning light without replacing parts first?",
        answer:
          "Yes. We use scan data, visual inspection, and system tests to narrow the cause before recommending a repair.",
      },
      {
        question: "How long does automotive diagnostics take?",
        answer:
          "Many concerns can be evaluated the same day. Intermittent electrical or drivability issues may require additional testing time.",
      },
    ],
    ctaTitle: "Need a Clear Answer?",
    ctaBody: "Schedule a diagnostic visit and describe the symptom, warning light, and when it happens.",
  },
  {
    slug: "brake-repair",
    title: "Brake Repair",
    eyebrow: "Stopping power",
    summary:
      "Brake inspections, pads, rotors, calipers, fluid service, and noise diagnosis for safe daily driving.",
    heroImage: "/images/auto/brake-service.png",
    heroAlt: "Technician servicing a brake rotor and caliper",
    highlights: ["Grinding brakes", "Squeaks and vibration", "Rotor inspection", "Brake fluid service"],
    sections: [
      {
        title: "Brake Repairs With the Right Priority",
        body: [
          "Brake noise does not always mean the same repair. We inspect pad thickness, rotor condition, caliper movement, hose condition, and fluid quality before building an estimate.",
          "The goal is to restore confident stopping without overselling parts that do not solve the concern.",
        ],
      },
      {
        title: "Common Brake Problems",
        body: ["Most brake visits start with a sound, feel, or warning light."],
        bullets: [
          "Grinding or metal-on-metal noise",
          "Steering wheel vibration while braking",
          "Soft brake pedal or longer stopping distance",
          "Brake warning light or ABS light",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need rotors every time I need brake pads?",
        answer:
          "Not always. Rotor condition, thickness, scoring, and runout determine whether resurfacing or replacement is appropriate.",
      },
      {
        question: "Is it safe to drive with grinding brakes?",
        answer:
          "Grinding usually means the vehicle should be inspected promptly. Continued driving can damage rotors and reduce stopping ability.",
      },
    ],
    ctaTitle: "Hear Grinding or Squealing?",
    ctaBody: "Book a brake inspection before a small pad issue becomes a larger repair.",
  },
  {
    slug: "oil-change",
    title: "Oil Change Service",
    eyebrow: "Maintenance basics",
    summary:
      "Oil and filter service with fluid checks, maintenance review, and interval guidance for your vehicle.",
    heroImage: "/images/auto/diagnostics.png",
    heroAlt: "Clean automotive service bay with technician reviewing vehicle data",
    highlights: ["Synthetic oil", "Filter replacement", "Fluid checks", "Maintenance reminders"],
    sections: [
      {
        title: "More Than a Quick Drain and Fill",
        body: [
          "Oil service is one of the best chances to catch small issues before they become expensive. We review visible leaks, filters, tires, fluids, belts, and maintenance history while the vehicle is in the bay.",
          "We match oil type and interval recommendations to how the vehicle is actually used, including short-trip commuting, heat, towing, and fleet mileage.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should I change my oil?",
        answer:
          "Many modern vehicles use 5,000 to 10,000 mile intervals, but driving habits and vehicle condition matter. We help set a practical interval.",
      },
      {
        question: "Do you reset maintenance reminders?",
        answer: "Yes, we reset reminders after service and note upcoming maintenance items.",
      },
    ],
    ctaTitle: "Keep Maintenance Simple",
    ctaBody: "Schedule an oil change and get a practical maintenance review at the same visit.",
  },
  {
    slug: "suspension-repair",
    title: "Suspension Repair",
    eyebrow: "Ride and handling",
    summary:
      "Diagnosis and repair for clunks, vibration, uneven tire wear, steering looseness, and worn suspension parts.",
    highlights: ["Struts and shocks", "Ball joints", "Control arms", "Alignment-related wear"],
    sections: [
      {
        title: "Find the Source of the Noise",
        body: [
          "Suspension noises often echo through the vehicle. We inspect steering and suspension components under load, look for play and wear, and separate tire, brake, wheel bearing, and suspension causes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can suspension problems ruin tires?",
        answer:
          "Yes. Worn suspension or steering parts can create uneven wear and shorten tire life even after an alignment.",
      },
      {
        question: "Do you perform alignments?",
        answer:
          "This template supports either in-house alignment or referral language. The demo recommends alignment after qualifying suspension repairs.",
      },
    ],
    ctaTitle: "Clunks, Pulls, or Uneven Tire Wear?",
    ctaBody: "Schedule a suspension inspection before worn parts create additional damage.",
  },
  {
    slug: "ac-repair",
    title: "Auto AC Repair",
    eyebrow: "Comfort systems",
    summary:
      "Air conditioning diagnostics for weak cooling, leaks, compressor issues, blower faults, and electrical controls.",
    highlights: ["Leak checks", "Compressor testing", "Blower diagnosis", "Refrigerant service"],
    sections: [
      {
        title: "AC Repair Starts With Diagnosis",
        body: [
          "Low refrigerant is usually a symptom, not the whole problem. We check pressure behavior, visible leaks, controls, fans, compressor operation, and airflow so the repair addresses the cause.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you just recharge my AC?",
        answer:
          "We can service refrigerant when appropriate, but a system that is low often has a leak that should be found before repeated recharges.",
      },
      {
        question: "Why does my AC cool while driving but not at idle?",
        answer:
          "That can point to airflow, fan, pressure, or compressor control issues and should be tested in the shop.",
      },
    ],
    ctaTitle: "AC Not Keeping Up?",
    ctaBody: "Book an AC diagnostic visit and stay comfortable through Carolina heat.",
  },
  {
    slug: "electrical-diagnostics",
    title: "Electrical Diagnostics",
    eyebrow: "Modern vehicle systems",
    summary:
      "Testing for battery drain, charging faults, lighting issues, modules, wiring, switches, and intermittent electrical concerns.",
    highlights: ["Parasitic draw", "Battery and alternator", "Wiring checks", "Module faults"],
    sections: [
      {
        title: "Intermittent Problems Need a Process",
        body: [
          "Electrical issues can be frustrating because they may disappear by the time the vehicle reaches the shop. We document the symptom, test the related circuit, and use voltage, ground, draw, and signal checks to avoid guessing.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you find why my battery keeps dying?",
        answer:
          "Yes. Battery drain testing checks the battery, charging system, and key-off draw so we can identify whether the issue is a component, circuit, or use pattern.",
      },
      {
        question: "Do electrical diagnostics cost more than simple repairs?",
        answer:
          "They can require more testing time, but structured diagnostics usually cost less than replacing parts by trial and error.",
      },
    ],
    ctaTitle: "Electrical Issue That Keeps Coming Back?",
    ctaBody: "Schedule testing and bring notes about when the issue appears.",
  },
  {
    slug: "engine-repair",
    title: "Engine Repair",
    eyebrow: "Performance and reliability",
    summary:
      "Engine diagnostics and repairs for misfires, leaks, overheating, timing concerns, drivability, and maintenance failures.",
    highlights: ["Misfire diagnosis", "Cooling leaks", "Gasket concerns", "Performance complaints"],
    sections: [
      {
        title: "Repair the Cause, Not Just the Code",
        body: [
          "Engine problems can involve fuel, air, spark, compression, timing, cooling, or control systems. We evaluate the full pattern before recommending a repair path.",
          "When a repair is large, we explain priorities, risk, and whether continued driving is reasonable.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you tell if an engine repair is worth it?",
        answer:
          "Yes. We can compare repair cost, vehicle condition, mileage, and expected reliability so you can make a practical decision.",
      },
      {
        question: "Should I drive with a flashing check engine light?",
        answer:
          "No. A flashing check engine light often indicates a severe misfire that can damage the catalytic converter.",
      },
    ],
    ctaTitle: "Engine Running Rough?",
    ctaBody: "Schedule a diagnostic inspection before the problem spreads to related systems.",
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance",
    eyebrow: "Long-term ownership",
    summary:
      "Mileage-based maintenance planning for fluids, filters, spark plugs, belts, inspections, and family vehicle reliability.",
    highlights: ["Maintenance plans", "Fluid services", "Inspection reports", "Service reminders"],
    sections: [
      {
        title: "A Practical Plan for Your Vehicle",
        body: [
          "Preventive maintenance should be clear, staged, and matched to the vehicle. We help separate urgent safety items from future maintenance so you can plan repairs with less surprise.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you build a maintenance plan for a used car?",
        answer:
          "Yes. We review known history, inspect current condition, and prioritize catch-up maintenance.",
      },
      {
        question: "Do mileage schedules matter if the car drives fine?",
        answer:
          "Yes. Many fluids and wear items degrade quietly before symptoms become obvious.",
      },
    ],
    ctaTitle: "Want Fewer Surprise Repairs?",
    ctaBody: "Schedule a maintenance review and get a clear priority list.",
  },
  {
    slug: "toyota-repair",
    title: "Toyota Repair",
    eyebrow: "Dealer-level background",
    summary:
      "Independent Toyota service from a former Toyota technician, including maintenance, diagnostics, brakes, suspension, and engine concerns.",
    highlights: ["Toyota maintenance", "Hybrid-aware workflow", "Dealer-level inspection habits", "Independent-shop value"],
    sections: [
      {
        title: "Toyota Experience Without the Dealer Feel",
        body: [
          "Toyota owners often want dependable service without feeling rushed or oversold. This template positions the shop around dealership training, transparent recommendations, and local accountability.",
          "Content can be expanded by model, including Camry, Corolla, RAV4, Tacoma, Highlander, 4Runner, Prius, and Tundra pages.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an independent shop service my Toyota?",
        answer:
          "Yes. Routine Toyota maintenance and many diagnostics can be handled by a qualified independent shop using the right process and parts.",
      },
      {
        question: "Do you work on Toyota hybrids?",
        answer:
          "This demo supports hybrid-aware service language. Final client content should reflect the shop's actual tools, training, and safety practices.",
      },
    ],
    ctaTitle: "Looking for Toyota Service Locally?",
    ctaBody: "Schedule Toyota diagnostics or maintenance with an independent shop built around clear communication.",
  },
];

export const symptoms: DetailPage[] = [
  {
    slug: "check-engine-light",
    title: "Check Engine Light",
    eyebrow: "Warning light guide",
    summary:
      "Learn what a check engine light can mean, when to stop driving, and how professional diagnostics protect your repair budget.",
    highlights: ["Steady light", "Flashing light", "Misfire codes", "Emissions faults"],
    sections: [
      {
        title: "What It Could Mean",
        body: [
          "A check engine light can be triggered by emissions, ignition, fuel, air, sensor, electrical, or mechanical issues. The code is a starting point, not a final diagnosis.",
          "A flashing check engine light is more urgent and can indicate a misfire severe enough to damage the catalytic converter.",
        ],
      },
      {
        title: "What to Do Next",
        body: ["Reduce unnecessary driving if the vehicle runs poorly, and schedule diagnostics if the light stays on."],
        bullets: ["Note when the light appeared", "Listen for rough running or knocking", "Avoid heavy acceleration", "Schedule scan and testing"],
      },
    ],
    faqs: [
      {
        question: "Can I drive with the check engine light on?",
        answer:
          "A steady light may allow cautious driving, but a flashing light or rough running should be inspected immediately.",
      },
      {
        question: "Does a code scan tell me what part to replace?",
        answer:
          "No. Codes identify a system or fault pattern. Testing confirms the actual cause.",
      },
    ],
    ctaTitle: "Check Engine Light On?",
    ctaBody: "Schedule diagnostics before the issue becomes harder to repair.",
  },
  {
    slug: "car-wont-start",
    title: "Car Won't Start",
    eyebrow: "No-start help",
    summary:
      "No-start symptoms can come from the battery, starter, fuel delivery, security system, wiring, or engine controls.",
    highlights: ["Clicks", "No crank", "Cranks but will not start", "Intermittent starts"],
    sections: [
      {
        title: "The Sound Matters",
        body: [
          "A rapid click, single click, slow crank, and normal crank with no start all point in different directions. Good notes help the technician reproduce the concern faster.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a no-start always the battery?",
        answer:
          "No. The battery is common, but starter, charging, wiring, fuel, ignition, and security faults can create similar symptoms.",
      },
      {
        question: "Should I jump start it?",
        answer:
          "A jump may help a weak battery, but repeated jump starts mean the charging system and key-off draw should be tested.",
      },
    ],
    ctaTitle: "Need No-Start Testing?",
    ctaBody: "Tell us what the vehicle does when you turn the key or press start.",
  },
  {
    slug: "brakes-grinding",
    title: "Brakes Grinding",
    eyebrow: "Brake symptom",
    summary:
      "Grinding brakes often mean worn pads, rotor damage, stuck hardware, or debris and should be inspected promptly.",
    heroImage: "/images/auto/brake-service.png",
    highlights: ["Metal-on-metal noise", "Rotor damage", "Safety concern", "Brake inspection"],
    sections: [
      {
        title: "Why Grinding Matters",
        body: [
          "Grinding usually means a hard surface is contacting the rotor. Continued driving can increase repair cost and reduce braking performance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can grinding brakes stop suddenly?",
        answer:
          "Brake performance can become unpredictable. The safest path is to schedule inspection and avoid unnecessary driving.",
      },
      {
        question: "Will new pads fix grinding?",
        answer:
          "Sometimes, but rotor, caliper, and hardware condition must be checked.",
      },
    ],
    ctaTitle: "Grinding Brakes Need Attention",
    ctaBody: "Schedule a brake inspection and get a clear repair recommendation.",
  },
  {
    slug: "car-shaking",
    title: "Car Shaking",
    eyebrow: "Vibration guide",
    summary:
      "Shaking can come from tires, wheels, brakes, suspension, engine misfires, mounts, or driveline concerns.",
    highlights: ["At idle", "At highway speed", "While braking", "During acceleration"],
    sections: [
      {
        title: "When the Shake Happens Matters",
        body: [
          "A vibration at idle is different from a vibration while braking or at highway speed. We use the pattern to decide whether to inspect engine performance, tires, brakes, suspension, or driveline components first.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can bad tires make a car shake?",
        answer:
          "Yes. Tire balance, tire wear, wheel damage, and alignment-related wear are common vibration causes.",
      },
      {
        question: "Is shaking while braking a brake issue?",
        answer:
          "Often, but suspension and tire issues can contribute. Inspection confirms the cause.",
      },
    ],
    ctaTitle: "Vehicle Shaking?",
    ctaBody: "Book an inspection and describe when the vibration appears.",
  },
  {
    slug: "engine-overheating",
    title: "Engine Overheating",
    eyebrow: "Cooling system warning",
    summary:
      "Overheating can damage an engine quickly. Learn common causes and when to stop driving.",
    highlights: ["Coolant leaks", "Radiator fans", "Thermostat", "Water pump"],
    sections: [
      {
        title: "Do Not Ignore Heat",
        body: [
          "If the temperature gauge climbs or steam appears, stop driving when safe. Cooling issues can involve leaks, fans, thermostat, radiator restriction, water pump problems, or internal engine concerns.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I add coolant and keep driving?",
        answer:
          "Only if it is safe and the vehicle cools normally. A leak or overheating condition still needs diagnosis.",
      },
      {
        question: "Can overheating ruin an engine?",
        answer:
          "Yes. Severe overheating can damage gaskets, cylinder heads, and internal components.",
      },
    ],
    ctaTitle: "Engine Running Hot?",
    ctaBody: "Schedule cooling system testing before heat causes major engine damage.",
  },
  {
    slug: "oil-leak",
    title: "Oil Leak",
    eyebrow: "Leak diagnosis",
    summary:
      "Oil leaks can come from gaskets, seals, filters, drain plugs, valve covers, timing covers, and engine wear.",
    highlights: ["Drips on driveway", "Burning smell", "Low oil", "Leak inspection"],
    sections: [
      {
        title: "Find the Highest Source",
        body: [
          "Oil spreads as air and gravity move it around the engine. We clean and inspect the area so the source is identified before replacing gaskets.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an oil leak urgent?",
        answer:
          "It depends on leak rate and location. Low oil can damage the engine, and oil on hot components can create smell or smoke.",
      },
      {
        question: "Can you inspect a leak during an oil change?",
        answer:
          "Yes. Oil service is a good time to document visible leaks and plan next steps.",
      },
    ],
    ctaTitle: "See Oil Spots?",
    ctaBody: "Schedule leak inspection and protect the engine from low-oil damage.",
  },
  {
    slug: "battery-drain",
    title: "Battery Drain",
    eyebrow: "Electrical symptom",
    summary:
      "A battery that repeatedly dies may have a weak battery, charging fault, parasitic draw, or usage pattern issue.",
    highlights: ["Dead overnight", "Alternator testing", "Parasitic draw", "Battery health"],
    sections: [
      {
        title: "Replacing the Battery May Not Be Enough",
        body: [
          "If a new battery also dies, the vehicle needs charging and draw testing. We look for components that stay awake, wiring faults, and charging problems.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my battery die after sitting?",
        answer:
          "Common causes include a weak battery, parasitic draw, short trips, or a charging system that never fully restores the battery.",
      },
      {
        question: "Can you test for parasitic draw?",
        answer: "Yes. Draw testing measures current after modules go to sleep and isolates the circuit when needed.",
      },
    ],
    ctaTitle: "Battery Keeps Dying?",
    ctaBody: "Schedule electrical testing before buying another battery.",
  },
];

export const maintenance: DetailPage[] = [
  {
    slug: "oil-change-intervals",
    title: "Oil Change Intervals",
    eyebrow: "Maintenance guide",
    summary:
      "Understand how mileage, time, heat, short trips, and oil type affect oil service intervals.",
    highlights: ["Synthetic oil", "Severe service", "Mileage planning", "Used car catch-up"],
    sections: [
      {
        title: "Intervals Depend on Real Use",
        body: [
          "Factory intervals are a useful baseline, but short trips, heat, towing, idling, and older engines can justify shorter intervals. A local shop can help set a schedule that fits the vehicle instead of using a one-size-fits-all sticker.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 10,000 miles too long for an oil change?",
        answer:
          "It depends on the vehicle, oil spec, and driving pattern. Many daily drivers benefit from a more conservative interval.",
      },
      {
        question: "Should time matter if mileage is low?",
        answer:
          "Yes. Oil ages with time, moisture, and short-trip use even when mileage is low.",
      },
    ],
    ctaTitle: "Set the Right Oil Schedule",
    ctaBody: "Ask for interval guidance at your next oil service.",
  },
  {
    slug: "brake-fluid-service",
    title: "Brake Fluid Service",
    eyebrow: "Brake maintenance",
    summary:
      "Brake fluid absorbs moisture over time, which can affect braking feel and internal component life.",
    highlights: ["Moisture testing", "Pedal feel", "ABS components", "Maintenance interval"],
    sections: [
      {
        title: "Why Brake Fluid Matters",
        body: [
          "Brake fluid is often overlooked because it is not visible during normal driving. Over time, moisture contamination can reduce performance under heat and contribute to corrosion inside brake hydraulic components.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should brake fluid be changed?",
        answer:
          "Many vehicles benefit from service every two to three years, but the correct interval depends on manufacturer guidance and fluid condition.",
      },
      {
        question: "Can old brake fluid cause a soft pedal?",
        answer:
          "It can contribute, but leaks, air, hoses, master cylinder, and caliper issues should also be checked.",
      },
    ],
    ctaTitle: "Brake Fluid Due?",
    ctaBody: "Schedule a brake fluid inspection with your next service.",
  },
  {
    slug: "transmission-service",
    title: "Transmission Service",
    eyebrow: "Drivetrain maintenance",
    summary:
      "Transmission fluid condition and service history matter for smooth shifting and long-term reliability.",
    highlights: ["Fluid condition", "Service history", "Shift concerns", "Maintenance planning"],
    sections: [
      {
        title: "Service History Comes First",
        body: [
          "Transmission service should be planned around vehicle design, mileage, current condition, and prior maintenance. We review history and symptoms before recommending fluid service.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I service a high-mileage transmission?",
        answer:
          "Sometimes, but it should be evaluated first. Existing shift problems change the recommendation.",
      },
      {
        question: "Is a transmission flush always required?",
        answer:
          "No. Service type depends on vehicle design and condition. Many vehicles call for a drain-and-fill approach.",
      },
    ],
    ctaTitle: "Transmission Service Questions?",
    ctaBody: "Bring your mileage and service history so we can recommend a practical path.",
  },
  {
    slug: "coolant-flush",
    title: "Coolant Flush",
    eyebrow: "Cooling maintenance",
    summary:
      "Coolant service helps protect the radiator, heater core, water pump, gaskets, and engine from heat-related damage.",
    highlights: ["Coolant condition", "Leak check", "Radiator health", "Overheat prevention"],
    sections: [
      {
        title: "Heat Is Expensive",
        body: [
          "Cooling system maintenance is less visible than oil service, but it plays a major role in engine life. We inspect for leaks, contamination, hose condition, and temperature behavior.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should coolant be changed?",
        answer:
          "Intervals vary by coolant type and manufacturer. Age, contamination, and leak history also matter.",
      },
      {
        question: "Can bad coolant cause overheating?",
        answer:
          "It can contribute, but overheating should be diagnosed because fans, thermostat, pump, radiator, and leaks may also be involved.",
      },
    ],
    ctaTitle: "Cooling System Due?",
    ctaBody: "Schedule coolant inspection before summer heat exposes a weak system.",
  },
  {
    slug: "spark-plug-replacement",
    title: "Spark Plug Replacement",
    eyebrow: "Tune-up planning",
    summary:
      "Spark plugs affect starting, fuel economy, misfires, and engine performance as they wear.",
    highlights: ["Mileage intervals", "Misfire prevention", "Coil inspection", "Fuel economy"],
    sections: [
      {
        title: "Small Parts, Big Symptoms",
        body: [
          "Worn spark plugs can create hard starts, misfires, rough idle, poor acceleration, and fuel economy complaints. We match replacement intervals and parts to the vehicle.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should spark plugs be replaced?",
        answer:
          "Many modern vehicles use long-life plugs, but intervals vary widely. Mileage and engine design determine the recommendation.",
      },
      {
        question: "Can bad spark plugs trigger a check engine light?",
        answer:
          "Yes. Worn plugs can contribute to misfire codes and drivability issues.",
      },
    ],
    ctaTitle: "Due for Spark Plugs?",
    ctaBody: "Schedule tune-up planning based on your mileage and engine.",
  },
];

export const allFaqs = [
  ...services.flatMap((item) => item.faqs),
  ...symptoms.flatMap((item) => item.faqs),
  ...maintenance.flatMap((item) => item.faqs),
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments help the shop plan technician time and parts availability. Urgent safety concerns should still call the shop directly.",
  },
  {
    question: "Do you work on fleet vehicles?",
    answer:
      "Yes. The template supports small-business fleet maintenance, inspection, and repair workflows.",
  },
  {
    question: "Can I wait during service?",
    answer:
      "Some maintenance visits may be waitable. Diagnostics and larger repairs are usually drop-off visits.",
  },
  {
    question: "Do you provide written estimates?",
    answer:
      "Yes. A professional shop should explain findings, priorities, and estimated costs before repair authorization.",
  },
  {
    question: "Do you use OEM or aftermarket parts?",
    answer:
      "The best part choice depends on the repair, vehicle, budget, and availability. Recommendations should be explained clearly.",
  },
  {
    question: "Can you inspect a used vehicle before I buy it?",
    answer:
      "Yes. Pre-purchase inspections are a strong future content opportunity for this template.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring keys, service history if available, wheel lock key if equipped, and notes about symptoms, timing, sounds, and warning lights.",
  },
  {
    question: "Do you reset maintenance lights?",
    answer:
      "Yes. Maintenance reminders are reset after qualifying service.",
  },
  {
    question: "Can you help prioritize repairs?",
    answer:
      "Yes. Repairs should be separated into safety, reliability, maintenance, and future monitoring categories.",
  },
  {
    question: "Is dealer service required to keep a warranty?",
    answer:
      "Routine maintenance can often be performed by qualified independent shops, but warranty claims and recalls may require a dealer.",
  },
  {
    question: "Do you service hybrids?",
    answer:
      "The demo template includes hybrid-aware language. Final use should reflect the real shop's training, tools, and safety qualifications.",
  },
  {
    question: "Can you diagnose intermittent issues?",
    answer:
      "Yes, though intermittent concerns may require more time, detailed symptom notes, and repeat testing.",
  },
];

export const locationPages = [
  {
    slug: "auto-repair-florence-sc",
    title: "Auto Repair in Florence SC",
    summary:
      "Independent diagnostics, maintenance, and repair for Florence drivers who want clear answers and honest recommendations.",
    serviceName: "Auto Repair",
  },
  {
    slug: "brake-repair-florence-sc",
    title: "Brake Repair in Florence SC",
    summary:
      "Brake inspections and repairs for Florence drivers dealing with grinding, squealing, vibration, or warning lights.",
    serviceName: "Brake Repair",
    relatedSlug: "brake-repair",
  },
  {
    slug: "oil-change-florence-sc",
    title: "Oil Change in Florence SC",
    summary:
      "Oil change service with maintenance checks and practical interval guidance for Florence commuters and families.",
    serviceName: "Oil Change",
    relatedSlug: "oil-change",
  },
  {
    slug: "toyota-repair-florence-sc",
    title: "Toyota Repair in Florence SC",
    summary:
      "Independent Toyota diagnostics and maintenance in Florence from a shop positioned around former dealership experience.",
    serviceName: "Toyota Repair",
    relatedSlug: "toyota-repair",
  },
];

export const bySlug = (items: DetailPage[], slug?: string) =>
  items.find((item) => item.slug === slug);

export const faqSchema = (questions: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const breadcrumbSchema = (items: Array<{ label: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: new URL(item.path, business.websiteUrl).toString(),
  })),
});

export const serviceSchema = (item: DetailPage) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: item.title,
  description: item.summary,
  provider: {
    "@type": "AutoRepair",
    name: business.name,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.postalCode,
    },
  },
  areaServed: business.serviceAreas,
});
