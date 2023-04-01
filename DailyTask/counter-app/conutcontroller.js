window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('add').addEventListener('click',computp);
    document.getElementById('sub').addEventListener('click',computm);
}
function computp(){
    //const counter = parseInt(document.getElementById('count').value);
    //calc.counter = counter;
    document.getElementById('count').innerText = calc.plus();
}
function computm(){
    //const counter = parseInt(document.getElementById('count').value);
    //calc.counter = counter;
    document.getElementById('count').innerText = calc.minus();
}