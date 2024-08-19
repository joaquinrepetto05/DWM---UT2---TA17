const p = document.getElementById('parrafo');
const btn = document.getElementById('incButton');
const spn = document.getElementById('numero');

btn.addEventListener('click', () => {
    let currentNumber = parseInt(spn.innerHTML);
    spn.innerHTML = currentNumber + 1;
});