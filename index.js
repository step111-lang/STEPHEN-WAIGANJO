

const sdbar=document.querySelector(".sidebar");
const del=document.querySelector(".del");
const actbtn=document.querySelector(".actbtn");
const about=document.querySelector("#about");
const home=document.querySelector("#home");
const homec=document.querySelector(".homec");
const misd=document.querySelector(".mesd");

const navbar=document.querySelector(".navbar");

const homesidebar=document.querySelector(".homesidebar");
const contact=document.querySelector("#contact");
const service=document.querySelector("#service");
const aboutc=document.querySelector(".aboutc");
const backt=document.querySelector(".backt");
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
 navbar.scrollIntoView();
});    
backt.addEventListener("click",()=>{
 navbar.scrollIntoView();
});   
const bt=document.querySelector(".bt");
bt.addEventListener("pointerdown",()=>{
const i=Math.floor(Math.random()*200)+1;
const j=Math.floor(Math.random()*200)+1;
bt.style.top=i+"px";
bt.style.left=i+"px";

});
bt.addEventListener("mouseover",()=>{
const t=Math.floor(Math.random()*200)+1;
const b=Math.floor(Math.random()*200)+1;
bt.style.top=t+"px";
bt.style.left=b+"px";
});

   
    
