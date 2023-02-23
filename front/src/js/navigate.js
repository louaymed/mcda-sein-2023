function navigate_profile() {
    // get the data
    sexe = document.getElementById("sexe-select").value;
    age = document.getElementById("age").value;

    // local storage
    localStorage.setItem("sexe", sexe);
    localStorage.setItem("age", age);

    // navigate to the next onglet
    document.getElementById("habitude-h").click();

    document.getElementById("sexe-display").innerHTML = sexe;
    document.getElementById("age-display").innerHTML = age;
}

function navigate(divID, nextDivID, ...display) {

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
    // display info on the side document
    for (i = 0; i < data_element.length; i++) {
        var age = document.getElementById("age").value;
        console.log(age);
        console.log("this is :" + data_element[i].value);
        document.getElementById("sexe-display").innerHTML = data_element[i].value;
        document.getElementById("age-display").innerHTML = age;

        document.getElementById(display[i]).innerHTML = data_element[i].value;
    }

    // navigate to the next tab
    document.getElementById(nextDivID).click();

}



// T
document.addEventListener("DOMContentLoaded", function () {
    var ctnm = document.getElementById("ctnm");
    if (ctnm) {
        ctnm.addEventListener('submit', calcT);
    }
},)
var T;
function calcT() {
    var taille = document.getElementById("taille-tumeur").value;
    var description = document.getElementById("description-t-option").value;
    var description_t;
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
// her2 / rh 
var her2;
var rh;
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

var CTNM;
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
            document.getElementById("ctnm-a").innerHTML = "CTNM : " + CTNM;
        })
        .catch(error => {
            console.log("Error", error);

        })
}



//spectre BRCA
var spectre_BRCA
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
var output;
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
        console.log("Menopose");
        console.log(output);
    } else if (statut == "Non Ménoposé") {
        var statut = document.getElementById("menopose").value;
        output = "Non";
        console.log("Menopose");
        console.log(output);
    }
    var dosage = document.getElementById("dosage-option").value;
    if (dosage == 0 && statut == "PériMénoposé") {
        output = "Oui";
        console.log("Menopose");
        console.log(output);
    } else {
        console.log("Menopose");
        output = "Non";
        console.log(output);

    }

}


// M 
var M;
var m_ossuse;
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
var crise;
document.addEventListener("DOMContentLoaded", function () {
    var clinique = document.getElementById("clinique");
    if (clinique) {
        clinique.addEventListener('click', getCrise);
    }

},)

function getCrise() {
    var crise_viscerale = document.getElementById("crise").value;

    if (crise_viscerale == 0) {
        crise = "Non";
    } else {
        crise = "Oui";
    }
    console.log("Crise : ");
    console.log(crise);

}






//Protocole 
document.addEventListener("DOMContentLoaded", function () {
    var decision = document.getElementById("decision");
    if (decision) {
        decision.addEventListener('click', getTraitment);
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
            document.getElementById("decision-a").innerHTML = traitment.join(" <br> ") ;
        })
        .catch(error => {
            console.log("Error", error);

        })
}