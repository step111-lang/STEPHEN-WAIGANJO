const contact=document.querySelector("#contact");
const home=document.querySelector("#home");
const rnav=document.querySelector(".rnav");
const lnav=document.querySelector(".lnav");
const cnav=document.querySelector(".cnav");
const chatt=document.querySelector("#chatt");
const servicecont=document.querySelector(".servicecont");
const service=document.querySelector("#service");
const about=document.querySelector("#about");
const homecont=document.querySelector(".homecont");
const aboutcont=document.querySelector(".aboutcont");
const contantcont=document.querySelector(".contantcont");
let clicked=true;
contact.addEventListener("click",()=>{
contantcont.classList.toggle("contantpop");
contact.classList.toggle("conttoggle");
});
chatt.addEventListener("click",()=>{
contantcont.classList.toggle("contantpop");
contact.classList.toggle("conttoggle");
});
home.addEventListener("click",()=>{
homecont.style.display="flex";
aboutcont.style.display="none";
servicecont.style.display="none";
home.classList.add("navadd");
about.classList.remove("navadd");
contact.classList.remove("conttoggle");
service.classList.remove("navadd");
clicked=false;
lnav.style.width="40%";
rnav.style.width="20%";
cnav.style.width="20%";
contantcont.classList.remove("contantpop");
});
about.addEventListener("click",()=>{
  homecont.style.display="none";
aboutcont.style.display="flex";
servicecont.style.display="none";
clicked=false;

rnav.style.width="20%";
lnav.style.width="20%";
cnav.style.width="40%";
about.classList.add("navadd");
home.classList.remove("navadd");
contact.classList.remove("conttoggle");
contantcont.classList.remove("contantpop");
service.classList.remove("navadd");
});
service.addEventListener("click",()=>{
 about.classList.remove("navadd");
home.classList.remove("navadd");
service.classList.add("navadd");
contact.classList.remove("conttoggle");
contantcont.classList.remove("contantpop");
homecont.style.display="none";
aboutcont.style.display="none";
servicecont.style.display="flex";
rnav.style.width="40%";
lnav.style.width="20%";
cnav.style.width="20%";
});
    if(clicked){
    lnav.style.width="40%";
    rnav.style.width="15%";

    home.classList.add("navadd");
    

   }else{
    home.classList.remove("clicked");

   }
    
