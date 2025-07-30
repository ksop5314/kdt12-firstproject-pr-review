
// header.html > index.html 로 불러오기
document.addEventListener("DOMContentLoaded", function () {
   fetch("/first_project/pages/header.html")
       .then(res => res.text())
       .then(data => {
          document.getElementById("header").innerHTML = data;

          initHeaderToggle();
          initProfileToggle();
       });
});

// 왼쪽 상단 YouTube toggle bar
function initHeaderToggle() {
    const toggleButton = document.querySelector('.toggle-button');
    const toggleList = document.querySelector('.toggle-list');

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        toggleList.classList.toggle("active");
    });
}

// 오른쪽 상단 profile toggle bar
function initProfileToggle() {
    const profileToggleBtn = document.querySelector(".user-profile");
    const profileToggleList = document.getElementById("userMenuBar");

    profileToggleBtn.addEventListener("click", () => {

        if (profileToggleList.style.display === "none") {
            profileToggleList.style.display = "block";
        } else {
            profileToggleList.style.display = "none";
        }
    });

    // 외부 클릭으로 토글 닫기
    window.addEventListener("click", (e) => {
        if (!profileToggleBtn.contains(e.target) && !profileToggleList.contains(e.target)) {
            profileToggleList.style.display = "none";
        }
    });
}