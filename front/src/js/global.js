// DEFINE GLOBAL VARIABLES

// M 
var M = "M0";
var m_ossuse;
var T;
// her2 /rh
var her2;
var rh;
//CTNM
var CTNM;
var spectre_BRCA;
//Menopose output
var output = "Non menopausee";
// crise viscerale
var crise;
// sexe
var sexe = "Homme";

var statut_pd_l = "vide";

//End Global Variables



// Functions

// set first screen to Habtitude onglet
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("profile-h").click();
})




function changeNav() {
    console.log(document.getElementById("big-choice").value == 1)
    if (document.getElementById("big-choice").value == 1) {
        document.getElementById("pec-in").setAttribute("hidden", "");
        document.getElementById("pec-act").removeAttribute("hidden")

    } else {
        document.getElementById("pec-in").removeAttribute("hidden");
        document.getElementById("pec-act").setAttribute("hidden", "");

    }
}


///////////////////////
// global Autre text Field Function
function enableAutre(that) {
    var id = that.id;
    console.log(id + "-autre-label");

    // set them hidden first just incase
    document.getElementById(id + "-autre-label").setAttribute("hidden", "");
    document.getElementById(id + "-autre").setAttribute("hidden", "");

    // test on autre value
    if (that.value == "autre") {
        document.getElementById(id + "-autre-label").removeAttribute("hidden");
        document.getElementById(id + "-autre").removeAttribute("hidden");
    } else {
        document.getElementById(id + "-autre-label").setAttribute("hidden", "");
        document.getElementById(id + "-autre").setAttribute("hidden", "");
    }

}
///////////////////////


// global Date Field Function
function enableDate(there) {
    var id = there.id;
    // console.log(there.value);

    // set them hidden first just incase
    document.getElementById(id + "-date-label").setAttribute("hidden", "");
    document.getElementById(id + "-date").setAttribute("hidden", "");


    // test on value being not 0 / Non or empty 
    if (there.value != 0) {
        document.getElementById(id + "-date-label").removeAttribute("hidden");
        document.getElementById(id + "-date").removeAttribute("hidden");
    } else {
        document.getElementById(id + "-date-label").setAttribute("hidden", "");
        document.getElementById(id + "-date").setAttribute("hidden", "");
    }

}


///////////////////////


function openOnglet(event, ongletName) {
    var i, tabDiv, tabBtn, onglets;
    tabDiv = document.getElementsByClassName("onglet");
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

    document.getElementById(ongletName).style.display = "block";
    event.currentTarget.className += "actif";
    // console.log("event.currentTarget:", event.currentTarget);
    event.currentTarget.classList.replace("btn-light", "btn-primary");
}



///////////////////////



function disableButton(label) {
    if (label.innerHTML == "Non") {
        document.getElementById("enquete-btn").disabled = true;
    } else {
        document.getElementById("enquete-btn").disabled = false;
    }
}
function redirectPage() {
    const form = document.getElementById("phase-1");
    const age = document.getElementById("age");
    const sexe = document.getElementById("sexe-select");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const ageValue = age.value;
        const sexeValue = sexe.value;

        window.localStorage.setItem("age", ageValue);
        window.localStorage.setItem("sexe", sexeValue);

        window.location.href = "phase_2.html";
    });
}


function navigate(divID, nextDivID, ...display) {
    sexe = document.getElementById("sexe-select").value;
    // get the data
    elements = Array.from(document.getElementById(divID).children);
    data_element = elements.filter(elt => elt.tagName == 'INPUT' || elt.tagName == 'SELECT');
    data_element.forEach(element => {
        localStorage.setItem(element.name, element.value);

        if (localStorage.getItem('sexe') == 'Homme') {
            document.getElementById("gyneco-h").setAttribute("disabled", "");
        } else {
            document.getElementById("gyneco-h").removeAttribute("disabled");
        }
    });
    // console.log(data_element);
    if (sexe == "Homme") {
        console.log("this is sex value :" + sexe)
        document.getElementById("autre-label").removeAttribute("hidden");
        document.getElementById("autre-homme").removeAttribute("hidden");
    }
    // display info on the side document
    for (i = 0; i < data_element.length; i++) {
        var age = document.getElementById("age").value;
        // console.log(age);
        // console.log("this is :" + data_element[i].value);
        if (sexe != "") {
            console.log("this is me")
            document.getElementById("sexe-fiche").removeAttribute("hidden");
            document.getElementById("age-fiche").removeAttribute("hidden");

            document.getElementById("sexe-display").innerHTML = sexe;
            document.getElementById("age-display").innerHTML = age;
        } else {
            document.getElementById("sexe-fiche").setAttribute("hidden", "");
            document.getElementById("age-fiche").setAttribute("hidden", "");
        }

        document.getElementById(display[i]).innerHTML = data_element[i].value;
    }

    // navigate to the next tab
    document.getElementById(nextDivID).click();

}

