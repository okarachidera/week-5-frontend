let mybutton = document.getElementById("myBtn");

window.onscroll = () =>{scrollFunction()};

let scrollFunction=()=>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) mybutton.style.display = "block";
  else mybutton.style.display = "none";
  
}

// When the user clicks on the button, scroll to the top of the document
const topFunction=() =>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let myVar;
const myFunction=()=> myVar = setTimeout(showPage, 3000);


const showPage=()=> {
document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

