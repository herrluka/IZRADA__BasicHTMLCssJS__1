let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.00035439765206, lng: 20.142620061374195 },
    zoom: 15,
  });

  new google.maps.Marker({
    position: { lat: 45.00035439765206, lng: 20.142620061374195 },
    map,
  });
}

function rezervacija() {
  var malaSalaSelektovana = document.getElementById("mala-sala").checked;
  var srednjaSalaSelektovana = document.getElementById("srednja-sala").checked;
  var velikaSalaSelektovana = document.getElementById("velika-sala").checked;

  if (malaSalaSelektovana === false && srednjaSalaSelektovana === false && velikaSalaSelektovana === false) {
    alert("Odabir veličine sale je obavezan");
    return;
  }

  var bronzaniSelektovan = document.getElementById("bronzani").checked;
  var srebrniSelektovan = document.getElementById("srebrni").checked;
  var zlatniSelektovan = document.getElementById("zlatni").checked;

  if (bronzaniSelektovan === false && srebrniSelektovan === false && zlatniSelektovan === false) {
    alert("Odabir paketa hrane je obavezan");
    return;
  }

  var standardniSelektovan = document.getElementById("osnovni").checked;
  var premiumSelektovan = document.getElementById("premium").checked;

  if (standardniSelektovan === false && premiumSelektovan === false) {
    alert("Odabir paketa pića je obavezan");
    return;
  }

  var brojGostiju = document.getElementById("broj-gostiju").value;
  if (!brojGostiju) {
    alert("Odabir broja gostiju je obavezan");
    return;
  }

  if (brojGostiju <= 0) {
    alert("Broj gostiju mora da bude veći od 0");
    return;
  }

  var datum = document.getElementById("datum").value;
  if (!datum) {
    alert("Odabir datuma je obavezan");
    return;
  }

  if (malaSalaSelektovana) {
    if (brojGostiju > 100) {
      alert("U maloj sali mora da bude manje od 100 gostiju");
      return;
    }
  }

  if (srednjaSalaSelektovana) {
    if (brojGostiju > 300) {
      alert("U srednjoj sali mora da bude manje od 300 gostiju");
      return;
    }
  }


  if (velikaSalaSelektovana) {
    if (brojGostiju > 500) {
      alert("U velikoj sali mora da bude manje od 50 gostiju");
      return;
    }
  }

  var cenaPoOsobi = 0;
  if (malaSalaSelektovana) {
    cenaPoOsobi += parseInt(document.getElementById("mala-sala").value);
  } else if (srednjaSalaSelektovana) {
    cenaPoOsobi += parseInt(document.getElementById("srednja-sala").value);
  } else {
    cenaPoOsobi += parseInt(document.getElementById("velika-sala").value);
  }

  if (bronzaniSelektovan) {
    cenaPoOsobi += parseInt(document.getElementById("bronzani").value);
  } else if (srebrniSelektovan) {
    cenaPoOsobi += parseInt(document.getElementById("srebrni").value);
  } else {
    cenaPoOsobi += parseInt(document.getElementById("zlatni").value);
  }

  if (standardniSelektovan) {
    cenaPoOsobi += parseInt(document.getElementById("osnovni").value);
  } else {
    cenaPoOsobi += parseInt(document.getElementById("premium").value);
  }

  var fiestaSelektovana = document.getElementById("fiesta").checked;
  var atinaSelektovana = document.getElementById("atina").checked;

  if (fiestaSelektovana) {
    cenaPoOsobi += parseInt(document.getElementById("fiesta").value);
  } else if (atinaSelektovana) {
    cenaPoOsobi += parseInt(document.getElementById("atina").value);
  }

  var ukupnaCena = cenaPoOsobi * brojGostiju;
  if (confirm('Ukupna cena iznosi ' + ukupnaCena + '€. Da li potvrđujete zakazivanje termina?')) {
    alert("Uspešno ste rezervisali salu za " + datum + " !");
    location.reload();
  }


}

function kontaktiraj() {
  var imePrezime = document.getElementById("ime").value;
  var tekst =  document.getElementById("tekst-kontakta").value;

  if (imePrezime === "") {
    alert("Neophodno je da unesete ime i prezime");
  } else if (tekst === "") {
    alert("Neophodno je da unesete pitanje");
  } else {
    alert("Uspešno ste postavili pitanje!");
    document.getElementById("ime").value = "";
    document.getElementById("tekst-kontakta").value = "";
  }
}