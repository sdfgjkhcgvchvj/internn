head=document.getElementById("bd")
var btn1=document.getElementById("bt1");
btn1.addEventListener('click', function(){
    head.style.backgroundColor = "red";
    alert("Background Color will change to red");

});
var btn2=document.getElementById("bt2");
btn2.addEventListener('click', function(){
    head.style.backgroundColor = "blue";
    alert("Background Color will change to blue");
});
var btn3=document.getElementById("bt3");
btn3.addEventListener('click', function(){
    head.style.backgroundColor = "green";
    alert("Background Color will change to green");

});
