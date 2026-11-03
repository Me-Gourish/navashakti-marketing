import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "green-board",
    name: "Green Board (Standard Chalkboard)",
    category: "Chalk Boards",
    image: "/images/green-board.jpg",
    shortDesc: "High-contrast non-reflective green matte chalkboard engineered for schools and academic auditoriums with zero-glare readability.",
    fullDesc: "Navashakti Marketing Green Boards are fabricated using premium-grade resin/ceramic-coated steel or laminated surface sheets that provide an ultra-smooth chalk writing experience without surface abrasion. The deep forest-green tone ensures maximum contrast for student vision, minimizing eye fatigue.",
    specs: [
      { label: "Writing Surface", val: "High-density matte ceramic/resin enamel on steel/HDF" },
      { label: "Frame Construction", val: "Satin anodized extruded aluminum alloy (6063-T6)" },
      { label: "Core Backing", val: "Water-resistant honeycomb or seasoned high-density board" },
      { label: "Safety Corners", val: "Precision molded ABS engineered curved safety corners" },
      { label: "Standard Sizes", val: "2x3 ft, 3x4 ft, 4x6 ft, 4x8 ft, 4x10 ft, 4x12 ft (Custom available)" },
      { label: "Accessories", val: "Integrated full-length aluminum chalk and duster tray" }
    ],
    applications: ["Primary & Secondary Schools", "Universities & Colleges", "Coaching Centers", "Auditoriums"]
  },
  {
    id: "magnetic-green-board",
    name: "Magnetic Green Board",
    category: "Chalk Boards",
    image: "/images/magnetic-green-board.jpg",
    shortDesc: "Dual-utility magnetic surface allowing traditional chalk writing as well as magnetic pin-up of notices, timetables, and learning aids.",
    fullDesc: "Engineered for versatile classroom and lecture hall instruction. Featuring a specialized porcelain-on-steel magnetic core, this board allows educators to seamlessly transition between chalk demonstrations and pinning educational flashcards, graphs, and assignment notices using magnetic buttons.",
    specs: [
      { label: "Surface Type", val: "Magnetic Porcelain Enamel on Galvanized Steel Sheet" },
      { label: "Magnetic Strength", val: "High-grade retention for neodymium and ceramic pins" },
      { label: "Frame Finish", val: "Brushed silver anodized aluminum with concealed wall brackets" },
      { label: "Erasability", val: "100% dry wiping with zero ghosting or discoloration" },
      { label: "Standard Sizes", val: "3x4 ft, 4x5 ft, 4x6 ft, 4x8 ft (Custom dimensions available)" },
      { label: "Accessories", val: "Complimentary magnetic buttons & aluminum chalk holder" }
    ],
    applications: ["Modern Classrooms", "Faculty Seminar Rooms", "Training Institutes", "Laboratories"]
  },
  {
    id: "white-board",
    name: "White Board (Dry-Erase Magnetic)",
    category: "Whiteboards",
    image: "/images/white-board.jpg",
    shortDesc: "Pristine ultra-smooth magnetic dry-erase surface engineered for zero ghosting, stain resistance, and sleek corporate presentation.",
    fullDesc: "Our Dry-Erase Whiteboards are the gold standard for executive conference rooms, collaborative agile sprints, and corporate training. The high-gloss surface allows dry-erase markers to glide effortlessly while wiping pristine clean even if ink remains for extended periods.",
    specs: [
      { label: "Surface Technology", val: "High-gloss polymeric resin / ceramic white steel" },
      { label: "Erasability Cycle", val: "Tested for 50,000+ clean wiping cycles" },
      { label: "Perimeter Trim", val: "Architectural slim-profile anodized aluminum frame" },
      { label: "Mounting System", val: "Concealed 4-corner wall fixing hardware included" },
      { label: "Standard Sizes", val: "2x3 ft, 3x4 ft, 4x6 ft, 4x8 ft (Custom architectural sizing)" },
      { label: "Marker Tray", val: "Detachable aluminum tray with protective end caps" }
    ],
    applications: ["Corporate Boardrooms", "IT Meeting Rooms", "Co-working Spaces", "Higher Education"]
  },
  {
    id: "notice-board",
    name: "Notice Board (Acoustic Felt Bulletin)",
    category: "Bulletin Boards",
    image: "/images/notice-board.jpg",
    shortDesc: "High-density felt pin-up bulletin surface with self-healing fibers, engineered for school corridors and administrative notices.",
    fullDesc: "Navashakti Marketing Notice Boards provide an attractive, organized visual communication channel. Wrapped in premium acoustic fabric with dense self-healing foam cores, push-pins insert smoothly and leave zero visible puncture holes after removal.",
    specs: [
      { label: "Fabric Material", val: "Anti-static, fade-resistant premium wool/polyester felt" },
      { label: "Core Density", val: "High-resilience softboard / acoustic EVA cushioning" },
      { label: "Standard Colors", val: "Royal Blue, Classic Maroon, Forest Green, Slate Grey" },
      { label: "Frame Trim", val: "Heavy-gauge anodized aluminum with ABS molded safety corners" },
      { label: "Standard Sizes", val: "2x3 ft, 3x4 ft, 4x6 ft, 4x8 ft (Single or double-door acrylic available)" }
    ],
    applications: ["School Corridors", "Hospital Information Desks", "Corporate Lobbies", "Hostel Common Rooms"]
  },
  {
    id: "smart-boards",
    name: "Smart Boards (4K Interactive Touch Panel)",
    category: "Interactive Digital",
    image: "/images/smart-board.jpg",
    shortDesc: "Next-generation 4K UHD interactive flat panel display with 40-point multi-touch, wireless screen casting, and dual OS support.",
    fullDesc: "Transform traditional teaching and executive presentations into engaging digital sessions. Equipped with anti-glare toughened 4mm glass, ultra-responsive infrared touch sensors, built-in digital whiteboard software, and seamless wireless connectivity for laptops, tablets, and smartphones.",
    specs: [
      { label: "Display Resolution", val: "4K Ultra-HD (3840 x 2160) IPS LED Backlit Panel" },
      { label: "Touch Technology", val: "Infrared Touch Sensor with 40 simultaneous touch points" },
      { label: "Screen Surface", val: "4mm Anti-Glare, Shatter-Proof Toughened Glass (7H Mohs)" },
      { label: "Operating System", val: "Android 13 / 14 with optional Windows 11 OPS slot" },
      { label: "Available Sizes", val: "65-inch, 75-inch, 86-inch, 98-inch diagonal" },
      { label: "Audio & Connectivity", val: "Dual 20W stereo speakers, HDMI, Type-C (65W PD), USB 3.0" }
    ],
    applications: ["Executive Boardrooms", "Smart Classrooms", "Medical Colleges", "Video Conferencing"]
  },
  {
    id: "board-stands",
    name: "Board Stands (Heavy-Duty Mobile & Fixed Stands)",
    category: "Board Accessories",
    image: "/images/board-stands.jpg",
    shortDesc: "Heavy-duty powder-coated tubular steel stands with 360-degree revolving locks and smooth 360° lockable caster wheels for versatile mobility.",
    fullDesc: "Engineered specifically for educational seminars, agile workspaces, and multi-purpose halls where wall mounting is impractical. Our mobile stands support single or double-sided whiteboards and green boards from 3x4 ft up to 4x8 ft with rock-solid stability and zero wobble during writing.",
    specs: [
      { label: "Frame Material", val: "Heavy-gauge tubular mild steel (CRCA) with epoxy powder coating" },
      { label: "Mobility Mechanism", val: "4x 50mm heavy-duty nylon caster wheels with dual foot-brake locks" },
      { label: "Revolving Clamps", val: "360-degree rotation bracket with positive screw-locking knob" },
      { label: "Board Compatibility", val: "Fits boards sized 3x4 ft, 4x5 ft, 4x6 ft, and 4x8 ft" },
      { label: "Height Adjustment", val: "Telescopic height setting with anti-slip alignment pins" },
      { label: "Tray & Storage", val: "Integrated wide utility pen/chalk shelf across the base" }
    ],
    applications: ["Auditorium Presentations", "Hospital Rounds", "Factory Floor Management", "Training Rooms", "Exam Halls"]
  }
];
