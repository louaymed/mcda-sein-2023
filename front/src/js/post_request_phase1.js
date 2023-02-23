const url_enquete = 'http://127.0.0.1:5000/api/enquete';
const url_genico = 'http://127.0.0.1:5000/api/genico';
const url_taille = 'http://127.0.0.1:5000/api/taille';

function submitEnquete() {

    // get the target data
    var sex = document.getElementById("sexe-select");
    var atcdFam = document.getElementById("atcd-fam");
    var select = document.getElementById("type-cancer");
    var selected = [...select.options]
                    .filter(option => option.selected)
                    .map(option => option.value); 
    
    if (selected.includes("Autre") || selected.includes("Aucun")) {
      selected = "Empty";
    }
    // build json data
    let json_data = {
      "Sexe": `${sex.value}`,
      "Type de Cancer": `${selected}`,
      "ATCD_FAM": `${atcdFam.value}`
    };
    // post request to the api
    fetch(url_enquete, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa('admin:admin')}`
        },
        body: JSON.stringify(json_data)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        // change to the next page and set the label to the enquete result 
        document.getElementById("enquete-label").innerHTML = data["Enquete"]
        if (data["Enquete"] == "Non") {
          document.getElementById("enquete-btn").disabled = true;
        } else {
          document.getElementById("enquete-btn").disabled = false;
        }
      })
      .catch(error => {
        console.log('Coudn\'t fetch the data due to some error', error);
      })
};

function menoposieStatus() {

  // get the target data
  var sex = document.getElementById("sexe-select");
  var age = document.getElementById("age");
  // build the json data
  if (sex.value == 'Femme') {
    let json_data = {
      "Sexe": `${sex.value}`,
      "Age": `${age.value}`
    };
    // post request to the api
    fetch(url_genico, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa('admin:admin')}`
      },
      body: JSON.stringify(json_data)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        // Operations depends for the values returned by the api
        document.getElementById("status-menopausique").innerHTML = data["Menopose"];
        if (data["DosageHormonal"] == 'True') {
          document.getElementById("dosage-option").removeAttribute("disabled");
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
};

function getClasseTaille(data) {
    // get the value of the input
    var taille = data.value

    // build the data
    let json_data = {
      "Taille": `${taille}`
    }

    // send the post request to the api
    fetch(url_taille, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${bota('admin:admin')}`
      },
      body: JSON.stringify(json_data)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        // display the result on the corresponding label
        document.getElementById("classe-taille").innerHTML = data["Classe Taille"];
      })
      .catch(error => {
        console.log(error);
      })
};

function getTResult() {
  var description = getElementById("")
}

