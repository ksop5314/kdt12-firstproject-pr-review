
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

likeBtn.addEventListener("click", () => {
    const isLiked = likeBtn.classList.toggle("liked");
    likeBtn.classList.toggle("fa-regular", !isLiked);
    likeBtn.classList.toggle("fa-solid", isLiked);

    // 싫어요는 자동 해제
    if (isLiked) {
        dislikeBtn.classList.remove("disliked", "fa-solid");
        dislikeBtn.classList.add("fa-regular");
    }
});

dislikeBtn.addEventListener("click", () => {
    const isDisliked = dislikeBtn.classList.toggle("disliked");
    dislikeBtn.classList.toggle("fa-regular", !isDisliked);
    dislikeBtn.classList.toggle("fa-solid", isDisliked);

    // 좋아요는 자동 해제
    if (isDisliked) {
        likeBtn.classList.remove("liked", "fa-solid");
        likeBtn.classList.add("fa-regular");
    }
});