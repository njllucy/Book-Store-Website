const darkmode=document.getElementById("dark");
let mainelem=document.getElementById("main");
darkmode.addEventListener("click",()=>{
    mainelem.classList.toggle("dark");
})
let button=document.getElementById("btn");
let list=document.getElementById("list");
button.addEventListener("click",()=>{
    list.classList.toggle("hidden");
})
let read=document.getElementById("readbtn");
read.addEventListener("click",()=>{
    window.location.href="about.html";
})
// function darkmode(){
//   const wasdarkmode = localstorage.getItem('darkmode') === 'true';
//   localstorage.setItem('darkmode', !wasdarkmode);
//   const element = document.body;
//   element.classList.toggle('')
// }
// Function to toggle dark mode
// function darkmode() {
//     document.body.classList.toggle('dark-theme');
    
//     // Save the user's preference in localStorage
//     if (document.body.classList.contains('dark-theme')) {
//         localStorage.setItem('theme', 'dark');
//     } else {
//         localStorage.setItem('theme', 'light');
//     }
// }

// // Apply saved theme on page load
// window.onload = function() {
//     const theme = localStorage.getItem('theme');
//     if (theme === 'dark') {
//         document.body.classList.add('dark-theme');
//     }
// };
