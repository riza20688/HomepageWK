var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    }
);
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.cat-btn');

    // Ubah tampilan tombol yang aktif
    buttons.forEach(btn => {
        btn.classList.remove('bg-orange-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    event.currentTarget.classList.remove('bg-gray-200', 'text-gray-700');
    event.currentTarget.classList.add('bg-orange-600', 'text-white');

    // Filter Menu
    items.forEach(item => {
        if (category === 'semua' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            // Tambahkan sedikit animasi
            item.style.opacity = "0";
            setTimeout(() => { item.style.opacity = "1"; item.style.transition = "0.4s"; }, 10);
        } else {
            item.classList.add('hidden');
        }
    });
}
const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });