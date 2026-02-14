  // Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = 'var(--shadow-sm)';
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
});

// Hero Background Slider
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;

// Fungsi untuk menampilkan slide tertentu
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentSlide = index;
}

// Fungsi untuk next slide
function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

// Auto slide setiap 5 detik
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Mulai slideshow
startSlideShow();

// Klik pada indicator untuk pindah slide
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        clearInterval(slideInterval);
        showSlide(index);
        startSlideShow();
    });
});

// Hentikan slideshow saat mouse di atas hero (opsional)
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

heroSection.addEventListener('mouseleave', function() {
    startSlideShow();
});

// MODAL UNTUK JADWAL KUNJUNGAN
const scheduleModal = document.getElementById('scheduleModal');
const scheduleBtn = document.getElementById('scheduleBtn');
const closeModal = document.getElementById('closeModal');
const scheduleForm = document.getElementById('scheduleForm');

// Buka modal jadwal kunjungan
scheduleBtn.addEventListener('click', function() {
    scheduleModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Mencegah scroll
});

// Tutup modal
closeModal.addEventListener('click', function() {
    scheduleModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Tutup modal jika klik di luar konten modal
window.addEventListener('click', function(e) {
    if (e.target === scheduleModal) {
        scheduleModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Submit form jadwal kunjungan
scheduleForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Permintaan jadwal kunjungan Anda telah diterima. Tim kami akan menghubungi Anda dalam 1x24 jam.');
    scheduleModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    this.reset();
});

// MODAL UNTUK INFORMASI LENGKAP
const infoModal = document.getElementById('infoModal');
const infoLengkapBtn = document.getElementById('infoLengkapBtn');
const closeInfoModal = document.getElementById('closeInfoModal');
const scheduleFromInfoBtn = document.getElementById('scheduleFromInfoBtn');

// Buka modal informasi lengkap
infoLengkapBtn.addEventListener('click', function() {
    infoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Tutup modal informasi
closeInfoModal.addEventListener('click', function() {
    infoModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Tutup modal informasi jika klik di luar
window.addEventListener('click', function(e) {
    if (e.target === infoModal) {
        infoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Dari modal informasi ke modal jadwal
scheduleFromInfoBtn.addEventListener('click', function() {
    infoModal.classList.remove('active');
    scheduleModal.classList.add('active');
});

/* // Portal Siswa button
document.getElementById('portalBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Portal siswa akan segera hadir! Saat ini dalam tahap pengembangan.');
});
*/

// Smooth scroll untuk semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Tutup mobile menu jika open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// ================ ANIMATION ON SCROLL UNTUK SETIAP SECTION ================

// Tambahkan CSS class untuk animasi
const style = document.createElement('style');
style.textContent = `
    /* Animasi Fade In Up */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Animasi Fade In Left */
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Animasi Fade In Right */
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Animasi Zoom In */
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Animasi Rotate In */
    @keyframes rotateIn {
        from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.9);
        }
        to {
            opacity: 1;
            transform: rotate(0) scale(1);
        }
    }

    /* Animasi Bounce In */
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    /* Initial state sebelum animasi */
    .section-animate {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    /* Class untuk memicu animasi */
    .section-animate.visible {
        opacity: 1;
        visibility: visible;
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    /* Animasi untuk setiap section */
    .hero .section-animate.visible {
        animation-name: fadeInUp;
    }

    .network-section .section-heading.section-animate.visible {
        animation-name: fadeInDown;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .network-card.section-animate.visible {
        animation-name: zoomIn;
        animation-duration: 0.8s;
    }

    .network-card.section-animate.visible:nth-child(1) {
        animation-delay: 0.1s;
    }
    .network-card.section-animate.visible:nth-child(2) {
        animation-delay: 0.3s;
    }
    .network-card.section-animate.visible:nth-child(3) {
        animation-delay: 0.5s;
    }
    .network-card.section-animate.visible:nth-child(4) {
        animation-delay: 0.7s;
    }

    .phase-card.section-animate.visible {
        animation-name: fadeInUp;
        animation-duration: 0.8s;
    }

    .phase-card.section-animate.visible:nth-child(1) {
        animation-delay: 0.1s;
    }
    .phase-card.section-animate.visible:nth-child(2) {
        animation-delay: 0.3s;
    }
    .phase-card.section-animate.visible:nth-child(3) {
        animation-delay: 0.5s;
    }

    .admission-banner.section-animate.visible {
        animation-name: bounceIn;
        animation-duration: 1s;
    }

    .founder-img.section-animate.visible {
        animation-name: fadeInLeft;
        animation-duration: 1s;
    }

    .founder-content.section-animate.visible {
        animation-name: fadeInRight;
        animation-duration: 1s;
    }

    .footer-section.section-animate.visible {
        animation-name: fadeInUp;
        animation-duration: 0.8s;
    }

    .footer-section.section-animate.visible:nth-child(1) {
        animation-delay: 0.1s;
    }
    .footer-section.section-animate.visible:nth-child(2) {
        animation-delay: 0.2s;
    }
    .footer-section.section-animate.visible:nth-child(3) {
        animation-delay: 0.3s;
    }
    .footer-section.section-animate.visible:nth-child(4) {
        animation-delay: 0.4s;
    }

    /* Animasi untuk section heading */
    .section-heading h2.section-animate.visible {
        animation-name: fadeInUp;
        animation-duration: 0.8s;
    }

    .section-heading p.section-animate.visible {
        animation-name: fadeInUp;
        animation-duration: 0.8s;
        animation-delay: 0.2s;
    }

    /* Animasi untuk statistik di hero */
    .stat-item.section-animate.visible {
        animation-name: fadeInUp;
        animation-duration: 0.6s;
    }

    .stat-item.section-animate.visible:nth-child(1) {
        animation-delay: 0.1s;
    }
    .stat-item.section-animate.visible:nth-child(2) {
        animation-delay: 0.2s;
    }
    .stat-item.section-animate.visible:nth-child(3) {
        animation-delay: 0.3s;
    }
`;
document.head.appendChild(style);

// Fungsi untuk menambahkan class section-animate ke elemen-elemen
function addAnimationClasses() {
    // Hero section elements
    document.querySelector('.hero-content h5')?.classList.add('section-animate');
    document.querySelector('.hero-content h1')?.classList.add('section-animate');
    document.querySelector('.hero-content p')?.classList.add('section-animate');
    document.querySelectorAll('.stat-item').forEach(el => el.classList.add('section-animate'));
    document.querySelector('.hero .btn-solid')?.classList.add('section-animate');
    document.querySelector('.hero-3d-card')?.classList.add('section-animate');
    
    // Network section
    document.querySelector('.network-section .section-heading h2')?.classList.add('section-animate');
    document.querySelector('.network-section .section-heading p')?.classList.add('section-animate');
    document.querySelectorAll('.network-card').forEach(el => el.classList.add('section-animate'));
    
    // Academic phases section
    document.querySelector('.academic-phases .section-heading h2')?.classList.add('section-animate');
    document.querySelector('.academic-phases .section-heading p')?.classList.add('section-animate');
    document.querySelectorAll('.phase-card').forEach(el => el.classList.add('section-animate'));
    
    // Admission banner
    document.querySelector('.admission-banner')?.classList.add('section-animate');
    
    // Founder section
    document.querySelector('.founder-img')?.classList.add('section-animate');
    document.querySelector('.founder-content')?.classList.add('section-animate');
    
    // Footer sections
    document.querySelectorAll('.footer-grid > div').forEach(el => el.classList.add('section-animate'));
}

// Panggil fungsi untuk menambahkan class animasi
addAnimationClasses();

// Intersection Observer untuk mendeteksi elemen yang masuk viewport
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Jika ini adalah section heading, kita juga ingin mengamati child elements
            if (entry.target.classList.contains('section-heading')) {
                entry.target.querySelectorAll('h2, p').forEach(el => {
                    el.classList.add('visible');
                });
            }
            
            // Untuk card yang muncul bertahap
            if (entry.target.classList.contains('network-card') || 
                entry.target.classList.contains('phase-card') ||
                entry.target.classList.contains('footer-section')) {
                // Sudah di-handle oleh CSS animation delay
            }
        }
    });
}, observerOptions);

// Observasi semua elemen dengan class section-animate
document.querySelectorAll('.section-animate').forEach(el => {
    observer.observe(el);
});

// Observasi juga section heading untuk trigger animasi heading
document.querySelectorAll('.section-heading').forEach(el => {
    observer.observe(el);
});

// Efek parallax ringan untuk hero section
window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const heroCard = document.querySelector('.hero-3d-card');
    const scrolled = window.scrollY;
    
    if (heroContent && heroCard) {
        // Efek parallax halus
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        heroCard.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Efek hover untuk card dengan timing yang lebih baik
document.querySelectorAll('.network-card, .phase-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Trigger animasi untuk elemen yang sudah visible saat load
window.addEventListener('load', function() {
    // Trigger observer untuk elemen yang sudah terlihat
    document.querySelectorAll('.section-animate').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
});

console.log('Website Nusantara Future Academy siap dengan button yang berfungsi dan animasi section!');