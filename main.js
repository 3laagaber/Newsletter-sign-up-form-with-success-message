let formInput = document.querySelector(".email");
let formbtn = document.querySelector(".btn");
let textdiv = document.querySelector(".text");
let photo = document.getElementsByTagName("picture")[0];
let theMark = document.getElementById("mark");

document.forms[0].onsubmit = function () {
    let inputValue = document.querySelector(".email").value;
    let inputValueReg = /\w{5,}@\w{5,}.(com|org)/ig ;
    let result = inputValueReg.test(inputValue);
    if (result === false) {
        formInput.classList.toggle("error")
        return false ;       
    }else {
        textdiv.innerHTML = "" ;
        photo.innerHTML = "" ;
        let h1 = document.createElement("h1");
        let h1text= document.createTextNode("Thanks for subscribing!")
        h1.appendChild(h1text);
        let p = document.createElement("p");
        let ptext= document.createTextNode("A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.")
        p.appendChild(ptext);
        photo.remove();
        formbtn.value = "Dismiss message";
        theMark.classList.toggle("mark")
        formbtn.classList.toggle("button")
        textdiv.appendChild(theMark);
        textdiv.appendChild(h1)
        textdiv.appendChild(p)
        textdiv.appendChild(formbtn)
        textdiv.classList.add("special")
        formbtn.onclick = function () {
            window.location.reload(true);
        }
        return true;       
    }
}