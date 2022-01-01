window.onload = function() {
  

  const optBtn = document.querySelector("#optBtn");
  
  optMenu.addEventListener('click', optToggle);
  
  function optToggle() {
    const optMenu = document.querySelector("#dropdownMenu");
    optMenu.classList.toggle("hidden");
  }
}