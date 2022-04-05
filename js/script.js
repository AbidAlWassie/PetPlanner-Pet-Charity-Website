// window.onload = function() {

  // window.addEventListener("scroll", function() {
  //   const navbar = document.getElementById("navbar");
  //   navbar.classList.toggle("sticky", window.scrollY > 0);
  // });

  
  function optToggle() {
    const optMenu = document.querySelector("#optMenu");
    optMenu.classList.toggle("hidden");
  }
  
  function navToggle() {
    const navMenu = document.querySelector("#navMenu");
    navMenu.classList.toggle("fh");
  }

  function hideTxt() {
    const notice1 = document.getElementById("notice1");
    notice1.classList.add("hidden");
  }
// }
