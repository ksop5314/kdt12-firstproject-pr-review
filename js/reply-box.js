
const replyInput = document.getElementById("replyInput");
const replyActions = document.getElementById("replyActions");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

replyInput.addEventListener('focus',  () => {
    replyInput.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
   replyInput.classList.remove("active");
   replyInput.value = "";
});