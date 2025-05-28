let contador = 0;

export default function handler(req, res) {
  const links = [
    "https://chat.whatsapp.com/HsaBuLsrdPO4V21yjIQv47", // Grupo 1
    "https://chat.whatsapp.com/LgnVlowLUYT9cZae0bEI5V", // Grupo 2
    "https://chat.whatsapp.com/D4qSliHepxsEVmCFHm7fZK", // Grupo 3
    "https://chat.whatsapp.com/KFm5iHFYDgdA5RJ7LXWddZ", // Grupo 4
    "https://chat.whatsapp.com/Db2qc5V6ramIhAMh3eLcIC"  // Grupo 5
  ];

  const link = links[contador % links.length];
  contador++;

  res.writeHead(302, { Location: link });
  res.end();
}
