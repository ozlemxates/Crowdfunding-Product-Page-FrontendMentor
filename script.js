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

const checkmarks = document.querySelectorAll('.check-on');
const displayDivs = document.querySelectorAll('.flex-row.display-none');

checkmarks.forEach((checkmark, index) => {
  checkmark.addEventListener('click', function() {
    if (!this.classList.contains('active')) {
      checkmarks.forEach(mark => mark.classList.remove('active'));
      displayDivs.forEach(div => div.style.display = 'none');
    }
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      displayDivs[index].style.display = 'flex';
    } else {
      displayDivs[index].style.display = 'none';
    }
  });
});

const scrollButton = document.getElementById('scrollButton');
if (scrollButton) {
  scrollButton.addEventListener('click', () => {
    const scrollSection = document.getElementById('scrollSection');
    if (scrollSection) {
      const offsetTop = scrollSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  });
}

const pledgeInputs = document.querySelectorAll('.form input[type="number"]');

pledgeInputs.forEach(input => {
  input.addEventListener('input', function() {
    const inputValue = parseInt(this.value);
    if (inputValue < 0) {
      this.value = '';
    }
  });
});