import details from "./emilogic2.js";
window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('calculate_emi').addEventListener('click', computeIt);
}
function createPTag(key, result){
    const pTag = document.createElement('p'); // <p>Hra is</p>
    pTag.innerText = `${key}  is  :  ${result} `;
    return pTag;
}
function computeIt(){
    const p = parseFloat(document.getElementById('loanAmount').value);
    details.p = p;
    const r = parseFloat(document.getElementById('irate').value);
    details.r = r;
    const t = parseFloat(document.getElementById('duration').value);
    details.t = t;
    const div = document.getElementById('output');
    for(let key in details){

        if(typeof(details[key])==='function'){
            let result = details[key]();
            // console.log(result);
            div.appendChild(createPTag(key, result));
        }
   
    }
    // document.getElementById('emi').innerText = details.emicalc();
    // document.getElementById('tinterest').innerText = details.interestcalc();
    // document.getElementById('tamount').innerText = details.totalamountcalc();

}