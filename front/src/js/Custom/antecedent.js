function disableThoraxOptions(thorac) {
    var myBrElements = document.getElementsByClassName("ant-r-br");
    if (thorac.value == "" || thorac.value == 0) {
        document.getElementById("th-date-label").setAttribute("hidden", "");
        document.getElementById("thorac-date").setAttribute("hidden", "");
        document.getElementById("th-vol-label").setAttribute("hidden", "");
        document.getElementById("thorac-vol").setAttribute("hidden", "");
        document.getElementById("th-dose-label").setAttribute("hidden", "");
        document.getElementById("thorac-dose").setAttribute("hidden", "");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].setAttribute("hidden", "");
        }
    } else {
        document.getElementById("th-date-label").removeAttribute("hidden");
        document.getElementById("thorac-date").removeAttribute("hidden");
        document.getElementById("th-vol-label").removeAttribute("hidden");
        document.getElementById("thorac-vol").removeAttribute("hidden");
        document.getElementById("th-dose-label").removeAttribute("hidden");
        document.getElementById("thorac-dose").removeAttribute("hidden");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].removeAttribute("hidden");
        }
    }
}

function EnableOptions() {
    var chim_br = document.getElementsByClassName("chim-br");
    var radio_br = document.getElementsByClassName("radio-br");




    // protocole options
    if (document.getElementById("proto").value == 1) {
        document.getElementById("dose-cumu-label").removeAttribute("hidden");
        document.getElementById("dose-cumu").removeAttribute("hidden");
        // document.getElementById("trait-label").removeAttribute("hidden");
        // document.getElementById("thorac-dose").removeAttribute("hidden");
    } else {
        document.getElementById("dose-cumu-label").setAttribute("hidden", "");
        document.getElementById("dose-cumu").setAttribute("hidden", "");
    }

    console.log(document.getElementById("trait").value)


    if (document.getElementById("trait").selectedOptions.length > 1) {

        // enable chimio options

        document.getElementById("chimio-title").removeAttribute("hidden");
        document.getElementById("proto-label").removeAttribute("hidden");
        document.getElementById("proto").removeAttribute("hidden");


        // enable radio options 

        document.getElementById("radio-title").removeAttribute("hidden");
        document.getElementById("dose-label").removeAttribute("hidden");
        document.getElementById("dose").removeAttribute("hidden");
        document.getElementById("vol-label").removeAttribute("hidden");
        document.getElementById("vol").removeAttribute("hidden");
        document.getElementById("ddf-label").removeAttribute("hidden");
        document.getElementById("ddf").removeAttribute("hidden");
    } else if (document.getElementById("trait").value == 1) {

        // enable chimio options

        document.getElementById("chimio-title").removeAttribute("hidden");
        document.getElementById("proto-label").removeAttribute("hidden");
        document.getElementById("proto").removeAttribute("hidden");

        // set radio options hidden

        document.getElementById("radio-title").setAttribute("hidden", "");
        document.getElementById("dose-label").setAttribute("hidden", "");
        document.getElementById("dose").setAttribute("hidden", "");
        document.getElementById("vol-label").setAttribute("hidden", "");
        document.getElementById("vol").setAttribute("hidden", "");
        document.getElementById("ddf-label").setAttribute("hidden", "");
        document.getElementById("ddf").setAttribute("hidden", "");

    } else if (document.getElementById("trait").value == 2) {

        // set chimio options hidden 

        document.getElementById("chimio-title").setAttribute("hidden", "");
        document.getElementById("proto-label").setAttribute("hidden", "");
        document.getElementById("proto").setAttribute("hidden", "");
        document.getElementById("proto-autre-label").setAttribute("hidden", "");
        document.getElementById("proto-autre").setAttribute("hidden", "");
        document.getElementById("dose-cumu-label").setAttribute("hidden", "");
        document.getElementById("dose-cumu").setAttribute("hidden", "");

        // enable radio options 

        document.getElementById("radio-title").removeAttribute("hidden");
        document.getElementById("dose-label").removeAttribute("hidden");
        document.getElementById("dose").removeAttribute("hidden");
        document.getElementById("vol-label").removeAttribute("hidden");
        document.getElementById("vol").removeAttribute("hidden");
        document.getElementById("ddf-label").removeAttribute("hidden");
        document.getElementById("ddf").removeAttribute("hidden");

    } else {

        // set chimio options hidden 

        document.getElementById("chimio-title").setAttribute("hidden", "");
        document.getElementById("proto-label").setAttribute("hidden", "");
        document.getElementById("proto").setAttribute("hidden", "");
        document.getElementById("proto-autre-label").setAttribute("hidden", "");
        document.getElementById("proto-autre").setAttribute("hidden", "");
        document.getElementById("dose-cumu-label").setAttribute("hidden", "");
        document.getElementById("dose-cumu").setAttribute("hidden", "");

        // set radio options hidden

        document.getElementById("radio-title").setAttribute("hidden", "");
        document.getElementById("dose-label").setAttribute("hidden", "");
        document.getElementById("dose").setAttribute("hidden", "");
        document.getElementById("vol-label").setAttribute("hidden", "");
        document.getElementById("vol").setAttribute("hidden", "");
        document.getElementById("ddf-label").setAttribute("hidden", "");
        document.getElementById("ddf").setAttribute("hidden", "");
    }



}



