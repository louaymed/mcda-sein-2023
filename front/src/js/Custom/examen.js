function affEcho() {
    if (document.getElementById("echo").value != "") {
        console.log("this is me")
        document.getElementById("d-echo-fiche").removeAttribute("hidden");
        document.getElementById("g-echo-fiche").removeAttribute("hidden");
        if (document.getElementById("echo").value == 1) {
            var echod = document.getElementById("echomamo-d-options");
            var option = echod.options[echod.selectedIndex];
            var text = option.text;
            // console.log(text);
            document.getElementById("d-echo-display").innerHTML = text;


            var echog = document.getElementById("echomamo-g-options");
            var option = echog.options[echog.selectedIndex];
            var text = option.text;
            // console.log(text);
            document.getElementById("g-echo-display").innerHTML = text;
        }
    } else {
        document.getElementById("d-echo-fiche").setAttribute("hidden", "");
        document.getElementById("g-echo-fiche").setAttribute("hidden", "");
    }
}

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
        document.getElementById("echo-nav").removeAttribute("hidden");
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
        document.getElementById("echo-nav").setAttribute("hidden", "");
    }
}



