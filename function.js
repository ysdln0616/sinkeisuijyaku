 var array=[];
   array.push(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8);
 array.sort(function() {
  return Math.random() - Math.random();
});

Array.prototype.divide = function(n){
  var ary = this;
  var idx = 0;
  var results = [];
  var length = ary.length;
  while (idx + n < length){
      var result = ary.slice(idx,idx+n)
      results.push(result);
      idx = idx + n
  }
  var rest = ary.slice(idx,length+1)
  results.push(rest)
  return results;
}
divideArray=array.divide(4);
console.log("Arrayの中身は答えです");
console.log(divideArray);

  var K=0;
  var P=0;
  var first=true;
var S1=S2=0;
var S2i=S2j=0;
 function select(id){
   if(first==true){
    if(S1!=S2){ //2n+1枚目を引いた時(n>=1)
      var Element1=document.getElementById("A"+S1i+S1j);
      Element1.src="photo/00.png";
      var Element2=document.getElementById("A"+S2i+S2j);
      Element2.src="photo/00.png";
     }
   for(i=0;i<=3;i++){
        for(j=0;j<=3;j++){
          var Id="A"+(i+1)+(j+1);
          if(id==Id){
           var element1=document.getElementById(id);
          element1.src="photo/0"+divideArray[i][j]+".png";
          S1=divideArray[i][j];
          S1i=i+1;
          S1j=j+1;
          }
        }
      }

  lock();
  first=false;
 }else{
  for(i=0;i<=3;i++){
    for(j=0;j<=3;j++){
      var Id="A"+(i+1)+(j+1);
      if(id==Id){
       var element2=document.getElementById(id);
      element2.src="photo/0"+divideArray[i][j]+".png";
      S2=divideArray[i][j];
      S2i=i+1;
      S2j=j+1;
      }
    }
  }
  if(S1i==S2i&&S1j==S2j){
    lock();
  first=false;
  }else{
   comparision();
   K++;
   document.getElementById("Kaisuu").innerText=K+"回"
   if(P==8){
    document.getElementById("Kaisuu").innerText="🎉記録"+K+"回🎉";
    document.getElementById("pair").innerText="";
    document.getElementById("reload").innerText="リロードしてね";

   }
    }
 }
}

function lock(){
  element1="photo/0"+S1+".png";
}
function comparision(){
  if(S1==S2){

    var Element1=document.getElementById("A"+S1i+S1j);
    var Element2=document.getElementById("A"+S2i+S2j);
    Element1.src=Element2.src="photo/clean.png";
    Element1.onclick=Element2.onclick="";
    P++;
   document.getElementById("pair").innerText=P+"組";
  
  }
  first=true;
}

