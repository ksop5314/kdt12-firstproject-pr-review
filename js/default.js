
// header.html > index.html 로 불러오기
document.addEventListener("DOMContentLoaded", function () {
   fetch("/first_project/pages/header.html")
       .then(res => res.text())
       .then(data => {
          document.getElementById("header").innerHTML = data;

          initHeaderToggle();
       });
});

function initHeaderToggle() {
    const toggleButton = document.querySelector('.toggle-button');
    const toggleList = document.querySelector('.toggle-list');

    toggleButton.addEventListener("click", () => {
        toggleButton.classList.toggle("active");
        toggleList.classList.toggle("active");
    });
}