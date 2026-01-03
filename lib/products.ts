export interface Product {
  id: string
  name: string
  kva: number
  description: string
  image: string
  specs: {
    engine: string
    alternator: string
    fuelTank: string
    dimensions: string
  }
}

export const products: Product[] = [
  {
    id: "jakson-silent-7-5",
    name: "Jakson Silent Series 7.5 kVA",
    kva: 7.5,
    description: "Ideal for small residences and shops, offering whisper-quiet performance and high fuel efficiency.",
    image: "/7.5-58.5-kVA-RLHP-Genset-Jakson-Genset-DE-4.png",
    specs: {
      engine: "Single Cylinder Air Cooled",
      alternator: "Brushless, Single Phase",
      fuelTank: "15 Liters",
      dimensions: "1100 x 700 x 900 mm",
    },
  },
  {
    id: "jakson-silent-15",
    name: "Jakson Silent Series 15 kVA",
    kva: 15,
    description: "Robust power solution for small offices and clinics with low maintenance requirements.",
    image: "/82.5-160-kVA-MHP-Genset-Jakson-Genset-in-india.png",
    specs: {
      engine: "Twin Cylinder Water Cooled",
      alternator: "Brushless, Three Phase",
      fuelTank: "40 Liters",
      dimensions: "1500 x 850 x 1100 mm",
    },
  },
  {
    id: "jakson-silent-30",
    name: "Jakson Silent Series 30 kVA",
    kva: 30,
    description: "High-performance generator for commercial buildings and small industrial setups.",
    image: "/650-3750-kVA-HHP-Genset-Jakson-Genset-1.png",
    specs: {
      engine: "3-Cylinder Turbocharged",
      alternator: "Self-Excited, Three Phase",
      fuelTank: "90 Liters",
      dimensions: "2100 x 950 x 1350 mm",
    },
  },
  {
    id: "jakson-silent-62-5",
    name: "Jakson Silent Series 62.5 kVA",
    kva: 62.5,
    description: "Heavy-duty power source for large factories and hospitals with advanced digital control.",
    image: "/180-500-kVA-LHP-Genset-Jakson-Genset-in-india.png",
    specs: {
      engine: "4-Cylinder Intercooled",
      alternator: "PMG Excited, Three Phase",
      fuelTank: "150 Liters",
      dimensions: "2600 x 1100 x 1600 mm",
    },
  },

   {
    id: "jakson-silent-7-5",
    name: "Jakson Silent Series 7.5 kVA",
    kva: 7.5,
    description: "Heavy-duty power source for large factories and hospitals with advanced digital control.",
    image: "/1.jpg",
    specs: {
      engine: "4-Cylinder Intercooled",
      alternator: "PMG Excited, Three Phase",
      fuelTank: "150 Liters",
      dimensions: "2600 x 1100 x 1600 mm",
    },
  },

   
   {
    id: "jakson-silent-7-5",
    name: "Jakson Silent Series 7.5 kVA",
    kva: 7.5,
    description: "Heavy-duty power source for large factories and hospitals with advanced digital control.",
    image: "/4.png",
    specs: {
      engine: "4-Cylinder Intercooled",
      alternator: "PMG Excited, Three Phase",
      fuelTank: "150 Liters",
      dimensions: "2600 x 1100 x 1600 mm",
    },
  },

   {
    id: "jakson-silent-15",
    name: "Jakson Silent Series 15 kVA",
    kva: 15,
    description: "Heavy-duty power source for large factories and hospitals with advanced digital control.",
    image: "/3.webp",
    specs: {
      engine: "4-Cylinder Intercooled",
      alternator: "PMG Excited, Three Phase",
      fuelTank: "150 Liters",
      dimensions: "2600 x 1100 x 1600 mm",
    },
  },
]
