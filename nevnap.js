function initArray() {
  this.length = arguments.length;
  for (var i = 0; i < this.length; i++) {
    this[i+1] = arguments[i];
  }
}

function szokoev(ev) {
  return (ev % 4 === 0 && (ev % 100 !== 0 || ev % 400 === 0));
}

function havinev(ev, ho, nap) {
  var napok;
  if (ho == 1) {
    napok = new initArray("ÚJÉV, Fruzsina","Ábel","Genovéva, Benjámin","Titusz, Leona",
     "Simon","Boldizsár","Attila, Ramóna","Gyöngyvér","Marcell",
     "Melánia","Ágota","Ernő","Veronika","Bódog","Lóránt, Loránd",
     "Gusztáv","Antal, Antónia","Piroska","Sára, Márió","Fábián, Sebestyén",
     "Ágnes","Vince, Artúr","Zelma, Rajmund","Timót","Pál","Vanda, Paula",
     "Angelika","Károly, Karola","Adél","Martina, Gerda","Marcella","");
  }
  else if (ho == 2) {
    if (!szokoev(ev)) {
      napok = new initArray("Ignác","Karolina, Aida","Balázs","Ráhel, Csenge","Ágota, Ingrid",
       "Dorottya, Dóra","Tódor, Rómeó","Aranka","Abigél, Alex","Elvira",
       "Bertold, Marietta","Lívia, Lídia","Ella, Linda","Bálint, Valentin",
       "Kolos, Georgina","Julianna, Lilla","Donát","Bernadett","Zsuzsanna",
       "Aladár, Álmos","Eleonóra","Gerzson","Alfréd",
       "Mátyás","Géza","Edina","Ákos, Bátor","Elemér","","");
    } else {
      napok = new initArray("Ignác","Karolina, Aida","Balázs","Ráhel, Csenge","Ágota, Ingrid",
       "Dorottya, Dóra","Tódor, Rómeó","Aranka","Abigél, Alex","Elvira",
       "Bertold, Marietta","Lívia, Lídia","Ella, Linda","Bálint, Valentin",
       "Kolos, Georgina","Julianna, Lilla","Donát","Bernadett","Zsuzsanna",
       "Aladár, Álmos","Eleonóra","Gerzson","Alfréd",
       "Szőkőnap","Mátyás","Géza","Edina","Ákos, Bátor","Elemér","","");
    }
  }
  // A többi hónap marad ugyanúgy, nem írom át mindet ide, de ugyanígy érdemes kezelni

  // példa: ha még nincs definiálva, akkor üres string vissza
  if (!napok) return "";
  return napok[nap];
}

function honev(ho) {
  var month = new initArray("január","február","március","április",
    "május","június","július","augusztus","szeptember","október",
    "november","december");
  return month[ho];
}

function napnev(szam) {
  var napok = new initArray("vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat","vasárnap");
  return napok[szam];
}

function kiir () {
  var ido = new Date();
  var ev = ido.getFullYear();
  var ho = ido.getMonth()+1;
  var nap = ido.getDate();
  document.write("Ma <b>" + havinev(ev, ho, nap) + "</b> névnap van. Köszöntjük őket!");
}
