//요소 불러오기
var userForm = document.getElementsByTagName("form")[0];//폼
var RangSay = document.getElementsByTagName("h1")[0];//랑쥐말
var userWindow = document.getElementsByTagName("input")[0]; //입력창

const numbers = [1,2,3,4,5,6,7,8,9];
const comNumbers = []; //컴퓨터의 답
for ( var i=0; i<3; i+=1){
  var pickedNumber = numbers.splice(Math.floor(Math.random()*(9-i)),1)[0];
  comNumbers.push(pickedNumber);
}//컴퓨터가 낼 문제 뽑기 완료 
console.log (comNumbers.join(''));
var wrongtime = 0;//틀린횟수

userForm.addEventListener('submit', function callback (Event){
    Event.preventDefault();
    var userAnswer = userWindow.value; //사용자의 답은 userAnswer
    console.log(userAnswer)
    if (userAnswer === comNumbers.join('')){  //답이 맞은경우(홈런)
        RangSay.textContent = '홈런!!'
        userWindow.value ='';
        wrongtime += 15
      } 
    else {//답이 틀린 경우(.스트라이크.볼)
        var strike = 0;
        var ball = 0;
        var userAnswerList = userAnswer.split('');//사용자가입력한답을리스트로!
        wrongtime += 1; 
        if(wrongtime > 10 && wrongtime < 12){//틀린횟수 10번초과
            RangSay.textContent = '시도횟수 10번을 초과했어! 답은'+ comNumbers.join('')
            userWindow.value ='';
          }
        else if(wrongtime <= 10){//틀린횟수 10번이하
            for (var i =0; i<3; i+=1){
                if (comNumbers[i] === Number(userAnswerList[i])){//스트라이크
                    strike += 1;
                } 
                else if (comNumbers.indexOf(Number(userAnswerList[i]))>-1 ) { //볼
                    ball += 1;
                }
            }
            userWindow.value ='';
            userWindow.focus();
            RangSay.textContent = strike +'스트라이크' + ball + '볼!'
          }
    }
});