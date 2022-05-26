let borders;
let borderwidth;
let bordercolor;
let imageheight;
let imagewidth;
let likes=0;
let comment;
let oldcomment;

function cip() {
    borders=document.getElementById("bs").value;
    console.log(borders);
    borderwidth=document.getElementById("bw").value;
    bordercolor=document.getElementById("bc").value;
    imageheight=document.getElementById("ih").value;
    imagewidth=document.getElementById("iw").value;
    document.getElementById("dogimage").style.borderStyle=borders;
    document.getElementById("dogimage").style.borderWidth=borderwidth;
    document.getElementById("dogimage").style.borderColor=bordercolor;
    document.getElementById("dogimage").style.height=imageheight;
    document.getElementById("dogimage").style.width=imagewidth;
}

function likeincrease() {
    likes++;
    document.getElementById("ll").innerHTML=likes;
}
function likedecrease() {
    likes=likes-1;
    document.getElementById('ll').innerHTML=likes;
    if (likes<=0){
        likes=0;
        document.getElementById("ll").innerHTML=likes;
    }
}

function addcomment() {
    comment=document.getElementById("nci").value;
    oldcomment=document.getElementById("cl").innerText;
    oldcomment=oldcomment+"\n"+comment;
    document.getElementById("cl").innerHTML=oldcomment;
}
