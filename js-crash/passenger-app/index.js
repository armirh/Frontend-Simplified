//document.getElementById("count-el").innerText = 5

// initialize the count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function decrement() {
    count -= 1;
    countEl.innerHTML = count
}

function resetValue(){
    count = 0
    countEl.innerHTML = count
}

function save() {
    countEl.innerHTML = count
    alert(count)
}