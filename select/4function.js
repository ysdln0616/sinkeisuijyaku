
let array=[];//トランプに数字を割り当てるための配列
let PCfirst=true;//めくられたトランプが既出のものかどうかのflag
let PCsecond=true;//for文を3回繰り返してるのでgoto文として
let Skip=true;//スキップの関数をだす時のためのflag,間違えてSkip=falseの時にスキップする
let brray=[];//裏返したトランプの第i-1行目を記録する,ペアになったら要素として削除し、中にはペアになっていないものだけにしている
let crray=[];//裏返したトランプの第j-1列目を記録する,ペアになったら要素として削除し、中にはペアになっていないものだけにしている
let drray=[];//裏返したトランプの(i-1,j-1)成分のの数字を記録する,ペアになったら要素として削除し、中にはペアになっていないものだけにしている
let K=0;//トランプをめくった回数(1人の時のみ)
let P=0;//やっている人がペアにした回数
let Pcp=0;//PCがペアにした回数
let first=1;//同じ関数のなかで何枚目かで処理を変えるためのflag
//１枚目の時first=1
//２枚目の時first=0
//３枚目の時first=-1
let second=true;//選んだカードを比べる関数を入れるためのflag,second=falseの時に比べる
let flag=-1;//PCが動いてる時めくれないようにするためのflag,flag=1の時めくれてそれ以外ではめくれない
let S1=S2=S3=0;//1,2,3枚目のトランプに書いてある数字
let B13;//B13=1の時1人,B13=2の時2人の設定になるようにするためのflag
let B=0;//行の数


function divide(){//割り振った数字を3or4列に分けるための関数,ググった
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
}

function alone(){
  B13=1;//1人でやる時
  document.getElementById("b11").onclick="";
  document.getElementById("b11").className="bun";//押したボタンを白抜きにする
  document.getElementById("b12").innerText="２枚";
  document.getElementById("b12").onclick=preselect2;
  document.getElementById("b13").innerText="３枚";
  document.getElementById("b13").onclick=preselect3;
  document.getElementById("b13").style.visibility="visible";
  document.getElementById("you").innerText="枚数を選んでください";
  document.getElementById("Description").innerText="2枚:2枚同じ数字を選ぶ　3枚:3枚同じ数字を選ぶ";
}

function couple(){
  B13=2;//2人でやる時
  document.getElementById("b11").onclick="";
  document.getElementById("b11").className="bun";//押したボタンを白抜きにする
  document.getElementById("b11").innerText="対PC";
  document.getElementById("b12").innerText="２枚";
  document.getElementById("b12").onclick=preselect2;
  document.getElementById("b13").innerText="３枚";
  document.getElementById("b13").onclick=preselect3;
  document.getElementById("b13").style.visibility="visible";
  document.getElementById("you").innerText="枚数を選んでください";
  document.getElementById("Description").innerText="2枚:2枚同じ数字を選ぶ　3枚:3枚同じ数字を選ぶ";
}


function preselect2(){//２枚組を選んだ時
  B11=2;
  document.getElementById("b12").onclick="";
  document.getElementById("b12").className="bun";
  document.getElementById("b13").innerText="6組";
  document.getElementById("b13").onclick=preselect26;
  document.getElementById("b14").innerText="8組";
  document.getElementById("b14").onclick=preselect28;
  document.getElementById("b14").style.visibility="visible";
  document.getElementById("you").innerText="組の数を選んでください";
  document.getElementById("Description").innerText="6組:1~6のトランプ　8組:1~8のトランプ";
  B=4;//４行
}

function preselect3(){//3枚を選んだ時
  document.getElementById("b12").onclick="";
  document.getElementById("b12").className="bun";
  document.getElementById("b12").innerText="3枚";
  document.getElementById("b13").innerText="4組";
  document.getElementById("b13").onclick=preselect34;
  document.getElementById("b14").innerText="6組";
  document.getElementById("b14").onclick=preselect36;
  document.getElementById("b14").style.visibility="visible";
  document.getElementById("you").innerText="組の数を選んでください";
  document.getElementById("Description").innerText="4組:1~4のトランプ　6組:1~6のトランプ";
  B11=3;
  B=3;//3行
}


