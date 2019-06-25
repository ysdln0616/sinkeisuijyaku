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



 var flag=-1;
 
function select(id){
  

  if(flag==-1){
    for(i=0;i<=3;i++){
    for(j=0;j<=3;j++){
      var c =divideArray[i][j];
      // console.log(c);
      var Id="A"+(i+1)+(j+1);
    
  
      // console.log(element.id);
      if(id==Id){
       var element=document.getElementById(id);
      element.src="photo/0"+divideArray[i][j]+".png";
      // console.log(element.src);
      // console.log(Id);
      }
    }
    }
  }else if(flag==1){
    const element=document.getElementById(id);
    element.src="photo/00.png";
  }
  flag=flag*-1;
}

