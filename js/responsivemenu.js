function toggle() {
  //declare variable
  let menu = document.getElementById("side-menu");
  //toggle code
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
document.getElementById("ham-button") addEventListener("click, toggle")




// function mobileMenu() {
//   var node = document.getElementById("sidenav");
//   document.getElementById("menu-display").appendChild(node);
//   toggle();
// }
//
// function toggle() {
//   var x = document.getElementById("menu-display");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   }
//   else {
//     x.style.display = "block";
//   }
// }
// document.getElementById("menu-link").addEventListener("click", mobileMenu);
// //
// function mobileMenu() {
//   var node = document.getElementById("sidenav");
//   document.getElementById("menu-display").appendChild(node);
//   toggle();
// }
//
//
// //
//
// function toggle() {
//   var x = document.getElementById("menu-display");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   }
//   else {
//     x.style.display = "block";
//   }
// }
