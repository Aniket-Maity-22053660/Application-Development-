// Object to map each key to its corresponding sound file
const soundMap = {
    'w': './Sounds/crash.mp3',
    'a': './Sounds/kick-bass.mp3',
    's': '.LAB5/Sounds/snare.mp3/Sounds/snare.mp3',
    'd': './Sounds/tom-1.mp3',
    'j': './Sounds/tom-2.mp3',
    'k': './Sounds/tom-3.mp3',
    'l': './Sounds/tom-4.mp3'
  };
  
  // Function to play sound when a key/button is pressed
  function playSound(key) {
    const sound = new Audio(soundMap[key]);
    sound.play();
  }
  
  // Add event listeners to buttons for click and keyboard presses
  document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function () {
      const key = this.textContent.toLowerCase();
      playSound(key);
      animateButton(key);
    });
  });
  
  // Add event listener for keyboard presses
  document.addEventListener('keydown', function (event) {
    const key = event.key.toLowerCase();
    if (soundMap[key]) {
      playSound(key);
      animateButton(key);
    }
  });
  
  // Function to animate button on press
  function animateButton(key) {
    const button = document.querySelector(`.${key}`);
    button.classList.add('pressed');
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 200);
  }