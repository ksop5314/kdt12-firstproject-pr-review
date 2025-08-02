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

## 🧰 기술 스택

- HTML5, CSS3
- JavaScript (Vanilla JS)

## 📁 디렉토리 구조

first_project/
├── css
│   └── default.css
│   └── video.css
├── index.html
├── video.html
├── js
│   └── default.js
│   └── description.js
│   └── like-dislike-btn.js
│   └── main-page.js
│   └── reply-box.js
│   └── right-sidebar-video.js
│   └── video-page.js
├── /pages
│   ├── header.html
│   ├── index.html
│   ├── video.html
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
