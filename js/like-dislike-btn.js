
const titleLikeBtn = document.getElementById("contentLikeBtn");
const likeBtn = document.getElementById("likeBtn");
const titleDislikeBtn = document.getElementById("contentDislikeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likeCnt = document.getElementById("likeCnt");

titleLikeBtn.addEventListener("click", () => {

    let test = likeCnt.innerText;
    let cnt = parseInt(test === "" ? 0 : test);

    const isLiked = likeBtn.classList.toggle("liked");
    likeBtn.classList.toggle("fa-regular", !isLiked);
    likeBtn.classList.toggle("fa-solid", isLiked);

    // 좋아요와 싫어요 중 하나만 선택 가능
    if (isLiked) {
        dislikeBtn.classList.remove("disliked", "fa-solid");
        dislikeBtn.classList.add("fa-regular");

        cnt += 1;
        likeCnt.innerText = cnt.toString();
        console.log(cnt);
    }

    if (!isLiked) {
        cnt -= 1;
        if (cnt === 0) {
            likeCnt.innerText = "";
            console.log(cnt);
        } else {
            likeCnt.innerText = cnt.toString();
        }
    }
});

titleDislikeBtn.addEventListener("click", () => {

    let test = likeCnt.innerText;
    let cnt = parseInt(test === "" ? 0 : test);

    const isDisliked = dislikeBtn.classList.toggle("disliked");
    dislikeBtn.classList.toggle("fa-regular", !isDisliked);
    dislikeBtn.classList.toggle("fa-solid", isDisliked);

    // 좋아요와 싫어요 중 하나만 선택 가능
    if (isDisliked) {
        const isLiked = likeBtn.classList.toggle("liked");
        likeBtn.classList.remove("liked", "fa-solid");
        likeBtn.classList.add("fa-regular");

        if (!isLiked) {
            cnt -= 1;
            if (cnt === 0) {
                likeCnt.innerText = "";
            } else {
                likeCnt.innerText = cnt.toString();
            }
        }
    }
});

// 댓글 좋아요 싫어요
// user1
const replyLikeBtn1 = document.getElementById("replyLikeBtn1");
const replyDislikeBtn1 = document.getElementById("replyDislikeBtn1");
const replyLikeCnt1 = document.getElementById("replyLikeCnt1");

replyLikeBtn1.addEventListener("click", () => {
    const isReplyLiked = replyLikeBtn1.classList.toggle("liked");
    replyLikeBtn1.classList.toggle("fa-regular", !isReplyLiked);
    replyLikeBtn1.classList.toggle("fa-solid", isReplyLiked);

    let test = replyLikeCnt1.innerText;
    let cnt = parseInt(test === "" ? 0 : test);

    if (isReplyLiked) {
        replyDislikeBtn1.classList.remove("disliked", "fa-solid");
        replyDislikeBtn1.classList.add("fa-regular");

        cnt += 1;
        replyLikeCnt1.innerText = cnt.toString();
        console.log(cnt);
    }

    if (!isReplyLiked) {
        cnt -= 1;
        if (cnt === 0 ){
            replyLikeCnt1.innerText = "";
            console.log(cnt);
        } else {
            replyLikeCnt1.innerText = cnt.toString();
        }
    }
});

replyDislikeBtn1.addEventListener("click", () => {
    const isReplyDisliked = replyDislikeBtn1.classList.toggle("disliked");
    replyDislikeBtn1.classList.toggle("fa-regular", !isReplyDisliked);
    replyDislikeBtn1.classList.toggle("fa-solid", isReplyDisliked);

    let test = replyLikeCnt1.innerText;
    let cnt = parseInt(test === "" ? 0 : test);

    if (isReplyDisliked) {
        const isReplyLiked = replyLikeBtn1.classList.toggle("liked");
        replyLikeBtn1.classList.remove("liked", "fa-solid");
        replyLikeBtn1.classList.add("fa-regular");

        console.log(isReplyLiked);
        console.log(cnt);

        if (!isReplyLiked) {
            cnt -= 1;
            if (cnt === 0) {
                replyLikeCnt1.innerText = "";
            } else {
                replyLikeCnt1.innerText = cnt.toString();
            }
        }
    }

});

// user2 좋아요 싫어요
const replyLikeBtn2 = document.getElementById("replyLikeBtn2");
const replyDislikeBtn2 = document.getElementById("replyDislikeBtn2");
const replyLikeCnt2 = document.getElementById("replyLikeCnt2");

replyLikeBtn2.addEventListener("click", () => {
    const isReplyLiked = replyLikeBtn2.classList.toggle("liked");
    replyLikeBtn2.classList.toggle("fa-regular", !isReplyLiked);
    replyLikeBtn2.classList.toggle("fa-solid", isReplyLiked);

    let test = replyLikeCnt2.innerText;
    let cnt = parseInt(test === "" ? 0 : test);

    if (isReplyLiked) {
        replyDislikeBtn2.classList.remove("disliked", "fa-solid");
        replyDislikeBtn2.classList.add("fa-regular");

        cnt += 1;
        replyLikeCnt2.innerText = cnt.toString();
        console.log(cnt);
    }

    if (!isReplyLiked) {
        cnt -= 1;
        if (cnt === 0 ){
            replyLikeCnt2.innerText = "";
            console.log(cnt);
        } else {
            replyLikeCnt2.innerText = cnt.toString();
        }
    }
});

replyDislikeBtn2.addEventListener("click", () => {
    const isReplyDisliked = replyDislikeBtn2.classList.toggle("disliked");
    replyDislikeBtn2.classList.toggle("fa-regular", !isReplyDisliked);
    replyDislikeBtn2.classList.toggle("fa-solid", isReplyDisliked);

    let test = replyLikeCnt2.innerText;
    let cnt = parseInt(test === "" ? 0 : test);

    if (isReplyDisliked) {
        const isReplyLiked = replyLikeBtn2.classList.toggle("liked");
        replyLikeBtn2.classList.remove("liked", "fa-solid");
        replyLikeBtn2.classList.add("fa-regular");

        console.log(isReplyLiked);
        console.log(cnt);

        if (!isReplyLiked) {
            cnt -= 1;
            if (cnt === 0) {
                replyLikeCnt2.innerText = "";
            } else {
                replyLikeCnt2.innerText = cnt.toString();
            }
        }
    }
});

// user3 좋아요 싫어요
// const replyLikeBtn3 = document.getElementById("replyLikeBtn3");
// const replyDislikeBtn3 = document.getElementById("replyDislikeBtn3");
// const replyLikeCnt3 = document.getElementById("replyLikeCnt3");
//
// replyLikeBtn3.addEventListener("click", () => {
//     const isReplyLiked = replyLikeBtn3.classList.toggle("liked");
//     replyLikeBtn3.classList.toggle("fa-regular", !isReplyLiked);
//     replyLikeBtn3.classList.toggle("fa-solid", isReplyLiked);
//
//     let test = replyLikeCnt3.innerText;
//     let cnt = parseInt(test === "" ? 0 : test);
//
//     if (isReplyLiked) {
//         replyDislikeBtn3.classList.remove("disliked", "fa-solid");
//         replyDislikeBtn3.classList.add("fa-regular");
//
//         cnt += 1;
//         replyLikeCnt3.innerText = cnt.toString();
//         console.log(cnt);
//     }
//
//     if (!isReplyLiked) {
//         cnt -= 1;
//         if (cnt === 0 ){
//             replyLikeCnt3.innerText = "";
//             console.log(cnt);
//         } else {
//             replyLikeCnt3.innerText = cnt.toString();
//         }
//     }
// });
//
// replyDislikeBtn3.addEventListener("click", () => {
//     const isReplyDisliked = replyDislikeBtn3.classList.toggle("disliked");
//     replyDislikeBtn3.classList.toggle("fa-regular", !isReplyDisliked);
//     replyDislikeBtn3.classList.toggle("fa-solid", isReplyDisliked);
//
//     let test = replyLikeCnt3.innerText;
//     let cnt = parseInt(test === "" ? 0 : test);
//
//     if (isReplyDisliked) {
//         const isReplyLiked = replyLikeBtn3.classList.toggle("liked");
//         replyLikeBtn3.classList.remove("liked", "fa-solid");
//         replyLikeBtn3.classList.add("fa-regular");
//
//         console.log(isReplyLiked);
//         console.log(cnt);
//
//         if (!isReplyLiked) {
//             cnt -= 1;
//             if (cnt === 0) {
//                 replyLikeCnt3.innerText = "";
//             } else {
//                 replyLikeCnt3.innerText = cnt.toString();
//             }
//         }
//     }
// });