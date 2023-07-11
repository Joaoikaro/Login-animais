const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('span.material-symbols-outlined');

registerLink.addEventListener('click', ()=> {
     wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
     wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
     wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
     wrapper.classList.remove('active-popup');
});


window.alert('Essa pagina de login é somente um teste desenvolvido por João Íkaro no dia 05/06/2023, portanto seus dados não serão enviados para nenhum lugar, teste a pagina me mande sua opinião clicando na aba contato sobre oque é possivel melhorar e deixar mais atrativo visualmente e funcional. As funçoes: Home, sobre e serviços estão desativados por motivos de teste, desde já agradeço a sua compreensão')