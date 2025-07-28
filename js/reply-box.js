
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
   replyInput.value = "";
   replyActions.style.display = "none";
   replyText.style.marginBottom = "0";
   replyInput.placeholder = "댓글 추가...";
});

replyInput.addEventListener("input", () => {

    if (replyInput.value.trim().length > 0) {
        submitBtn.classList.add("enabled");
    } else {
        submitBtn.classList.remove("enabled");
    }
});


// 댓글에 댓글 달기 버튼
const reReplyBtn = document.getElementById("replyBtn");
const reReplyInputBox = document.getElementById("reReplyInputBox");
const reReplyCancelBtn = document.getElementById("reCancelBtn");
const reReplyInput = document.getElementById("reReplyInput");
const reReplySubmitBtn = document.getElementById("reSubmitBtn");

reReplyBtn.addEventListener("click", () => {
    reReplyInputBox.style.display = "flex";
});

reReplyCancelBtn.addEventListener("click", () => {
    reReplyInputBox.style.display = "none";
});

reReplyInput.addEventListener("input", () => {
    if (reReplyInput.value.trim().length > 0) {
        reReplySubmitBtn.classList.add("enabled");
    } else {
        reReplySubmitBtn.classList.remove("enabled");
    }
});

// user2 댓글에 댓글 달기 버튼
const reReplyBtn2 = document.getElementById("replyBtn2");
const reReplyInputBox2 = document.getElementById("reReplyInputBox2");
const reReplyCancelBtn2 = document.getElementById("reCancelBtn2");
const reReplyInput2 = document.getElementById("reReplyInput2");
const reReplySubmitBtn2 = document.getElementById("reSubmitBtn2");

reReplyBtn2.addEventListener("click", () => {
    reReplyInputBox2.style.display = "flex";
});

reReplyCancelBtn2.addEventListener("click", () => {
    reReplyInputBox2.style.display = "none";
});

reReplyInput2.addEventListener("input", () => {
    if (reReplyInput2.value.trim().length > 0) {
        reReplySubmitBtn2.classList.add("enabled");
    } else {
        reReplySubmitBtn2.classList.remove("enabled");
    }
});

