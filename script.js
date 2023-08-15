'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModel = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');
for (let btnOpen of btnsOpenModel) {
  btnOpen.addEventListener('click', function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
}
const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};
btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
