
function enableSeige() {
    var conc = document.getElementById("conc").value;
    var concT = document.getElementById("conc-t").value;

    if (conc == 1) {
        document.getElementById("conc-t-label").removeAttribute("hidden");
        document.getElementById("conc-t").removeAttribute("hidden");
    } else {
        document.getElementById("conc-t-label").setAttribute("hidden", "");
        document.getElementById("conc-t").setAttribute("hidden", "");
    }


    // seige aff
    if (concT == "0") {
        document.getElementById("seige-oli-label").removeAttribute("hidden");
        document.getElementById("seige-oli").removeAttribute("hidden");
    } else {
        document.getElementById("seige-oli-label").setAttribute("hidden", "");
        document.getElementById("seige-oli").setAttribute("hidden", "");
    }

}