// DEFINE GENERAL VARIABLES

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
var output;
// crise viscerale
var crise;
// sexe
var sexe = "Homme";


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
    console.log(data_element);
    if (sexe == "Homme") {
        console.log("this is sex value :" + sexe)
        document.getElementById("autre-label").removeAttribute("hidden");
        document.getElementById("autre-homme").removeAttribute("hidden");
    }
    // display info on the side document
    for (i = 0; i < data_element.length; i++) {
        var age = document.getElementById("age").value;
        console.log(age);
        console.log("this is :" + data_element[i].value);
        document.getElementById("sexe-display").innerHTML = sexe;
        document.getElementById("age-display").innerHTML = age;


        document.getElementById(display[i]).innerHTML = data_element[i].value;
    }

    // navigate to the next tab
    document.getElementById(nextDivID).click();

}

function navigate_profile() {
    // get the data
    sexe = document.getElementById("sexe-select").value;
    age = document.getElementById("age").value;
    console.log(sexe)
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
    document.getElementById("ctnm-h").click();
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


document.addEventListener("DOMContentLoaded", function () {
    var chir = document.getElementById("chirurgie-o");
    if (chir) {
        chir.addEventListener('click', getAnto);
    }
},)
function getAnto(anto) {
    var mam = document.getElementById("chir-m").value
    var gang = document.getElementById("chir-gang").value
    console.log(mam);
    console.log(gang);

    if (mam == 1 || gang == 1) {
        console.log("im here");
        document.getElementById("anto").removeAttribute("hidden");
    } else {
        document.getElementById("anto").setAttribute("hidden", "");
    }
}




// bilan date aff
document.addEventListener("DOMContentLoaded", function () {
    var bilan = document.getElementById("bilan-extension");
    if (bilan) {
        bilan.addEventListener('click', affichage);
    }
},)


function affichage() {
    var tap = document.getElementById("tap").value;
    var cere = document.getElementById("cere").value;
    var pet = document.getElementById("pet").value;
    var scintigraphie = document.getElementById("scintigraphie").value;
    var irm_m = document.getElementById("irm-m").value;
    var autre = document.getElementById("autre-exa").value;
    var conc = document.getElementById("conc").value;

    if (tap == "1") {
        console.log("im done")
        document.getElementById("tap-date-label").removeAttribute("hidden");
        document.getElementById("tap-date").removeAttribute("hidden");
    } else {
        document.getElementById("tap-date-label").setAttribute("hidden", "");
        document.getElementById("tap-date").setAttribute("hidden", "");
    }
    if (cere == "1") {
        document.getElementById("cere-date-label").removeAttribute("hidden");
        document.getElementById("cere-date").removeAttribute("hidden");
    }
    else {
        document.getElementById("cere-date-label").setAttribute("hidden", "");
        document.getElementById("cere-date").setAttribute("hidden", "");
    }
    if (pet == "1") {
        document.getElementById("pet-date-label").removeAttribute("hidden");
        document.getElementById("pet-date").removeAttribute("hidden");
    } else {
        document.getElementById("pet-date-label").setAttribute("hidden", "");
        document.getElementById("pet-date").setAttribute("hidden", "");
    }
    if (scintigraphie == "1") {
        document.getElementById("scin-date-label").removeAttribute("hidden");
        document.getElementById("scin-date").removeAttribute("hidden");
    } else {
        document.getElementById("scin-date-label").setAttribute("hidden", "");
        document.getElementById("scin-date").setAttribute("hidden", "");
    }
    if (irm_m == "1") {
        document.getElementById("irm-date-label").removeAttribute("hidden");
        document.getElementById("irm-date").removeAttribute("hidden");
    } else {
        document.getElementById("irm-date-label").setAttribute("hidden", "");
        document.getElementById("irm-date").setAttribute("hidden", "");
    }
    if (autre == "1") {
        document.getElementById("aut-date-label").removeAttribute("hidden");
        document.getElementById("aut-date").removeAttribute("hidden");
    } else {
        document.getElementById("aut-date-label").setAttribute("hidden", "");
        document.getElementById("aut-date").setAttribute("hidden", "");
    }
    if (conc == "1") {
        document.getElementById("conc-t-label").removeAttribute("hidden");
        document.getElementById("conc-t").removeAttribute("hidden");
    } else {
        document.getElementById("conc-t-label").setAttribute("hidden", "");
        document.getElementById("conc-t").setAttribute("hidden", "");
    }


}




// T
document.addEventListener("DOMContentLoaded", function () {
    var ctnm = document.getElementById("ctnm");
    if (ctnm) {
        ctnm.addEventListener('submit', calcT);
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
    fetch("http://localhost:8081/api/consultation/taille", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: myMapJson
    }).then((response) => response.text())
        .then((data) => {
            console.log("this is data");
            console.log(data);
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

    if (rhe == 1 || rhp == 1) {
        var rhe = document.getElementById("rhe_options").value;
        var rhp = document.getElementById("rhp_options").value;
        rh = "Positif";
    } else {
        var rhe = document.getElementById("rhe_options").value;
        var rhp = document.getElementById("rhp_options").value;
        rh = "Negatif";
    }

    if (her2_value == 0) {
        her2_value = document.getElementById("her2_options").value;
        her2 = "Non surexprime";
    } else {
        her2_value = document.getElementById("her2_options").value;
        her2 = "surexprime"
    }
    console.log("RH")
    console.log(rh)
    console.log("Her2")
    console.log(her2)

}



// CTNM
document.addEventListener("DOMContentLoaded", function () {
    var ctnm = document.getElementById("ctnm");
    if (ctnm) {
        ctnm.addEventListener('submit', getCtnm);
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
    console.log(myMap);
    var myMapJson = JSON.stringify(myMap);
    console.log(myMapJson)
    fetch("http://localhost:8081/api/consultation/calc-ctnm", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: myMapJson
    }).then((response) => response.text())
        .then((data) => {
            console.log("this is CTNM ");
            CTNM = data
            console.log(CTNM)
            document.getElementById("ctnm-display").innerHTML = CTNM;
        })
        .catch(error => {
            console.log("Error", error);

        })
}



//spectre BRCA
document.addEventListener("DOMContentLoaded", function () {
    var biopsie = document.getElementById("biopsie");
    if (biopsie) {
        biopsie.addEventListener('click', getSoutype);

        function getSoutype() {
            var RH_E = document.getElementById("rhe_options").value;
            var PR = document.getElementById("rhp_options").value;
            var HER2 = document.getElementById("her2_options").value;
            var ki67 = document.getElementById("ki67_options").value;
            var soutype;
            if (RH_E == "0" && PR == "0" && HER2 == "0") {
                console.log("triple negatif");
                soutype = "triple negatif";
                document.getElementById("pdl1-label").removeAttribute("hidden");
                document.getElementById("pdl1-options").removeAttribute("hidden");
                document.getElementById("soutype-display").innerHTML = soutype
            }
            else if (RH_E == "0" && PR == "0" && HER2 == "1") {
                console.log("HER2 positif");
                soutype = "HER2 positif";
                document.getElementById("soutype-display").innerHTML = soutype
            }

            else if (RH_E == "1" || PR == "1" && RH_E == "1" || ki67 == "0") {
                console.log("luminalB");
                soutype = "luminalB";
                document.getElementById("soutype-display").innerHTML = soutype
            }

            else if (RH_E == "1" || PR == "1" && RH_E == "0" || ki67 == "1") {
                console.log("luninalA");
                soutype = "luninalA";
                document.getElementById("soutype-display").innerHTML = soutype
            }
            var spectre = document.getElementById("spectre-options").value;


            if (spectre == 0) {
                spectre_BRCA = "pas mutation germinale BRCA1 ou 2"
                console.log(spectre_BRCA);
            } else {
                spectre_BRCA = "mutation germinale BRCA1 ou 2"
                console.log(spectre_BRCA);
            }




        }
    }
},)



//Menopose output
document.addEventListener("DOMContentLoaded", function () {
    var genico = document.getElementById("genico");
    if (genico) {
        genico.addEventListener('click', getMenoOutput);
    }

},)

function getMenoOutput() {
    var statut = document.getElementById("menopose").value;
    var dosage = document.getElementById("dosage-option").value;
    console.log(statut)

    if (statut == "Ménoposé") {
        var statut = document.getElementById("menopose").value;
        output = "Oui";
        console.log("this is output");
        console.log(output);
    } else if (statut == "Non Ménoposé") {
        var statut = document.getElementById("menopose").value;
        output = "Non";
        console.log("this is output");
        console.log(output);
    } else if (statut == "PériMénoposé") {
        var dosage = document.getElementById("dosage-option").value;
        if (dosage == 0) {
            output = "Oui";
            console.log("this is output");
            console.log(output);
        } else {
            output = "Non";
            console.log("this is output");
            console.log(output);

        }
    } else {
        output = "Non";
    }

}



document.addEventListener("DOMContentLoaded", function () {
    var bilanextension = document.getElementById("bilan-extension");
    if (bilanextension) {
        bilanextension.addEventListener('click', getBilan);
    }

},)

function getBilan() {
    var scin = document.getElementById("scintigraphie").value;
    var pet = document.getElementById("pet").value;


    // m_ossuse
    if (scin == 0) {
        m_ossuse = "Non";
    } else {
        m_ossuse = "Oui";
    }
    console.log(m_ossuse)
    // M
    if (scin == 0 && pet == 0) {
        M = "M0";
    } else {
        M = "M1";
    }

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
        console.log("Crise : ");
        console.log(crise);
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
        console.log("this is N")
        console.log(N);


        //set to disabled 
        document.getElementById("chimio-h").setAttribute("hidden", "");
        document.getElementById("radio-h").setAttribute("hidden", "");
        document.getElementById("chirurgie-h").setAttribute("hidden", "");
        document.getElementById("hormo-h").setAttribute("hidden", "");

        //checkbox
        document.getElementById("ct").setAttribute("hidden", "");
        document.getElementById("chimio-t").setAttribute("hidden", "");
        document.getElementById("cn").setAttribute("hidden", "");
        document.getElementById("chimio-a").setAttribute("hidden", "");
        document.getElementById("ca").setAttribute("hidden", "");
        document.getElementById("chimio-n").setAttribute("hidden", "");
        document.getElementById("r").setAttribute("hidden", "");
        document.getElementById("radio").setAttribute("hidden", "");
        document.getElementById("c").setAttribute("hidden", "");
        document.getElementById("chirurgie").setAttribute("hidden", "");
        document.getElementById("h").setAttribute("hidden", "");
        document.getElementById("hormo").setAttribute("hidden", "");
        console.log("this is M")
        console.log(M)
        if (M == "M1") {
            console.log("im testing M")
            document.getElementById("ct").removeAttribute("hidden");
            document.getElementById("chimio-t").removeAttribute("hidden");

        } else if (sexe == "Femme" && age >= 80) {
            console.log("im testing sexe and age")
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
            document.getElementById("cn").removeAttribute("hidden");
            document.getElementById("chimio-a").removeAttribute("hidden");
            document.getElementById("ca").removeAttribute("hidden");
            document.getElementById("chimio-n").removeAttribute("hidden");
            document.getElementById("r").removeAttribute("hidden");
            document.getElementById("radio").removeAttribute("hidden");
            document.getElementById("c").removeAttribute("hidden");
            document.getElementById("chirurgie").removeAttribute("hidden");
            document.getElementById("h").removeAttribute("hidden");
            document.getElementById("hormo").removeAttribute("hidden");
        } else {
            document.getElementById("ca").removeAttribute("hidden");
            document.getElementById("chimio-a").removeAttribute("hidden");
            document.getElementById("c").removeAttribute("hidden");
            document.getElementById("chirurgie").removeAttribute("hidden");
            document.getElementById("h").removeAttribute("hidden");
            document.getElementById("hormo").removeAttribute("hidden");
        }
    }

},)

//PEC 
document.addEventListener("DOMContentLoaded", function () {
    var decision = document.getElementById("PEC");
    if (decision) {
        decision.addEventListener('click', showPec);
    }
},)

function showPec() {
    var chimio = document.getElementById("chimio-t");
    var chimio_a = document.getElementById("chimio-a");
    var chimio_n = document.getElementById("chimio-n");
    var radio = document.getElementById("radio");
    var chirurgie = document.getElementById("chirurgie");
    var hormo = document.getElementById("hormo");

    if (chimio.checked || chimio_a.checked || chimio_n.checked) {
        console.log(chimio.checked)
        console.log(chimio_a.checked)
        console.log(chimio_n.checked)

        document.getElementById("chimio-h").removeAttribute("hidden");
    } else if (radio.checked) {
        console.log(radio.checked)

        document.getElementById("radio-h").removeAttribute("hidden");
    } else if (chirurgie.checked) {
        document.getElementById("chirurgie-h").removeAttribute("hidden");
    } else if (hormo.checked) {
        document.getElementById("hormo-h").removeAttribute("hidden");
    }

}



// CTNM
// document.addEventListener("DOMContentLoaded", function () {
//     var biopsie = document.getElementById("biopsie");
//     if (biopsie) {
//         biopsie.addEventListener('submit', getCtnm);
//     }
// },)

// var CTNM;
// function getCtnm() {
//     var N = document.getElementById("description-n-option").value;
//     var M = document.getElementById("metastase-suspecte-option").value;
//     console.log("this N");
//     console.log(N);
//     console.log("this M");
//     console.log(M);

//     var myMap = {
//         T: T,
//         N: N,
//         M: M,
//     };
//     console.log(myMap);
//     var myMapJson = JSON.stringify(myMap);
//     console.log(myMapJson)
//     fetch("http://localhost:8081/api/consultation/calc-ctnm", {
//         method: "post",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: myMapJson
//     }).then((response) => response.text())
//         .then((data) => {
//             console.log("this is CTNM ");
//             CTNM = data
//             console.log(CTNM)
//             document.getElementById("ctnm-display").innerHTML = CTNM;
//         })
//         .catch(error => {
//             console.log("Error", error);

//         })
// }




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
        "her2": her2,
        "rh": rh,
        "crise_viscerale": crise,
        "spectre_brca": spectre_BRCA,
        "menopause_output": output
    };

    console.log(myMap);
    var myMapJson = JSON.stringify(myMap);
    console.log(myMapJson)
    fetch("http://localhost:8081/api/treatment/chimio", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: myMapJson
    }).then((response) => response.json())
        .then((data) => {
            console.log("this is traitment ");
            traitment = data.protocole
            console.log(data)
            console.log(data.protocole)
            document.getElementById("chimio-a").innerHTML = traitment.join(" <br> ");
        })
        .catch(error => {
            console.log("Error", error);

        })
}