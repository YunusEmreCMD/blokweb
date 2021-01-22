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

//https://codepen.io/shooft/pen/jOMOroZ




var deButton = document.getElementById("hamburger-menu");

deButton.addEventListener("click", openMenu);

function openMenu() {
  document.body.classList.toggle("menuOpen");
}


// CHECK IF BODY HAS CLASS (IPHONE)

var body = document.querySelector("body");

if (body.classList.contains("iphone")) {

  // VERANDEREN VAN KLEUR IPHONE 12 PRO


  var iphone12ProGrafiet = document.getElementById("iphone12-pro-grafiet");
  var iphone12ProBlauw = document.getElementById("iphone12-pro-blauw");
  var iphone12ProGoud = document.getElementById("iphone12-pro-goud");
  var iphone12ProZilver = document.getElementById("iphone12-pro-zilver");


  // Verander iPhone 12 pro kleur naar: grafiet

  function iphone12ProGrafietVeranderen() {

    document.getElementById("iphone12-pro-foto").src = "images/verschillende-kleuren/iphone12-pro-grafiet.jpg";

  }
  iphone12ProGrafiet.addEventListener("click", iphone12ProGrafietVeranderen);

  // Verander iPhone 12 pro kleur naar: blauw

  function iphone12ProBlauwVeranderen() {

    document.getElementById("iphone12-pro-foto").src = "images/verschillende-kleuren/iphone12-pro-blauw.jpg";

  }
  iphone12ProBlauw.addEventListener("click", iphone12ProBlauwVeranderen);



  // Verander iPhone 12 pro kleur naar: goud

  function iphone12ProGoudVeranderen() {

    document.getElementById("iphone12-pro-foto").src = "images/verschillende-kleuren/iphone12-pro-goud.jpg";

  }
  iphone12ProGoud.addEventListener("click", iphone12ProGoudVeranderen);



  // Verander iPhone 12 pro kleur naar: zilver

  function iphone12ProZilverVeranderen() {

    document.getElementById("iphone12-pro-foto").src = "images/verschillende-kleuren/iphone12-pro-zilver.jpg";

  }
  iphone12ProZilver.addEventListener("click", iphone12ProZilverVeranderen);

  //
  //
  // VERANDEREN VAN KLEUR IPHONE 12

  var iphone12Blauw = document.getElementById("iphone12-blauw");
  var iphone12Groen = document.getElementById("iphone12-groen");
  var iphone12Rood = document.getElementById("iphone12-rood");
  var iphone12Wit = document.getElementById("iphone12-wit");
  var iphone12Zwart = document.getElementById("iphone12-zwart");



  // Verander iPhone 12 kleur naar: blauw

  function iphone12BlauwVeranderen() {

    document.getElementById("iphone12-foto").src = "images/verschillende-kleuren/iphone12-blauw.jpg";

  }
  iphone12Blauw.addEventListener("click", iphone12BlauwVeranderen);



  // Verander iPhone 12 kleur naar: groen

  function iphone12GroenVeranderen() {

    document.getElementById("iphone12-foto").src = "images/verschillende-kleuren/iphone12-groen.jpg";

  }
  iphone12Groen.addEventListener("click", iphone12GroenVeranderen);



  // Verander iPhone 12 kleur naar: rood

  function iphone12RoodVeranderen() {

    document.getElementById("iphone12-foto").src = "images/verschillende-kleuren/iphone12-rood.jpg";

  }
  iphone12Rood.addEventListener("click", iphone12RoodVeranderen);



  // Verander iPhone 12 kleur naar: wit

  function iphone12WitVeranderen() {

    document.getElementById("iphone12-foto").src = "images/verschillende-kleuren/iphone12-wit.jpg";

  }
  iphone12Wit.addEventListener("click", iphone12WitVeranderen);



  // Verander iPhone 12 kleur naar: zwart

  function iphone12ZwartVeranderen() {

    document.getElementById("iphone12-foto").src = "images/verschillende-kleuren/iphone12-zwart.jpg";

  }
  iphone12Zwart.addEventListener("click", iphone12ZwartVeranderen);

  //
  //
  // VERANDEREN VAN KLEUR IPHONE 11 PRO

  var iphone11ProDonkergroen = document.getElementById("iphone11-pro-donkergroen");
  var iphone11ProZilver = document.getElementById("iphone11-pro-zilver");
  var iphone11ProSpacegray = document.getElementById("iphone11-pro-spacegray");
  var iphone11ProGoud = document.getElementById("iphone11-pro-goud");


  // Verander iPhone 11 pro kleur naar: donkergroen

  function iphone11ProDonkergroenVeranderen() {

    document.getElementById("iphone11-pro-foto").src = "images/verschillende-kleuren/iphone11-pro-donkergroen.jpg";

  }
  iphone11ProDonkergroen.addEventListener("click", iphone11ProDonkergroenVeranderen);



  // Verander iPhone 11 pro kleur naar: zilver

  function iphone11ProZilverVeranderen() {

    document.getElementById("iphone11-pro-foto").src = "images/verschillende-kleuren/iphone11-pro-zilver.jpg";

  }
  iphone11ProZilver.addEventListener("click", iphone11ProZilverVeranderen);



  // Verander iPhone 11 pro kleur naar: spacegray

  function iphone11ProSpacegrayVeranderen() {

    document.getElementById("iphone11-pro-foto").src = "images/verschillende-kleuren/iphone11-pro-spacegray.jpg";

  }
  iphone11ProSpacegray.addEventListener("click", iphone11ProSpacegrayVeranderen);



  // Verander iPhone 11 pro kleur naar: goud

  function iphone11ProGoudVeranderen() {

    document.getElementById("iphone11-pro-foto").src = "images/verschillende-kleuren/iphone11-pro-goud.jpg";

  }
  iphone11ProGoud.addEventListener("click", iphone11ProGoudVeranderen);


  //
  //
  // VERANDEREN VAN KLEUR IPHONE 11

  var iphone11Paars = document.getElementById("iphone11-paars");
  var iphone11Geel = document.getElementById("iphone11-geel");
  var iphone11Groen = document.getElementById("iphone11-groen");
  var iphone11Zwart = document.getElementById("iphone11-zwart");
  var iphone11Wit = document.getElementById("iphone11-wit");
  var iphone11Rood = document.getElementById("iphone11-rood");



  // Verander iPhone 11 kleur naar: paars

  function iphone12PaarsVeranderen() {

    document.getElementById("iphone11-foto").src = "images/verschillende-kleuren/iphone11-paars.jpg";

  }
  iphone11Paars.addEventListener("click", iphone12PaarsVeranderen);



  // Verander iPhone 11 kleur naar: geel

  function iphone11GeelVeranderen() {

    document.getElementById("iphone11-foto").src = "images/verschillende-kleuren/iphone11-geel.jpg";

  }
  iphone11Geel.addEventListener("click", iphone11GeelVeranderen);



  // Verander iPhone 11 kleur naar: groen

  function iphone11GroenVeranderen() {

    document.getElementById("iphone11-foto").src = "images/verschillende-kleuren/iphone11-groen.jpg";

  }
  iphone11Groen.addEventListener("click", iphone11GroenVeranderen);



  // Verander iPhone 11 kleur naar: zwart

  function iphone11ZwartVeranderen() {

    document.getElementById("iphone11-foto").src = "images/verschillende-kleuren/iphone11-zwart.jpg";

  }
  iphone11Zwart.addEventListener("click", iphone11ZwartVeranderen);



  // Verander iPhone 11 kleur naar: wit

  function iphone11WitVeranderen() {

    document.getElementById("iphone11-foto").src = "images/verschillende-kleuren/iphone11-wit.jpg";

  }
  iphone11Wit.addEventListener("click", iphone11WitVeranderen);



  // Verander iPhone 11 kleur naar: rood

  function iphone11RoodVeranderen() {

    document.getElementById("iphone11-foto").src = "images/verschillende-kleuren/iphone11-rood.jpg";

  }
  iphone11Rood.addEventListener("click", iphone11RoodVeranderen);

}

