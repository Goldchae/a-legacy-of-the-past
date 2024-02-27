function fucfuc(){
  let i = 0
  let score = 0
  while (i <= 2){
    const firstNum = Math.floor(Math.random()*9)+1;
    const secondNum = Math.floor(Math.random()*9)+1;
    const result = firstNum * secondNum;
    let gogo = true;
    var userAnswer = prompt(firstNum + " 곱하기 " + secondNum + "는?") 
    if(result === Number(userAnswer)){
      alert("맞았습니다!")
      i += 1
      score += 1
    }else{
      alert("엥?")
      i += 1
    }
  }
  if (Number(score) <= 2){
    alert(score + "/" + "3"+"   분발하세요!!")
  }else{
    alert(score + "/" + "3"+"   만점!!")
  }
}

function fucfuc2(){
  let i = 0
  let score = 0
  while (i <= 4){
    const firstNum = Math.floor(Math.random()*9)+1;
    const secondNum = Math.floor(Math.random()*9)+1;
    const result = firstNum * secondNum;
    let gogo = true;
    var userAnswer = prompt(firstNum + " 곱하기 " + secondNum + "는?") 
    if(result === Number(userAnswer)){
      alert("맞았습니다!")
      i += 1
      score += 1
    }else{
      alert("엥?")
      i += 1
    }
  }
  if (Number(score) <= 4){
    alert(score + "/" + "5"+"   분발하세요!!")
  }else{
    alert(score + "/" + "5"+"   만점!!")
  }
}