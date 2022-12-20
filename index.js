
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

service.addEventListener("click",()=>{
 container.scrollIntoView();
});    
contact.addEventListener("click",()=>{
 contfollow.scrollIntoView();
});    
home.addEventListener("click",()=>{
 homec.scrollIntoView();
});    
  
