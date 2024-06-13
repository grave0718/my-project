document.addEventListener("DOMContentLoaded", function () {
  // 처음에는 아무 일도 일어나지 않습니다.
  console.log(
    "Game loaded. Look for clues in the HTML and CSS to find the button."
  );

  // 이 예시에서는 CSS를 직접 수정하도록 힌트를 주는 방법을 찾는 것이 좋습니다.
  // 예를 들어, 사용자에게 개발자 도구를 열어 스타일을 수정하라고 할 수 있습니다.

  // 숨겨진 버튼 클릭 이벤트
  document
    .getElementById("hiddenButton")
    .addEventListener("click", function () {
      alert("You found the button! Moving to the next level...");
      // 다음 레벨로 이동하는 코드를 여기에 추가
    });
});
