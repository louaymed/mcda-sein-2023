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




function enableEcho(echo) {
    var echo = document.getElementById("echo").value;

    if (echo != "") {
        if (echo == 1) {
            document.getElementById("echo-sein-d-o-h").removeAttribute("hidden");
            document.getElementById("echo-sein-d-o").removeAttribute("hidden");
            document.getElementById("echo-sein-d-o-h").click();
            document.getElementById("echo-sein-g-o-h").removeAttribute("hidden");
            document.getElementById("echo-sein-g-o").removeAttribute("hidden");
            document.getElementById("echo-sein-g-o-h").click();
        } else {
            document.getElementById("echo-sein-d-o-h").setAttribute("hidden", "");
            document.getElementById("echo-sein-d-o").setAttribute("hidden", "");
            document.getElementById("echo-sein-g-o-h").setAttribute("hidden", "");
            document.getElementById("echo-sein-g-o").setAttribute("hidden", "");
        }

    } else {
        document.getElementById("echo-sein-d-o-h").setAttribute("hidden", "");
        document.getElementById("echo-sein-d-o").setAttribute("hidden", "");
        document.getElementById("echo-sein-g-o-h").setAttribute("hidden", "");
        document.getElementById("echo-sein-g-o").setAttribute("hidden", "");


    }
}



