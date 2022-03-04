
let result1=0;
let result2=0;
const max=50;
function getname1(){
    var name1 = document.getElementById("player1").value;
}

function getname2(){
    var name2 = document.getElementById("player2").value;
}

function diceroll1(){
    var x= Math.floor(Math.random()*6)+1;
    document.getElementById("output1").innerHTML=x;
    let num1 = x;
    result1 = result1+num1;
    document.getElementById("total1").innerHTML="Your total is = "+result1;
    let a= document.getElementById("total1");
    a.style.display = "block";
     if (result1==max)
    {
        document.getElementById("zfinal").innerHTML="WINNER IS PLAYER1";
        let pq= document.getElementById("zfinal");
        pq.style.display = "block";
        document.getElementById("start1").disabled=true;
        document.getElementById("start2").disabled=true;
    }
    else if(result1 > max)
    {
        document.getElementById("yfinal").innerHTML="PLAYER1 HAS EXCEEDED THE MAXIMUM NUMBER!";
        let rs= document.getElementById("yfinal");
        rs.style.display = "block";
        document.getElementById("start1").disabled=true;
        document.getElementById("start2").disabled=true;
    }


}
function diceroll2(){
    var y= Math.floor(Math.random()*6)+1;
    document.getElementById("output2").innerHTML=y;
    let num2 = y;
    result2 = result2+num2;
    document.getElementById("total2").innerHTML="Your total is = "+result2;
    let b= document.getElementById("total2");
    b.style.display = "block";
     if(result2==max)
    {
        document.getElementById("zfinal").innerHTML="WINNER IS PLAYER2";
        let pq= document.getElementById("zfinal");
        pq.style.display = "block";
        document.getElementById("start1").disabled=true;
        document.getElementById("start2").disabled=true;
    }
    else if(result2 > max)
    {
        document.getElementById("yfinal").innerHTML="PLAYER2 HAS EXCEEDED THE MAXIMUM NUMBER!";
        let rs= document.getElementById("yfinal");
        rs.style.display = "block";
        document.getElementById("start1").disabled=true;
        document.getElementById("start2").disabled=true;
    }
}

