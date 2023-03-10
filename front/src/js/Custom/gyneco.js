function disableStatutMeno(statut) {
    var myBrElements = document.getElementsByClassName("dose-horm-br");

    if (statut.value == "Non Ménoposée") {
        document.getElementById("ddr-label").removeAttribute("hidden");
        document.getElementById("ddr").removeAttribute("hidden");
        document.getElementById("age-label").setAttribute("hidden", "");
        document.getElementById("age").setAttribute("hidden", "");
        document.getElementById("grossesse-label").setAttribute("hidden", "");
        document.getElementById("grossesse-option").setAttribute("hidden", "");
        document.getElementById("dosage-label").setAttribute("hidden", "");
        document.getElementById("dosage-option").setAttribute("hidden", "");

    } else if (statut.value == "PériMénoposée") {
        document.getElementById("dosage-label").removeAttribute("hidden");
        document.getElementById("dosage-option").removeAttribute("hidden");
        document.getElementById("ddr-label").setAttribute("hidden", "");
        document.getElementById("ddr").setAttribute("hidden", "");
        document.getElementById("age-label").setAttribute("hidden", "");
        document.getElementById("age").setAttribute("hidden", "");
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


    } else {
        document.getElementById("ddr-label").setAttribute("hidden", "");
        document.getElementById("ddr").setAttribute("hidden", "");
        document.getElementById("age-label").setAttribute("hidden", "");
        document.getElementById("age").setAttribute("hidden", "");
        document.getElementById("grossesse-label").setAttribute("hidden", "");
        document.getElementById("grossesse-option").setAttribute("hidden", "");
        document.getElementById("dosage-label").setAttribute("hidden", "");
        document.getElementById("dosage-option").setAttribute("hidden", "");
      
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
        document.getElementById("dsadr").setAttribute("hidden", "");


    }
}