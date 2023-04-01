window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('calculate_emi').addEventListener('click', computeIt);
}
function computeIt(){
    const p = parseFloat(document.getElementById('loanAmount').value);
    details.p = p;
    const r = parseFloat(document.getElementById('irate').value);
    details.r = r;
    const t = parseFloat(document.getElementById('duration').value);
    details.t = t;
    document.getElementById('emi').innerText = details.emicalc();
    document.getElementById('tinterest').innerText = details.interestcalc();
    document.getElementById('tamount').innerText = details.totalamountcalc();

}