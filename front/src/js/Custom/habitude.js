
function enablePeriode(that) {
  ///////////////////////
  /// TABAC SERVRAGE
  var id = that.id;
  if (id == "tab-Sevrage") {
    if (document.getElementById("tab-Sevrage").value == "oui") {
      document.getElementById("t-periode-label").removeAttribute("hidden");
      document.getElementById("t-periode").removeAttribute("hidden")


    } else {
      document.getElementById("t-periode-label").setAttribute("hidden", "");
      document.getElementById("t-periode").setAttribute("hidden", "")
    }
  } else if (id == "chic-Sevrage") {
    if (document.getElementById("chic-Sevrage").value == "oui") {
      document.getElementById("chic-periode-label").removeAttribute("hidden");
      document.getElementById("chic-periode").removeAttribute("hidden")



    } else {
      document.getElementById("chic-periode-label").setAttribute("hidden", "");
      document.getElementById("chic-periode").setAttribute("hidden", "")
    }

  } else if (id == "nef-Sevrage") {
    if (document.getElementById("nef-Sevrage").value == "oui") {
      document.getElementById("nef-periode-label").removeAttribute("hidden");
      document.getElementById("nef-periode").removeAttribute("hidden")



    } else {
      document.getElementById("nef-periode-label").setAttribute("hidden", "");
      document.getElementById("nef-periode").setAttribute("hidden", "")
    }

  } else if (id == "tabou-Sevrage") {
    if (document.getElementById("tabou-Sevrage").value == "oui") {
      document.getElementById("tabou-periode-label").removeAttribute("hidden");
      document.getElementById("tabou-periode").removeAttribute("hidden")



    } else {
      document.getElementById("tabou-periode-label").setAttribute("hidden", "");
      document.getElementById("tabou-periode").setAttribute("hidden", "")
    }
  }


  ///////////////////////////////////


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


function enableSevPeriode() {
  console.log(document.getElementById("tab-Sevrage").value != "oui")
  if (document.getElementById("t-periode").value == 1 && document.getElementById("tab-Sevrage").value == "oui") {
    document.getElementById("t-sev-label").removeAttribute("hidden");
    document.getElementById("t-sev").removeAttribute("hidden")
  } else {
    document.getElementById("t-sev-label").setAttribute("hidden", "");
    document.getElementById("t-sev").setAttribute("hidden", "")
  };

  if (document.getElementById("chic-periode").value == 1 && document.getElementById("chic-Sevrage").value == "oui") {
    document.getElementById("chic-sev-label").removeAttribute("hidden");
    document.getElementById("chic-sev").removeAttribute("hidden")
  } else {
    document.getElementById("chic-sev-label").setAttribute("hidden", "");
    document.getElementById("chic-sev").setAttribute("hidden", "")
  };
  if (document.getElementById("nef-periode").value == 1 && document.getElementById("nef-Sevrage").value == "oui") {
    document.getElementById("nef-sev-label").removeAttribute("hidden");
    document.getElementById("nef-sev").removeAttribute("hidden")
  } else {
    document.getElementById("nef-sev-label").setAttribute("hidden", "");
    document.getElementById("nef-sev").setAttribute("hidden", "")
  };

  if (document.getElementById("tabou-periode").value == 1 && document.getElementById("tabou-Sevrage").value == "oui") {
    document.getElementById("tabou-sev-label").removeAttribute("hidden");
    document.getElementById("tabou-sev").removeAttribute("hidden")
  } else {
    document.getElementById("tabou-sev-label").setAttribute("hidden", "");
    document.getElementById("tabou-sev").setAttribute("hidden", "")
  };
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
  if (tabac.value == "Non" || tabac.value == "") {
    document.getElementById("sevrage-label").setAttribute("hidden", "");
    document.getElementById("Sevrage").setAttribute("hidden", "");
  } else {
    document.getElementById("sevrage-label").removeAttribute("hidden");
    document.getElementById("Sevrage").removeAttribute("hidden");
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
    document.getElementById("a-sevrage-label").setAttribute("hidden", "");
    document.getElementById("a-sevrage").setAttribute("hidden", "");
  } else {
    document.getElementById("a-sevrage-label").removeAttribute("hidden");
    document.getElementById("a-sevrage").removeAttribute("hidden");
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


function enableMutliTabac(tabac) {
  var tabac = document.querySelectorAll("#tabac option:checked");
  var selected = [];
  for (var i = 0; i < tabac.length; i++) {
    selected.push(tabac[i].value);
  }
  console.log(selected);


  tabac.forEach(function (option) {
    var tabacValue = option.value;
    if (tabacValue != "") {
      if (tabacValue == 1) {
        document.getElementById("non-o-h").removeAttribute("hidden");
        document.getElementById("non-o").removeAttribute("hidden");
        document.getElementById("non-o-h").click();
      } else {
        if (selected.includes('1') == false) {
          document.getElementById("non-o-h").setAttribute("hidden", "");
          document.getElementById("non-o").setAttribute("hidden", "");
        }
      }

      if (tabacValue == 2) {
        document.getElementById("tabac-act-o-h").removeAttribute("hidden");
        document.getElementById("tabac-act-o").removeAttribute("hidden");
        document.getElementById("tabac-act-o-h").click();
      } else {
        if (selected.includes('2') == false) {
          document.getElementById("tabac-act-o-h").setAttribute("hidden", "");
          document.getElementById("tabac-act-o").setAttribute("hidden", "");
        }
      }

      // if (tabacValue == 3) {
      //   document.getElementById("tabac-act-o-h").removeAttribute("hidden");
      //   document.getElementById("tabac-act-o").removeAttribute("hidden");
      //   document.getElementById("tabac-act-o-h").click();
      // } else {
      //   if (selected.includes('3') == false) {
      //     document.getElementById("tabac-act-h").setAttribute("hidden", "");
      //     document.getElementById("tabac-act").setAttribute("hidden", "");
      //   }
      // }

      if (tabacValue == 4) {
        document.getElementById("chich-o-h").removeAttribute("hidden");
        document.getElementById("chich-o").removeAttribute("hidden");
        document.getElementById("chich-o-h").click();
      } else {
        if (selected.includes('4') == false) {
          document.getElementById("chich-o-h").setAttribute("hidden", "");
          document.getElementById("chich-o").setAttribute("hidden", "");
        }
      }

      if (tabacValue == 5) {
        document.getElementById("nef-o-h").removeAttribute("hidden");
        document.getElementById("nef-o").removeAttribute("hidden");
        document.getElementById("nef-o-h").click();
      } else {
        if (selected.includes('5') == false) {
          document.getElementById("nef-o-h").setAttribute("hidden", "");
          document.getElementById("nef-o").setAttribute("hidden", "");
        }
      }

      if (selected.includes('6')) {

        // // enable autre field
        // document.getElementById("b-siege-options-autre-label").removeAttribute("hidden");
        // document.getElementById("b-siege-options-autre").removeAttribute("hidden");
        document.getElementById("tabou-o-h").removeAttribute("hidden");
        document.getElementById("tabou-o").removeAttribute("hidden");
        document.getElementById("tabou-o-h").click();
      } else {
        if (selected.includes('6') == false) {
          document.getElementById("tabou-o-h").setAttribute("hidden", "");
          document.getElementById("tabou-o").setAttribute("hidden", "");


          // // set autre field hidden
          // document.getElementById("b-siege-options-autre-label").setAttribute("hidden", "");
          // document.getElementById("b-siege-options-autre").setAttribute("hidden", "");
        }
      }

    } else {
      document.getElementById("non-o-h").setAttribute("hidden", "");
      document.getElementById("non-o").setAttribute("hidden", "");
      document.getElementById("tabac-act-o-h").setAttribute("hidden", "");
      document.getElementById("tabac-act-o").setAttribute("hidden", "");
      document.getElementById("chich-o-h").setAttribute("hidden", "");
      document.getElementById("chich-o").setAttribute("hidden", "");
      document.getElementById("nef-o-h").setAttribute("hidden", "");
      document.getElementById("nef-o").setAttribute("hidden", "");
      document.getElementById("tabou-o-h").setAttribute("hidden", "");
      document.getElementById("tabou-o").setAttribute("hidden", "");

    }
  })

}




