const textElement = document.querySelector(".typing-text");
const text = "Developer";
const typingSpeed = 200; // Speed for typing
const deletingSpeed = 200; // Speed for deleting
const delay = 1000; // Delay before deleting/typing again

let index = 0;
let isDeleting = false;

function typeText() {
  // Determine the current text length based on typing/deleting state
  const currentText = isDeleting
    ? text.substring(0, index--)
    : text.substring(0, index++);

  textElement.textContent = currentText;

  // Adjust speed and state transitions
  if (!isDeleting && index === text.length) {
    setTimeout(() => (isDeleting = true), delay); // Pause before deleting
  } else if (isDeleting && index === 0) {
    setTimeout(() => (isDeleting = false), delay); // Pause before re-typing
  }

  // Recursive call for continuous effect
  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeText, speed);
}

// Start the animation
typeText();
