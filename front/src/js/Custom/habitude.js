
function enablePeriode() {

  if (document.getElementById("Sevrage").value == "oui") {
    document.getElementById("t-periode-label").removeAttribute("hidden");
    document.getElementById("t-periode").removeAttribute("hidden")

    if (document.getElementById("t-periode").value == 1) {
      document.getElementById("t-sev-label").removeAttribute("hidden");
      document.getElementById("t-sev").removeAttribute("hidden")
    } else {
      document.getElementById("t-sev-label").setAttribute("hidden", "");
      document.getElementById("t-sev").setAttribute("hidden", "")
    };

  } else {
    document.getElementById("t-periode-label").setAttribute("hidden", "");
    document.getElementById("t-periode").setAttribute("hidden", "")
  }


  if (document.getElementById("a-sevrage").value == "oui") {
    document.getElementById("a-p-label").removeAttribute("hidden");
    document.getElementById("a-p").removeAttribute("hidden")

    if (document.getElementById("a-p").value == 1) {
      document.getElementById("a-sev-label").removeAttribute("hidden");
      document.getElementById("a-sev").removeAttribute("hidden");
    } else {
      document.getElementById("a-sev-label").setAttribute("hidden", "");
      document.getElementById("a-sev").setAttribute("hidden", "");
    }
  } else {
    document.getElementById("a-p-label").setAttribute("hidden", "");
    document.getElementById("a-p").setAttribute("hidden", "")
  }
}


function enableActiv() {
  if (document.getElementById("activ").value == "oui") {
    document.getElementById("activ-type-label").removeAttribute("hidden");
    document.getElementById("activ-type").removeAttribute("hidden");
  } else {
    document.getElementById("activ-type-label").setAttribute("hidden", "");
    document.getElementById("activ-type").setAttribute("hidden", "")
  }
}
function enablePassif() {
  if (document.getElementById("tabac").value == "Non") {
    document.getElementById("passif-label").removeAttribute("hidden");
    document.getElementById("passif").removeAttribute("hidden");
  } else {
    document.getElementById("passif-label").setAttribute("hidden", "");
    document.getElementById("passif").setAttribute("hidden", "")
  }
}



function disableSevrage(tabac) {
  document.getElementById("tabac-display").innerHTML = tabac.value;
  if (tabac.value == "Non") {
    document.getElementById("Sevrage").disabled = true;
  } else {
    document.getElementById("Sevrage").disabled = false;
  }
  if (tabac.value != "Cigarette") {
    document.getElementById("paquetannee-label").setAttribute("hidden", "");
    document.getElementById("paquetannee").setAttribute("hidden", "");
    if (tabac.value == "Chicha") {
      document.getElementById("chicha-label").removeAttribute("hidden");
      document.getElementById("chicha").removeAttribute("hidden");
    } else {
      document.getElementById("chicha-label").setAttribute("hidden", "");
      document.getElementById("chicha").setAttribute("hidden", "");
    }
    if (tabac.value == "Neffa") {
      document.getElementById("neffa-label").removeAttribute("hidden");
      document.getElementById("neffa").removeAttribute("hidden");
    } else {
      document.getElementById("neffa-label").setAttribute("hidden", "");
      document.getElementById("neffa").setAttribute("hidden", "");
    }
    document.getElementById("paquetannee-label").setAttribute("hidden", "");
    document.getElementById("paquetannee").setAttribute("hidden", "");
  } else {
    document.getElementById("paquetannee-label").removeAttribute("hidden");
    document.getElementById("paquetannee").removeAttribute("hidden");
  }
}




function disableAlcSev(alcool) {
  if (alcool.value == "") {
    document.getElementById("a-sevrage").disabled = true;
  } else {
    document.getElementById("a-sevrage").disabled = false;
  }
  if (alcool.value == "") {
    // document.getElementById("alcool-display").innerHTML = tabac.value;
    document.getElementById("periode-label").setAttribute("hidden", "");
    document.getElementById("periode").setAttribute("hidden", "");
  } else {
    document.getElementById("");
    document.getElementById("periode-label").removeAttribute("hidden");
    document.getElementById("periode").removeAttribute("hidden");
  }
}
