
window.onload = () => {
  var submitBtn = document.getElementById('register');

  submitBtn.addEventListener('click',(e) => {
    var form = e.target.form;
    e.preventDefault();
    var formDetails = $(form).serialize();
    // var formDetails = serialize(form);
    console.log('register', formDetails);
  })
}

function serialize(domForm) {
  var obj = {};
  for (var i = 0; i < domForm.length; i++) {
    var el = domForm[i];
    if(el.name && el.value) {
      if(el.type === 'checkbox'){
        obj[el.name] = Boolean(el.checked)
      } else {
        obj[el.name] = el.value;
      }
    }
  }

  return obj;
}
