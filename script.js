
const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
if(menuBtn) menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const form=document.getElementById("contactForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    document.getElementById("formMessage").textContent="Thanks! Your message form is ready for a backend/email connection.";
    form.reset();
  });
}
