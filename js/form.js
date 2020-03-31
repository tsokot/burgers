const myForm = document.querySelector(".order__form-tag");
const send = document.querySelector(".order__form-button_send");
const clearField = document.querySelector(".order__form-button_reset");

clearField.addEventListener("click", event =>{
  event.preventDefault();
  const data = {
          name : myForm.elements.name.value= '' ,
          phone : myForm.elements.phone.value='' ,
          comment : myForm.elements.comment.value='' ,
          to :'test@mail.ru',
          street : myForm.elements.street.value='',
          home : myForm.elements.home.value='',
          part : myForm.elements.part.value='',
          appt : myForm.elements.appt.value='',
          floor : myForm.elements.floor.value=''

      };
});

send.addEventListener("click", event =>{
    event.preventDefault();

    if(!validateForm(myForm)){
        // const data = {
        //     name : myForm.elements.name.value,
        //     phone : myForm.elements.phone.value,
        //     comment : myForm.elements.comment.value,
        //     to :'my@mail.com'
        // };

        var formData = new FormData(myForm);
        formData.append('to', 'my@mail.com');


        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(formData));
        xhr.addEventListener('load', () => {
         
          console.log(xhr.response);
         
          });
    }
});

function validateForm(form){
    let valid =true;

    if(!validateField(form.elements.name)){
        valid = false;
    }
    if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.comment)){
        valid = false;
    }
}

function validateField(field) {
  if (!field.checkValidity()) {
      field.nextElementSibling.textContent = field.validationMessage;

      return false;
  } else {
      field.nextElementSibling.textContent = '';

      return true;
  }
}
















