let zima = document.querySelector('.winter');
var elk = zima.value;
let moo = document.querySelector('.leto');
var poi = moo.value;
let osen = document.querySelector('.vesna');
var mki = osen.value;
let risu = document.querySelector('.nene');
let VM = document.querySelector('.ae1');
let KM = document.querySelector('.ae2');
let VO = document.querySelector('.ae3');
let iput = document.querySelector('.koe');
document.getElementById('irh').disabled = true;
let button = document.querySelector('button');
document.getElementById('suzu').disabled = true;
let o = document.querySelector('.aqua');
let d = document.querySelector('.shion');
let t = document.querySelector('.hakos');
let c = document.querySelector('.sna');
let e = iput.value;

button.onclick = function () {
    if (risu === zima)
    {
        o.value = 600;
    }
    else if(risu === moo)
    {
        o.value = 300;
    }
    else if(risu === osen)
    {
        o.value = 400;
    }
    else {
        alert("aaaaaaaaaaaaaaaa");
    }
    
}
document.getElementById("laplase").onclick = function () {
    document.getElementById("irh").value = "";
    document.getElementById("momo").value = "";
    document.getElementById("suzu").value = "";
    document.getElementById("beya").value = "";
    document.getElementById("baelz").value = "";
}