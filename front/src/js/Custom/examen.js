function enableLesion(that) {

    if (that.id == "microcal-options") {
        if (document.getElementById("microcal-options").value == 1) {
            document.getElementById("lesion-label").removeAttribute("hidden");
            document.getElementById("lesion").removeAttribute("hidden");
        } else {
            document.getElementById("lesion-label").setAttribute("hidden", "");
            document.getElementById("lesion").setAttribute("hidden", " ");
        }
    } else {
        if (that.value == 1) {
            document.getElementById("d-lesion-label").removeAttribute("hidden");
            document.getElementById("d-lesion").removeAttribute("hidden");
        } else {
            document.getElementById("d-lesion-label").setAttribute("hidden", "");
            document.getElementById("d-lesion").setAttribute("hidden", " ");
        }
    }
}
