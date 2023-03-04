document.addEventListener("DOMContentLoaded", function () {
    var chir = document.getElementById("chirurgie-o");
    if (chir) {
        chir.addEventListener('click', getAnto);
    }
},)
function getAnto() {
    var mam = document.getElementById("chir-m").value
    var gang = document.getElementById("chir-gang").value
    console.log(mam);
    console.log(gang);

    if (mam == 1 || gang == 1) {
        console.log("im here");
        document.getElementById("anto").removeAttribute("hidden");
    } else {
        document.getElementById("anto").setAttribute("hidden", "");
    }
}



function disableChirMam(chir) {
    if (chir.value == "1") {
        document.getElementById("chir-type-label").removeAttribute("hidden");
        document.getElementById("chir-type").removeAttribute("hidden");
    } else {
        document.getElementById("chir-type-label").setAttribute("hidden", "");
        document.getElementById("chir-type").setAttribute("hidden", "");
    }
}

function disableChirGang(chir) {
    if (chir.value == "1") {
        document
            .getElementById("chir-gang-t-label")
            .removeAttribute("hidden");
        document.getElementById("chir-gang-t").removeAttribute("hidden");
    } else {
        document
            .getElementById("chir-gang-t-label")
            .setAttribute("hidden", "");
        document.getElementById("chir-gang-t").setAttribute("hidden", "");
    }
}

function disableRecons(recons) {
    if (recons.value == "0") {
        document.getElementById("recons-label").removeAttribute("hidden");
        document.getElementById("recons").removeAttribute("hidden");
        document.getElementById("chir-br").removeAttribute("hidden");
    } else {
        document.getElementById("recons-label").setAttribute("hidden", "");
        document.getElementById("recons").setAttribute("hidden", "");
        document.getElementById("chir-br").setAttribute("hidden", "");

    }
}
