
const emailPattern = /(^[a-zA-Z0-9_.]+[@]{1}[a-z]+[\.][a-z]+$)/;

const myInp = document.getElementById("input");

function validateEmail() {

    const myButton = document.getElementById("btn");
    const myInp = document.getElementById("input");
    const myInput = myInp.value;
    const paragraph = document.querySelector(".paragraph");

    const emailPattern = /(^[\w.]+[@]{1}[\w.]+[\.][a-z]+$)/;

    if (myInput.match(emailPattern)) {
        paragraph.classList.add("p-2");
        paragraph.classList.remove("p-1");
        myInp.style.border = "1px solid red";
        paragraph.innerHTML = "Your Email is valid";

    } else {
        paragraph.classList.add("p-1");
        paragraph.classList.remove("p-2");
        myInp.style.border = "1px solid rgba(250, 95, 95, 0.865)";
        paragraph.innerHTML = "Please provide a valid email";
    }

}







