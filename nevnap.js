function kiir() {
  const maiDatum = new Date();
  const honap = maiDatum.getMonth() + 1;
  const nap = maiDatum.getDate();

  // Egyszerű névnapi adatok példa (kibővíthető)
  const nevnapok = {
    "1-1": "Fruzsina, Albán",
    "7-29": "Márta, Flóra",
    "12-24": "Ádám, Éva",
    // Ide írhatsz még több bejegyzést így: "hónap-nap": "név1, név2"
  };

  const kulcs = `${honap}-${nap}`;
  const nevnap = nevnapok[kulcs] || "Ma nincs hivatalos névnap.";

  document.write("Mai névnap: <strong>" + nevnap + "</strong>");
}