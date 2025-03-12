
const button = document.querySelector('#awesomeButton');
const result = document.querySelector('#result');


button.addEventListener('click', () => {

    result.innerHTML = '';

  
    for (let i = 0; i < 10; i++) {
        const message = document.createElement('p');
        message.textContent = 'I am awesome!';
        result.appendChild(message);
    }
});
