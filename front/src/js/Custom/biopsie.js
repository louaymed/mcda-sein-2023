function enableAdeno(that) {

    if (that.id == "b-siege-options") {
        if (that.value == 2) {
            document.getElementById("adeno-label").removeAttribute("hidden");
            document.getElementById("adeno-options").removeAttribute("hidden");
        } else {
            document.getElementById("adeno-label").setAttribute("hidden", "");
            document.getElementById("adeno-options").setAttribute("hidden", " ");
        }
    }
}
