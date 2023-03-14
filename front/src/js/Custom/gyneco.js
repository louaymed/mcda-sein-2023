function affATCD(atcd) {
    var option = atcd.options[atcd.selectedIndex];
    var text = option.text;
    console.log(text);
    if (atcd.value != "") {
        console.log("this is me")
        document.getElementById("atcdm-fiche").removeAttribute("hidden");
        document.getElementById("atcdm-display").innerHTML = text;
    } else {
        document.getElementById("atcdm-fiche").setAttribute("hidden", "");
    }
}




function affgyneco() {
    var g = document.getElementById("G").value;
    var p = document.getElementById("P").value;


    if (g != "") {
        console.log("this is me")
        document.getElementById("gp-fiche").removeAttribute("hidden");
        // console.log(text);
        document.getElementById("gp-display").innerHTML = "G" + g + "P" + p;
    } else {
        document.getElementById("gp-fiche").setAttribute("hidden", "");
    }


}

function affGross() {
    var gross = document.getElementById("grossesse-option")
    var option = gross.options[gross.selectedIndex];
    var text = option.text;
    // console.log(text);
    if (gross != "") {
        console.log("this is me")
        document.getElementById("gross-fiche").removeAttribute("hidden");
        // console.log(text);
        document.getElementById("gross-display").innerHTML = text;
        if (gross.value == 1) {
            document.getElementById("gross-sa-fiche").removeAttribute("hidden");
        } else {
            document.getElementById("gross-sa-fiche").setAttribute("hidden", "");

        }
    } else {
        document.getElementById("gross-fiche").setAttribute("hidden", "");
    }


}

function affGrossSA() {
    var sa = document.getElementById("sa").value;

    // console.log(text);
    document.getElementById("gsa-display").innerHTML = sa;
}





function disableStatutMeno(statut) {

    if (statut != "") {
        document.getElementById("meno-sub").removeAttribute("hidden");

        if (statut.value == "Non Ménoposée") {
            document.getElementById("ddr-label").removeAttribute("hidden");
            document.getElementById("ddr").removeAttribute("hidden");
            document.getElementById("age-m-label").setAttribute("hidden", "");
            document.getElementById("age-m").setAttribute("hidden", "");
            document.getElementById("grossesse-label").setAttribute("hidden", "");
            document.getElementById("grossesse-option").setAttribute("hidden", "");
            document.getElementById("dosage-label").setAttribute("hidden", "");
            document.getElementById("dosage-option").setAttribute("hidden", "");

        } else if (statut.value == "PériMénoposée") {
            document.getElementById("dosage-label").removeAttribute("hidden");
            document.getElementById("dosage-option").removeAttribute("hidden");
            document.getElementById("ddr-label").setAttribute("hidden", "");
            document.getElementById("ddr").setAttribute("hidden", "");
            document.getElementById("age-m-label").setAttribute("hidden", "");
            document.getElementById("age-m").setAttribute("hidden", "");
            document.getElementById("grossesse-label").setAttribute("hidden", "");
            document.getElementById("grossesse-option").setAttribute("hidden", "");


        } else if (statut.value == "Ménoposée") {
            document.getElementById("age-m-label").removeAttribute("hidden");
            document.getElementById("age-m").removeAttribute("hidden");

            document.getElementById("grossesse-label").setAttribute("hidden", "");
            document.getElementById("grossesse-option").setAttribute("hidden", "");

            document.getElementById("dosage-label").setAttribute("hidden", "");
            document.getElementById("dosage-option").setAttribute("hidden", "");
            document.getElementById("ddr-label").setAttribute("hidden", "");
            document.getElementById("ddr").setAttribute("hidden", "");


        } else if (statut.value == "") {
            document.getElementById("ddr-label").setAttribute("hidden", "");
            document.getElementById("ddr").setAttribute("hidden", "");
            document.getElementById("age-m-label").setAttribute("hidden", "");
            document.getElementById("age-m").setAttribute("hidden", "");
            document.getElementById("grossesse-label").setAttribute("hidden", "");
            document.getElementById("grossesse-option").setAttribute("hidden", "");
            document.getElementById("dosage-label").setAttribute("hidden", "");
            document.getElementById("dosage-option").setAttribute("hidden", "");

        }
    } else {
        document.getElementById("meno-sub").setAttribute("hidden", "");
    }
}

function disableAllait(allait) {
    if (allait.value == "1") {
        document
            .getElementById("allait-periode-label")
            .removeAttribute("hidden");
        document.getElementById("allait-periode").removeAttribute("hidden");
    } else {
        document
            .getElementById("allait-periode-label")
            .setAttribute("hidden", "");
        document.getElementById("allait-periode").setAttribute("hidden", "");
    }
}
function disableContra(allait) {
    if (allait.value == "2" || allait.value == "3") {
        document
            .getElementById("contra-periode-label")
            .removeAttribute("hidden");
        document.getElementById("contra-periode").removeAttribute("hidden");
    } else {
        document
            .getElementById("contra-periode-label")
            .setAttribute("hidden", "");
        document.getElementById("contra-periode").setAttribute("hidden", "");
    }
}

// function disableStimu(G) {
//     if (G.value != 0) {
//         document.getElementById("stimul-label").removeAttribute("hidden");
//         document.getElementById("stimul-option").removeAttribute("hidden");
//     } else {
//         document.getElementById("stimul-label").setAttribute("hidden", "");
//         document.getElementById("stimul-option").setAttribute("hidden", "");
//     }
// }

function disableProd(stimul) {
    if (stimul.value == "1") {
        document.getElementById("prod-label").removeAttribute("hidden");
        document.getElementById("stimul-prod").removeAttribute("hidden");
    } else {
        document.getElementById("prod-label").setAttribute("hidden", "");
        document.getElementById("stimul-prod").setAttribute("hidden", "");
    }
}

function enableDDR() {

}


function enableSA() {
    if (document.getElementById("grossesse-option").value == 1) {
        document.getElementById("sa-label").removeAttribute("hidden");
        document.getElementById("sa").removeAttribute("hidden");
    } else {
        document.getElementById("sa-label").setAttribute("hidden", "");
        document.getElementById("sa").setAttribute("hidden", "");


    }
}