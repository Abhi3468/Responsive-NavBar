const Togglebtn = document.querySelector('.Togglebtn');
const TogglebtnIcon = document.querySelector('.Togglebtn i');
const DropdownMenu = document.querySelector('.DropdownMenu');

Togglebtn.onclick  = function () {
DropdownMenu.classList.toggle('open')
const isOpen = DropdownMenu.classList.contains('open')


TogglebtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'
 
}