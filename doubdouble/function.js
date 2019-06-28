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

  let K=0;
  let P=0;
  let Pcp=0;
  let first=true;
  let second=true;
  let firstcp=true;



let S1=S2=0;
let S2i=S2j=0;

function PC(){
  CP1();
        CP2();
        comparisioncp();
}
 function select(id){

   if(first==true){
     if(second==false){
        comparision();
        // CP1();
        // CP2();
        // comparisioncp();
     
    }else{ 
      for(i=0;i<=3;i++){
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
  for(i=0;i<=3;i++){
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
   document.getElementById("Kaisuu").innerText=K+"回"
   
   first=true;
   second=false;
    }
  }
}

function lock(){
  //もう一回押してもひっくり返らないように
  element1="photo/0"+S1+".png";
}
function comparision(){
  if(S1==S2){//１枚目と２枚目が同じ数字になった時

    let Element1=document.getElementById("A"+S1i+S1j);
    let Element2=document.getElementById("A"+S2i+S2j);
    Element1.src=Element2.src="photo/clean.png";
    Element1.onclick=Element2.onclick="";
    P++;
   document.getElementById("pair").innerText=P+"組";
  
  }else{ //2n+1枚目を引いた時(n>=1)
  let Element1=document.getElementById("A"+S1i+S1j);
  Element1.src="photo/00.png";
  let Element2=document.getElementById("A"+S2i+S2j);
  Element2.src="photo/00.png";
 }
 second=true;
}





let S1icp;
let S1jcp;
let S2icp;
let S2jcp;;
let S1cp;
let S2cp;


function CP1(){
  for(let E=1;E=16;E++){
  S1icp=Math.floor(Math.random()*Math.floor(4)+1);
  S1jcp=Math.floor(Math.random()*Math.floor(4)+1);
  
  console.log("1枚目", S1icp, S1jcp);
  console.log(document.getElementById("A"+S1icp+S1jcp).src);
  // console.log(document.getElementById("A"+S1icp+S1jcp).src)

   if(document.getElementById("A"+S1icp+S1jcp).src.indexOf("photo/00.png") > -1){
     break;
   }
  }
  for(let R=1;R=16;R++){
  S2icp=Math.floor(Math.random()*Math.floor(4)+1);
  S2jcp=Math.floor(Math.random()*Math.floor(4)+1);
  console.log("2枚目", S2icp, S2jcp);
  console.log(document.getElementById("A"+S2icp+S2jcp).src);
  // console.log(document.getElementById("A"+S2icp+S2jcp).src)
   if(document.getElementById("A"+S2icp+S2jcp).src.indexOf("photo/00.png") > -1){
     if(S1icp==S2icp&&S1jcp==S2jcp){
     }else{
     break;
     }
   }
  }
  
      document.getElementById("A"+S1icp+S1jcp).src="photo/0"+divideArray[S1icp-1][S1jcp-1]+".png";
      S1cp=divideArray[S1icp-1][S1jcp-1];
      lock();
      
  }

  function CP2(){
      document.getElementById("A"+S2icp+S2jcp).src="photo/0"+divideArray[S2icp-1][S2jcp-1]+".png";
      S2cp=divideArray[S2icp-1][S2jcp-1];
      lock();
    
  }

  function comparision(){
    if(S1==S2){//１枚目と２枚目が同じ数字になった時
  
      let Element1=document.getElementById("A"+S1i+S1j);
      let Element2=document.getElementById("A"+S2i+S2j);
      Element1.src=Element2.src="photo/clean.png";
      Element1.onclick=Element2.onclick="";
      P++;
     document.getElementById("pair").innerText=P+"組";
     if(P+Pcp==8){
      // ペアが８組できた時＝全部できた時
     document.getElementById("Kaisuu").innerText="🎉記録"+K+"回🎉";
     if(P>Pcp){
      document.getElementById("pair").innerText="あなたの勝ち";
      }
      if(Pcp>P){
       document.getElementById("pair").innerText="あなたの負け";
      }
      if(Pcp==P){
       document.getElementById("pair").innerText="引き分け";
      }
     document.getElementById("reload").innerText="リロードしてね";
 
    }
    
    }else{ //2n+1枚目を引いた時(n>=1)
    let Element1=document.getElementById("A"+S1i+S1j);
    Element1.src="photo/00.png";
    let Element2=document.getElementById("A"+S2i+S2j);
    Element2.src="photo/00.png";
   }
   second=true;
  }

  

  function comparisioncp(){
    if(S1cp==S2cp){//１枚目と２枚目が同じ数字になった時
      
      document.getElementById("A"+S1icp+S1jcp).src="photo/clean.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/clean.png";
      Pcp++;
     document.getElementById("cppair").innerText=Pcp+"組";
     if(P+Pcp==8){
      // ペアが８組できた時＝全部できた時
     document.getElementById("Kaisuu").innerText="🎉記録"+K+"回🎉";
     if(P>Pcp){
     document.getElementById("pair").innerText="あなたの勝ち";
     }
     if(Pcp>P){
      document.getElementById("pair").innerText="あなたの負け";
     }
     if(Pcp==P){
      document.getElementById("pair").innerText="引き分け";
     }


     document.getElementById("reload").innerText="リロードしてね";
    }
    

    }else{ //2n+1枚目を引いた時(n>=1)
      
      let Element1=document.getElementById("A"+S1icp+S1jcp);
      let Element2=document.getElementById("A"+S2icp+S2jcp);

      Element1.src=Element2.src="photo/clean.png";
      
      document.getElementById("A"+S1icp+S1jcp).src="photo/00.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/00.png";
    
   }
  }
  
  // トランプの柄がphoto/00.pngになってるものを選ぶ
  // 正誤判定
  // あってたらPcp++
  // ユーザーのターンに戻す
  // 間違ってたらユーザーのターンに戻す
  





