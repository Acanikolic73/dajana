document.addEventListener("DOMContentLoaded", function() {
    function reg() {
        document.getElementById("registerBox").style.display = "none";
        document.getElementById("loginBox").style.display = "block";
    }
    function logg() {
        document.getElementById("registerBox").style.display = "block";
        document.getElementById("loginBox").style.display = "none";
    }
    document.getElementById("coa1").addEventListener("click",reg);
    document.getElementById("coa2").addEventListener("click",logg);
});
