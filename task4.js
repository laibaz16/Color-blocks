
   var count;
   var newP;
   var boxnumber;
window.onload = function()
{
  createBoxes();
  $("myButton").onclick=createBoxes;
}

function createBoxes()
{
count=0;
boxnumber=0;
do{
  //var colors = Math.floor((Math.random()*255)+0);
var colors=["red", "green","blue","yellow","black"];
   newP = document.createElement("p");
  var top = Math.floor((Math.random()*400)+0) + "px";
  var left = Math.floor((Math.random()*400)+0)+ "px";
  newP.style.top  = top;
  newP.style.left  = left;
  newP.style.backgroundColor=colors[Math.floor(Math.random()*5)];
//  newP.style.backgroundColor = ragb(colors,colors,colors);
 count++;
 boxnumber++;
 //newP==boxnumber;
//newP.onmouseover=del;
$(newP).observe("mousemove",del);

  $("container").appendChild(newP);
}while(count<100);
//count=0;

}
function del(){

  if(boxnumber>1)
  {
    $("container").removeChild(this);
    boxnumber--;

  }
else{
  alert("no more boxes");
}


}
