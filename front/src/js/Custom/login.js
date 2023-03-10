function NavTrait() {
    console.log("nav")
    if (document.getElementById("statut_patient").value == 1) {
        console.log("nav1")
        window.location.href = "newPatient.html";
    } else {
        console.log("nav2")
        window.location.href = "oldPatient.html";
    }
}