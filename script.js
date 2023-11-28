const showReward1 = document.querySelector('#selectReward1');
const showReward2 = document.querySelector('#selectReward2');
const closeButton = document.querySelector('.close');
const modal = document.getElementById('myModal');
const showModalButtons = document.querySelectorAll('.showReward');
const continueButtons = document.querySelectorAll('.continue-btn');
const gotIt = document.getElementById('gotIt');
const modalSuccess = document.getElementById('mySuccessModal');

showModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

continueButtons.forEach (button => {
    button.addEventListener('click', () => {
        modalSuccess.style.display = 'block';
    })
});

gotIt.addEventListener('click', () => {
    modal.style.display = 'none';
});