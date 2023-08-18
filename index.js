
      const arrow = document.querySelector("#arrow"); 
      const treadmore = document.querySelector("#treadmore");
      const contentcovert = document.querySelector(".contentcovert");
      const freadmore = document.querySelector("#freadmore");
      const contentcoverf = document.querySelector(".contentcoverf");
      const sreadmore = document.querySelector("#sreadmore");
      const contentcovers = document.querySelector(".contentcovers");
      const openbar = document.querySelector(".openbar");
      const sml = document.querySelector(".smll");
      const homec = document.querySelector(".homec");
      const aboutc = document.querySelector(".aboutc");
      const servicec = document.querySelector(".servicec");
      const contactc = document.querySelector(".contantc");
      const navbtns = document.querySelector(".navbtns");
      const navbtns_smart = document.querySelector(".navbtns_smart");
      const home = document.querySelector(".home");
      const about = document.querySelector(".about");
      const service = document.querySelector(".service");
      const contact = document.querySelector(".contant");
      const homecont = document.querySelector(".homecont");
      const aboutcont = document.querySelector(".aboutcont");
      const servicecont = document.querySelector(".servicecont");
      const contactcont = document.querySelector(".contactcont");
      const whatsup = document.querySelector("#whatsupp");
      const sendbtn=document.querySelector(".sendbtn");
      const inpt=document.querySelector(".textarea");
      const feedback=document.querySelector(".feedback");
      /* navbtns_smart.addEventListener("click", () => {
        navbtns_smart.classList.add("navbtns-smart-nav");
      });*/
      about.addEventListener("click", () => {
        aboutcont.scrollIntoView();
        about.classList.add("commontab");
        service.classList.remove("commontab");
        contact.classList.remove("commontab");
        home.classList.remove("commontab");
      });
      service.addEventListener("click", () => {
        servicecont.scrollIntoView();
        about.classList.remove("commontab");
        service.classList.add("commontab");
        contact.classList.remove("commontab");
        home.classList.remove("commontab");
      });
      contact.addEventListener("click", () => {
        contactcont.scrollIntoView();
        about.classList.remove("commontab");
        service.classList.remove("commontab");
        contact.classList.add("commontab");
        home.classList.remove("commontab");
      });
      home.addEventListener("click", () => {
        homecont.scrollIntoView();
        about.classList.remove("commontab");
        service.classList.remove("commontab");
        contact.classList.remove("commontab");
        home.classList.add("commontab");
      });
      aboutc.addEventListener("click", () => {
        aboutcont.scrollIntoView();
        sml.classList.remove("clicked");
        openbar.innerHTML = `<i class="fa fa-bars"></i>`;
        clicked = false;
      });
      servicec.addEventListener("click", () => {
        servicecont.scrollIntoView();
        sml.classList.remove("clicked");
        openbar.innerHTML = `<i class="fa fa-bars"></i>`;
        clicked = false;
      });
      contactc.addEventListener("click", () => {
        contactcont.scrollIntoView();
        sml.classList.remove("clicked");
        openbar.innerHTML = `<i class="fa fa-bars"></i>`;

        clicked = false;
      });
      homec.addEventListener("click", () => {
        homecont.scrollIntoView();
        sml.classList.remove("clicked");
        openbar.innerHTML = `<i class="fa fa-bars"></i>`;
        clicked = false;
      });
      let clicked = false;
      openbar.addEventListener("click", () => {
        if (clicked) {
          sml.classList.remove("clicked");
          openbar.innerHTML = `<i class="fa fa-bars"></i>`;
          clicked = false;
        } else {
          sml.classList.add("clicked");
          openbar.innerHTML = `<i class="fa fa-close"></i>`;
          clicked = true;
        }
      });
      let homepgland = true;
      if (homepgland) {
        about.classList.remove("commontab");
        service.classList.remove("commontab");
        contact.classList.remove("commontab");
        home.classList.add("commontab");
      }
      let clickedmores = false;
      sreadmore.addEventListener("click", () => {
        if (clickedmores) {
          clickedmores = false;
          contentcovers.classList.add("clickedreadmores");
        } else {
          clickedmores = true;
          contentcovers.classList.remove("clickedreadmores");
        }
      });

      let clickedmore = false;
      freadmore.addEventListener("click", () => {
        if (clickedmore) {
          clickedmore = false;
          contentcoverf.classList.add("clickedreadmore");
        } else {
          clickedmore = true;
          contentcoverf.classList.remove("clickedreadmore");
        }
      });
      let clickedmoret = false;
      treadmore.addEventListener("click", () => {
        if (clickedmoret) {
          clickedmoret = false;
          contentcovert.classList.add("clickedreadmoret");
        } else {
          clickedmoret = true;
          contentcovert.classList.remove("clickedreadmoret");
        }
      });
      sendbtn.addEventListener("click", (e) => {
        if(inpt.length!=""){
          e.preventDefault();
        }
        let mtt=document.createElement("div");
        mtt.setAttribute("class","feeds");
        mtt.innerHTML=`user : ${inpt.value}`;
        feedback.appendChild(mtt);
        inpt.value='';
      });
 
