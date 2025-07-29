
const videos = [
    {
        title: "와 미친.. 강등권과 3점차.. 김판곤 끝난 것 같다 [울산vs대전]",
        channel: "달수네라이브",
        views: "4만회",
        time: "3일 전",
        thumbnail: "https://i.ytimg.com/vi/ZPQlKwFjKyI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDyHjkPSEs-2c0WNXRKSFAK0u5FIw"
    },
    {
        title: "[EN] 행운의 77회는 핑계고 | EP.77",
        channel: "뜬뜬 DdeunDdeun",
        views: "264만회",
        time: "2달 전",
        thumbnail: "https://i.ytimg.com/vi/QgoGQux_M5U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCrUFTnDj0B3URx-HNnTJZRro42Rg"
    },
    {
        title: "[2025 K리그1] 22R 전북 vs 강원 풀 하이라이트",
        channel: "쿠팡플레이 스포츠",
        views: "5만회",
        time: "4일 전",
        thumbnail: "https://i.ytimg.com/vi/MgKoBlm35tY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB10KjPOnXpMM-QG0crxwjTJ-p8sA"
    },
    {
        title: "난 월 1000 벌어 너는?",
        channel: "웃기시네",
        views: "10만회",
        time: "2일 전",
        thumbnail: "https://i.ytimg.com/vi/qB5aE24YuOQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQYt1IeoqYBie9vd5_mVU7tu5ZbA"
    },
    {
        title: "스프링 제대로 공부했는지 5분안에 확인하는 방법",
        channel: "백기선",
        views: "16만회",
        time: "3년 전",
        thumbnail: "https://i.ytimg.com/vi/bJfbPWEMj_c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDrd2qdeJcP_LbzMiY_4Ere9thKzg"
    }
];

const container = document.getElementById("rightVideoSidebar");
videos.forEach(video => {
   const html = `
        <div class="right-video-item">
            <img src="${video.thumbnail}" class="thumbnail" alt="썸네일">
            <div class="right-video-info">
                <p class="right-video-title">${video.title}</p>
                <p class="right-video-channel">${video.channel}</p>
                <p class="right-video-views">조회수 ${video.views} ㆍ ${video.time}</p>
            </div>
        </div>`;

   container.insertAdjacentHTML("beforeend", html);
});