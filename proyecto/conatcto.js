const userName = document.getElementById("exampleFormControlInput1");
const email = document.getElementById("exampleFormControlInput2");
const numberPhone = document.getElementById("exampleFormControlInput3");

userName.addEventListener("input", function (e){
    const verifvacio = e.target;
    const verif = e.target.value;
    if (verif.length <=2) {
        verifvacio.classList.add("shadow");
        verifvacio.nextElementSibling.classList.add("error");
        verifvacio.nextElementSibling.innerText = "el campo es demasiado corto";
    }
    else {
        verifvacio.classList.remove("shadow");
        verifvacio.nextElementSibling.classList.remove("error");
        verifvacio.nextElementSibling.classList.add("bueno");
        verifvacio.nextElementSibling.innerText = "parece estar bien ";
        
    }
});

email.addEventListener("input", function (e){
    const emailinput = e.target;
    const emailverif  = e.target.value;
    const regex = new RegExp (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
    if (emailverif.length >=5 && !regex.test(emailverif)) {;
        emailinput.classList.add("shadow");
        emailinput.nextElementSibling.classList.add("error");
        emailinput.nextElementSibling.innerText= "email no valido "
    } else {
        emailinput.classList.remove("shadow");
        emailinput.nextElementSibling.classList.remove("error");
        emailinput.nextElementSibling.classList.add("bueno");
        emailinput.nextElementSibling.innerText = "parece estar bien ";
    }
})

numberPhone.addEventListener("input", function (e){
    const phoneinput = e.target;
    const phoneverif  = e.target.value;
    if (phoneverif.length <= 5 ) {;
        phoneinput.classList.add("shadow");
        phoneinput.nextElementSibling.classList.add("error");
        phoneinput.nextElementSibling.innerText= "el campo es demasiado corto"
    } else {
        phoneinput.classList.remove("shadow");
        phoneinput.nextElementSibling.classList.remove("error");
        phoneinput.nextElementSibling.classList.add("bueno");
        phoneinput.nextElementSibling.innerText = "parece estar bien ";
    }
})