function navigate_profile() {
    // get the data
    sexe = document.getElementById("sexe-select").value;
    age = document.getElementById("age").value;
    // console.log(sexe)
    // local storage
    localStorage.setItem("sexe", sexe);
    localStorage.setItem("age", age);

    // navigate to the next onglet
    document.getElementById("habitude-h").click();


}

function nav() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("antecedent-h").click();
}
function nav2() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("gyneco-h").click();
}
function nav3() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("clinique-h").click();
}

function nav4() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("examen-h").click();
}
function nav5() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("biopsie-h").click();
}
function nav6() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("bilan-h").click();
}
function nav7() {
    // onclick="navigate('person', 'habitude-h', 'sexe-display','age-display');
    document.getElementById("PEC-h").click();
}





// T
document.addEventListener("DOMContentLoaded", function () {
    var seind = document.getElementById("sein-d-o");
    var seing = document.getElementById("sein-g-o");
    if (seind || seing) {
        seind.addEventListener('click', calcT);
        seing.addEventListener('click', calcT);
    }

},)

function calcT() {
    var taille = document.getElementById("taille-tumeur").value;
    var description = document.getElementById("description-t-option").value;
    console.log("this is taille :" + JSON.stringify(taille));

    var myMap = {
        taille: taille,
        desc: description,
    };
    console.log(myMap);
    var myMapJson = JSON.stringify(myMap);
    console.log(myMapJson)
    fetch("http://localhost:8081/mcda/api/consultation/taille", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: myMapJson
    }).then((response) => response.text())
        .then((data) => {
            // console.log("this is data");
            // console.log(data);
            T = data;
            console.log(T)
        })
        .catch(error => {
            console.log("Error", error);

        })


}


//
// document.addEventListener("DOMContentLoaded", function () {
//     var ctnm = document.getElementById("ctnm-bt");
//     if (ctnm) {
//         ctnm.addEventListener('click', next);
//     }
//     function next() {
//         document.getElementById("examen-h").click();
//     }

// },)


// her2 / rh 
document.addEventListener("DOMContentLoaded", function () {
    var biopsie = document.getElementById("biopsie");
    if (biopsie) {
        biopsie.addEventListener('click', getHer2);

    }


},)
function getHer2() {
    var her2_value = document.getElementById("her2_options").value;
    var rhe = document.getElementById("rhe_options").value;
    var rhp = document.getElementById("rhp_options").value;

    if (rhe > 0 || rhp > 0) {
        var rhe = document.getElementById("rhe_options").value;
        var rhp = document.getElementById("rhp_options").value;
        rh = "Positifs";
    } else {
        var rhe = document.getElementById("rhe_options").value;
        var rhp = document.getElementById("rhp_options").value;
        rh = "Negatifs";
    }
    console.log(rh)

    if (her2_value == 0) {
        her2_value = document.getElementById("her2_options").value;
        her2 = "Non surexprime";
    } else {
        her2_value = document.getElementById("her2_options").value;
        her2 = "Surexprime"
    }
    // console.log("RH")
    // console.log(rh)
    // console.log("Her2")
    // console.log(her2)

}



// CTNM
document.addEventListener("DOMContentLoaded", function () {
    var ctnm = document.getElementById("clinique");
    if (ctnm) {
        ctnm.addEventListener('click', getCtnm);
    }
},)


