


const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const contentBtns = document.querySelectorAll('.content-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Modal oynasini ochish
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
});

// Modal oynasini yopish
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

// Tashqi joyga bosilganda modalni yopish
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Kontent va kategoriya tugmalarini faollashtirish
contentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        contentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});



