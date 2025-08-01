// const desc = document.getElementById('desc');
// const toggle = document.getElementById('toggle-more');
//
// toggle.addEventListener('click', () => {
//     desc.classList.toggle('expanded');
//     toggle.textContent = desc.classList.contains('expanded') ? '간략히' : '...더보기';
// });

const desc = document.getElementById('desc');
const moreBtn = document.getElementById('toggleMore');
const lessBtn = document.getElementById('toggleLess');

moreBtn.addEventListener('click', () => {
    desc.classList.add('expanded');
    moreBtn.style.display = 'none';
    desc.style.maxHeight = "100%";
    lessBtn.style.display = "block";
});

lessBtn.addEventListener('click', () => {
    desc.classList.remove('expanded');
    lessBtn.style.display = 'none';
    desc.classList.remove('expanded');
    desc.style.maxHeight = "75px";
    moreBtn.style.display = "block";
});