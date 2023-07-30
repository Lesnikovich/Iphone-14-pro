const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.menu-item');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      nav.classList.remove('menu-open');
    });
});
  
  
  
  
  
  