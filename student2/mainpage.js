/*Navigation bar*/
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    splash.classList.add("display-none");
    splash.remove();
  }, 4000);
});

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

/*Toggle Button (Feedback)*/
function feedBack_visible() {
  var e = document.getElementById('Comments-main');
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}

/*Page Editor*/
function smoothScrolling(){
  window.scroll({top:0, behavior:"smooth"});
} 
/*Comments form */
function myButton(){
  alert("Thank-you, Your form has been submitted successfully !");
}


/* Email Validation*/
/*function validateEmail(){
  const email =document.getElementById("email-label");
  const regx =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

  if(regx.email-label(email)){
    alert("Pleas enter a valid email ID")
    return true
  }
  else{
    alert("Sorry! Incorrect Email ID entered.")
    return false;
  }
}*/

/*Pop-up window
let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}*/