function getCtnm() {
    var N = document.getElementById("description-n-option").value;
    var M = document.getElementById("metastase-suspecte-option").value;
    console.log("this N");
    console.log(N);
    console.log("this M");
    console.log(M);

    var myMap = {
        T: T,
        N: N,
        M: M,
    };
    // console.log(myMap);
    var myMapJson = JSON.stringify(myMap);
    console.log(myMapJson)
    fetch("http://localhost:8081/mcda/api/consultation/calc-ctnm", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: myMapJson
    }).then((response) => response.text())
        .then((data) => {
            // console.log("this is CTNM ");
            CTNM = data
            // console.log(CTNM)
            if (CTNM != "") {

                console.log("this is me")
                document.getElementById("d-ctnm-fiche").removeAttribute("hidden");
                document.getElementById("d-ctnm-display").innerHTML = CTNM;
            } else {
                document.getElementById("d-ctnm-fiche").setAttribute("hidden", "");
            }


        })
        .catch(error => {
            console.log("Error", error);

        })
}

var tnm;
function getTNM() {
    tnm = CTNM.slice(0, -2); // remove the last 2 characters
    console.log(tnm);
    tnm = tnm + " " + M;
    console.log("this is tnm");
    console.log(tnm)
    document.getElementById("tnm-display").innerHTML = tnm;
}



//spectre BRCA
document.addEventListener("DOMContentLoaded", function () {
    var biopsie = document.getElementById("biopsie");
    if (biopsie) {
        biopsie.addEventListener('click', getSoutype);
    }
})
function getSoutype() {
    var RH_E = document.getElementById("rhe_options").value;
    var PR = document.getElementById("rhp_options").value;
    var HER2 = document.getElementById("her2_options").value;
    var ki67 = document.getElementById("ki67_options").value;
    var soutype;

    document.getElementById("histo-fiche").setAttribute("hidden", "");
    document.getElementById("rh-e-fiche").setAttribute("hidden", "");
    document.getElementById("rh-p-fiche").setAttribute("hidden", "");
    document.getElementById("her1-fiche").setAttribute("hidden", "");



    var histo = document.getElementById("histo-options");
    if (histo.value != "") {
        document.getElementById("histo-fiche").removeAttribute("hidden");

        var option = histo.options[histo.selectedIndex];
        var histotext = option.text;
        document.getElementById("histo-display").innerHTML = histotext;
    } else {
        document.getElementById("histo-fiche").setAttribute("hidden", "");

    }


    var rhe = document.getElementById("rhe_options");
    if (rhe.value != "") {
        document.getElementById("rh-e-fiche").removeAttribute("hidden");

        option = rhe.options[rhe.selectedIndex];
        var rhetext = option.text;
        document.getElementById("rh-e-display").innerHTML = rhetext;
    } else {
        document.getElementById("rh-e-fiche").setAttribute("hidden", "");

    }

    var pr = document.getElementById("rhp_options");
    if (pr.value != "") {
        document.getElementById("rh-p-fiche").removeAttribute("hidden");
        option = pr.options[pr.selectedIndex];
        var prtext = option.text;
        document.getElementById("rh-p-display").innerHTML = prtext;
    } else {
        document.getElementById("rh-p-fiche").setAttribute("hidden", "");

    }

    var her2 = document.getElementById("her2_options");
    if (her2.value != "") {
        document.getElementById("her1-fiche").removeAttribute("hidden");
        option = her2.options[her2.selectedIndex];
        var her2text = option.text;
        document.getElementById("her1-display").innerHTML = her2text;
    } else {
        document.getElementById("her1-fiche").setAttribute("hidden", "");

    }


    if (RH_E == "0" && PR == "0" && HER2 == "0") {
        // console.log("triple negatif");
        soutype = "triple negatif";
        document.getElementById("pdl1-label").removeAttribute("hidden");
        document.getElementById("pdl1-options").removeAttribute("hidden");
        document.getElementById("soutype-display").innerHTML = soutype
    }
    else if (RH_E == "0" && PR == "0" && HER2 == "1") {
        // console.log("HER2 positif");
        soutype = "HER2 positif";
        document.getElementById("soutype-display").innerHTML = soutype
    }

    else if (RH_E == "1" || PR == "1" && RH_E == "1" || ki67 == "0") {
        // console.log("luminalB");
        soutype = "luminalB";
        document.getElementById("soutype-display").innerHTML = soutype
    }

    else if (RH_E == "1" || PR == "1" && RH_E == "0" || ki67 == "1") {
        // console.log("luninalA");
        soutype = "luninalA";
        document.getElementById("soutype-display").innerHTML = soutype
    }
    var spectre = document.getElementById("spectre-options").value;


    if (spectre == 0) {
        spectre_BRCA = "pas mutation germinale BRCA1 ou 2"
        // console.log(spectre_BRCA);
    } else {
        spectre_BRCA = "mutation germinale BRCA1 ou 2"
        // console.log(spectre_BRCA);
    }

}





