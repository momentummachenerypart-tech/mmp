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
    "5R": {
      type: "Wrapflex Couplings",
      model: "5R",
      size: "5R",
      boreRange: "0.5–1.625 in",
      maxBore: "1.625 in",
      maxRPM: 4500,
      maxTorqueNm: 62.1,
      diameter: "0.5 in",
      dimensions: { diameter: "1.625 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 550 lb-in (62.1 Nm)",
        "Bore range: 0.5–1.625 in",
        "Kecepatan maks: 4,500 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "10R": {
      type: "Wrapflex Couplings",
      model: "10R",
      size: "10R",
      boreRange: "0.625–1.875 in",
      maxBore: "1.875 in",
      maxRPM: 4500,
      maxTorqueNm: 129.9,
      diameter: "0.625 in",
      dimensions: { diameter: "1.875 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 1,150 lb-in (129.9 Nm)",
        "Bore range: 0.625–1.875 in",
        "Kecepatan maks: 4,500 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "20R": {
      type: "Wrapflex Couplings",
      model: "20R",
      size: "20R",
      boreRange: "0.75–2.375 in",
      maxBore: "2.375 in",
      maxRPM: 4500,
      maxTorqueNm: 316.4,
      diameter: "0.75 in",
      dimensions: { diameter: "2.375 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 2,800 lb-in (316.4 Nm)",
        "Bore range: 0.75–2.375 in",
        "Kecepatan maks: 4,500 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "30R": {
      type: "Wrapflex Couplings",
      model: "30R",
      size: "30R",
      boreRange: "1–2.875 in",
      maxBore: "2.875 in",
      maxRPM: 4500,
      maxTorqueNm: 519.7,
      diameter: "1 in",
      dimensions: { diameter: "2.875 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 4,600 lb-in (519.7 Nm)",
        "Bore range: 1–2.875 in",
        "Kecepatan maks: 4,500 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "40R": {
      type: "Wrapflex Couplings",
      model: "40R",
      size: "40R",
      boreRange: "1.125–3.375 in",
      maxBore: "3.375 in",
      maxRPM: 3600,
      maxTorqueNm: 1028.2,
      diameter: "1.125 in",
      dimensions: { diameter: "3.375 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 9,100 lb-in (1028.2 Nm)",
        "Bore range: 1.125–3.375 in",
        "Kecepatan maks: 3,600 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "50R": {
      type: "Wrapflex Couplings",
      model: "50R",
      size: "50R",
      boreRange: "1.25–4.125 in",
      maxBore: "4.125 in",
      maxRPM: 3000,
      maxTorqueNm: 2508.3,
      diameter: "1.25 in",
      dimensions: { diameter: "4.125 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 22,200 lb-in (2508.3 Nm)",
        "Bore range: 1.25–4.125 in",
        "Kecepatan maks: 3,000 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "60R": {
      type: "Wrapflex Couplings",
      model: "60R",
      size: "60R",
      boreRange: "2–5.25 in",
      maxBore: "5.25 in",
      maxRPM: 2500,
      maxTorqueNm: 4011.0,
      diameter: "2 in",
      dimensions: { diameter: "5.25 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 35,500 lb-in (4011.0 Nm)",
        "Bore range: 2–5.25 in",
        "Kecepatan maks: 2,500 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "70R": {
      type: "Wrapflex Couplings",
      model: "70R",
      size: "70R",
      boreRange: "2.75–6.125 in",
      maxBore: "6.125 in",
      maxRPM: 2100,
      maxTorqueNm: 8010.6,
      diameter: "2.75 in",
      dimensions: { diameter: "6.125 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 70,900 lb-in (8010.6 Nm)",
        "Bore range: 2.75–6.125 in",
        "Kecepatan maks: 2,100 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    },
    "80R": {
      type: "Wrapflex Couplings",
      model: "80R",
      size: "80R",
      boreRange: "3.375–7.25 in",
      maxBore: "7.25 in",
      maxRPM: 1800,
      maxTorqueNm: 15027.0,
      diameter: "3.375 in",
      dimensions: { diameter: "7.25 in", length: "-" },
      pdf: "wrapflex.pdf",
      features: [
        "Torsi maks: 133,000 lb-in (15027.0 Nm)",
        "Bore range: 3.375–7.25 in",
        "Kecepatan maks: 1,800 rpm"
      ],
      applications: ["Pompa", "Blower", "Konveyor", "Industrial drives"],
      youtube: "https://youtu.be/K713GUabA_Q?si=zG44umqMwQGcbNFI"
    }
  },
  "Gear Couplings": {
    "1010G": {
      type: "Gear Couplings",
      model: "1010G",
      size: "1010G",
      boreRange: "0.5–1.875 in",
      maxBore: "1.875 in",
      maxRPM: 8000,
      maxTorqueNm: 1138.9,
      diameter: "0.5 in",
      dimensions: { diameter: "1.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 10,080 lb-in (1138.9 Nm)",
        "Bore range: 0.5–1.875 in",
        "Kecepatan maks: 8,000 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1015G": {
      type: "Gear Couplings",
      model: "1015G",
      size: "1015G",
      boreRange: "0.75–2.375 in",
      maxBore: "2.375 in",
      maxRPM: 6500,
      maxTorqueNm: 2349.0,
      diameter: "0.75 in",
      dimensions: { diameter: "2.375 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 20,790 lb-in (2349.0 Nm)",
        "Bore range: 0.75–2.375 in",
        "Kecepatan maks: 6,500 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1020G": {
      type: "Gear Couplings",
      model: "1020G",
      size: "1020G",
      boreRange: "1–2.875 in",
      maxBore: "2.875 in",
      maxRPM: 5600,
      maxTorqueNm: 4270.8,
      diameter: "1 in",
      dimensions: { diameter: "2.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 37,800 lb-in (4270.8 Nm)",
        "Bore range: 1–2.875 in",
        "Kecepatan maks: 5,600 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1025G": {
      type: "Gear Couplings",
      model: "1025G",
      size: "1025G",
      boreRange: "1.25–3.625 in",
      maxBore: "3.625 in",
      maxRPM: 5000,
      maxTorqueNm: 7473.9,
      diameter: "1.25 in",
      dimensions: { diameter: "3.625 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 66,150 lb-in (7473.9 Nm)",
        "Bore range: 1.25–3.625 in",
        "Kecepatan maks: 5,000 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1030G": {
      type: "Gear Couplings",
      model: "1030G",
      size: "1030G",
      boreRange: "1.5–4.125 in",
      maxBore: "4.125 in",
      maxRPM: 4400,
      maxTorqueNm: 12100.7,
      diameter: "1.5 in",
      dimensions: { diameter: "4.125 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 107,100 lb-in (12100.7 Nm)",
        "Bore range: 1.5–4.125 in",
        "Kecepatan maks: 4,400 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1035G": {
      type: "Gear Couplings",
      model: "1035G",
      size: "1035G",
      boreRange: "2–4.875 in",
      maxBore: "4.875 in",
      maxRPM: 3900,
      maxTorqueNm: 18506.9,
      diameter: "2 in",
      dimensions: { diameter: "4.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 163,800 lb-in (18506.9 Nm)",
        "Bore range: 2–4.875 in",
        "Kecepatan maks: 3,900 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1040G": {
      type: "Gear Couplings",
      model: "1040G",
      size: "1040G",
      boreRange: "2.5–5.75 in",
      maxBore: "5.75 in",
      maxRPM: 3600,
      maxTorqueNm: 30607.6,
      diameter: "2.5 in",
      dimensions: { diameter: "5.75 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 270,900 lb-in (30607.6 Nm)",
        "Bore range: 2.5–5.75 in",
        "Kecepatan maks: 3,600 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1045G": {
      type: "Gear Couplings",
      model: "1045G",
      size: "1045G",
      boreRange: "3–6.75 in",
      maxBore: "6.75 in",
      maxRPM: 3200,
      maxTorqueNm: 41996.5,
      diameter: "3 in",
      dimensions: { diameter: "6.75 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 371,700 lb-in (41996.5 Nm)",
        "Bore range: 3–6.75 in",
        "Kecepatan maks: 3,200 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1050G": {
      type: "Gear Couplings",
      model: "1050G",
      size: "1050G",
      boreRange: "3.5–7.375 in",
      maxBore: "7.375 in",
      maxRPM: 2900,
      maxTorqueNm: 56594.1,
      diameter: "3.5 in",
      dimensions: { diameter: "7.375 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 500,900 lb-in (56594.1 Nm)",
        "Bore range: 3.5–7.375 in",
        "Kecepatan maks: 2,900 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1055G": {
      type: "Gear Couplings",
      model: "1055G",
      size: "1055G",
      boreRange: "4–8.25 in",
      maxBore: "8.25 in",
      maxRPM: 2650,
      maxTorqueNm: 74027.7,
      diameter: "4 in",
      dimensions: { diameter: "8.25 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 655,200 lb-in (74027.7 Nm)",
        "Bore range: 4–8.25 in",
        "Kecepatan maks: 2,650 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1060G": {
      type: "Gear Couplings",
      model: "1060G",
      size: "1060G",
      boreRange: "4.5–9.125 in",
      maxBore: "9.125 in",
      maxRPM: 2450,
      maxTorqueNm: 90399.2,
      diameter: "4.5 in",
      dimensions: { diameter: "9.125 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 800,100 lb-in (90399.2 Nm)",
        "Bore range: 4.5–9.125 in",
        "Kecepatan maks: 2,450 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    },
    "1070G": {
      type: "Gear Couplings",
      model: "1070G",
      size: "1070G",
      boreRange: "5–10.875 in",
      maxBore: "10.875 in",
      maxRPM: 2150,
      maxTorqueNm: 135242.8,
      diameter: "5 in",
      dimensions: { diameter: "10.875 in", length: "-" },
      pdf: "gearcoupling.pdf",
      features: [
        "Torsi maks: 1,197,000 lb-in (135242.8 Nm)",
        "Bore range: 5–10.875 in",
        "Kecepatan maks: 2,150 rpm"
      ],
      applications: ["Semen", "Tambang", "Oil & gas", "Industrial drives"],
      youtube: "https://youtu.be/DvN2HzqPVvc?si=YfqEBtHF5p4lOX-p"
    }
  },
  "Steelflex Couplings": {
    "1020T": {
      type: "Steelflex Couplings",
      model: "1020T",
      size: "1020T",
      boreRange: "0.5–1.125 in",
      maxBore: "1.125 in",
      maxRPM: 4500,
      maxTorqueNm: 52.0,
      diameter: "0.5 in",
      dimensions: { diameter: "1.125 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 0.73",
        "Torsi maks: 460 lb-in (52.0 Nm)",
        "Bore range: 0.5–1.125 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1030T": {
      type: "Steelflex Couplings",
      model: "1030T",
      size: "1030T",
      boreRange: "0.5–1.375 in",
      maxBore: "1.375 in",
      maxRPM: 4500,
      maxTorqueNm: 149.1,
      diameter: "0.5 in",
      dimensions: { diameter: "1.375 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 2.09",
        "Torsi maks: 1,320 lb-in (149.1 Nm)",
        "Bore range: 0.5–1.375 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1040T": {
      type: "Steelflex Couplings",
      model: "1040T",
      size: "1040T",
      boreRange: "0.5–1.625 in",
      maxBore: "1.625 in",
      maxRPM: 4500,
      maxTorqueNm: 248.6,
      diameter: "0.5 in",
      dimensions: { diameter: "1.625 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 3.49",
        "Torsi maks: 2,200 lb-in (248.6 Nm)",
        "Bore range: 0.5–1.625 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1050T": {
      type: "Steelflex Couplings",
      model: "1050T",
      size: "1050T",
      boreRange: "0.5–1.875 in",
      maxBore: "1.875 in",
      maxRPM: 4500,
      maxTorqueNm: 435.0,
      diameter: "0.5 in",
      dimensions: { diameter: "1.875 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 6.11",
        "Torsi maks: 3,850 lb-in (435.0 Nm)",
        "Bore range: 0.5–1.875 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1060T": {
      type: "Steelflex Couplings",
      model: "1060T",
      size: "1060T",
      boreRange: "0.75–2.125 in",
      maxBore: "2.125 in",
      maxRPM: 4350,
      maxTorqueNm: 683.6,
      diameter: "0.75 in",
      dimensions: { diameter: "2.125 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 9.6",
        "Torsi maks: 6,050 lb-in (683.6 Nm)",
        "Bore range: 0.75–2.125 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1070T": {
      type: "Steelflex Couplings",
      model: "1070T",
      size: "1070T",
      boreRange: "0.75–2.5 in",
      maxBore: "2.5 in",
      maxRPM: 4125,
      maxTorqueNm: 994.3,
      diameter: "0.75 in",
      dimensions: { diameter: "2.5 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 14.0",
        "Torsi maks: 8,800 lb-in (994.3 Nm)",
        "Bore range: 0.75–2.5 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1080T": {
      type: "Steelflex Couplings",
      model: "1080T",
      size: "1080T",
      boreRange: "1.062–3 in",
      maxBore: "3 in",
      maxRPM: 3600,
      maxTorqueNm: 2050.7,
      diameter: "1.062 in",
      dimensions: { diameter: "3 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 28.8",
        "Torsi maks: 18,150 lb-in (2050.7 Nm)",
        "Bore range: 1.062–3 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1090T": {
      type: "Steelflex Couplings",
      model: "1090T",
      size: "1090T",
      boreRange: "1.062–3.5 in",
      maxBore: "3.5 in",
      maxRPM: 3600,
      maxTorqueNm: 3728.5,
      diameter: "1.062 in",
      dimensions: { diameter: "3.5 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 52.4",
        "Torsi maks: 33,000 lb-in (3728.5 Nm)",
        "Bore range: 1.062–3.5 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1100T": {
      type: "Steelflex Couplings",
      model: "1100T",
      size: "1100T",
      boreRange: "1.625–4 in",
      maxBore: "4 in",
      maxRPM: 2440,
      maxTorqueNm: 6276.3,
      diameter: "1.625 in",
      dimensions: { diameter: "4 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 88.1",
        "Torsi maks: 55,550 lb-in (6276.3 Nm)",
        "Bore range: 1.625–4 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1110T": {
      type: "Steelflex Couplings",
      model: "1110T",
      size: "1110T",
      boreRange: "1.625–4.5 in",
      maxBore: "4.5 in",
      maxRPM: 2250,
      maxTorqueNm: 9321.2,
      diameter: "1.625 in",
      dimensions: { diameter: "4.5 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 131",
        "Torsi maks: 82,500 lb-in (9321.2 Nm)",
        "Bore range: 1.625–4.5 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1120T": {
      type: "Steelflex Couplings",
      model: "1120T",
      size: "1120T",
      boreRange: "2.375–5 in",
      maxBore: "5 in",
      maxRPM: 2025,
      maxTorqueNm: 13671.2,
      diameter: "2.375 in",
      dimensions: { diameter: "5 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 192",
        "Torsi maks: 121,000 lb-in (13671.2 Nm)",
        "Bore range: 2.375–5 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1130T": {
      type: "Steelflex Couplings",
      model: "1130T",
      size: "1130T",
      boreRange: "2.625–6 in",
      maxBore: "6 in",
      maxRPM: 1800,
      maxTorqueNm: 19885.3,
      diameter: "2.625 in",
      dimensions: { diameter: "6 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 279",
        "Torsi maks: 176,000 lb-in (19885.3 Nm)",
        "Bore range: 2.625–6 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1140T": {
      type: "Steelflex Couplings",
      model: "1140T",
      size: "1140T",
      boreRange: "2.625–7.25 in",
      maxBore: "7.25 in",
      maxRPM: 1650,
      maxTorqueNm: 28585.2,
      diameter: "2.625 in",
      dimensions: { diameter: "7.25 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 401",
        "Torsi maks: 253,000 lb-in (28585.2 Nm)",
        "Bore range: 2.625–7.25 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1150T": {
      type: "Steelflex Couplings",
      model: "1150T",
      size: "1150T",
      boreRange: "4.25–8 in",
      maxBore: "8 in",
      maxRPM: 1500,
      maxTorqueNm: 39770.7,
      diameter: "4.25 in",
      dimensions: { diameter: "8 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 559",
        "Torsi maks: 352,000 lb-in (39770.7 Nm)",
        "Bore range: 4.25–8 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1160T": {
      type: "Steelflex Couplings",
      model: "1160T",
      size: "1160T",
      boreRange: "4.75–9 in",
      maxBore: "9 in",
      maxRPM: 1350,
      maxTorqueNm: 55927.5,
      diameter: "4.75 in",
      dimensions: { diameter: "9 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 785",
        "Torsi maks: 495,000 lb-in (55927.5 Nm)",
        "Bore range: 4.75–9 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1170T": {
      type: "Steelflex Couplings",
      model: "1170T",
      size: "1170T",
      boreRange: "5.25–10 in",
      maxBore: "10 in",
      maxRPM: 1225,
      maxTorqueNm: 74570.0,
      diameter: "5.25 in",
      dimensions: { diameter: "10 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 1047",
        "Torsi maks: 660,000 lb-in (74570.0 Nm)",
        "Bore range: 5.25–10 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1180T": {
      type: "Steelflex Couplings",
      model: "1180T",
      size: "1180T",
      boreRange: "6–11 in",
      maxBore: "11 in",
      maxRPM: 1100,
      maxTorqueNm: 103381.1,
      diameter: "6 in",
      dimensions: { diameter: "11 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 1452",
        "Torsi maks: 915,000 lb-in (103381.1 Nm)",
        "Bore range: 6–11 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1190T": {
      type: "Steelflex Couplings",
      model: "1190T",
      size: "1190T",
      boreRange: "6–12 in",
      maxBore: "12 in",
      maxRPM: 1050,
      maxTorqueNm: 136711.6,
      diameter: "6 in",
      dimensions: { diameter: "12 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 1920",
        "Torsi maks: 1,210,000 lb-in (136711.6 Nm)",
        "Bore range: 6–12 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1200T": {
      type: "Steelflex Couplings",
      model: "1200T",
      size: "1200T",
      boreRange: "7–13 in",
      maxBore: "13 in",
      maxRPM: 900,
      maxTorqueNm: 186425.0,
      diameter: "7 in",
      dimensions: { diameter: "13 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 2618",
        "Torsi maks: 1,650,000 lb-in (186425.0 Nm)",
        "Bore range: 7–13 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1210T": {
      type: "Steelflex Couplings",
      model: "1210T",
      size: "1210T",
      boreRange: "7–14 in",
      maxBore: "14 in",
      maxRPM: 820,
      maxTorqueNm: 248566.6,
      diameter: "7 in",
      dimensions: { diameter: "14 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 3491",
        "Torsi maks: 2,200,000 lb-in (248566.6 Nm)",
        "Bore range: 7–14 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1220T": {
      type: "Steelflex Couplings",
      model: "1220T",
      size: "1220T",
      boreRange: "8–15 in",
      maxBore: "15 in",
      maxRPM: 730,
      maxTorqueNm: 335564.9,
      diameter: "8 in",
      dimensions: { diameter: "15 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 4712",
        "Torsi maks: 2,970,000 lb-in (335564.9 Nm)",
        "Bore range: 8–15 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1230T": {
      type: "Steelflex Couplings",
      model: "1230T",
      size: "1230T",
      boreRange: "8–16 in",
      maxBore: "16 in",
      maxRPM: 680,
      maxTorqueNm: 434991.6,
      diameter: "8 in",
      dimensions: { diameter: "16 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 6109",
        "Torsi maks: 3,850,000 lb-in (434991.6 Nm)",
        "Bore range: 8–16 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1240T": {
      type: "Steelflex Couplings",
      model: "1240T",
      size: "1240T",
      boreRange: "10–17 in",
      maxBore: "17 in",
      maxRPM: 630,
      maxTorqueNm: 559274.9,
      diameter: "10 in",
      dimensions: { diameter: "17 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 7854",
        "Torsi maks: 4,950,000 lb-in (559274.9 Nm)",
        "Bore range: 10–17 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1250T": {
      type: "Steelflex Couplings",
      model: "1250T",
      size: "1250T",
      boreRange: "10–18.5 in",
      maxBore: "18.5 in",
      maxRPM: 580,
      maxTorqueNm: 745699.9,
      diameter: "10 in",
      dimensions: { diameter: "18.5 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 10472",
        "Torsi maks: 6,600,000 lb-in (745699.9 Nm)",
        "Bore range: 10–18.5 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    },
    "1260T": {
      type: "Steelflex Couplings",
      model: "1260T",
      size: "1260T",
      boreRange: "10–20 in",
      maxBore: "20 in",
      maxRPM: 540,
      maxTorqueNm: 932124.8,
      diameter: "10 in",
      dimensions: { diameter: "20 in", length: "-" },
      pdf: "steelflex.pdf",
      features: [
        "HP/100 RPM: 13090",
        "Torsi maks: 8,250,000 lb-in (932124.8 Nm)",
        "Bore range: 10–20 in"
      ],
      applications: ["Industri berat", "Mesin dengan beban kejut", "Industrial drives"],
      youtube: "https://youtu.be/OUX66s2cYlg?si=0ikR1JECLlzT5mwQ"
    }
  },
  "Long-Term Grease": {
    "LTG Cartridge": {
      type: "Long-Term Grease",
      model: "LTG Cartridge",
      size: "14 oz (0.4 kg) Cartridge",
      boreRange: "N/A",
      maxRPM: 0,
      maxTorqueNm: 0,
      diameter: "N/A",
      maxBore: "N/A",
      dimensions: { diameter: "-", length: "-" },
      pdf: "ltg.pdf",
      features: [
        "NLGI Grade #1, suhu operasi -29°C hingga 121°C",
        "Steelflex Grid Coupling bergaransi 5 tahun bila pakai LTG",
        "Gear Coupling (Lifelign) bergaransi 3 tahun bila pakai LTG"
      ],
      applications: ["Gear coupling", "Steelflex grid coupling", "Mesin berat"]
    },
    "LTG Pail": {
      type: "Long-Term Grease",
      model: "LTG Pail",
      size: "35 lb (15.9 kg) Pail",
      boreRange: "N/A",
      maxRPM: 0,
      maxTorqueNm: 0,
      diameter: "N/A",
      maxBore: "N/A",
      dimensions: { diameter: "-", length: "-" },
      pdf: "ltg.pdf",
      features: [
        "NLGI Grade #1, suhu operasi -29°C hingga 121°C",
        "Steelflex Grid Coupling bergaransi 5 tahun bila pakai LTG",
        "Gear Coupling (Lifelign) bergaransi 3 tahun bila pakai LTG"
      ],
      applications: ["Gear coupling", "Steelflex grid coupling", "Mesin berat"]
    }
  }
};

// Penjelasan untuk setiap tipe produk, ditampilkan saat tipe dipilih di katalog
const typeInfo = {
  "Wrapflex Couplings": {
    icon: "fa-solid fa-ring",
    title: "Wrapflex Coupling",
    description: "Coupling elastomeris yang menggunakan elemen karet fleksibel untuk menghubungkan dua poros. Elemen karet ini meredam getaran dan kejutan (shock load), serta mentoleransi sedikit pergeseran (misalignment) antar poros tanpa merusak mesin.",
    points: [
      "Tidak perlu pelumasan sama sekali (maintenance-free)",
      "Meredam getaran dan beban kejut secara alami",
      "Mudah dipasang dan diganti tanpa memindahkan poros",
      "Cocok untuk pompa, blower, dan konveyor ringan-menengah"
    ]
  },
  "Gear Couplings": {
    icon: "fa-solid fa-gears",
    title: "Gear Coupling",
    description: "Coupling dengan dua hub bergerigi yang saling mengunci di dalam selongsong (sleeve) bergerigi juga. Desain ini memungkinkan kapasitas torsi sangat tinggi dan tetap mentoleransi pergeseran sudut maupun paralel antar poros.",
    points: [
      "Kapasitas torsi tinggi untuk beban berat",
      "Mentoleransi misalignment sudut & paralel",
      "Butuh pelumasan berkala (grease) agar gigi awet",
      "Umum dipakai di industri berat: semen, tambang, oil & gas"
    ]
  },
  "Steelflex Couplings": {
    icon: "fa-solid fa-layer-group",
    title: "Steelflex Coupling (Grid Coupling)",
    description: "Menggunakan elemen grid baja fleksibel yang dianyam di antara gigi pada dua hub. Grid ini melentur saat menyalurkan torsi, sehingga meredam getaran dan beban kejut sekaligus tetap tahan lama secara mekanis.",
    points: [
      "Kombinasi ketahanan gear coupling & fleksibilitas elastomer",
      "Tahan terhadap beban kejut dan getaran tinggi",
      "Grid mudah diperiksa dan diganti tanpa membongkar hub",
      "Butuh pelumasan berkala untuk performa optimal"
    ]
  },
  "Long-Term Grease": {
    icon: "fa-solid fa-oil-can",
    title: "Long-Term Grease (LTG)",
    description: "Grease atau pelumas khusus untuk gear coupling dan Steelflex grid coupling yang dirancang untuk masa pakai lebih lama dibanding grease biasa, sehingga mengurangi frekuensi maintenance dan downtime mesin.",
    points: [
      "Interval pelumasan ulang lebih panjang, mengurangi downtime",
      "Steelflex Grid Coupling: bergaransi 5 tahun bila pakai LTG",
      "Tersedia dalam kemasan cartridge 14 oz (0.4 kg) dan pail 35 lb (15.9 kg)",
      "Cocok untuk gear coupling & steelflex dengan beban berat"
    ]
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
const typeTabs = document.getElementById('typeTabs');
const typeInfoPanel = document.getElementById('typeInfo');
const typeInfoIcon = document.getElementById('typeInfoIcon');
const typeInfoTitle = document.getElementById('typeInfoTitle');
const typeInfoDesc = document.getElementById('typeInfoDesc');
const typeInfoPoints = document.getElementById('typeInfoPoints');
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
let selectedType = '';

function countByType(type) {
  return allProducts.filter(p => p.type === type).length;
}

function initTypeTabs() {
  const types = Object.keys(catalog);
  const frag = document.createDocumentFragment();

  const makeTab = (type, label, count) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'type-tab';
    btn.dataset.type = type;
    const iconClass = typeInfo[type]?.icon || 'fa-solid fa-layer-group';
    btn.innerHTML = `
      <div class="type-tab-icon"><i class="${iconClass}"></i></div>
      <div class="type-tab-name">${label}</div>
      <div class="type-tab-count">${count} produk</div>
    `;
    btn.addEventListener('click', () => selectType(type));
    return btn;
  };

  frag.appendChild(makeTab('', 'Semua Produk', allProducts.length));
  types.forEach(t => frag.appendChild(makeTab(t, t, countByType(t))));

  typeTabs.appendChild(frag);
}

function updateTypeTabsActive() {
  typeTabs.querySelectorAll('.type-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.type === selectedType);
  });
}

function renderTypeInfo() {
  const info = typeInfo[selectedType];
  if (!info) {
    typeInfoPanel.hidden = true;
    return;
  }
  typeInfoPanel.hidden = false;
  typeInfoIcon.innerHTML = `<i class="${info.icon}"></i>`;
  typeInfoTitle.textContent = info.title;
  typeInfoDesc.textContent = info.description;
  typeInfoPoints.innerHTML = info.points.map(p => `<li><i class="fas fa-check-circle"></i>${p}</li>`).join('');
}

function selectType(type) {
  selectedType = type;
  updateTypeTabsActive();
  renderTypeInfo();
  applyFilter();
}
// Ekspos ke global agar bisa dipanggil dari tombol di section lain (mis. "Lihat di Katalog")
window.selectCatalogType = selectType;
window.applyCatalogFilter = () => applyFilter();

function normalize(s) {
  return String(s ?? '').toLowerCase();
}

function applyFilter() {
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
  selectedType = '';
  searchInput.value = '';
  updateTypeTabsActive();
  renderTypeInfo();
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
initTypeTabs();
setView('grid');
render();

