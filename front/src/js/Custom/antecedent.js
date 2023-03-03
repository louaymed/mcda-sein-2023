function disableMommyOptions(mamm) {
    var myBrElements = document.getElementsByClassName("my-br");
    if (mamm.value == "") {
        document.getElementById("trait-label").setAttribute("hidden", "");
        document.getElementById("trait").setAttribute("hidden", "");
        // common label
        document.getElementById("detail-path-label").setAttribute("hidden", "");
        // set both lists hidden
        document.getElementById("detail-path").setAttribute("hidden", "");
        document.getElementById("detail-path-ben").setAttribute("hidden", "");


        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].setAttribute("hidden", "");
        }
    } else if (mamm.value == 1) {

        // set malgne values hidden
        // common label
        document.getElementById("detail-path-label").setAttribute("hidden", "");
        document.getElementById("detail-path").setAttribute("hidden", "");
        // second feild
        document.getElementById("trait-label").setAttribute("hidden", "");
        document.getElementById("trait").setAttribute("hidden", "");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].setAttribute("hidden", "");
        }



        // enable benigne values
        // common label
        document.getElementById("detail-path-label").removeAttribute("hidden");
        document.getElementById("detail-path-ben").removeAttribute("hidden");
        for (var i = 0; i < myBrElements.length - 1; i++) {
            myBrElements[i].removeAttribute("hidden");
        }

    } else {

        // set benigne values hidden 
        // common label
        document.getElementById("detail-path-label").setAttribute("hidden", "");
        document.getElementById("detail-path-ben").setAttribute("hidden", "");
        // second feild
        document.getElementById("trait-label").setAttribute("hidden", "");
        document.getElementById("trait").setAttribute("hidden", "");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].setAttribute("hidden", "");
        }

        // enable maligne values
        // common label
        document.getElementById("detail-path-label").removeAttribute("hidden");
        document.getElementById("detail-path").removeAttribute("hidden");
        // second field
        document.getElementById("trait-label").removeAttribute("hidden");
        document.getElementById("trait").removeAttribute("hidden");
        for (var i = 0; i < myBrElements.length; i++) {
            myBrElements[i].removeAttribute("hidden");
        }
    }
}


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

        // set raio options hidden
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
        setAttribute("hidden", "");
        document.getElementById("proto-label").setAttribute("hidden", "");
        document.getElementById("proto").setAttribute("hidden", "");
        document.getElementById("proto-autre-label").setAttribute("hidden", "");
        document.getElementById("proto-autre").setAttribute("hidden", "");

        // set raio options hidden
        document.getElementById("radio-title").setAttribute("hidden", "");
        document.getElementById("dose-label").setAttribute("hidden", "");
        document.getElementById("dose").setAttribute("hidden", "");
        document.getElementById("vol-label").setAttribute("hidden", "");
        document.getElementById("vol").setAttribute("hidden", "");
        document.getElementById("ddf-label").setAttribute("hidden", "");
        document.getElementById("ddf").setAttribute("hidden", "");
    }


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