import * as yup from "yup";
const email3Input: HTMLInputElement = document.querySelector(".email4")!;
const btn3: HTMLButtonElement = document.querySelector(".button3")!;
const password3Input:HTMLInputElement = document.querySelector(".password4")!;
const error3:HTMLParagraphElement = document.querySelector(".error3")!;
const error4:HTMLParagraphElement = document.querySelector(".error4")!;
const stop:HTMLParagraphElement = document.querySelector(".stop")!;
const first_page: HTMLDivElement = document.querySelector(".first_page")!;
const third_page: HTMLDivElement = document.querySelector(".third_page")!;



const schemaThree = yup.object().shape({
email: yup.string().email().required(),
password: yup.number().required().min(8),
});
btn3.addEventListener("click", () => {
  const formData = {
    email: email3Input.value,
    password: password3Input.value,
  };


 schemaThree
 .validate(formData)
 .then(() => {
   console.log(formData);
   third_page.style.display = "none";
   stop.innerText = "Please wait...";
   setTimeout(() => {

    first_page.style.display = "block";
   }, 3000);

 })

 .catch((error) => {
   error3.innerText = "Error Password";
   error4.innerText = "Error Email";
   error3.style.display = "block";
   error4.style.display = "block";
   email3Input.value = "";
   password3Input.value = "";
   email3Input.style.border= "1px solid red";
   password3Input.style.border= "1px solid red";

   setTimeout(() => {
    error4.style.display = "none";
   error3.style.display = "none";


     }, 2000);
     setTimeout(() => {
       // errorRed.style.display = "none";

   email3Input.style.border= "";
   password3Input.style.border= "";

     }, 4000);

     console.log(error);

   });

});