function preselect26(){//2枚かつ6組
  for(i=1;i<=6;i++){
    array.push(i,i)
  }
  for(i=1;i<=3;i++){
    for(j=1;j<=4;j++){
      N="A"+j+i;
      document.getElementById(N).src="photo/00.png";
    }
  }
  for(i=4;i<=6;i++){
    for(j=1;j<=4;j++){
      N="A"+j+i;
      document.getElementById(N).onclick="";
    }
  }
  document.getElementById("b13").onclick="";
  document.getElementById("b13").className="bun";
  if(B13==1){
    flag=1;
    document.getElementById("b14").style.visibility="hidden";
  }else if(B13==2){
    document.getElementById("b14").innerText="先攻";
    document.getElementById("b14").onclick=firststrike;
    document.getElementById("b15").innerText="後攻";
    document.getElementById("b15").onclick=secondstrike;
    document.getElementById("b15").style.visibility="visible";
    document.getElementById("you").innerText="あなたが先攻か後攻か選んでください";
    document.getElementById("Description").innerText="";
  }
  divide();
  divideArray=array.divide(3);// ググってコピペした
  console.log("Arrayの中身は答えです");
  console.log(divideArray);
  B12=6;
}


function preselect28(){//2枚かつ8組
  for(i=1;i<=8;i++){
    array.push(i,i)
  }
  for(i=1;i<=4;i++){
    for(j=1;j<=4;j++){
      N="A"+j+i;
      document.getElementById(N).src="photo/00.png";
    }
  }
  for(i=5;i<=6;i++){
    for(j=1;j<=4;j++){
      N="A"+j+i;
      document.getElementById(N).onclick="";
    }
  }

  document.getElementById("b13").onclick="";
  document.getElementById("b13").className="bun";
  document.getElementById("b13").innerText="8組";
  if(B13==1){
    flag=1;
    document.getElementById("b14").style.visibility="hidden";
  }else if(B13==2){
    document.getElementById("b14").innerText="先攻";
    document.getElementById("b14").onclick=firststrike;
    document.getElementById("b15").innerText="後攻";
    document.getElementById("b15").onclick=secondstrike;
    document.getElementById("b15").style.visibility="visible";
  document.getElementById("you").innerText="あなたが先攻か後攻か選んでください";
  document.getElementById("Description").innerText="";
  }
  divide();
  divideArray=array.divide(4);// ググってコピペした
  console.log("Arrayの中身は答えです");
  console.log(divideArray);
  B12=8;
}




function preselect34(){//3枚かつ4組
  for(i=1;i<=4;i++){
    array.push(i,i,i)
  }
  for(i=1;i<=4;i++){
    for(j=1;j<=3;j++){
      N="A"+j+i;
      document.getElementById(N).src="photo/00.png";
    }
  }
  for(i=5;i<=6;i++){
    for(j=1;j<=3;j++){
      N="A"+j+i;
      document.getElementById(N).onclick="";
    }
  }
  document.getElementById("b13").onclick="";
  document.getElementById("b13").className="bun";
  if(B13==1){
    flag=1;
    document.getElementById("b14").style.visibility="hidden";
  }else if(B13==2){
    document.getElementById("b14").innerText="先攻";
    document.getElementById("b14").onclick=firststrike;
    document.getElementById("b15").innerText="後攻";
    document.getElementById("b15").onclick=secondstrike;
    document.getElementById("b15").style.visibility="visible";
  document.getElementById("you").innerText="あなたが先攻か後攻か選んでください";
  document.getElementById("Description").innerText="";
  }
  divide();
  divideArray=array.divide(4);// ググってコピペした
  console.log("Arrayの中身は答えです");
  console.log(divideArray);
  B12=4;
}


function preselect36(){//3枚かつ6組
  for(i=1;i<=6;i++){
    array.push(i,i,i)
  }
  for(i=1;i<=6;i++){
    for(j=1;j<=3;j++){
      N="A"+j+i;
      document.getElementById(N).src="photo/00.png";
    }
  }
  for(i=5;i<=6;i++){
    N="A4"+i;
    document.getElementById(N).onclick="";
  }
  document.getElementById("b13").onclick="";
  document.getElementById("b13").className="bun";
  document.getElementById("b13").innerText="6組";
  if(B13==1){
    flag=1;
    document.getElementById("b14").style.visibility="hidden";
  }else if(B13==2){
    document.getElementById("b14").innerText="先攻";
    document.getElementById("b14").onclick=firststrike;
    document.getElementById("b15").innerText="後攻";
    document.getElementById("b15").onclick=secondstrike;
    document.getElementById("b15").style.visibility="visible";
  document.getElementById("you").innerText="あなたが先攻か後攻か選んでください";
  document.getElementById("Description").innerText="";
  }     
  divide();
  divideArray=array.divide(6);// ググってコピペした
  console.log("Arrayの中身は答えです");
  console.log(divideArray);
  B12=6;
}


