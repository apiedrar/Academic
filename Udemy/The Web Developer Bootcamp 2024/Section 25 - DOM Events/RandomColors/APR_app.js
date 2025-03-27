const h1 = document.querySelector('h1');
const cntnr = document.querySelector('#container');
const bttn = document.querySelector('button');

h1.style.textAlign = 'center';
/* mistake #3: attempting to align the button itself as if it was the same type of element as the h1 */
cntnr.style.textAlign = 'center';

bttn.addEventListener('click', () => {
    /* mistake #1: defining variables below as fucntions
    e.g.: let r = (random) => (Math.floor(Math.random() * 256))*/
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    /* mistake #2: background.classList.toggle('backgroundColor', rgb(rgb1, rgb2, rgb3));*/
    h1.innerText = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})