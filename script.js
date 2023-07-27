const hamburger = document.querySelector('#hamburger')
const ul = document.querySelector('ul');




hamburger.addEventListener("click", () => {
  ul.classList.toggle('visible'); // Toggle the class to show/hide the slide bar

  let ham_child = hamburger.firstElementChild;
  if(ul.classList.contains('visible')){
    ham_child.classList.replace('fa-bars', 'fa-xmark')
  }
  else {
    ham_child.classList.replace('fa-xmark','fa-bars' )
  }
});

// Add an event listener to detect when the transition ends and hide the slide bar
ul.addEventListener("transitionend", () => {
  if (!ul.classList.contains('visible')) {
    ul.classList.add('hidden');
  }

  
});











