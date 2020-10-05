// JavaScript source code
function login() {

    var name = document.getElementById("uname").value;
    var pssword = document.getElementById("pword").value;

    if (name == "rajesh" && pssword == "subham"){

        window.location.href = "Dashboard.html";
    }
    else {
        document.getElementById("loginVal").innerHTML = "Incorrect Login Password";
    }
}


function ShowHideDiv() {
    var formRenter = document.getElementById("formRenter");
    var formHouse = document.getElementById("formHouse");
    formRenter.style.display = FormView.value == "formRenter" ? "block" : "none";
    formHouse.style.display = FormView.value == "formHouse" ? "block" : "none";
   
}

function ShowHideData() {
    var dataRenter = document.getElementById("dataRenter");
    var dataHouse = document.getElementById("dataHouse");
    dataRenter.style.display = dataView.value == "dataRenter" ? "block" : "none";
    dataHouse.style.display = dataView.value == "dataHouse" ? "block" : "none";

}