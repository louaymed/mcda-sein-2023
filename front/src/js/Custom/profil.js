function hideDivSex(sex) {
    if (sex.value == "Homme") {
      // console.log(document.getElementById("sexe-select").value)
      document.getElementById("genico").setAttribute("hidden", "");
    } else {
      document.getElementById("autre-label").setAttribute("hidden", "");
      document.getElementById("autre-homme").setAttribute("hidden", "");
      document.getElementById("genico").removeAttribute("hidden");
    }
  }