function disableEnqOptions(enq) {
    if (enq.value == "" || enq.value == "Non") {
        document.getElementById("result-label").setAttribute("hidden", "");
        document.getElementById("result").setAttribute("hidden", "");
    } else if (enq.value == "Oui") {
        document.getElementById("result-label").removeAttribute("hidden");
        document.getElementById("result").removeAttribute("hidden");
    }
}

function blockNext(data) {
    if (data.value == "0") {
        document.getElementById("type-cancer").disabled = true;
        document.getElementById("enquete").disabled = true;
    } else {
        document.getElementById("type-cancer").disabled = false;
        document.getElementById("enquete").disabled = false;
    }
}

// navbar routing function
function openSubSubOnglet(event, SubongletName) {
    var i, tabDiv, tabBtn, onglets;
    tabDiv = document.getElementsByClassName("sub-sub-onglet");
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


function enableChirMam(mam) {
    var mam = document.querySelectorAll("#mamm option:checked");

    mam.forEach(function (option) {
        var mamValue = option.value;
        if (mamValue != "") {
            if (mamValue == 1) {
                document.getElementById("benigne-o-h").removeAttribute("hidden");
                document.getElementById("benigne-o").removeAttribute("hidden");
                document.getElementById("benigne-o-h").click();
            } else {

                document.getElementById("benigne-o-h").setAttribute("hidden", "");
                document.getElementById("benigne-o").setAttribute("hidden", "");

            }

            if (mamValue == 2) {
                document.getElementById("maligne-o-h").removeAttribute("hidden");
                document.getElementById("maligne-o").removeAttribute("hidden");
                document.getElementById("maligne-o-h").click();
            } else {

                document.getElementById("maligne-o-h").setAttribute("hidden", "");
                document.getElementById("maligne-o").setAttribute("hidden", "");
            }


        } else {
            document.getElementById("maligne-o-h").setAttribute("hidden", "");
            document.getElementById("maligne-o").setAttribute("hidden", "");
            document.getElementById("maligne-o-h").setAttribute("hidden", "");
            document.getElementById("maligne-o").setAttribute("hidden", "");
        }
    })
}



function enableProtoMal() {
    var trait = document.querySelectorAll("#trait option:checked");
    var selectedTraits = [];
    for (var i = 0; i < trait.length; i++) {
        selectedTraits.push(trait[i].value);
    }
    // console.log(selectedTraits);



    trait.forEach(function (option) {
        var traitValue = option.value;
        if (traitValue != "") {
            if (traitValue == 1) {
                document.getElementById("chimio-p-h").removeAttribute("hidden");
                document.getElementById("chimio-p").removeAttribute("hidden");
                document.getElementById("chimio-p-h").click();
            } else {
                if (selectedTraits.includes('1') == false) {
                    document.getElementById("chimio-p-h").setAttribute("hidden", "");
                    document.getElementById("chimio-p").setAttribute("hidden", "");
                }
            }

            if (traitValue == 2) {
                document.getElementById("radio-p-h").removeAttribute("hidden");
                document.getElementById("radio-p").removeAttribute("hidden");
                document.getElementById("radio-p-h").click();
            } else {
                if (selectedTraits.includes('2') == false) {
                    document.getElementById("radio-p-h").setAttribute("hidden", "");
                    document.getElementById("radio-p").setAttribute("hidden", "");
                }
            }

        } else {
            document.getElementById("chimio-p-h").setAttribute("hidden", "");
            document.getElementById("chimio-p").setAttribute("hidden", "");
            document.getElementById("radio-p-h").setAttribute("hidden", "");
            document.getElementById("radio-p").setAttribute("hidden", "");
        }
    })
}
