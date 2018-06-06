window.addeventasync = function () {
    addeventatc.settings({
        dropdown: {
            order: "google,appleical,outlook,yahoo,outlookcom"
        },
        css: false
    });
};
window.addeventasync();

document.getElementById('back').oninput = invest;

function invest(){    
    var amount =  document.getElementById('amount');
    var prod =  document.getElementById('prod');
    var clone = document.getElementById('clone');    
    var profit =  document.getElementById('profit');
    var total =  document.getElementById('total');
    amount.innerHTML = '$' + this.value;
    prod.innerHTML = '$' + (this.value * 0.9).toFixed(2);
    clone.innerHTML = '$' + (this.value * 0.1).toFixed(2);
    
    profit.innerHTML = '$' + this.value * 3;
    total.innerHTML = '$' + this.value * 2;
    
}
