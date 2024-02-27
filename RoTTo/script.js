alert('1부터 45까지의 숫자 중 7개를 중복 없이 입력하세요!')
var userArray = [];
for(var i= 1;i<8;i++){
  var num = prompt(i+'번째 숫자를 입력하세요!','')
  var Num = Number(num)
  userArray.push(Num)
}
userArray.sort(function(p, c){return p-c;});
console.log(userArray)

//
var Lottoball = Array(45);
var Lottoballs = Lottoball.fill(); //empty 반복 불가해서 fill 써야 함
var ballMap = Lottoballs.map(function(ballNumber,key) {
  return key +1;
});
//뽑기
var picking = [];
while (ballMap.length > 0) {
  var Value = ballMap.splice(Math.floor(Math.random()*ballMap.length),1)[0];
  picking.push(Value)
}
var bonusNumber = picking[picking.length -1];
var LottoNumbers = picking.slice(0,6)
console.log("당첨숫자는",LottoNumbers.sort(function(p, c){ return p-c;}),"보너스",bonusNumber)
var resultwindow = document.getElementById('resultwindow');
function coloring(num,resul){
  var ball = document.createElement('div');
  ball.textContent = num;
  ball.style.display ='lineline-block';
  ball.style.border ='2px solid black';
  ball.style.borderRadius = '20px';
  ball.style.width = '40px';
  ball.style.height = '40px';
  ball.style.textAlign ='center';
  ball.style.fontSize = '30px';
  ball.style.marginBottom = '20px';
  ball.style.marginLeft ='20px'
  var backgroundcolor;
  if (num <= 10){
    backgroundcolor ='red'
  }else if(num <=20 ){
    backgroundcolor ='orange'
  }else if(num <=30 ){
    backgroundcolor ='yellow'
  }else if(num <= 40){
    backgroundcolor ='blue'
  }else{
    backgroundcolor ='green'
  }
  ball.style.background = backgroundcolor;
  resul.appendChild(ball);
}

setTimeout(function callbackfunc(){
  coloring(LottoNumbers[0],resultwindow)
},1000)
setTimeout(function callbackfunc(){
  coloring(LottoNumbers[1],resultwindow)
},2000)
setTimeout(function callbackfunc(){
  coloring(LottoNumbers[2],resultwindow)
},3000)
setTimeout(function callbackfunc(){
  coloring(LottoNumbers[3],resultwindow)
},4000)
setTimeout(function callbackfunc(){
 coloring(LottoNumbers[4],resultwindow)
},5000)
setTimeout(function callbackfunc(){
 coloring(LottoNumbers[5],resultwindow)
},6000)

setTimeout(function callbackfunc(){
  var bonusroom = document.getElementsByClassName('bonuswindow')[0];
  var bonusball = document.createElement('div');
  bonusball.textContent = bonusNumber;
  bonusball.style.display ='lineline-block';
  bonusball.style.border ='2px solid black';
  bonusball.style.borderRadius = '20px';
  bonusball.style.width = '40px';
  bonusball.style.height = '40px';
  bonusball.style.fontSize = '30px';
  bonusball.style.marginLeft ='20px'
  bonusball.style.textAlign ='center';
  var backgroundcolor;
  if (bonusNumber <= 10){
    backgroundcolor ='red'
  }else if(bonusNumber <=20 ){
    backgroundcolor ='orange'
  }else if(bonusNumber <=30 ){
    backgroundcolor ='yellow'
  }else if(bonusNumber <= 40){
    backgroundcolor ='blue'
  }else{
    backgroundcolor ='green'
  }
  bonusball.style.background = backgroundcolor;
  bonusroom.appendChild(bonusball);
},8000)

var reresult = userArray.filter(it => LottoNumbers.includes(it));
var realresult = reresult.length
var realresultwindow = document.getElementsByTagName('h1');
setTimeout( function gogo(){document.write(realresult,"개 맞췄습니다!" + realresultwindow[0].innerText)}, 9000);
