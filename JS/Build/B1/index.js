let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment(){
    count += 2;
    countEl.innerText = count;
}

function save(){
    saveEl.textContent += count + " - ";
    console.log(count);
    count = 0;
    countEl.textContent = count;
}

// function resetCount(){
//     count = 0;
//     countEl.innerText = count;
//     saveEl.innerText = saveEl.innerText;
// }