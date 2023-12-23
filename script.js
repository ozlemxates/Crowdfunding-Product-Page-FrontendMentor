const showReward1 = document.querySelector('#selectReward1');
const showReward2 = document.querySelector('#selectReward2');
const closeButton = document.querySelector('.close');
const modal = document.getElementById('myModal');
const showModalButtons = document.querySelectorAll('.showReward');
const continueButtons = document.querySelectorAll('.continue-btn');
const gotIt = document.getElementById('gotIt');
const modalSuccess = document.getElementById('mySuccessModal');
const container = document.querySelector('.box-container');
const header = document.querySelector('header');

showModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    container.classList.add('grayscale');
    header.classList.add('grayscale');
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  container.classList.remove('grayscale');
  header.classList.remove('grayscale');
});

continueButtons.forEach (button => {
    button.addEventListener('click', () => {
        modal.style.display = 'none';
        modalSuccess.style.display = 'block';
        container.classList.add('grayscale');
        header.classList.add('grayscale');
    })
});

gotIt.addEventListener('click', () => {
    modalSuccess.style.display = 'none';
    container.classList.remove('grayscale');
    header.classList.remove('grayscale');
});

const bookmark = document.querySelector('.btn.bookmark');
const bookmarkImg = document.querySelector('.bookmark img');

bookmark.addEventListener('click', function() {
  bookmarkImg.classList.toggle('active');
  this.classList.toggle('active');
});

const radioChecks = document.querySelectorAll('.radio-checkmark');
const displayDivs = document.querySelectorAll('.flex-row.display-none');
const checkmark1 = document.getElementsByName('check1');
const checkmark2 = document.getElementsByName('check2');
const checkmark3 = document.getElementsByName('check3');
const checkmark4 = document.getElementsByName('check4');

radioChecks.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    displayDivs.forEach(div => {
      div.style.display = 'none';
    });
    if (radio.checked) {
      displayDivs[index].style.display = 'flex';
    }
  });
});