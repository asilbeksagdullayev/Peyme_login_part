import * as yup from "yup";

const emailInput: HTMLInputElement = document.querySelector(".email")!;
const email2Input: HTMLInputElement = document.querySelector(".email2")!;
const btn: HTMLButtonElement = document.querySelector(".button")!;
const btn2: HTMLButtonElement = document.querySelector(".button2")!;
const passwordInput:HTMLInputElement = document.querySelector(".password")!;
const password2Input:HTMLInputElement = document.querySelector(".password2")!;
const name2: HTMLInputElement = document.querySelector(".name2")!;
const userName2: HTMLInputElement = document.querySelector(".userName2")!;
const errorRed: HTMLParagraphElement = document.querySelector(".error")!;
const errorN: HTMLParagraphElement = document.querySelector(".errorN")!;
const errorU: HTMLParagraphElement = document.querySelector(".errorU")!;
const errorE: HTMLParagraphElement = document.querySelector(".errorE")!;
const errorP: HTMLParagraphElement = document.querySelector(".errorP")!;
const errorRed1: HTMLParagraphElement = document.querySelector(".error1")!;
const first_page: HTMLDivElement = document.querySelector(".first_page")!;
const second_page: HTMLDivElement = document.querySelector(".second_page")!;
const stop: HTMLParagraphElement = document.querySelector(".stop")!;


const schema = yup.object().shape({
  names: yup.string(),
	userName: yup.string(),
	email: yup.string().email().required(),
	password: yup.string().required().min(8),
});

btn.addEventListener("click", () => {
  const formData = {
 email: emailInput.value,
				password: passwordInput.value,

  };
  schema
  .validate(formData)
  .then(() => {
    console.log(formData);
    first_page.style.display ='none';
    stop.innerText = "Please wait...";
    stop.style.display ="block";
    emailInput.value = "";
    passwordInput.value = "";
    setTimeout(() => {
      stop.style.display ="none";
      second_page.style.display ='block';
    }, 3000);


  })
  ///Al_Dicooo
  .catch((error) => {
    second_page.style.display ='none';
    errorRed.innerText = "Try Again";
     errorRed1.innerText = "Error Password";
    errorRed.style.display = "block";
    errorRed1.style.display = "block";
    emailInput.value = "";
    passwordInput.value = "";
    emailInput.style.border= "1px solid red";
    passwordInput.style.border= "1px solid red";

    setTimeout(() => {
        errorRed.style.display = "none";
        errorRed1.style.display = "none";


      }, 2000);
      setTimeout(() => {
        // errorRed.style.display = "none";
        emailInput.style.border= "";
        passwordInput.style.border= "";
      }, 4000);

      console.log(error);

      // const hacer = formData;
    });



	// const qiymat = emailInput.value;

	// if (emailRegex.test(qiymat)) {
	// 	console.log("rkmf");

	// } else {
	// 	const error: HTMLParagraphElement = document.querySelector(".error")!;
	// 	error.innerText = "hato";

		// console.log("855");
	// }
});



//Second page with error

