const Option = document.querySelector(".option")
const Value  = document.querySelector(".input")
const Btn = document.querySelector(".btn")
const Form = document.querySelector("#form")

Form.addEventListener('submit', (e) =>{
    switch(Option.value) {
      case 'email':
        var mailformat =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if(Value.value.match(mailformat)){
            alert("Valid Email !");
        }
        else{
            alert("invalid Email !")
        }
          break;
       case 'phone':
        var phoneFormat = /^(\+)?(88)?01[0-9]{9}/
        if(Value.value.match(phoneFormat)){
            alert("Valid PhoneNumber !");
        }
        else{
            alert("invalid PhoneNumber !")
        }
          break;
        case 'post':
          var postal_code = /^[0-9]{4}/
        if(Value.value.match(postal_code)){
            alert("Valid postal Code !");
        }
        else{
            alert("invalid postal Code !")
        }
          break;
      default:
          alert('please give an input')
    }
   
    e.preventDefault()
})


// function ValidateEmail(inputText)
// {
// var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// var phone_number = /^(\+)?(88)?01[0-9]{9}/
// var postal_code = /^[0-9]{4}/

// if(inputText.value.match(mailformat))
// {
// alert("Valid  !");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert(" invalid  !");
// document.form1.text1.focus();
// return false;
// }
// }