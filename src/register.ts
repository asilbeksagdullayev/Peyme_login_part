import * as yup from "yup";

const email2Input: HTMLInputElement = document.querySelector(".email2")!;
const btn2: HTMLButtonElement = document.querySelector(".button2")!;
const password2Input:HTMLInputElement = document.querySelector(".password2")!;
const tryPassword:HTMLInputElement = document.querySelector(".tryPassword")!;
const stop:HTMLParagraphElement = document.querySelector(".stop")!;
const name2: HTMLInputElement = document.querySelector(".name2")!;
const phone: HTMLInputElement = document.querySelector(".phoneNumber")!;
const userName2: HTMLInputElement = document.querySelector(".userName2")!;
const errorN: HTMLParagraphElement = document.querySelector(".errorN")!;
const errorU: HTMLParagraphElement = document.querySelector(".errorU")!;
const errorE: HTMLParagraphElement = document.querySelector(".errorE")!;
const errorP: HTMLParagraphElement = document.querySelector(".errorP")!;
const errorPN: HTMLParagraphElement = document.querySelector(".errorPN")!;
const errorC: HTMLParagraphElement = document.querySelector(".errorC")!;
const first_page: HTMLDivElement = document.querySelector(".first_page")!;
const second_page: HTMLDivElement = document.querySelector(".second_page")!;
const third_page: HTMLDivElement = document.querySelector(".third_page")!;


const schemaTwo = yup.object().shape({
 names: yup.string().required(),
userName: yup.string().required(),
email: yup.string().email().required(),
phone: yup.number().required(),
tryPassword: yup.number().required(),
password: yup.number().required().min(8),
});
btn2.addEventListener("click", () => {
  const formData = {
    email: email2Input.value,
    name: name2.value,
    userName: userName2.value,
    password: password2Input.value,
    confirmPassword: tryPassword.value,
    phone: phone.value,

  };

  function most() {

    second_page.style.display ='none';
  }
  function end() {
    stop.innerText = "Please wait...";
   setTimeout(() => {

    third_page.style.display = "block";
   }, 3000);
  }
 schemaTwo
 .validate(formData)
 .then(() => {
   console.log(formData);
   email2Input.value = "";
   password2Input.value = "";
   name2.value = "";
   userName2.value = "";
 })

 .catch((error) => {
   errorN.innerText = "Error Name";
   errorC.innerText = "Error ";
   errorPN.innerText = "Enter phone number";
   errorU.innerText = "Error User Name";
   errorP.innerText = "Error Password";
   errorE.innerText = "Error Email";
   errorE.style.display = "block";
   errorN.style.display = "block";
   errorU.style.display = "block";
   errorP.style.display = "block";
   email2Input.value = "";
   password2Input.value = "";
   name2.value = "";
   userName2.value = "";
   email2Input.style.border= "1px solid red";
   password2Input.style.border= "1px solid red";
   name2.style.border= "1px solid red";
   userName2.style.border= "1px solid red";

   setTimeout(() => {
    errorE.style.display = "none";
   errorN.style.display = "none";
   errorU.style.display = "none";
   errorP.style.display = "none";


     }, 2000);
     setTimeout(() => {
       // errorRed.style.display = "none";

   email2Input.style.border= "";
   password2Input.style.border= "";
   name2.style.border= "";
   userName2.style.border= "";
   tryPassword.style.border= "";
   phone.style.border= "";
     }, 4000);

     console.log(error);

   });
   if(tryPassword.value === password2Input.value) {
    most();
    end();
   }
});








