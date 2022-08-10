const form = document.querySelector('.form-arrival-block');
const formBut = document.querySelector('.btn-interesting');


function openForm() {
  formBut.addEventListener('click', function () {
    form.classList.toggle('visible-hidden');

  })
};

openForm();