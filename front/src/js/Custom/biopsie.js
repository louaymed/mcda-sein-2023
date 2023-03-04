// set biopsie first sub-screen to sein droite
document.addEventListener("DOMContentLoaded", function () {
    var biopsie = document.getElementById("biopsie-h");
    if (biopsie) {
        document.getElementById("sd-h").click();
    }
},)

// nav abr routing function
function openSubOnglet(event, SubongletName) {
    var i, tabDiv, tabBtn, onglets;
    tabDiv = document.getElementsByClassName("sub-onglet");
    tabBtn = document.getElementsByClassName("btn");
    for (i = 0; i < tabDiv.length; i++) {
        tabDiv[i].style.display = "none";
    }
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.replace("btn-primary", "btn-light");
    }
    onglets = document.getElementsByClassName("onglet");
    for (i = 0; i < tabDiv.length; i++) {
        onglets[i].className = onglets[i].className.replace(" actif", "");
    }

    document.getElementById(SubongletName).style.display = "block";
    event.currentTarget.className += "actif";
    // console.log("event.currentTarget:", event.currentTarget);
    event.currentTarget.classList.replace("btn-light", "btn-primary");
}



function enableSeigeNav() {
    var siege = document.getElementById("b-siege-options").value;
    var adenooptions = document.getElementById("adeno-options").value;
    console.log(adenooptions)
    if (siege != "") {
        if (siege == 0) {
            document.getElementById("sd-h").removeAttribute("hidden");
            document.getElementById("sd").removeAttribute("hidden");
            document.getElementById("sd-h").click();
        }
        else {
            document.getElementById("sd-h").setAttribute("hidden", "");
            document.getElementById("sd").setAttribute("hidden", "");
        }

        if (siege == 1) {
            document.getElementById("sg-h").removeAttribute("hidden");
            document.getElementById("sg").removeAttribute("hidden");
            document.getElementById("sg-h").click();
        }
        else {
            document.getElementById("sg-h").setAttribute("hidden", "");
            document.getElementById("sg").setAttribute("hidden", "");
        }
        if (siege == "autre") {
            document.getElementById("aut-b-h").removeAttribute("hidden");
            document.getElementById("aut-b").removeAttribute("hidden");
            document.getElementById("aut-b-h").click();
        }
        else {
            document.getElementById("aut-b-h").setAttribute("hidden", "");
            document.getElementById("aut-b").setAttribute("hidden", "");
        }

        if (siege == 2) {
            if (adenooptions != "") {
                if (adenooptions == 0) {
                    document.getElementById("ah-h").removeAttribute("hidden");
                    document.getElementById("ah").removeAttribute("hidden");
                    document.getElementById("ah-h").click();
                }
                else {
                    document.getElementById("ah-h").setAttribute("hidden", "");
                    document.getElementById("ah").setAttribute("hidden", "");
                }
                if (adenooptions == 1) {
                    document.getElementById("ac-h").removeAttribute("hidden");
                    document.getElementById("ac").removeAttribute("hidden");
                    document.getElementById("ac-h").click();
                }
                else {
                    document.getElementById("ac-h").setAttribute("hidden", "");
                    document.getElementById("ac").setAttribute("hidden", "");
                }
                if (adenooptions == 2) {
                    document.getElementById("sh-h").removeAttribute("hidden");
                    document.getElementById("sh").removeAttribute("hidden");
                    document.getElementById("sh-h").click();
                }
                else {
                    document.getElementById("sh-h").setAttribute("hidden", "");
                    document.getElementById("sh").setAttribute("hidden", "");
                }
                if (adenooptions == 3) {
                    document.getElementById("sc-h").removeAttribute("hidden");
                    document.getElementById("sc").removeAttribute("hidden");
                    document.getElementById("sc-h").click();
                }
                else {
                    document.getElementById("sc-h").setAttribute("hidden", "");
                    document.getElementById("sc").setAttribute("hidden", "");
                }
            } else {
                document.getElementById("ah-h").setAttribute("hidden", "");
                document.getElementById("ah").setAttribute("hidden", "");
                document.getElementById("ac-h").setAttribute("hidden", "");
                document.getElementById("ac").setAttribute("hidden", "");
                document.getElementById("sh-h").setAttribute("hidden", "");
                document.getElementById("sh").setAttribute("hidden", "");
                document.getElementById("sc-h").setAttribute("hidden", "");
                document.getElementById("sc").setAttribute("hidden", "");

            }
        }
        else {
            document.getElementById("ah-h").setAttribute("hidden", "");
            document.getElementById("ah").setAttribute("hidden", "");
            document.getElementById("ac-h").setAttribute("hidden", "");
            document.getElementById("ac").setAttribute("hidden", "");
            document.getElementById("sh-h").setAttribute("hidden", "");
            document.getElementById("sh").setAttribute("hidden", "");
            document.getElementById("sc-h").setAttribute("hidden", "");
            document.getElementById("sc").setAttribute("hidden", "");
        }


    }
}




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
