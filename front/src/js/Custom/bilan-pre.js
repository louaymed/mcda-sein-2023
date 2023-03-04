function affDate() {
    if (document.getElementById("pose").value == 1) {
        document.getElementById("date-ren-label").removeAttribute("hidden");
        document.getElementById("date-ren").removeAttribute("hidden");
    } else {
        document.getElementById("date-ren-label").setAttribute("hidden", "");
        document.getElementById("date-ren").setAttribute("hidden", "");
    }
}