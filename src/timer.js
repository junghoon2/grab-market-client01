import React from "react";

// 처음 값은 0으로 시작한다. useState(0) 들어가 있다.
function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  // function updateTime() {
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      {/* 변수를 사용하려면 {} 대괄호 사용한다. */}
      <h3>{time}초</h3>
      {/* <button onClick={updateTime}>1씩 올려주세요</button> */}
      <button>1씩 올려주세요.</button>
    </div>
  );
}

export default TimerComponent;
