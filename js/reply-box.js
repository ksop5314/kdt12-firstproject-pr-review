
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
// user1 댓글에 댓글 달기 버튼
const reReplyBtn = document.getElementById("replyBtn");
const reReplyInputBox = document.getElementById("reReplyInputBox");
const reReplyCancelBtn = document.getElementById("reCancelBtn");
const reReplyInput = document.getElementById("reReplyInput");
const reReplySubmitBtn = document.getElementById("reSubmitBtn");

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

// user3 댓글에 댓글 달기 버튼
const reReplyBtn3 = document.getElementById("replyBtn3");
const reReplyInputBox3 = document.getElementById("reReplyInputBox3");
const reReplyCancelBtn3 = document.getElementById("reCancelBtn3");
const reReplyInput3 = document.getElementById("reReplyInput3");
const reReplySubmitBtn3 = document.getElementById("reSubmitBtn3");

reReplyBtn3.addEventListener("click", () => {
    reReplyInputBox3.style.display = "flex";
    reReplySubmitBtn3.classList.remove("enabled");
});

reReplyCancelBtn3.addEventListener("click", () => {
    reReplyInputBox3.style.display = "none";
    reReplyInput3.value = "";
});

reReplyInput3.addEventListener("input", () => {
    if (reReplyInput3.value.trim().length > 0) {
        reReplySubmitBtn3.classList.add("enabled");
    } else {
        reReplySubmitBtn3.classList.remove("enabled");
    }
});