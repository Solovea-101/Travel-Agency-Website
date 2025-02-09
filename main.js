 const menuBtn = document.getElementById("menu-btn");
 const navLinks = document.getElementById("nav-links");
 const menuBtnIcon = menuBtn.querySelector("i");
 const colorModal = document.getElementById("colorModal");
 const themeChangeBtn = document.querySelector(".theme__change");
 const closeModalBtn = document.getElementById("closeModal");
 const colorPicker = document.getElementById("colorPicker");
 const applyColorBtn = document.getElementById("applyColor");

 // Function to set the primary color
function setPrimaryColor(color) {
  document.documentElement.style.setProperty('--primary-color', color);
}

// Retrieve the saved color from localStorage and apply it
const savedColor = localStorage.getItem('primaryColor');
if (savedColor) {
    setPrimaryColor(savedColor); // Apply saved color
    colorPicker.value = savedColor; // Sync color picker with saved color
}

// Menu Button Functionality
 menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" : "ri-menu-line");
 });

 navLinks.addEventListener("click", (e) => {
   if(e.target.tagName === "A"){
      navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
   }
    
 });

 //Modal functionality for theme color change
 themeChangeBtn.addEventListener("click", () => {
  colorModal.style.display = "block"; //Show Modal
 });

 closeModalBtn.addEventListener("click", () => {
  colorModal.style.display = "none"; //Hide Modal
 });

 //Close the Modal if the user clicks anywhere outside the modal content
 window.addEventListener("click", (e) => {
  if (e.target === colorModal) {
    colorModal.style.display = "none"; //Hide Modal when clicking outside
  }
 });

 //Apply the selected color when the "Apply" button is clicked
 applyColorBtn.addEventListener("click", () => {
  const newColor = colorPicker.value; //Get the color selected by the user
  document.documentElement.style.setProperty('--primary-color', newColor); //Change the Primary color
  setPrimaryColor(newColor); // Change the color
  localStorage.setItem('primaryColor', newColor); //Save the new color to localStorage
  colorModal.style.display = "none"; //Close modal after applying color
 });

 //Ensure the modal class closes if the escape key is pressed
 window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    colorModal.style.display = "none";
   } //Close modal when pressing escape key
 });


 //Initialize ScrollReveal
 const sr = ScrollReveal();

 sr.reveal(".header__image img", {
   distance: "50px",
   origin:"right",
   duration: 1000,
 });

 sr.reveal(".header__image h1", {
   distance: "50px",
   origin:"right",
   duration: 1000,
   delay: 500,
 });

 sr.reveal(".header__image p", {
   distance: "50px",
   origin:"right",
   duration: 1000,
   delay: 1000,
 });

 sr.reveal(".header__image form", {
   distance: "50px",
   origin:"right",
   duration: 1000,
   delay: 1500,
 });

 sr.reveal(".header__image .bar", {
   distance: "50px",
   origin:"right",
   duration: 1000,
   delay: 2000,
 });

 sr.reveal(".header__image__card", {
   distance: "50px",
   origin:"right",
   duration: 1000,
   interval: 500,
   delay: 2500,
 });

