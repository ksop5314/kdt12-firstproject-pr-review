
document.addEventListener("DOMContentLoaded", () => {
    const replyInput = document.getElementById("replyInput");
    const replyActions = document.getElementById("replyActions");
    const cancelBtn = document.getElementById("cancelBtn");
    const submitBtn = document.getElementById("submitBtn");
    const replyText = document.getElementById("replyText");

    replyInput.addEventListener('focus',  () => {
        replyInput.classList.add("active");
        replyActions.style.display = "flex";
        replyText.style.marginBottom = "30px";
        replyInput.placeholder = "";
    });

    cancelBtn.addEventListener("click", () => {
        replyInput.classList.remove("active");
        submitBtn.classList.remove("enabled");
        replyInput.value = "";
        replyActions.style.display = "none";
        replyText.style.marginBottom = "40px";
        replyInput.placeholder = "댓글 추가...";
    });

    replyInput.addEventListener("input", () => {

        if (replyInput.value.trim().length > 0) {
            submitBtn.classList.add("enabled");
        } else {
            submitBtn.classList.remove("enabled");
        }
    });

    const replyBox = document.querySelector(".reply-frame");

    submitBtn.addEventListener("click", (e) => {
        //e.preventDefault();
        const text = replyInput.value.trim();
        if (!text) return;

        const replyListBox = document.createElement("div");
        replyListBox.classList.add("reply-list-box");

        replyListBox.innerHTML = `
          <div class="reply-user-profile">
            <a href="#"><i class="fa-solid fa-user"></i></a>
          </div>
          <div class="each-reply">
            <div id="replyTestUser" class="each-user-name">DooNo (사용자)</div>
            <span id="replyDate" class="reply-date">방금 전</span>
            <pre id="eachReplyText" class="each-reply-text"></pre>
          </div>
          <div class="reply-like-box">
            <div class="reply-like-btn-box">
              <i id="replyLikeBtn" class="fa-regular fa-thumbs-up icon-button reply-like-btn"></i>
            </div>
            <span id="replyLikeCnt" class="reply-like-cnt"></span>
            <div class="reply-dislike-btn-box">
              <i id="replyDislikeBtn" class="fa-regular fa-thumbs-down icon-button reply-dislike-btn"></i>
            </div>
            <div class="reply-btn-box">
              <button class="reply-btn" id="replyBtn">답글</button>
            </div>
          </div>
          <div class="re-reply-input-box" id="reReplyInputBox">
            <div class="re-reply-user-profile">
              <a href="#"><i class="fa-solid fa-user"></i></a>
            </div>
            <input type="text" class="re-reply-input" id="reReplyInput">
            <div class="re-reply-actions" id="reReplyActions">
              <i class="bi bi-emoji-smile re-emoji-button"></i>
              <div class="re-action-buttons">
                <button class="cancel-button" id="reCancelBtn">취소</button>
                <button class="submit-button" id="reSubmitBtn">댓글</button>
              </div>
            </div>
          </div>
          <div class="more-reply-list">

          </div>
       `;

        replyListBox.querySelector(".each-reply-text").textContent = text;
        replyBox.appendChild(replyListBox);

        const replyCnt = document.querySelectorAll(".reply-list-box").length;
        const replyTitle = document.getElementById("replyTitle");
        replyTitle.textContent = ("댓글 " + replyCnt + "개").toString();

        replyInput.value = "";
        submitBtn.classList.remove("enabled");

        const replyLikeBtn = document.getElementById("replyLikeBtn");
        const replyDislikeBtn = document.getElementById("replyDislikeBtn");
        const replyLikeCnt = document.getElementById("replyLikeCnt");

        replyLikeBtn.addEventListener("click", () => {
            const isReplyLiked = replyLikeBtn.classList.toggle("liked");
            replyLikeBtn.classList.toggle("fa-regular", !isReplyLiked);
            replyLikeBtn.classList.toggle("fa-solid", isReplyLiked);

            let test = replyLikeCnt.innerText;
            let cnt = parseInt(test === "" ? 0 : test);

            if (isReplyLiked) {
                replyDislikeBtn.classList.remove("disliked", "fa-solid");
                replyDislikeBtn.classList.add("fa-regular");

                cnt += 1;
                replyLikeCnt.innerText = cnt.toString();
            }

            if (!isReplyLiked) {
                cnt -= 1;
                if (cnt === 0 ){
                    replyLikeCnt.innerText = "";
                } else {
                    replyLikeCnt.innerText = cnt.toString();
                }
            }
        });

        replyDislikeBtn.addEventListener("click", () => {
            const isReplyDisliked = replyDislikeBtn.classList.toggle("disliked");
            replyDislikeBtn.classList.toggle("fa-regular", !isReplyDisliked);
            replyDislikeBtn.classList.toggle("fa-solid", isReplyDisliked);

            let test = replyLikeCnt.innerText;
            let cnt = parseInt(test === "" ? 0 : test);

            if (isReplyDisliked) {
                const isReplyLiked = replyLikeBtn.classList.toggle("liked");
                replyLikeBtn.classList.remove("liked", "fa-solid");
                replyLikeBtn.classList.add("fa-regular");

                if (!isReplyLiked) {
                    cnt -= 1;
                    if (cnt === 0) {
                        replyLikeCnt.innerText = "";
                    } else {
                        replyLikeCnt.innerText = cnt.toString();
                    }
                }
            }
        });

        // 대댓글 영역
        const reReplyBtn = document.getElementById("replyBtn");
        const reReplyInputBox = document.getElementById("reReplyInputBox");
        const reReplyCancelBtn = document.getElementById("reCancelBtn");
        const reReplyInput = document.getElementById("reReplyInput");
        const reReplySubmitBtn = document.getElementById("reSubmitBtn");

        const reReplyBox = document.querySelector(".more-reply-list");

        reReplyBtn.addEventListener("click", () => {
            reReplyInputBox.style.display = "flex";
            reReplySubmitBtn.classList.remove("enabled");
        });

        reReplyCancelBtn.addEventListener("click", () => {
            reReplyInputBox.style.display = "none";
            reReplyInput.value = "";
        });

        reReplyInput.addEventListener("input", () => {
            if (reReplyInput.value.trim().length > 0) {
                reReplySubmitBtn.classList.add("enabled");
            } else {
                reReplySubmitBtn.classList.remove("enabled");
            }
        });

        reReplySubmitBtn.addEventListener("click", (e) => {
            const reReplyText = reReplyInput.value.trim();
            if (!reReplyText) return;

            const reReplyListBox = document.createElement("div");
            reReplyListBox.classList.add("reply-list-box");

            reReplyListBox.innerHTML = `
          <div class="reply-user-profile">
            <a href="#"><i class="fa-solid fa-user"></i></a>
          </div>
          <div class="each-reply">
            <div id="replyTestUser" class="each-user-name">DooNo (사용자)</div>
            <span id="replyDate" class="reply-date">방금 전</span>
            <pre id="eachReplyText" class="each-reply-text"></pre>
          </div>
          <div class="reply-like-box">
            <div class="reply-like-btn-box">
              <i id="replyLikeBtn" class="fa-regular fa-thumbs-up icon-button reply-like-btn"></i>
            </div>
            <span id="replyLikeCnt" class="reply-like-cnt"></span>
            <div class="reply-dislike-btn-box">
              <i id="replyDislikeBtn" class="fa-regular fa-thumbs-down icon-button reply-dislike-btn"></i>
            </div>
          </div>
       `;

            reReplyListBox.querySelector(".each-reply-text").textContent = reReplyText;
            reReplyBox.appendChild(reReplyListBox);

            reReplyInput.value = "";
            reReplySubmitBtn.classList.remove("enabled");
            reReplyInputBox.style.display = "none";

        });

    });


// 댓글에 댓글 달기 버튼
// user1 댓글에 댓글 달기 버튼
    const reReplyBtn1 = document.getElementById("replyBtn1");
    const reReplyInputBox1 = document.getElementById("reReplyInputBox1");
    const reReplyCancelBtn1 = document.getElementById("reCancelBtn1");
    const reReplyInput1 = document.getElementById("reReplyInput1");
    const reReplySubmitBtn1 = document.getElementById("reSubmitBtn1");

    reReplyBtn1.addEventListener("click", () => {
        reReplyInputBox1.style.display = "flex";
        reReplySubmitBtn1.classList.remove("enabled");
    });

    reReplyCancelBtn1.addEventListener("click", () => {
        reReplyInputBox1.style.display = "none";
        reReplyInput1.value = "";
    });

    reReplyInput1.addEventListener("input", () => {
        if (reReplyInput1.value.trim().length > 0) {
            reReplySubmitBtn1.classList.add("enabled");
        } else {
            reReplySubmitBtn1.classList.remove("enabled");
        }
    });

    const reReplyBox1 = document.querySelector(".more-reply-list-1");

    reReplySubmitBtn1.addEventListener("click", (e) => {
        //e.preventDefault();
        const reReplyText = reReplyInput1.value.trim();
        if (!reReplyText) return;

        const reReplyListBox = document.createElement("div");
        reReplyListBox.classList.add("reply-list-box");

        reReplyListBox.innerHTML = `
          <div class="reply-user-profile">
            <a href="#"><i class="fa-solid fa-user"></i></a>
          </div>
          <div class="each-reply">
            <div id="replyTestUser" class="each-user-name">DooNo (사용자)</div>
            <span id="replyDate" class="reply-date">방금 전</span>
            <pre id="eachReplyText" class="each-reply-text"></pre>
          </div>
          <div class="reply-like-box">
            <div class="reply-like-btn-box">
              <i id="reReplyLikeBtn" class="fa-regular fa-thumbs-up icon-button reply-like-btn"></i>
            </div>
            <span id="reReplyLikeCnt" class="reply-like-cnt"></span>
            <div class="reply-dislike-btn-box">
              <i id="reReplyDislikeBtn" class="fa-regular fa-thumbs-down icon-button reply-dislike-btn"></i>
            </div>
          </div>
       `;

        reReplyListBox.querySelector(".each-reply-text").textContent = reReplyText;
        reReplyBox1.appendChild(reReplyListBox);

        reReplyInput1.value = "";
        reReplySubmitBtn1.classList.remove("enabled");
        reReplyInputBox1.style.display = "none";
    });



// user2 댓글에 댓글 달기 버튼
    const reReplyBtn2 = document.getElementById("replyBtn2");
    const reReplyInputBox2 = document.getElementById("reReplyInputBox2");
    const reReplyCancelBtn2 = document.getElementById("reCancelBtn2");
    const reReplyInput2 = document.getElementById("reReplyInput2");
    const reReplySubmitBtn2 = document.getElementById("reSubmitBtn2");

    reReplyBtn2.addEventListener("click", () => {
        reReplyInputBox2.style.display = "flex";
        reReplySubmitBtn2.classList.remove("enabled");
    });

    reReplyCancelBtn2.addEventListener("click", () => {
        reReplyInputBox2.style.display = "none";
        reReplyInput2.value = "";
    });

    reReplyInput2.addEventListener("input", () => {
        if (reReplyInput2.value.trim().length > 0) {
            reReplySubmitBtn2.classList.add("enabled");
        } else {
            reReplySubmitBtn2.classList.remove("enabled");
        }
    });

    const reReplyBox2 = document.querySelector(".more-reply-list-2");

    reReplySubmitBtn2.addEventListener("click", (e) => {
        //e.preventDefault();
        const reReplyText = reReplyInput2.value.trim();
        if (!reReplyText) return;

        const reReplyListBox = document.createElement("div");
        reReplyListBox.classList.add("reply-list-box");

        reReplyListBox.innerHTML = `
          <div class="reply-user-profile">
            <a href="#"><i class="fa-solid fa-user"></i></a>
          </div>
          <div class="each-reply">
            <div id="replyTestUser2" class="each-user-name">DooNo (사용자)</div>
            <span id="replyDate2" class="reply-date">방금 전</span>
            <pre id="eachReplyText2" class="each-reply-text"></pre>
          </div>
          <div class="reply-like-box">
            <div class="reply-like-btn-box">
              <i id="replyLikeBtn2" class="fa-regular fa-thumbs-up icon-button reply-like-btn"></i>
            </div>
            <span id="replyLikeCnt2" class="reply-like-cnt"></span>
            <div class="reply-dislike-btn-box">
              <i id="replyDislikeBtn2" class="fa-regular fa-thumbs-down icon-button reply-dislike-btn"></i>
            </div>
          </div>
       `;

        reReplyListBox.querySelector(".each-reply-text").textContent = reReplyText;
        reReplyBox2.appendChild(reReplyListBox);

        reReplyInput2.value = "";
        reReplySubmitBtn2.classList.remove("enabled");
        reReplyInputBox2.style.display = "none";
    });

});


