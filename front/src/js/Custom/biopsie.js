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
    var siege = document.querySelectorAll("#b-siege-options option:checked");
    var selectedSieges = [];
    for (var i = 0; i < siege.length; i++) {
        selectedSieges.push(siege[i].value);
    }
    // console.log(selectedSieges);
    var adenooptions = document.querySelectorAll("#adeno-options option:checked");
    var selectedValues = [];

    for (var i = 0; i < adenooptions.length; i++) {
        selectedValues.push(adenooptions[i].value);
    }
    // console.log(selectedValues);


    siege.forEach(function (option) {
        var siegevalue = option.value;
        if (siegevalue != "") {
            if (siegevalue == 0) {
                document.getElementById("sd-h").removeAttribute("hidden");
                document.getElementById("sd").removeAttribute("hidden");
                document.getElementById("sd-h").click();
            } else {
                if (selectedSieges.includes('0') == false) {
                    document.getElementById("sd-h").setAttribute("hidden", "");
                    document.getElementById("sd").setAttribute("hidden", "");
                }
            }

            if (siegevalue == 1) {
                document.getElementById("sg-h").removeAttribute("hidden");
                document.getElementById("sg").removeAttribute("hidden");
                document.getElementById("sg-h").click();
            } else {
                if (selectedSieges.includes('1') == false) {
                    document.getElementById("sg-h").setAttribute("hidden", "");
                    document.getElementById("sg").setAttribute("hidden", "");
                }
            }

            if (selectedSieges.includes('autre')) {

                // enable autre field
                document.getElementById("b-siege-options-autre-label").removeAttribute("hidden");
                document.getElementById("b-siege-options-autre").removeAttribute("hidden");


                document.getElementById("aut-b-h").removeAttribute("hidden");
                document.getElementById("aut-b").removeAttribute("hidden");
                document.getElementById("aut-b-h").click();
            } else {
                if (selectedSieges.includes('autre') == false) {
                    document.getElementById("aut-b-h").setAttribute("hidden", "");
                    document.getElementById("aut-b").setAttribute("hidden", "");


                    // set autre field hidden
                    document.getElementById("b-siege-options-autre-label").setAttribute("hidden", "");
                    document.getElementById("b-siege-options-autre").setAttribute("hidden", "");
                }
            }

            if (selectedSieges.includes('2')) {

                // enable adeno-option
                document.getElementById("adeno-label").removeAttribute("hidden");
                document.getElementById("adeno-options").removeAttribute("hidden");

                adenooptions.forEach(function (option) {
                    var value = option.value;
                    if (value == 0) {
                        document.getElementById("ah-h").removeAttribute("hidden");
                        document.getElementById("ah").removeAttribute("hidden");
                        document.getElementById("ah-h").click();
                    } else {
                        if (selectedValues.includes('0') == false) {
                            // console.log("im here")
                            document.getElementById("ah-h").setAttribute("hidden", "");
                            document.getElementById("ah").setAttribute("hidden", "");
                        }
                    }

                    if (value == 1) {
                        document.getElementById("ac-h").removeAttribute("hidden");
                        document.getElementById("ac").removeAttribute("hidden");
                        document.getElementById("ac-h").click();
                    } else {
                        if (selectedValues.includes('1') == false) {
                            document.getElementById("ac-h").setAttribute("hidden", "");
                            document.getElementById("ac").setAttribute("hidden", "");
                        }
                    }

                    if (value == 2) {
                        document.getElementById("sh-h").removeAttribute("hidden");
                        document.getElementById("sh").removeAttribute("hidden");
                        document.getElementById("sh-h").click();
                    } else {
                        if (selectedValues.includes('2') == false) {
                            document.getElementById("sh-h").setAttribute("hidden", "");
                            document.getElementById("sh").setAttribute("hidden", "");
                        }
                    }

                    if (value == 3) {
                        document.getElementById("sc-h").removeAttribute("hidden");
                        document.getElementById("sc").removeAttribute("hidden");
                        document.getElementById("sc-h").click();
                    } else {
                        if (selectedValues.includes('3') == false) {
                            document.getElementById("sc-h").setAttribute("hidden", "");
                            document.getElementById("sc").setAttribute("hidden", "");
                        }
                    }
                });
            } else {
                if (selectedSieges.includes('2') == false) {
                    document.getElementById("adeno-label").setAttribute("hidden", "");
                    document.getElementById("adeno-options").setAttribute("hidden", " ");
                }
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
    })
}


