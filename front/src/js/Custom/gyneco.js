function disableStatutMeno(statut) {
    var myBrElements = document.getElementsByClassName("dose-horm-br");

    if (statut.value == "PériMénoposée") {
        document.getElementById("dosage-label").removeAttribute("hidden");
        document.getElementById("dosage-option").removeAttribute("hidden");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].removeAttribute("hidden");
        }
    } else if (statut.value == "Ménoposée") {
        document.getElementById("grossesse-label").setAttribute("hidden", "");
        document
            .getElementById("grossesse-option")
            .setAttribute("hidden", "");
    } else {
        document.getElementById("grossesse-label").removeAttribute("hidden");
        document.getElementById("grossesse-option").removeAttribute("hidden");
        document.getElementById("dosage-label").setAttribute("hidden", "");
        document.getElementById("dosage-option").setAttribute("hidden", "");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].setAttribute("hidden", "");
        }
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

function disableStimu(G) {
    if (G.value != 0) {
        document.getElementById("stimul-label").removeAttribute("hidden");
        document.getElementById("stimul-option").removeAttribute("hidden");
    } else {
        document.getElementById("stimul-label").setAttribute("hidden", "");
        document.getElementById("stimul-option").setAttribute("hidden", "");
    }
}

function disableProd(stimul) {
    if (stimul.value == "1") {
        document.getElementById("prod-label").removeAttribute("hidden");
        document.getElementById("stimul-prod").removeAttribute("hidden");
    } else {
        document.getElementById("prod-label").setAttribute("hidden", "");
        document.getElementById("stimul-prod").setAttribute("hidden", "");
    }
}  