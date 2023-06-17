const button = document.querySelector('.header__btn');



const mobileButton = () => {
  const currentValue = button.textContent;
    if (currentValue === 'ON') {
        button.textContent = 'OFF';
    } else {
        button.textContent = 'ON';
        
}
}



button.addEventListener('click', mobileButton);

export default mobileButton;