//Menopose output
document.addEventListener("DOMContentLoaded", function () {
    var genico = document.getElementById("gyneco");
    if (genico) {
        genico.addEventListener('click', getMenoOutput);
    }

},)

function getMenoOutput() {
    var statut = document.getElementById("menopose").value;
    var dosage = document.getElementById("dosage-option").value;
    console.log(statut)


    if (statut != "") {
        document.getElementById("sm-fiche").removeAttribute("hidden");
        if (statut == "Ménoposée") {
            var statut = document.getElementById("menopose").value;
            output = "Menopausee";

            document.getElementById("sm-display").innerHTML = "Ménoposée";
            console.log("this is output");
            // console.log(output);
        } else if (statut == "Non Ménoposée") {
            var statut = document.getElementById("menopose").value;
            output = "Menopausee";
            document.getElementById("sm-display").innerHTML = "Non Ménoposée";
            // console.log("this is output");
            // console.log(output);
        } else if (statut == "PériMénoposée") {
            var dosage = document.getElementById("dosage-option").value;
            if (dosage == 0) {
                output = "Menopausee";
                document.getElementById("sm-display").innerHTML = "Ménoposée";
                // console.log("this is output");
                // console.log(output);
            } else {
                output = "Menopausee";
                document.getElementById("sm-display").innerHTML = "Non Ménoposée";
                // console.log("this is output");
                // console.log(output);

            }
        } else {
            output = "Menopausee";
            document.getElementById("sm-display").innerHTML = "Non Ménoposée";
        }
    } else {
        document.getElementById("sm-fiche").setAttribute("hidden", "");
    }

}



document.addEventListener("DOMContentLoaded", function () {
    var bilanextension = document.getElementById("bilan-extension");
    if (bilanextension) {
        bilanextension.addEventListener('click', getBilan);
    }

},)

function getBilan() {
    var scin = document.getElementById("scin").value;
    var conc = document.getElementById("conc").value;


    // m_ossuse
    if (scin == 0) {
        m_ossuse = "Non";
    } else {
        m_ossuse = "Oui";
    }
    // console.log(m_ossuse)
    // M
    if (conc == 0) {
        M = "M0";
    } else {
        M = "M1";
    }
    console.log(M)


}


// crise viscerale
document.addEventListener("DOMContentLoaded", function () {
    var bilan = document.getElementById("bilan-extension");
    if (bilan) {
        bilan.addEventListener('click', getCrise);
    }

},)

function getCrise() {

    var crise_viscerale = document.getElementById("crise").value;
    if (M != "M0") {
        document.getElementById("crise-label").removeAttribute("hidden", "")
        document.getElementById("crise").removeAttribute("hidden", "");
    } else {
        document.getElementById("crise-label").setAttribute("hidden", "")
        document.getElementById("crise").setAttribute("hidden", "");
        if (crise_viscerale == 0) {
            crise = "Non";
        } else {
            crise = "Oui";
        }
        // console.log("Crise : ");
        // console.log(crise);
    }


}



function enableChimioType(that) {
    if (that.id == "chimio") {
        if (document.getElementById("chimio").checked) {
            document.getElementById("chimio-type-label").removeAttribute("hidden");
            document.getElementById("chimio-type").removeAttribute("hidden");
        } else {
            document.getElementById("chimio-type-label").setAttribute("hidden", "");
            document.getElementById("chimio-type").setAttribute("hidden", "");
        }
    } else {
        if (document.getElementById("chimio-aut").checked) {
            document.getElementById("chimio-aut-type-label").removeAttribute("hidden");
            document.getElementById("chimio-aut-type").removeAttribute("hidden");
        } else {
            document.getElementById("chimio-aut-type-label").setAttribute("hidden", "");
            document.getElementById("chimio-aut-type").setAttribute("hidden", "");
        }
    }
}

