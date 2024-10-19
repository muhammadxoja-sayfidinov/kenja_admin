// Elementlarni olish
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Modal oynasini ochish
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.classList.add('modal-open'); // Orqa fonni xiralashtirish
});

// Modal oynasini yopish
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open'); // Orqa fonni tiklash
});

// Tashqi joyga bosilganda modalni yopish
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});
