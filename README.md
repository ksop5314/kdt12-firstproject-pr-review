# YouTube Clone Project 🎬

이 프로젝트는 **YouTube의 기본 기능을 클론**하여 만든 웹 애플리케이션입니다.  
메인 페이지에서는 영상 목록이 보여지고, 각 영상을 클릭하면 해당 영상의 상세 페이지로 이동합니다. 모든 데이터는 **동기적으로 JavaScript를 활용해 가져오고**, DOM 조작도 보안을 고려하여 안전한 방식으로 처리했습니다.

---

## 🛠 주요 기능

- 메인 페이지에서 영상 리스트 렌더링
- `videoId`를 쿼리 스트링으로 전달하여 상세 페이지로 이동
- 각 페이지는 동기적으로 데이터를 가져와서 구성됨
- `innerHTML` 대신 DOM API(`createElement`, `textContent`)를 사용하여 보안 강화

---

## 📁 디렉토리 구조

first_project/<br>
├── css/<br>
│ ├── default.css # 공통 스타일<br>
│ └── video.css # video 페이지 전용 스타일<br>
├── js/<br>
│ ├── default.js # 공통 JS (공용 로직)<br>
│ ├── description.js # 영상 설명 출력<br>
│ ├── like-dislike-btn.js # 좋아요 / 싫어요 버튼 처리<br>
│ ├── main-page.js # index.html(메인 페이지)용 JS<br>
│ ├── reply-box.js # 댓글 입력 및 출력 처리<br>
│ ├── right-sidebar-video.js # 추천 영상 사이드바 처리<br>
│ └── video-page.js # video.html 전용 로직<br>
├── pages/<br>
│ └── header.html # 공통 header<br>
├── index.html # 메인 페이지 (영상 리스트)<br>
├── video.html # 영상 상세 페이지<br>

## 🧰 기술 스택

- HTML5, CSS3
- JavaScript (Vanilla JS)

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
</div>