//PEC 
document.addEventListener("DOMContentLoaded", function () {
    var decision = document.getElementById("PEC-h");
    if (decision) {
        decision.addEventListener('click', getMet);
    }

    function getMet() {

        sexe = document.getElementById("sexe-select").value;
        age = document.getElementById("age").value;
        var her2_value = document.getElementById("her2_options").value;
        var rhe = document.getElementById("rhe_options").value;
        var rhp = document.getElementById("rhp_options").value;
        var ki67 = document.getElementById("ki67_options").value;
        var N = document.getElementById("description-n-option").value;
        // console.log("this is N")
        // console.log(N);

        var chimio = document.getElementById("chimio-h");
        var radio = document.getElementById("radio-h");
        var chirurgie = document.getElementById("chirurgie-h");
        var hormo = document.getElementById("hormo-h");




        // test if any choice has already been selected so that it dosent hide it again if they go back to PEC onglet
        if (window.getComputedStyle(chimio).display === 'none' && window.getComputedStyle(radio).display === 'none' && window.getComputedStyle(chirurgie).display === 'none' && window.getComputedStyle(hormo).display === 'none') {

            //set to disabled
            document.getElementById("chimio-h").setAttribute("hidden", "");
            document.getElementById("radio-h").setAttribute("hidden", "");
            document.getElementById("chirurgie-h").setAttribute("hidden", "");
            document.getElementById("hormo-h").setAttribute("hidden", "");
        }

        // console.log("this is Hiba")
        // console.log(M)
        if (M == "M1") {
            console.log("im testing M")
            document.getElementById("chimio-label").removeAttribute("hidden");
            document.getElementById("chimio").removeAttribute("hidden");

        } else if (sexe == "Femme" && age >= 80) {
            console.log("im testing sexe and age");
            console.log("first step");
            if (output == "Oui") {
                console.log("second step");
                if (rhe == 1 && rhp == 1 && her2_value == 0) {
                    console.log("third step");
                    if (ki67 == 0) {
                        console.log("fourth step");
                        document.getElementById("c").removeAttribute("hidden");
                        document.getElementById("chirurgie").removeAttribute("hidden");
                        document.getElementById("h").removeAttribute("hidden");
                        document.getElementById("hormo").removeAttribute("hidden");
                    }
                }
            }
        } else if ((T == "T4a" || T == "T4b" || T == "T4c" || T == "T4d" || N == "N2a" || N == "N3a" || N == "N3b" || N == "N3c") || ((T == "T2" || T == "T3" || N == "N1" || N == "N2a" || N == "N2b") && (her2_value == 1)) || ((T == "T2" || T == "T3" || N == "N1" || N == "N2a" || N == "N2b") && (rhe == 0 && rhp == 0 && her2_value == 0))) {
            console.log("this is T")
            console.log(T);
            console.log(N);
            document.getElementById("chimio-label").removeAttribute("hidden");
            document.getElementById("chimio").removeAttribute("hidden");
            document.getElementById("r").removeAttribute("hidden");
            document.getElementById("radio").removeAttribute("hidden");
            document.getElementById("c").removeAttribute("hidden");
            document.getElementById("chirurgie").removeAttribute("hidden");
            document.getElementById("h").removeAttribute("hidden");
            document.getElementById("hormo").removeAttribute("hidden");
        } else {
            document.getElementById("chimio-label").removeAttribute("hidden");
            document.getElementById("chimio").removeAttribute("hidden");
            document.getElementById("c").removeAttribute("hidden");
            document.getElementById("chirurgie").removeAttribute("hidden");
            document.getElementById("h").removeAttribute("hidden");
            document.getElementById("hormo").removeAttribute("hidden");
        }
    }

},)

