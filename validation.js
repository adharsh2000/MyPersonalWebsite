var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full Name';
        return false;
    }
    nameError.innerHTML = '<i  class="fa-solid fa-circle-check log"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone-no').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits please';
        return false;
    }

    phoneError.innerHTML = '<i  class="fa-solid fa-circle-check log"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email is invalid';
        return false;
    }

    emailError.innerHTML = '<i  class="fa-solid fa-circle-check log"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;

    if(message.length <= 20){
        messageError.innerHTML = 'need more message';
        return false;
    }

    messageError.innerHTML = '<i  class="fa-solid fa-circle-check log"></i>'
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail || !validateMessage()){
        submitError.style.display='block';
        submitError.innerHTML='Error'
        setTimeout(function(){submitError.style.display='none'},3000)
        return false;
    }
}

$(".contact-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzEkT4udlCJLs3qZp8M2bAFj39BWrmb8LOPdFGywouwpn85Qs1eF1DKXSUzz__pbUVg/exec",
        data:$(".contact-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})



// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbyrF3PU4gsLbRT7vptGrDzezLD55-PqI0DAyiHIKzpYROyRTjfZ2IhYVBI2gW_hhxr_/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",

//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https:google.com"
//         },
//         error:function (err){
//             alert("Something Error")
//         }
//     })
// })

// sumbit


// const form = document.getElementById("gform");
// const fullname = document.getElementById("fullname");
// const email = document.getElementById("email");
// const message = document.getElementById("message");

// const setSuccess = (element) => {
//   const inputElement = element.parentElement.querySelector(".form-control");
//   const errorDisplay = element.parentElement.querySelector(".form-error");
//   errorDisplay.innerText = "";
//   inputElement.classList.remove("error");
//   inputElement.classList.add("success");
// };

// const setError = (element, message) => {
//   const inputElement = element.parentElement.querySelector(".form-control");
//   const errorDisplay = element.parentElement.querySelector(".form-error");
//   errorDisplay.innerText = message;
//   inputElement.classList.add("error");
//   inputElement.classList.remove("success");
// };

// const isValidEmail = (email) => {
//   const regularEx =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return regularEx.test(String(email).toLowerCase());
// };

// const validateInput = () => {
//   const nameValue = fullname.value.trim();
//   const emailValue = email.value.trim();
//   const messageValue = message.value.trim();
//   if (nameValue === "") {
//     setError(fullname, "Full name is required");
//   } else {
//     setSuccess(fullname);
//   }
//   if (emailValue === "") {
//     setError(email, "Email is required");
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, "Provide a valid email address");
//   } else {
//     setSuccess(email);
//   }
//   if (messageValue === "") {
//     setError(message, "Message is required");
//   } else {
//     setSuccess(message);
//   }
// };

// const onSubmitForm = (e) => {
//   e.preventDefault();
//   validateInput();
//   if (
//     !email.classList.contains("error") &&
//     !fullname.classList.contains("error") &&
//     !message.classList.contains("error")
//   ) {
//     $.ajax({
//       url: "https://script.google.com/macros/s/AKfycbxCD8wbFGNUvG3RpZrK5mBs8HlvenRgM7qLW0mJzjszI6BbsBdHoDsCbe4fmiPr4QRB/exec",
//       data: $("#gform").serialize(),
//       method: "post",
//       success: function (response) {
//         alert("Form submitted successfully");
//         window.location.reload();
//       },
//       error: function (err) {
//         alert("Something Went Wrong");
//       },
//     });
//   }
// };

// form.addEventListener("submit", onSubmitForm);