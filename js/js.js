window.addeventasync = function () {
    addeventatc.settings({
        dropdown: {
            order: "google,appleical,outlook,yahoo,outlookcom"
        },
        css: false
    });
};


document.getElementById('back').oninput = invest;

function invest(){    
    var amount =  document.getElementById('amount');
    var prod =  document.getElementById('prod');
    var adv =  document.getElementById('adv');
    var profit =  document.getElementById('profit');
    var total =  document.getElementById('total');
    amount.innerHTML = '$' + this.value;
    prod.innerHTML = '$' + Math.round(this.value * 0.9);
    adv.innerHTML = '$' + Math.round(this.value * 0.1);
    profit.innerHTML = '$' + this.value * 3;
    total.innerHTML = '$' + this.value * 2;
    
}