//
//
// MOBILE FOOTER



// Shop and Learn

var ShopAndLearn = document.getElementById("shop-and-learn");

ShopAndLearn.addEventListener("click", openShopAndLearn);

function openShopAndLearn() {
  var shopAndLearnContent = document.querySelector("#shop-and-learn ul");
  shopAndLearnContent.classList.toggle("active");

  var shopAndLearnTitel = document.querySelector("#shop-and-learn h3");
  shopAndLearnTitel.classList.toggle("active");
}


// Services

var services = document.getElementById("services");
services.addEventListener("click", openServices);

function openServices() {
  var servicesContent = document.querySelector("#services ul");
  servicesContent.classList.toggle("active");

  var servicesTitel = document.querySelector("#services h3");
  servicesTitel.classList.toggle("active");
}


// Account

var account = document.getElementById("account");
account.addEventListener("click", openAccount);

function openAccount() {
  var accountContent = document.querySelector("#account ul");
  accountContent.classList.toggle("active");

  var accountTitel = document.querySelector("#account h3");
  accountTitel.classList.toggle("active");
}


// Apple Store

var appleStore = document.getElementById("apple-store");
appleStore.addEventListener("click", openAppleStore);
function openAppleStore() {
  var appleStoreContent = document.querySelector("#apple-store ul");
  appleStoreContent.classList.toggle("active");

  var appleStoreTitel = document.querySelector("#apple-store h3");
  appleStoreTitel.classList.toggle("active");
}


// For Business

var forBusiness = document.getElementById("for-business");
forBusiness.addEventListener("click", openForBusiness);
function openForBusiness() {
  var forBusinessContent = document.querySelector("#for-business ul");
  forBusinessContent.classList.toggle("active");

  var forBusinessTitel = document.querySelector("#for-business h3");
  forBusinessTitel.classList.toggle("active");
}


// For Education

var forEducation = document.getElementById("for-education");
forEducation.addEventListener("click", openForEducation);
function openForEducation() {
  var forEducationContent = document.querySelector("#for-education ul");
  forEducationContent.classList.toggle("active");

  var forEducationTitel = document.querySelector("#for-education h3");
  forEducationTitel.classList.toggle("active");
}


// For Government

var forGovernment = document.getElementById("for-government");
forGovernment.addEventListener("click", openForGovernment);
function openForGovernment() {
  var forGovernmentContent = document.querySelector("#for-government ul");
  forGovernmentContent.classList.toggle("active");

  var forGovernmentTitel = document.querySelector("#for-government h3");
  forGovernmentTitel.classList.toggle("active");
}


// Apple Values

var appleValues = document.getElementById("apple-values");
appleValues.addEventListener("click", openAppleValues);
function openAppleValues() {
  var appleValuesContent = document.querySelector("#apple-values ul");
  appleValuesContent.classList.toggle("active");

  var appleValuesTitel = document.querySelector("#apple-values h3");
  appleValuesTitel.classList.toggle("active");
}


// About Apple

var aboutApple = document.getElementById("about-apple");
aboutApple.addEventListener("click", openAboutApple);
function openAboutApple() {
  var aboutAppleContent = document.querySelector("#about-apple ul");
  aboutAppleContent.classList.toggle("active");

  var aboutAppleTitel = document.querySelector("#about-apple h3");
  aboutAppleTitel.classList.toggle("active");
}


console.log("hoi");
