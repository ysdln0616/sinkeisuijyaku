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
console.log(divideArray);


var K=0;
var P=0;

var first =true;

 var first=true;
var S1=S2=0;
var B;
 function select(id){
   if(first==true){
    if(S1!=S2){

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
          console.log("S1="+S1);
        
          console.log("S1i="+S1i);
      console.log("S1j="+S1j);

          


          
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
      console.log("S1="+S1);
      console.log("S2="+S2);
      console.log("S1i="+S1i);
      console.log("S1j="+S1j);
      console.log("S2i="+S2i);
      console.log("S2j="+S2j);

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
    }
 }
}

function lock(){
  element1="photo/0"+S1+".png";
}
function comparision(){
  if(S1==S2){

    var Element1=document.getElementById("A"+S1i+S1j);
    Element1.src="photo/000.png";
    var Element2=document.getElementById("A"+S2i+S2j);
    Element2.src="photo/000.png";
    P++;
   document.getElementById("pair").innerText=P+"組"
  
  }
  first=true;
}



 





 
// function select(id){
//   if(flag==-1){
//     for(i=0;i<=3;i++){
//     for(j=0;j<=3;j++){
//       var Id="A"+(i+1)+(j+1);
//       if(id==Id){
//        var element=document.getElementById(id);
//       element.src="photo/0"+divideArray[i][j]+".png";
//       }
//     }
//     }
//   }else if(flag==1){
//     const element=document.getElementById(id);
//     element.src="photo/00.png";
//   }
//   flag=flag*-1;
// }
