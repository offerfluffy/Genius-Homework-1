const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-button-open');
const modalBtnClose = document.querySelector('.modal__button_close');

const toggleModal = () => modal.classList.toggle('backdrop--is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);