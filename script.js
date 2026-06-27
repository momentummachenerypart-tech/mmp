// Loading
window.addEventListener('load', () => {
  const el = document.getElementById('loadingScreen');
  if (el) {
    setTimeout(() => {
      el.classList.add('hidden');
    }, 600);
  }
});

// Header scroll effect + Back to top
window.addEventListener('scroll', () => {
  const headerWrapper = document.getElementById('headerWrapper');
  const backToTop = document.getElementById('backToTop');

  if (window.scrollY > 80) headerWrapper?.classList.add('scrolled');
  else headerWrapper?.classList.remove('scrolled');

  if (window.scrollY > 320) backToTop?.classList.add('visible');
  else backToTop?.classList.remove('visible');
});

document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('whatsappBtn')?.addEventListener('click', () => {
  window.open('https://wa.me/6287887279990', '_blank');
});

// Katalog (berbasis data JSON lokal)
// Catatan: agar pencarian "max bore" + "diameter" akurat, data harus berisi field:
// - diameter (ukuran luar/diameter komponen)
// - maxBore (bore maksimal)
// Field ini dipakai untuk filter berdasarkan type + pencarian teks.
const catalog = {
  "Wrapflex Couplings": {
    // contoh kecil (bisa ditambah model lain jika kamu ingin full sama PDF)
    "5R": {
      type: "Wrapflex Couplings",
      model: "5R",
      size: "5R",
      boreRange: "1.625–1.875 in",
      maxBore: "1.875 in",
      maxRPM: 4500,
      maxTorqueNm: 61.0,
      diameter: "1.625 in",
      dimensions: { diameter: "1.625 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 4500 rpm",
        "Max bore 1.875 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "10R": {
      type: "Wrapflex Couplings",
      model: "10R",
      size: "10R",
      boreRange: "1.875–2.375 in",
      maxBore: "2.375 in",
      maxRPM: 4500,
      maxTorqueNm: 131.4,
      diameter: "1.875 in",
      dimensions: { diameter: "1.875 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 4500 rpm",
        "Max bore 2.375 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "20R": {
      type: "Wrapflex Couplings",
      model: "20R",
      size: "20R",
      boreRange: "2.375–2.875 in",
      maxBore: "2.875 in",
      maxRPM: 4500,
      maxTorqueNm: 316.9,
      diameter: "2.375 in",
      dimensions: { diameter: "2.375 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 4500 rpm",
        "Max bore 2.875 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "30R": {
      type: "Wrapflex Couplings",
      model: "30R",
      size: "30R",
      boreRange: "2.875–3.375 in",
      maxBore: "3.375 in",
      maxRPM: 4500,
      maxTorqueNm: 520.3,
      diameter: "2.875 in",
      dimensions: { diameter: "2.875 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 4500 rpm",
        "Max bore 3.375 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "40R": {
      type: "Wrapflex Couplings",
      model: "40R",
      size: "40R",
      boreRange: "3.375–4.125 in",
      maxBore: "4.125 in",
      maxRPM: 3600,
      maxTorqueNm: 1039.3,
      diameter: "3.375 in",
      dimensions: { diameter: "3.375 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 3600 rpm",
        "Max bore 4.125 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "50R": {
      type: "Wrapflex Couplings",
      model: "50R",
      size: "50R",
      boreRange: "4.125–5.250 in",
      maxBore: "5.250 in",
      maxRPM: 3000,
      maxTorqueNm: 2505.7,
      diameter: "4.125 in",
      dimensions: { diameter: "4.125 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 3000 rpm",
        "Max bore 5.250 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "60R": {
      type: "Wrapflex Couplings",
      model: "60R",
      size: "60R",
      boreRange: "5.250–6.125 in",
      maxBore: "6.125 in",
      maxRPM: 2500,
      maxTorqueNm: 4054.0,
      diameter: "5.250 in",
      dimensions: { diameter: "5.250 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 2500 rpm",
        "Max bore 6.125 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "70R": {
      type: "Wrapflex Couplings",
      model: "70R",
      size: "70R",
      boreRange: "6.125–7.250 in",
      maxBore: "7.250 in",
      maxRPM: 2100,
      maxTorqueNm: 6070.2,
      diameter: "6.125 in",
      dimensions: { diameter: "6.125 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 2100 rpm",
        "Max bore 7.250 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "80R": {
      type: "Wrapflex Couplings",
      model: "80R",
      size: "80R",
      boreRange: "7.250 in",
      maxBore: "7.250 in",
      maxRPM: 1800,
      maxTorqueNm: 14980.0,
      diameter: "7.250 in",
      dimensions: { diameter: "7.250 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Max speed 1800 rpm",
        "Max bore 7.250 in",
        "Torque class from table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    }

  },
  "Gear Couplings": {
    "1010G": {
      type: "Gear Couplings",
      model: "1010G",
      size: "1010G",
      boreRange: "1.875 in (G10/G20)",
      maxBore: "1.875 in",
      maxRPM: 4500,
      maxTorqueNm: 1144, 
      diameter: "1.875 in",
      dimensions: { diameter: "1.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Max Speed (G10/G20) 8000",
        "Torque (lb-in) 10,080",
        "Based on table"
      ],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1015G": {
      type: "Gear Couplings",
      model: "1015G",
      size: "1015G",
      boreRange: "2.375 in (G10/G20)",
      maxBore: "2.375 in",
      maxRPM: 3600,
      maxTorqueNm: 2880,
      diameter: "2.375 in",
      dimensions: { diameter: "2.375 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1020G": {
      type: "Gear Couplings",
      model: "1020G",
      size: "1020G",
      boreRange: "2.875 in (G10/G20)",
      maxBore: "2.875 in",
      maxRPM: 3000,
      maxTorqueNm: 4320,
      diameter: "2.875 in",
      dimensions: { diameter: "2.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1025G": {
      type: "Gear Couplings",
      model: "1025G",
      size: "1025G",
      boreRange: "3.625 in (G10/G20)",
      maxBore: "3.625 in",
      maxRPM: 2500,
      maxTorqueNm: 6650,
      diameter: "3.625 in",
      dimensions: { diameter: "3.625 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1030G": {
      type: "Gear Couplings",
      model: "1030G",
      size: "1030G",
      boreRange: "4.125 in (G10/G20)",
      maxBore: "4.125 in",
      maxRPM: 2100,
      maxTorqueNm: 7400,
      diameter: "4.125 in",
      dimensions: { diameter: "4.125 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1035G": {
      type: "Gear Couplings",
      model: "1035G",
      size: "1035G",
      boreRange: "4.875 in (G10/G20)",
      maxBore: "4.875 in",
      maxRPM: 1800,
      maxTorqueNm: 18200,
      diameter: "4.875 in",
      dimensions: { diameter: "4.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1040G": {
      type: "Gear Couplings",
      model: "1040G",
      size: "1040G",
      boreRange: "5.750 in (G10/G20)",
      maxBore: "5.750 in",
      maxRPM: 3600,
      maxTorqueNm: 270900,
      diameter: "5.750 in",
      dimensions: { diameter: "5.750 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1045G": {
      type: "Gear Couplings",
      model: "1045G",
      size: "1045G",
      boreRange: "6.750 in (G10/G20)",
      maxBore: "6.750 in",
      maxRPM: 3200,
      maxTorqueNm: 371700,
      diameter: "6.750 in",
      dimensions: { diameter: "6.750 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1050G": {
      type: "Gear Couplings",
      model: "1050G",
      size: "1050G",
      boreRange: "7.375 in (G10/G20)",
      maxBore: "7.375 in",
      maxRPM: 2900,
      maxTorqueNm: 500900,
      diameter: "7.375 in",
      dimensions: { diameter: "7.375 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1055G": {
      type: "Gear Couplings",
      model: "1055G",
      size: "1055G",
      boreRange: "8.250 in (G10/G20)",
      maxBore: "8.250 in",
      maxRPM: 2650,
      maxTorqueNm: 655200,
      diameter: "8.250 in",
      dimensions: { diameter: "8.250 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1060G": {
      type: "Gear Couplings",
      model: "1060G",
      size: "1060G",
      boreRange: "9.125 in (G10/G20)",
      maxBore: "9.125 in",
      maxRPM: 2450,
      maxTorqueNm: 800100,
      diameter: "9.125 in",
      dimensions: { diameter: "9.125 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1070G": {
      type: "Gear Couplings",
      model: "1070G",
      size: "1070G",
      boreRange: "10.875 in (G10/G20)",
      maxBore: "10.875 in",
      maxRPM: 2150,
      maxTorqueNm: 1197000,
      diameter: "10.875 in",
      dimensions: { diameter: "10.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: ["Based on table"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    }
  },
  "Steelflex Couplings": {
    "1020T": {
      type: "Steelflex Couplings",
      model: "1020T",
      size: "1020T",
      boreRange: "0.73", 
      maxRPM: 4500,
      maxTorqueNm: 460,
      diameter: "0.73",
      maxBore: "0.73",
      dimensions: { diameter: "0.73", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 0.73", "Torque Rating 460 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1030T": {
      type: "Steelflex Couplings",
      model: "1030T",
      size: "1030T",
      boreRange: "2.09",
      maxRPM: 4500,
      maxTorqueNm: 1320,
      diameter: "2.09",
      maxBore: "2.09",
      dimensions: { diameter: "2.09", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 2.09", "Torque Rating 1,320 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1040T": {
      type: "Steelflex Couplings",
      model: "1040T",
      size: "1040T",
      boreRange: "3.49",
      maxRPM: 4500,
      maxTorqueNm: 2200,
      diameter: "3.49",
      maxBore: "3.49",
      dimensions: { diameter: "3.49", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 3.49", "Torque Rating 2,200 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1050T": {
      type: "Steelflex Couplings",
      model: "1050T",
      size: "1050T",
      boreRange: "6.11",
      maxRPM: 4500,
      maxTorqueNm: 3850,
      diameter: "6.11",
      maxBore: "6.11",
      dimensions: { diameter: "6.11", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 6.11", "Torque Rating 3,850 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1060T": {
      type: "Steelflex Couplings",
      model: "1060T",
      size: "1060T",
      boreRange: "9.60",
      maxRPM: 4350,
      maxTorqueNm: 6050,
      diameter: "9.60",
      maxBore: "9.60",
      dimensions: { diameter: "9.60", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 9.60", "Torque Rating 6,050 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1070T": {
      type: "Steelflex Couplings",
      model: "1070T",
      size: "1070T",
      boreRange: "14.0",
      maxRPM: 4125,
      maxTorqueNm: 8800,
      diameter: "14.0",
      maxBore: "14.0",
      dimensions: { diameter: "14.0", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 14.0", "Torque Rating 8,800 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1080T": {
      type: "Steelflex Couplings",
      model: "1080T",
      size: "1080T",
      boreRange: "28.8",
      maxRPM: 3600,
      maxTorqueNm: 18150,
      diameter: "28.8",
      maxBore: "28.8",
      dimensions: { diameter: "28.8", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 28.8", "Torque Rating 18,150 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1090T": {
      type: "Steelflex Couplings",
      model: "1090T",
      size: "1090T",
      boreRange: "52.4",
      maxRPM: 3600,
      maxTorqueNm: 33000,
      diameter: "52.4",
      maxBore: "52.4",
      dimensions: { diameter: "52.4", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 52.4", "Torque Rating 33,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1100T": {
      type: "Steelflex Couplings",
      model: "1100T",
      size: "1100T",
      boreRange: "88.1",
      maxRPM: 2440,
      maxTorqueNm: 55550,
      diameter: "88.1",
      maxBore: "88.1",
      dimensions: { diameter: "88.1", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 88.1", "Torque Rating 55,550 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1110T": {
      type: "Steelflex Couplings",
      model: "1110T",
      size: "1110T",
      boreRange: "131",
      maxRPM: 2250,
      maxTorqueNm: 82500,
      diameter: "131",
      maxBore: "131",
      dimensions: { diameter: "131", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 131", "Torque Rating 82,500 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1120T": {
      type: "Steelflex Couplings",
      model: "1120T",
      size: "1120T",
      boreRange: "192",
      maxRPM: 2025,
      maxTorqueNm: 121000,
      diameter: "192",
      maxBore: "192",
      dimensions: { diameter: "192", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 192", "Torque Rating 121,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1130T": {
      type: "Steelflex Couplings",
      model: "1130T",
      size: "1130T",
      boreRange: "279",
      maxRPM: 1800,
      maxTorqueNm: 176000,
      diameter: "279",
      maxBore: "279",
      dimensions: { diameter: "279", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 279", "Torque Rating 176,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1140T": {
      type: "Steelflex Couplings",
      model: "1140T",
      size: "1140T",
      boreRange: "401",
      maxRPM: 1650,
      maxTorqueNm: 253000,
      diameter: "401",
      maxBore: "401",
      dimensions: { diameter: "401", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 401", "Torque Rating 253,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1150T": {
      type: "Steelflex Couplings",
      model: "1150T",
      size: "1150T",
      boreRange: "559",
      maxRPM: 1500,
      maxTorqueNm: 352000,
      diameter: "559",
      maxBore: "559",
      dimensions: { diameter: "559", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 559", "Torque Rating 352,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1160T": {
      type: "Steelflex Couplings",
      model: "1160T",
      size: "1160T",
      boreRange: "785",
      maxRPM: 1350,
      maxTorqueNm: 495000,
      diameter: "785",
      maxBore: "785",
      dimensions: { diameter: "785", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 785", "Torque Rating 495,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1170T": {
      type: "Steelflex Couplings",
      model: "1170T",
      size: "1170T",
      boreRange: "1047",
      maxRPM: 1225,
      maxTorqueNm: 660000,
      diameter: "1047",
      maxBore: "1047",
      dimensions: { diameter: "1047", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 1,047", "Torque Rating 660,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1180T": {
      type: "Steelflex Couplings",
      model: "1180T",
      size: "1180T",
      boreRange: "1452",
      maxRPM: 1100,
      maxTorqueNm: 915200,
      diameter: "1452",
      maxBore: "1452",
      dimensions: { diameter: "1452", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 1,452", "Torque Rating 915,200 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1190T": {
      type: "Steelflex Couplings",
      model: "1190T",
      size: "1190T",
      boreRange: "1920",
      maxRPM: 1050,
      maxTorqueNm: 1210000,
      diameter: "1920",
      maxBore: "1920",
      dimensions: { diameter: "1920", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 1,920", "Torque Rating 1,210,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1200T": {
      type: "Steelflex Couplings",
      model: "1200T",
      size: "1200T",
      boreRange: "2618",
      maxRPM: 900,
      maxTorqueNm: 1650000,
      diameter: "2618",
      maxBore: "2618",
      dimensions: { diameter: "2618", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 2,618", "Torque Rating 1,650,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1210T": {
      type: "Steelflex Couplings",
      model: "1210T",
      size: "1210T",
      boreRange: "3491",
      maxRPM: 820,
      maxTorqueNm: 2200000,
      diameter: "3491",
      maxBore: "3491",
      dimensions: { diameter: "3491", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 3,491", "Torque Rating 2,200,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1220T": {
      type: "Steelflex Couplings",
      model: "1220T",
      size: "1220T",
      boreRange: "4712",
      maxRPM: 730,
      maxTorqueNm: 2970000,
      diameter: "4712",
      maxBore: "4712",
      dimensions: { diameter: "4712", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 4,712", "Torque Rating 2,970,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1230T": {
      type: "Steelflex Couplings",
      model: "1230T",
      size: "1230T",
      boreRange: "6109",
      maxRPM: 680,
      maxTorqueNm: 3850000,
      diameter: "6109",
      maxBore: "6109",
      dimensions: { diameter: "6109", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 6,109", "Torque Rating 3,850,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1240T": {
      type: "Steelflex Couplings",
      model: "1240T",
      size: "1240T",
      boreRange: "7854",
      maxRPM: 630,
      maxTorqueNm: 4950000,
      diameter: "7854",
      maxBore: "7854",
      dimensions: { diameter: "7854", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 7,854", "Torque Rating 4,950,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1250T": {
      type: "Steelflex Couplings",
      model: "1250T",
      size: "1250T",
      boreRange: "10472",
      maxRPM: 580,
      maxTorqueNm: 6600000,
      diameter: "10472",
      maxBore: "10472",
      dimensions: { diameter: "10472", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 10,472", "Torque Rating 6,600,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1260T": {
      type: "Steelflex Couplings",
      model: "1260T",
      size: "1260T",
      boreRange: "13090",
      maxRPM: 540,
      maxTorqueNm: 8250000,
      diameter: "13090",
      maxBore: "13090",
      dimensions: { diameter: "13090", length: "-" },
      pdf: "steelflex.pdf",
      features: ["HP/100 RPM 13,090", "Torque Rating 8,250,000 lb-in"],
      applications: ["Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    }
  },
  "Long-Term Grease": {
    "LTG Tube": {
      type: "Long-Term Grease",
      model: "LTG Tube",
      size: "400 g Tube",
      boreRange: "N/A",
      maxRPM: 0,
      maxTorqueNm: 0,
      diameter: "60 mm",
      maxBore: "N/A",
      dimensions: { diameter: "60 mm", length: "200 mm" },
      pdf: "ltg.pdf",

      features: ["Extended service life up to 5 years"],
      applications: ["Gear couplings", "Heavy machinery"]
    },
    "LTG Pail": {
      type: "Long-Term Grease",
      model: "LTG Pail",
      size: "18 kg Pail",
      boreRange: "N/A",
      maxRPM: 0,
      maxTorqueNm: 0,
      diameter: "300 mm",
      maxBore: "N/A",
      dimensions: { diameter: "300 mm", length: "400 mm" },
      pdf: "ltg.pdf",
      features: ["Extended service life up to 5 years"],
      applications: ["Gear couplings", "Heavy machinery"]
    }
  }
};

function flattenCatalog() {
  const out = [];
  for (const type of Object.keys(catalog)) {
    const items = catalog[type];
    for (const model of Object.keys(items)) {
      out.push(items[model]);
    }
  }
  return out;
}

const allProducts = flattenCatalog();


// UI elements
const typeSelect = document.getElementById('typeSelect');
const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

const productGrid = document.getElementById('productGrid');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');
const paginationEl = document.getElementById('pagination');

const btnGrid = document.getElementById('btnGrid');
const btnList = document.getElementById('btnList');

let filtered = [...allProducts];
let currentPage = 1;
let itemsPerPage = 6;
let viewMode = 'grid';

function initTypeSelect() {
  const types = Object.keys(catalog);
  const frag = document.createDocumentFragment();

  const optAll = document.createElement('option');
  optAll.value = '';
  optAll.textContent = 'Semua';
  frag.appendChild(optAll);

  types.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    frag.appendChild(opt);
  });

  typeSelect.appendChild(frag);
}

function normalize(s) {
  return String(s ?? '').toLowerCase();
}

function applyFilter() {
  const selectedType = typeSelect.value;
  const q = normalize(searchInput.value);

  filtered = allProducts.filter(p => {
    const typeMatch = !selectedType || p.type === selectedType;
  const text = [
    p.model,
    p.size,
    p.type,
    p.boreRange,
    p.maxBore,
    p.diameter,
    p.maxRPM,
    p.maxTorqueNm,
    p.dimensions?.diameter,
    p.dimensions?.length
  ]
    .map(normalize)
    .join(' ');

    const searchMatch = !q || text.includes(q);

    return typeMatch && searchMatch;
  });

  currentPage = 1;
  render();
}

function resetFilters() {
  typeSelect.value = '';
  searchInput.value = '';
  filtered = [...allProducts];
  currentPage = 1;
  render();
}

function setView(mode) {
  viewMode = mode;
  productGrid.classList.toggle('list-view', mode === 'list');
  btnGrid.classList.toggle('active', mode === 'grid');
  btnList.classList.toggle('active', mode === 'list');
  render();
}

function createCard(p) {
  const features = (p.features || []).slice(0, viewMode === 'list' ? 0 : 3);

  const appShort = (p.applications || []).slice(0, 2).join(', ');

  const pdfUrl = p.pdf;

  return `
    <article class="product-card">
      <div>
        <div class="product-title">${p.model}</div>
        <div class="product-subtitle">${p.type}</div>
      </div>

      <div class="product-specs">
        <div class="spec-item"><span class="spec-label">Ukuran</span><span class="spec-value">${p.size}</span></div>
        <div class="spec-item"><span class="spec-label">Bore Range</span><span class="spec-value">${p.boreRange}</span></div>
        <div class="spec-item"><span class="spec-label">Max RPM</span><span class="spec-value">${Number(p.maxRPM || 0).toLocaleString()}</span></div>
        <div class="spec-item"><span class="spec-label">Max Torque</span><span class="spec-value">${Number(p.maxTorqueNm || 0).toLocaleString()} Nm</span></div>
        <div class="spec-item"><span class="spec-label">Dimensi</span><span class="spec-value">${p.dimensions?.diameter} × ${p.dimensions?.length}</span></div>
        <div class="spec-item"><span class="spec-label">Aplikasi</span><span class="spec-value">${appShort}</span></div>
      </div>

      ${viewMode === 'grid' ? `
        <ul class="feature-list">
          ${(features || []).map(f => `<li>${f}</li>`).join('')}
        </ul>
      ` : ''}

      <a class="product-link" href="${pdfUrl}" target="_blank" rel="noopener">
        <i class="fas fa-file-pdf"></i> Lihat PDF
      </a>
    </article>
  `;
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    paginationEl.innerHTML = '';
    return;
  }

  const makeBtn = (label, page, disabled = false, active = false) => {
    return `<button class="pagination-btn ${active ? 'active' : ''}" ${disabled ? 'disabled' : ''} onclick="window.__goPage(${page})">${label}</button>`;
  };

  let html = '';

  html += makeBtn('<', currentPage - 1, currentPage === 1);

  for (let i = 1; i <= totalPages; i++) {
    const active = i === currentPage;
    // simple: show all pages (small catalog). can optimize later.
    html += makeBtn(String(i), i, false, active);
  }

  html += makeBtn('>', currentPage + 1, currentPage === totalPages);
  html += `<span class="pagination-info">Halaman ${currentPage} dari ${totalPages}</span>`;

  paginationEl.innerHTML = html;
}

window.__goPage = (page) => {
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  render();
};

function render() {
  resultCount.textContent = filtered.length;

  if (filtered.length === 0) {
    noResults.hidden = false;
    productGrid.innerHTML = '';
    paginationEl.innerHTML = '';
    return;
  }

  noResults.hidden = true;

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageItems = filtered.slice(start, end);

  productGrid.innerHTML = pageItems.map(createCard).join('');
  renderPagination(totalPages);
}

// Events
btnSearch?.addEventListener('click', applyFilter);
btnReset?.addEventListener('click', resetFilters);
searchInput?.addEventListener('input', () => {
  // debounce-ish
  clearTimeout(window.__t);
  window.__t = setTimeout(applyFilter, 200);
});

btnGrid?.addEventListener('click', () => setView('grid'));
btnList?.addEventListener('click', () => setView('list'));

// Init
initTypeSelect();
setView('grid');
render();