function firststrike(){
  document.getElementById("b14").onclick="";
  document.getElementById("b14").className="bun";
  document.getElementById("b15").onclick="";
  document.getElementById("b15").style.visibility="hidden";
  document.getElementById("you").innerText="あなた　"+K+"組";
  document.getElementById("cp").innerText="PC　　"+K+"組";
  document.getElementById("Uor").innerText="あなたの番です";
  document.getElementById("Description").innerText="";
  flag=1;
}


function secondstrike(){
  document.getElementById("b14").onclick="";
  document.getElementById("b14").className="bun";
  document.getElementById("b14").innerText="後攻";
  document.getElementById("b15").onclick="";
  document.getElementById("b15").style.visibility="hidden";
  document.getElementById("you").innerText="あなた　"+K+"組";
  document.getElementById("cp").innerText="PC　　"+K+"組";
  document.getElementById("Description").innerText=""; 
  flag=-1;
  PCselect()
}



function PCselect(){
  document.getElementById("Uor").innerText="PCの番です";
  setTimeout(stPC, 1000);
  setTimeout(comparisioncp, 4000);
  PCfirst=true;
  PCsecond=true; 
}


function select(id){
  if(flag===1){
    if(first==1){
      if(second==false){
        document.getElementById("Description").innerText="🃏";
        comparision();
      }else{ 
        for(i=0;i<B;i++){//1枚目
          for(j=0;j<B12;j++){
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
        lock1();//もう一回押してもひっくり返らないように
        first=0;
      }
    }else if(first==0){
      for(i=0;i<B;i++){//２枚目
        for(j=0;j<B12;j++){
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
      if(B11==2){
        if(S1i===S2i&&S1j===S2j){// 同じトランプを二回連続で選んだ時に消えないようにする
          lock1();
          first=0;
        }else{
          K++;
          if(B13==1){
            document.getElementById("you").innerText=+K+"回 "+P+"組";
          }else if(B13==2){
            document.getElementById("you").innerText="あなた　"+P+"組";
          }
          first=1;
          document.getElementById("Description").innerText="任意のトランプを押してください";
          second=false;
        }
      }else if(B11==3){
        comparisionfor2();//2枚を比べる
        first=-1;
        if(S1i==S2i&&S1j==S2j){// 同じトランプを二回連続で選んだ時に消えないようにする
          lock1();
          first=0;
        }
      }
    }else if(first=-1){
      for(i=0;i<B;i++){//3枚目
        for(j=0;j<B12;j++){
          let Id="A"+(i+1)+(j+1);
          if(id==Id){
            let element3=document.getElementById(id);
            element3.src="photo/0"+divideArray[i][j]+".png";
            S3=divideArray[i][j];
            S3i=i+1; //行
            S3j=j+1; //列
          }
        }
      }
      if(S1i==S3i&&S1j==S3j||S2i==S3i&&S2j==S3j){// 同じトランプを二回連続で選んだ時に消えないようにする
        lock2();
        first=-1;
      }else{// 3個別のトランプを選んだ
        K++;
        if(B13==1){
          document.getElementById("you").innerText=+K+"回 "+P+"組";
        }else if(B13==2){
          document.getElementById("you").innerText="あなた　"+K+"回 "+P+"組";
        }
        first=1;
        document.getElementById("Description").innerText="任意のトランプを押してください";
        second=false;
        document.getElementById("b15").style.visibility="hidden";
        Skip=true;
      }
    }
  }
}

function lock1(){//もう一回押してもひっくり返らないように
  element1="photo/0"+S1+".png";
}


function lock2(){//もう一回押してもひっくり返らないように
  element2="photo/0"+S2+".png";
}

  
function stPC(){
  var l = brray.length;
  if(B11==2){
    if(PCfirst==true){
      for(i=0;i<=l;i++){
        for(j=0;j<=l;j++){
          if(PCsecond==true){
            if(drray[i]===drray[j]&&i<=j){        
              if(brray[i]!=brray[j]||crray[i]!=crray[j]){//違うのをめくった時
                document.getElementById("A"+brray[i]+crray[i]).src="photo/0"+drray[i]+".png";
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
      if(PCfirst===true){
        CP1();
        setTimeout(CP2,500)
      }
    }
    PCfirst=true;
    PCsecond=true;
  }
  if(B11==3){
    if(PCfirst==true){
      for(i=0;i<=l;i++){
        for(j=0;j<=l;j++){
          for(k=0;k<=l;k++){
            if(PCsecond==true){
              if(drray[i]===drray[j]&&i<=j){
                if(drray[j]===drray[k]&&j<=k){
                  if(brray[i]!=brray[j]||crray[i]!=crray[j]){
                    if(brray[j]!=brray[k]||crray[j]!=crray[k]){ 
                      if(brray[k]!=brray[i]||crray[k]!=crray[i]){ //違うのをめくった時
                        document.getElementById("A"+brray[i]+crray[i]).src="photo/0"+drray[i]+".png";
                        S1icp=brray[i];
                        S1jcp=crray[i];
                        S1cp=drray[i];
                        document.getElementById("A"+brray[j]+crray[j]).src="photo/0"+drray[j]+".png";
                        S2icp=brray[j];
                        S2jcp=crray[j];
                        S2cp=drray[j];
                        document.getElementById("A"+brray[k]+crray[k]).src="photo/0"+drray[k]+".png";
                        S3icp=brray[k];
                        S3jcp=crray[k];
                        S3cp=drray[k];
                        PCfirst=false;
                        PCsecond=false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if(PCfirst===true){
        CP1();
        setTimeout(CP2,1000)
        setTimeout(CP3,2000)
      }
    }
    PCfirst=true;
    PCsecond=true;
  }
}
 
 
function CP1(){
  var B2=B12/2;
  if(B11==2){
    for(let E=1;E=50;E++){
      S1icp=Math.floor(Math.random()*Math.floor(4)+1);
      S1jcp=Math.floor(Math.random()*Math.floor(B2)+1);
      if(document.getElementById("A"+S1icp+S1jcp).src.indexOf("photo/00.png") > -1){
        break;
      }
    }
  }
  if(B11==3){
    for(let E=1;E=50;E++){
      S1icp=Math.floor(Math.random()*Math.floor(3)+1);
      S1jcp=Math.floor(Math.random()*Math.floor(B12)+1);
      if(document.getElementById("A"+S1icp+S1jcp).src.indexOf("photo/00.png") > -1){
        break;
      }
    }
  }
  document.getElementById("A"+S1icp+S1jcp).src="photo/0"+divideArray[S1icp-1][S1jcp-1]+".png";
  S1cp=divideArray[S1icp-1][S1jcp-1];
}


function CP2(){
  var B2=B12/2;
  if(B11==2){
    for(let R=1;R=24;R++){
      S2icp=Math.floor(Math.random()*Math.floor(4)+1);
      S2jcp=Math.floor(Math.random()*Math.floor(B2)+1);
      if(document.getElementById("A"+S2icp+S2jcp).src.indexOf("photo/00.png") > -1){
        if(S1icp===S2icp&&S1jcp===S2jcp){
        }else{
          break;
        }
      }
    }
  }
  if(B11==3){
    for(let R=1;R=24;R++){
      S2icp=Math.floor(Math.random()*Math.floor(3)+1);
      S2jcp=Math.floor(Math.random()*Math.floor(B12)+1);
      if(document.getElementById("A"+S2icp+S2jcp).src.indexOf("photo/00.png") > -1){
        if(S1icp===S2icp&&S1jcp===S2jcp){
        }else{
          break;
        }
      }
    }
  }
  document.getElementById("A"+S2icp+S2jcp).src="photo/0"+divideArray[S2icp-1][S2jcp-1]+".png";
  S2cp=divideArray[S2icp-1][S2jcp-1];
}


function CP3(){
  for(let R=1;R=24;R++){
    S3icp=Math.floor(Math.random()*Math.floor(3)+1);
    S3jcp=Math.floor(Math.random()*Math.floor(B12)+1);
    if(document.getElementById("A"+S3icp+S3jcp).src.indexOf("photo/00.png") > -1){
      if(S3icp===S1icp&&S3jcp===S1jcp){
      }else{
        if(S3icp===S2icp&&S3jcp===S2jcp){
        }else{
          break;
        }
      }
    } 
  }
  document.getElementById("A"+S3icp+S3jcp).src="photo/0"+divideArray[S3icp-1][S3jcp-1]+".png";
  S3cp=divideArray[S3icp-1][S3jcp-1];
}


function comparision(){
  if(B11==2){
    if(S1==S2){//１枚目と２枚目が同じ数字になった時
      let Element1=document.getElementById("A"+S1i+S1j);
      let Element2=document.getElementById("A"+S2i+S2j);
      Element1.src=Element2.src="photo/clean.png";
      Element1.onclick=Element2.onclick="";
      P++;
      if(B13==1){
        document.getElementById("you").innerText=K+"回 "+P+"組";
        if(P==B12){// ペアが全部できた時
            document.getElementById("you").innerText="🎉🎉記録　"+K+"回🎉🎉";
        }
      }else if(B13==2){
        document.getElementById("you").innerText="あなた　"+P+"組"; 
      if(P+Pcp==B12){// ペアが全部できた時
        if(P>Pcp){
          document.getElementById("Uor").innerText="🎉🎉あなたの勝ち🎉🎉";
        }else if(Pcp>P){
          document.getElementById("Uor").innerText="😭😭あなたの負け😭😭";
        }else if(Pcp==P){
          document.getElementById("Uor").innerText="引き分け";
        }
        document.getElementById("reload").innerText="リロードしてね";
      }
    }
      for(i=0;i<=100;i++){
        if(S1==drray[i]){
          brray.splice(i,1);
          crray.splice(i,1);
          drray.splice(i,1);
          i--;
        }
      } 
      flag=1;
    }else{ //１枚めと二枚めが違う数字の時
      let Element1=document.getElementById("A"+S1i+S1j);
      Element1.src="photo/00.png";
      let Element2=document.getElementById("A"+S2i+S2j);
      Element2.src="photo/00.png";
      brray.push(S1i,S2i);
      crray.push(S1j,S2j);
      drray.push(S1,S2);
      if(B13==1){
        document.getElementById("you").innerText=+K+"回 "+P+"組";
      }else if(B13==2){ 
        document.getElementById("you").innerText="あなた　"+P+"組";
      }
      if(P+Pcp<B12){
        if(B13==2){
          flag=-1;
          PCselect();
        }else if(B13==1){
          flag=1;
          first=1;
        }
      }
    }
    second=true;
  }else if(B11==3){
    if(S1===S2&&S2===S3){//１枚目と２枚目と３枚目が同じ数字になった時
      let Element1=document.getElementById("A"+S1i+S1j);
      let Element2=document.getElementById("A"+S2i+S2j);
      let Element3=document.getElementById("A"+S3i+S3j);
      Element1.src=Element2.src=Element3.src="photo/clean.png";
      Element1.onclick=Element2.onclick=Element3.onclick="";
      P++;
      if(B13==1){
        document.getElementById("you").innerText=K+"回 "+P+"組";
        if(P==B12){// ペアが全部できた時
            document.getElementById("you").innerText="🎉🎉記録　"+K+"回🎉🎉";
        }
      }else if(B13==2){
        document.getElementById("you").innerText="あなた　"+P+"組"; 
      if(P+Pcp==B12){// ペアが全部できた時
        if(P>Pcp){
          document.getElementById("Uor").innerText="🎉🎉あなたの勝ち🎉🎉";
        }else if(Pcp>P){
          document.getElementById("Uor").innerText="😭😭あなたの負け😭😭";
        }else if(Pcp==P){
          document.getElementById("Uor").innerText="引き分け";
        }
        document.getElementById("reload").innerText="リロードしてね";
      }
    }
      for(i=0;i<=100;i++){
        if(S1==drray[i]){
          brray.splice(i,1);
          crray.splice(i,1);
          drray.splice(i,1);
          i--;
        }
      }
      flag=1; 
    }else{ //3まいが違う数字の時
      let Element1=document.getElementById("A"+S1i+S1j);
      Element1.src="photo/00.png";
      let Element2=document.getElementById("A"+S2i+S2j);
      Element2.src="photo/00.png";
      let Element3=document.getElementById("A"+S3i+S3j);
      Element3.src="photo/00.png";
      brray.push(S1i,S2i,S3i);
      crray.push(S1j,S2j,S3j);
      drray.push(S1,S2,S3);
      if(P+Pcp<B12){
        flag=-1;
        if(B13==2){
          PCselect();
          flag=-1;
        }else if(B13==1){
          flag=1;
          first=1;
        }
      }
    }
    second=true;
  }
}


function comparisionfor2(){
  if(S1!=S2){//１枚目と２枚目が違う
    if(B13==2){
      document.getElementById("b15").style.visibility="visible";
      document.getElementById("b15").innerText="SKIP";
      document.getElementById("b15").onclick=skip;
      Skip=false;
    }
  }else if(S1==S2){//1枚目と２枚目が一緒
    Skip=true;
  }
}


function comparisioncp(){
  if(B11==2){
    if(S1cp===S2cp){//１枚目と２枚目が同じ数字になった時
      document.getElementById("A"+S1icp+S1jcp).src="photo/clean.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/clean.png";
      document.getElementById("A"+S1icp+S1jcp).onclick=document.getElementById("A"+S2icp+S2jcp).onclick="";
      Pcp++;
      document.getElementById("cp").innerText="PC "+Pcp+"組";
      if(P+Pcp==B12){// ペアが８組できた時＝全部できた時
        if(P>Pcp){
          document.getElementById("Uor").innerText="🎉🎉あなたの勝ち🎉🎉";
        }else if(Pcp>P){
          document.getElementById("Uor").innerText="😭😭あなたの負け😭😭";
        }else if(Pcp=P){
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
      flag=-1;
    }else{ //1枚目と２枚目が違う時
      brray.push(S1icp,S2icp);
      crray.push(S1jcp,S2jcp);
      drray.push(S1cp,S2cp);     
      document.getElementById("A"+S1icp+S1jcp).src="photo/00.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/00.png";
      flag=1;
      document.getElementById("Uor").innerText="あなたの番です";
    }
  }
  if(B11==3){
    if(S1cp==S2cp&&S2cp==S3cp){//１枚目と２枚目が同じ数字になった時
      document.getElementById("A"+S1icp+S1jcp).src="photo/clean.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/clean.png";
      document.getElementById("A"+S3icp+S3jcp).src="photo/clean.png";
      document.getElementById("A"+S1icp+S1jcp).onclick=document.getElementById("A"+S2icp+S2jcp).onclick=document.getElementById("A"+S3icp+S3jcp).onclick="";
      Pcp++;
      document.getElementById("cp").innerText="PC "+Pcp+"組";
      if(P+Pcp==B12){// ペアが全部できた時
        if(P>Pcp){
          document.getElementById("Uor").innerText="🎉🎉あなたの勝ち🎉🎉";
        }else if(Pcp>P){
          document.getElementById("Uor").innerText="😭😭あなたの負け😭😭";
        }else if(Pcp==P){
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
      flag=-1;
    }else{ //2n+1枚目を引いた時(n>=1)
      brray.push(S1icp,S2icp,S3icp);
      crray.push(S1jcp,S2jcp,S3jcp);
      drray.push(S1cp,S2cp,S3cp);
      document.getElementById("A"+S1icp+S1jcp).src="photo/00.png";
      document.getElementById("A"+S2icp+S2jcp).src="photo/00.png";
      document.getElementById("A"+S3icp+S3jcp).src="photo/00.png";
      flag=1; 
      document.getElementById("Uor").innerText="あなたの番です";
    }
  }
}

function skip(){
  if(Skip==true){
    document.getElementById("b15").innerText="";
    document.getElementById("b15").style.visibility="hidden";
  }else{
    let Element1=document.getElementById("A"+S1i+S1j);
    Element1.src="photo/00.png";
    let Element2=document.getElementById("A"+S2i+S2j);
    Element2.src="photo/00.png";
    document.getElementById("b15").innerText="";
    document.getElementById("b15").style.visibility="hidden";
    Skip=true;
    brray.push(S1i,S2i);
    crray.push(S1j,S2j);
    drray.push(S1,S2);
    first=1;
    flag=-1;
    PCselect();
    second=true;
  }
}