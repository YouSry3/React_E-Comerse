let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let btnPopup = document.querySelector('#btnLoginpage');
let iconClose = document.querySelector('.icons-close');
let btnsCloseLoginpage = document.querySelector('.btn');
let btnsCloseRegisterinpage = document.querySelector('#btnRegister');
let sectionLoginpage = document.querySelector('.section');
let Website = document.querySelector('#root');
const style = document.createElement('style');
let veiwourwork = document.querySelector('#veiwourwork');


// display none when click on Login
let decomentation = document.querySelector('.decomentation');


registerLink.addEventListener('click',()=>{
  wrapper.classList.add('active');
});



loginLink.addEventListener('click',()=>{
  wrapper.classList.remove('active');
});

// bottom Login header =============

btnPopup.addEventListener('click',()=>{
//  documentation Team Memebers

  decomentation.classList.add('none');

  wrapper.classList.add('active-popup');

});
veiwourwork.addEventListener('click',()=>{
//  documentation Team Memebers

  decomentation.classList.add('none');

  wrapper.classList.add('active-popup');

});


// remove to do Login 
iconClose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
  decomentation.classList.remove('none');
});

// .colse in css display none on section Login
btnsCloseLoginpage.addEventListener('click',()=>{
  sectionLoginpage.classList.add('close');
  style.innerHTML = `
  #root {
    display: block;

  }
  section {
    background: none;
  }
`;
document.head.appendChild(style);
});

// btn Register 
btnsCloseRegisterinpage.addEventListener('click',()=>{
  sectionLoginpage.classList.add('close');
  style.innerHTML = `
  #root {
    display: block;

  }
  section {
    background: none;
  }
`;
document.head.appendChild(style);
});