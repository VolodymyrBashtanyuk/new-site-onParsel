const button = document.querySelector('.header__btn');


// 
const mobileButton = (event) => {
    // console.log(event.currentTarget)
//   const currentValue = button.textContent;
    // if (currentValue === 'ON') {
        // button.textContent = 'OFF';
    // } else {
        // button.textContent = 'ON';
        // 
// }
}



button.addEventListener('click', (e) => {
    let iconElement = e.currentTarget.childNodes[1].childNodes[1];
   iconElement.getAttribute('href') === '/mobile.676bdaab.svg#icon-menu' ? iconElement.setAttribute('href', '/mobile.676bdaab.svg#icon-close') : iconElement.setAttribute('href', '/mobile.676bdaab.svg#icon-menu'); 
   
});

export default mobileButton;


