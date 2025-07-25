// const desc = document.getElementById('desc');
// const toggle = document.getElementById('toggle-more');
//
// toggle.addEventListener('click', () => {
//     desc.classList.toggle('expanded');
//     toggle.textContent = desc.classList.contains('expanded') ? '간략히' : '...더보기';
// });

const desc = document.getElementById('desc');
const moreBtn = document.getElementById('toggle-more');
const lessBtn = document.getElementById('toggle-less');

moreBtn.addEventListener('click', () => {
    desc.classList.add('expanded');
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'inline-block';
});

lessBtn.addEventListener('click', () => {
    desc.classList.remove('expanded');
    lessBtn.style.display = 'none';
    moreBtn.style.display = 'inline-block';
});