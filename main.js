
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu'), nav=document.querySelector('.links');
 if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});}
 document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
 const y=document.querySelector('[data-year]'); if(y)y.textContent=new Date().getFullYear();
});