//PEC 
var result = "";
document.addEventListener("DOMContentLoaded", function () {
    var decision = document.getElementById("PEC");
    if (decision) {
        decision.addEventListener('click', showPec);
    }
},)

function showPec() {
    console.log("pec" + result)
    document.getElementById("rcp-display").innerHTML = result;
    var chimio = document.getElementById("chimio");
    var radio = document.getElementById("radio");
    var chirurgie = document.getElementById("chirurgie");
    var hormo = document.getElementById("hormo");
    if (chimio.checked || radio.checked || chirurgie.checked || hormo.checked) {
        document.getElementById("rcp-fiche").removeAttribute("hidden");
        if (chimio.checked) {
            result = result.replace("Chimio ", "");
            result += "Chimio ";
            document.getElementById("chimio-h").removeAttribute("hidden");
        } else {
            document.getElementById("chimio-h").setAttribute("hidden", "");
        }
        if (radio.checked) {
            result = result.replace("Radio ", "");
            result += "Radio ";

            document.getElementById("radio-h").removeAttribute("hidden");
        } else {

            document.getElementById("radio-h").setAttribute("hidden", "");
        }
        if (chirurgie.checked) {
            result = result.replace("Chirurgie ", "");
            result += "Chirurgie ";

            document.getElementById("chirurgie-h").removeAttribute("hidden");
        } else {
            document.getElementById("chirurgie-h").setAttribute("hidden", "");
        }
        if (hormo.checked) {
            result = result.replace("Hormo ", "");
            result += "Hormo ";

            document.getElementById("hormo-h").removeAttribute("hidden");
        } else {
            document.getElementById("hormo-h").setAttribute("hidden", "");
        }
    } else {
        document.getElementById("rcp-fiche").setAttribute("hidden", "");
        document.getElementById("chimio-h").setAttribute("hidden", "");
        document.getElementById("radio-h").setAttribute("hidden", "");
        document.getElementById("chirurgie-h").setAttribute("hidden", "");
        document.getElementById("hormo-h").setAttribute("hidden", "");
    }
    if (!chimio.checked || !radio.checked || !chirurgie.checked || !hormo.checked) {
        if (!chimio.checked) {
            result = result.replace("Chimio ", "");
        }
        if (!radio.checked) {
            result = result.replace("Radio ", "");
        }
        if (!chirurgie.checked) {
            result = result.replace("Chirurgie ", "");
        }
        if (!hormo.checked) {
            result = result.replace("Hormo ", "");
        }
    }
    // If no checkboxes are checked, clear the result
    if (!chimio.checked && !radio.checked && !chirurgie.checked && !hormo.checked) {
        document.getElementById("rcp-fiche").setAttribute("hidden", "");
        result = "";
    }

    console.log(result);
    document.getElementById("rcp-display").innerHTML = result;


}



//Protocole
document.addEventListener("DOMContentLoaded", function () {
    var chimio = document.getElementById("chimio-h");
    if (chimio) {
        chimio.addEventListener('click', getTraitment);
    }
},)


var traitment;
function getTraitment() {
    var myMap = {
        "m_osseuse": m_ossuse,
        "her": her2,
        "rh": rh,
        "crise_viscerale": crise,
        "spectre_brca": spectre_BRCA,
        "menopause_output": output,
        "statut_pd_l": statut_pd_l,
    };

    // console.log(myMap);
    var myMapJson = JSON.stringify(myMap);
    console.log(myMapJson)
    fetch("http://localhost:8081/mcda/api/treatment/chimio", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: myMapJson
    }).then((response) => response.json())
        .then((data) => {
            // console.log("this is traitment ");
            traitment = data.protocole
            var tableBody = document.querySelector("#myTable tbody");
            var select = document.querySelector("#prot-select");

            // Empty the table first
            tableBody.innerHTML = "";

            traitment.forEach(value => {
                // console.log(value);
                var newRow = tableBody.insertRow(-1);
                var valueCell = newRow.insertCell(0);
                valueCell.textContent = value;


                // Loop through the data and add each value to a new option in the select element
                var option = document.createElement("option");
                console.log(value)
                option.textContent = value;
                select.appendChild(option);

            });
        })
        .catch(error => {
            console.log("Error", error);

        })
}




