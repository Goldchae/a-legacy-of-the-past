// 버튼 클릭시 이미지 바뀜 함수
function rockImg() {
  document.getElementById("img").src = "./image/11.PNG";
  var RamNum = Ramchoice();
  // console.log("rockImg:" + RamNum);
  var antNum = 1;
  WhoWin(antNum, RamNum);
};
function sciImg() {
  document.getElementById("img").src = "./image/22.PNG";
  var RamNum = Ramchoice();
  var antNum = 2;
  WhoWin(antNum, RamNum);
};
function papImg() {
  document.getElementById("img").src = "./image/33.PNG";
  var RamNum = Ramchoice();
  var antNum = 3;
  WhoWin(antNum, RamNum);
};

//람쥐이미지 랜덤선택-> 이미지바꾸기 함수
function Ramchoice() {
  var comNum = Math.floor(Math.random() * (4 - 1) + 1)
  if (comNum == 1) {
    document.getElementById("img2").src = "./image/1.PNG";
  } else if (comNum == 2) {
    document.getElementById("img2").src = "./image/2.PNG";
  } else {
    document.getElementById("img2").src = "./image/3.PNG";
  }
  return comNum;
};

// 승부 판별 함수
function WhoWin(a, b) {
  if (a == b) {
    console.log("비겼습니다")
    document.getElementById("img3").src = "./image/fight.jpg";
  } else if (a == 1 && b == 2) {
    console.log("이겼습니다")
    document.getElementById("img3").src = "./image/rrem2.jpg";
  } else if (a == 2 && b == 3) {
    console.log("이겼습니다")
    document.getElementById("img3").src = "./image/rrem2.jpg";
  } else if (a == 3 && b == 1) {
    console.log("이겼습니다")
    document.getElementById("img3").src = "./image/rrem2.jpg";
  } else if (a == 1 && b == 3) {
    console.log("졌습니다")
    document.getElementById("img3").src = "./image/ram2.jpg";
  } else if (a == 1 && b == 3) {
    console.log("졌습니다")
    document.getElementById("img3").src = "./image/ram2.jpg";
  } else {
    console.log("졌습니다")
    document.getElementById("img3").src = "./image/ram2.jpg";
  };
};

