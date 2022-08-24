

function Topla(){
    var sayi1 =Number(document.getElementById("sayi1").value);
    var sayi2 =Number(document.getElementById("sayi2").value);

    document.getElementById("topla").innerHTML=sayi1+sayi2;
}

function Cikar(){
    var sayi1 =Number(document.getElementById("sayi1").value);
    var sayi2 =Number(document.getElementById("sayi2").value);

    document.getElementById("cikar").innerHTML=sayi1-sayi2;
}

function Carp(){
    var sayi1 =Number(document.getElementById("sayi1").value);
    var sayi2 =Number(document.getElementById("sayi2").value);

    document.getElementById("carp").innerHTML=sayi1*sayi2;
}
function Bol(){
    var sayi1 =Number(document.getElementById("sayi1").value);
    var sayi2 =Number(document.getElementById("sayi2").value);

    document.getElementById("bol").innerHTML=sayi1/sayi2;
}

function Mod(){
    var sayi1 =Number(document.getElementById("sayi1").value);
    var sayi2 =Number(document.getElementById("sayi2").value);

    document.getElementById("mod").innerHTML=sayi1%sayi2;
}