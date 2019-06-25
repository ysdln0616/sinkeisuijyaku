 var array=[];
   array.push(1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8);
 array.sort(function() {
  return Math.random() - Math.random();
});
console.log(array);

//arrayの中身を並び替えた


//引いた一枚目がarray[0],２枚めがarray[1]...という風にしたい
//引いたカードを保存したいけど、、、
//それかA11=array[0],A12=array[1]...
//select(id)にしてるからできなさそう

console.log(document.getElementById("Array").children);



 var flag=-1;
 
function select(id){
  const element=document.getElementById(id)
  if(flag==-1){
    for(i=0;i<=15;i++){
      const element = document.getElementById("Array").children[i].firstElementChild;
      // console.log(element.id);
      if(id==element.id){
      element.src="photo/0"+array[i]+".png";
      // console.log(element.src);
      console.log(array[i]);
      }
    }
  }else if(flag==1){
    element.src="photo/00.png";
  }
  flag=flag*-1;
}

