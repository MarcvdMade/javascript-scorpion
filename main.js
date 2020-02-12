

//Update de site na 30 seconde
//setTimeout(function() {
    //location.reload();
    //console.log("Reloading Site...")
//}, 30000);



//Javascript voor het prototype

//verplaatst arm left
document.getElementById('proto-button1').onclick = function(event){
    var img1=document.getElementById('proto-img-arm-left');
    img1.setAttribute('style','transform:rotate(300deg) translateY(5vh)');
    setTimeout(function(event){
        img1.setAttribute('style','transform:rotate(0deg)  translateY(0vh)');
     }, 1000);
}

//verplaatst arm right
document.getElementById('proto-button2').onclick = function(event){
    var img2=document.getElementById('proto-img-arm-right');
    img2.setAttribute('style', 'transform:rotate(60deg) translateY(5vh)');
    setTimeout(function(event){
        img2.setAttribute('style','transform:rotate(0deg) translateY(0vh)');
     }, 1000);
}

//verplaatst tail
document.getElementById('proto-button3').onclick = function(event){
    var img3=document.getElementById('proto-img-staart');
    img3.setAttribute('style', 'transform:rotate(30deg) translateY(5vh)');
    setTimeout(function(event){
        img3.setAttribute('style','transform:rotate(0deg) translateY(0vh)');
     }, 1000);
}

//laat tekst zien als knop aangeklikt is
document.getElementById('proto-button-talk').onclick = function(event){
    var x = document.getElementById("proto-text");
    x.style.display ="block";
      setTimeout(function(event){
        x.style.display = "none";
     }, 1000);
}

//je slaat de bot waardoor hij een kruis ogen krijgt en geluid maakt
document.getElementById('proto-button-hit').onclick = function(event){
    var x = document.getElementById("proto-img-hurt");
    var oof = new Audio("sounds/oof.mp3");
    x.style.display ="block";
    oof.play();
      setTimeout(function(event){
        x.style.display = "none";
     }, 1000);
}

//zet de rave function aan waardoor de achtergrond veranderd van kleur
document.getElementById('proto-button-rave').onclick = function(event) {
    var x = document.getElementById("het-prototype");
    var armLeft = document.getElementById('proto-img-arm-left');
    var armRight = document.getElementById('proto-img-arm-right');
    var crabrave = new Audio("sounds/crabrave.mp3");
    var noKlik = document.getElementById('proto-button-rave');

    x.classList.add("rave-background");
    armRight.classList.add("rave-arm-rotate")
    armLeft.classList.add("rave-arm-rotate")
    crabrave.play();
    noKlik.style.pointerEvents ="none";

    setTimeout(function(event){
        x.classList.remove("rave-background");
        armRight.classList.remove("rave-arm-rotate");
        armLeft.classList.remove("rave-arm-rotate");
        noKlik.style.pointerEvents = "all";
     }, 192000);

}



