let array=[];
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
      var result = ary.slice(idx,idx+n);
      results.push(result);
      idx = idx + n;
  }
  var rest = ary.slice(idx,length+1)
  results.push(rest);
  return results;
}
divideArray=array.divide(4);
// ググってコピペした
console.log("Arrayの中身は答えです");
console.log(divideArray);
let brray=[];//Si
let crray=[];//Sj
let drray=[];//S



  let K=0;
  let Kcp=0;
  let P=0;
  let Pcp=0;
  let first=true;
  let second=true;
  let firstcp=true;
  let flag=1;
 
  
let S1=S2=0;

let q=0;


function PCselect(){
  
  document.getElementById("Uor").innerText="PCの番です";

    setTimeout(stPC, 1000);
    setTimeout(PCkaisuu,1500);
    setTimeout(comparisioncp, 2500);
    PCfirst=true;
    PCsecond=true;
   
}



function PCkaisuu(){
  Kcp++;
  document.getElementById("cp").innerText="PC "+Kcp+"回 "+Pcp+"組";
  
}


function select(id){
  if(flag===1){
   if(first==true){
     if(second==false){
        comparision();
        
      }else{ 
        for(i=0;i<=3;i++){//1枚目
          for(j=0;j<=3;j++){
            let Id="A"+(i+1)+(j+1);
            if(id==Id){
              let element1=document.getElementById(id);
               element1.src="photo/0"+divideArray[i][j]+".png";
          S1=divideArray[i][j];//S1はトランプの数字
          S1i=i+1; //行
          S1j=j+1; //列

          }
        }
      }
  lock();//もう一回押してもひっくり返らないように
  first=false;
    }
 }else{
  for(i=0;i<=3;i++){//２枚目
    for(j=0;j<=3;j++){
      let Id="A"+(i+1)+(j+1);
      if(id==Id){
       let element2=document.getElementById(id);
      element2.src="photo/0"+divideArray[i][j]+".png";
      S2=divideArray[i][j];
      S2i=i+1; //行
      S2j=j+1; //列
      }
    }
  }
  if(S1i==S2i&&S1j==S2j){
    // 同じトランプを二回連続で選んだ時に消えないようにする
    lock();
  first=false;
  }else{
    // 2個別のトランプを選んだ
   K++;
   document.getElementById("you").innerText="あなた　"+K+"回 "+P+"組"
   
   first=true;
   second=false;
   
   //ここにcpの動きを入れる
    }
  }
}
}

function lock(){
  //もう一回押してもひっくり返らないように
  element1="photo/0"+S1+".png";
}

let S1icp;
let S1jcp;
let S2icp;
let S2jcp;;
let S1cp;
let S2cp;

let PCfirst=true;
let PCsecond=true;

