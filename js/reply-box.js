
const replyInput = document.getElementById("replyInput");
const replyActions = document.getElementById("replyActions");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

replyInput.addEventListener('focus',  () => {
    replyInput.classList.add("active");
    replyActions.style.display = "flex";
    replyInput.placeholder = "";
});

cancelBtn.addEventListener("click", () => {
   replyInput.classList.remove("active");
   replyInput.value = "";
   replyActions.style.display = "none";
    replyInput.placeholder = "댓글 추가...";
});

replyInput.addEventListener("input", () => {

    if (replyInput.value.trim().length > 0) {
        submitBtn.classList.add("enabled");
        // submitBtn.style.cursor = "pointer";
    } else {
        submitBtn.classList.remove("enabled");
    }

});