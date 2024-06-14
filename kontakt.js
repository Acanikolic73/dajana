function checkgmail() {
    var x = document.getElementById("b1glup").value;
    var check = "@gmail.com";
    var n = x.length;
    if(n < 10) return false;
    var end = x.substring(n - 10,n);
    return end === check;
}
function checktext() {
    var x = document.getElementById("message").value;
    if(x.length < 10) return false;
    return true; 
}
function checkname() {
    var x = document.getElementById("name").value;
    var ok = false;
    for(var i = 0; i < x.length; i++) {
        if(x.charAt(i) == ' ') ok = true;
    }
    if(x.length > 5 && ok) return true;
    return false;
}
function proveri() {
    if(!checkgmail()) {
        window.alert("Niste uneli gmail lepo, mora na kraju biti @gmail.com");
    }else if(!checkname()) {
        window.alert("Niste uneli ime i prezime lepo");
    }else if(!checktext()) {
        window.alert("Text je prekratak");
    }else {
        window.alert("Poruka je uspesno poslata upravnicima skole!");
    }
}