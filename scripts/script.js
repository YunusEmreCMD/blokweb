// JavaScript Document

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var deButton = document.getElementById("hamburger-menu");
//
////function openMenu() {
////  document.body.classList.toggle("menuOpen");
////}
////
////deButton.addEventListener("click", openMenu);
//
//deButton.addEventListener("click", function() {
//  document.body.classList.toggle("menuOpen");
//});
//
//console.log("hoi");

var deButton = document.getElementById("hamburger-menu");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
}
