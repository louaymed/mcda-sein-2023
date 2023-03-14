
function enableClinNav(local) {
    var local = document.querySelectorAll("#locali option:checked");
    var selected = [];
    for (var i = 0; i < local.length; i++) {
        selected.push(local[i].value);
    }
    console.log(selected);

    if (selected != "") {
        document.getElementById("clini-nav").removeAttribute("hidden");
        local.forEach(function (option) {
            var localValue = option.value;
            if (localValue != "") {
                if (localValue == 1) {
                    document.getElementById("sein-d-o-h").removeAttribute("hidden");
                    document.getElementById("sein-d-o").removeAttribute("hidden");
                    document.getElementById("sein-d-o-h").click();
                } else {
                    if (selected.includes('1') == false) {
                        document.getElementById("sein-d-o-h").setAttribute("hidden", "");
                        document.getElementById("sein-d-o").setAttribute("hidden", "");
                    }
                }

                if (localValue == 2) {
                    document.getElementById("sein-g-o-h").removeAttribute("hidden");
                    document.getElementById("sein-g-o").removeAttribute("hidden");
                    document.getElementById("sein-g-o-h").click();
                } else {
                    if (selected.includes('2') == false) {
                        document.getElementById("sein-g-o-h").setAttribute("hidden", "");
                        document.getElementById("sein-g-o").setAttribute("hidden", "");
                    }
                }

            } else {
                document.getElementById("sein-d-o-h").setAttribute("hidden", "");
                document.getElementById("sein-d-o").setAttribute("hidden", "");
                document.getElementById("sein-g-o-h").setAttribute("hidden", "");
                document.getElementById("sein-g-o").setAttribute("hidden", "");


            }
        })

    } else {
        document.getElementById("clini-nav").setAttribute("hidden", "");

    }

}
