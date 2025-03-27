const form = document.querySelector('#shelterForm');
const input = document.querySelector('#cats');
const list = document.querySelector('#catNames');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    const catName = input.value;
    const newList = document.createElement('li');
    newList.innerText = catName;
    list.append(newList);
    input.value = '';
})