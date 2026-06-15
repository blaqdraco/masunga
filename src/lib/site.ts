export const site = {
  name: "JQ Company Limited",
  short: "JQ Company",
  tagline: "Integrated ICT & Office Solutions",
  mission:
    "Empowering Tanzanian businesses with reliable ICT equipment, smart software, and quality office supplies — backed by exceptional service.",
  phone1: "+255 750 105 876",
  phone2: "+255 754 297 955",
  whatsapp: "255750105876",
  email: "jqcompanyltd@gmail.com",
  address: "P.O. Box 4156, Dodoma — Tanzania",
  hours: "Mon – Sat · 8:00 AM – 6:00 PM",
  founded: 2021,
};

export const whatsappLink = (msg = "Hello JQ Company, I'd like a quote.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
