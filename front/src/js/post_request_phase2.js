const url_t = "http://127.0.0.1:5000/api/T/";



function resultatT() {
    // get the data
    var taille = document.getElementById("taille-tumeur").value;
    var description = document.getElementById("description-t-option").value;
    var description_t;

    // data treatment
    if (description == 0) {
      description_t = "Extension à la paroi thoracique (côtes, muscles intercostaux) en excluant les muscles pectoraux";
    } else if (description == 1) {
      description_t = "Œdème (y compris peau d’orange) et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein";
    } else if (description_t == 2) {
      description_t = "Extension à la paroi thoracique avec œdème et/ou ulcération de la peau du sein, et/ou nodules de perméation situés sur la peau du même sein";
    } else if (description_t == 3) {
      description_t = "Œdème/érythème atteignant plus du 1/3 du sein";
    } else {
      description_t = "Tumeur palpable";
    }

    console.log(description_t);
    console.log(taille);
    // json data

    let json_data = {
        "Taille Tumeur": `${taille}`,
        "Description T": `${description_t}`
    };
    // send a post request to the api
    fetch(url_t, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa('admin:admin')}`
        },
        body: JSON.stringify(json_data)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        // change the result
        document.getElementById("t-result").innerHTML = data["Resultat T"];
      })
      .catch(error => {
        console.log(error);
      })
}