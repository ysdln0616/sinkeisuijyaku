
  const num=(Math.floor(Math.random () * 8) + 1);
 const b=Math.floor(num);
 console.log("photo/0"+b+".png");

 var flag=-1;


function select(){
  console.log(flag);
  if(flag==-1){
    document.getElementById("A11").src="photo/0"+b+".png";
  }else if(flag==1){
    document.getElementById("A11").src="photo/00.png";
  }
  flag=flag*-1;
  console.log(flag);
            }

        
