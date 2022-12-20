
const sdbar=document.querySelector(".sidebar");
const del=document.querySelector(".del");
const actbtn=document.querySelector(".actbtn");
const about=document.querySelector("#about");
const home=document.querySelector("#home");
const homec=document.querySelector(".homec");

const homesidebar=document.querySelector(".homesidebar");
const contact=document.querySelector("#contact");
const service=document.querySelector("#service");
const aboutc=document.querySelector(".aboutc");
const container=document.querySelector(".container");
const contfollow=document.querySelector(".cont-follow");
actbtn.addEventListener("click",()=>{
 sdbar.classList.toggle("sdbart");
 
});
del.addEventListener("click",()=>{
 sdbar.classList.toggle("sdbart");
});    
about.addEventListener("click",()=>{
 aboutc.scrollIntoView();
});    
contact.addEventListener("click",()=>{
 document.documentElement.scrollBottom="0";
});    
service.addEventListener("click",()=>{
 container.scrollIntoView("-20px");
});    
contact.addEventListener("click",()=>{
 contfollow.scrollIntoView()-"20px";
});    
home.addEventListener("click",()=>{
 homec.scrollIntoView();
});    
  