function stPC(){
 var l = brray.length;
 if(PCfirst===true){
  
    for(i=0;i<=l;i++){
      for(j=0;j<=l;j++){
        if(PCsecond===true){
        if(drray[i]===drray[j]&&i<=j){
          if(brray[i]!=brray[j]||crray[i]!=crray[j]){ //違うのをめくった時
            document.getElementById("A"+brray[i]+crray[i]).src="photo/0"+drray[i]+".png";
            console.log(drray);
            S1icp=brray[i];
            S1jcp=crray[i];
            S1cp=drray[i];
           
              document.getElementById("A"+brray[j]+crray[j]).src="photo/0"+drray[j]+".png";
            S2icp=brray[j];
            S2jcp=crray[j];
            S2cp=drray[j];
            PCfirst=false;
            PCsecond=false;

              
    
            
         

  
           }
         }
        }
      }
    }
  }
    if(PCfirst===true){
      CP1();
      setTimeout(CP2,500)
    }
}



  function CP1(){

  for(let E=1;E=16;E++){
  S1icp=Math.floor(Math.random()*Math.floor(4)+1);
  S1jcp=Math.floor(Math.random()*Math.floor(4)+1);
  
  console.log("CP1!()1枚目", S1icp, S1jcp);
  
   if(document.getElementById("A"+S1icp+S1jcp).src.indexOf("photo/00.png") > -1){
     break;
   }
  }
      document.getElementById("A"+S1icp+S1jcp).src="photo/0"+divideArray[S1icp-1][S1jcp-1]+".png";
      S1cp=divideArray[S1icp-1][S1jcp-1];
      
  }



  function CP2(){
    for(let R=1;R=16;R++){
  S2icp=Math.floor(Math.random()*Math.floor(4)+1);
  S2jcp=Math.floor(Math.random()*Math.floor(4)+1);
  console.log("CP2!()2枚目", S2icp, S2jcp);
   if(document.getElementById("A"+S2icp+S2jcp).src.indexOf("photo/00.png") > -1){
     if(S1icp==S2icp&&S1jcp==S2jcp){
     }else{
     break;
     }
   }
  }
      document.getElementById("A"+S2icp+S2jcp).src="photo/0"+divideArray[S2icp-1][S2jcp-1]+".png";
      S2cp=divideArray[S2icp-1][S2jcp-1];
  }



  function comparision(){
    if(S1==S2){//１枚目と２枚目が同じ数字になった時
  
      let Element1=document.getElementById("A"+S1i+S1j);
      let Element2=document.getElementById("A"+S2i+S2j);
      Element1.src=Element2.src="photo/clean.png";
      Element1.onclick=Element2.onclick="";
      P++;
     document.getElementById("you").innerText="あなた　"+K+"回 "+P+"組";
      
     if(P+Pcp==8){
      // ペアが８組できた時＝全部できた時
     if(P>Pcp){
      document.getElementById("Uor").innerText="あなたの勝ち";
      }
      if(Pcp>P){
       document.getElementById("Uor").innerText="あなたの負け";
      }
      if(Pcp==P){
       document.getElementById("Uor").innerText="引き分け";
      }
     document.getElementById("reload").innerText="リロードしてね";
    }


    for(i=0;i<=100;i++){
      if(S1==drray[i]){
        brray.splice(i,1);
        crray.splice(i,1);
        drray.splice(i,1);
        i--;
      }
    }

    console.log("b="+brray);
    console.log("c="+crray);
    console.log("d="+drray);
    
    flag=1;
    



    
    }else{ //2n+1枚目を引いた時(n>=1)
    let Element1=document.getElementById("A"+S1i+S1j);
    Element1.src="photo/00.png";
    let Element2=document.getElementById("A"+S2i+S2j);
    Element2.src="photo/00.png";



   

    brray.push(S1i,S2i);
    console.log("b="+brray);
    crray.push(S1j,S2j);
    console.log("c="+crray);
    drray.push(S1,S2);
    console.log("d="+drray);
   



    if(P+Pcp<B12){
      flag=-1;
      PCselect();
      }

   }
   second=true;
  }

  

  function comparisioncp(){
    if(S1cp==S2cp){//１枚目と２枚目が同じ数字になった時
      
      document.getElementById("A"+S1icp+S1jcp).src="photo/clean.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/clean.png";
      document.getElementById("A"+S1icp+S1jcp).onclick=document.getElementById("A"+S2icp+S2jcp).onclick="";
      Pcp++;
     document.getElementById("cp").innerText="PC "+Kcp+"回 "+Pcp+"組";

     
     if(P+Pcp==B12){
      // ペアが８組できた時＝全部できた時
     if(P>Pcp){
     document.getElementById("Uor").innerText="あなたの勝ち";
     }
     if(Pcp>P){
      document.getElementById("Uor").innerText="あなたの負け";
     }
     if(Pcp==P){
      document.getElementById("Uor").innerText="引き分け";
     }
     document.getElementById("reload").innerText="リロードしてね";
    }else{
        PCselect();
    }

    for(i=0;i<=100;i++){
      if(S1cp==drray[i]){
        brray.splice(i,1);
        crray.splice(i,1);
        drray.splice(i,1);
        i--;
      }
    }

   
    console.log("b="+brray);
    console.log("c="+crray);
    console.log("d="+drray);

     flag=-1;
   
  
      
    

    }else{ //2n+1枚目を引いた時(n>=1)
      brray.push(S1icp,S2icp);
    console.log("b="+brray);
    crray.push(S1jcp,S2jcp);
    console.log("c="+crray);
    drray.push(S1cp,S2cp);
    console.log("d="+drray);



      
      document.getElementById("A"+S1icp+S1jcp).src="photo/00.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/00.png";
      flag=1;
      
      document.getElementById("Uor").innerText="あなたの番です";
      
    
   }
   
  }
  
 //今まで出た数字で組みがあったら積極的に取っていく





