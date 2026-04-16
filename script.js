// ==========================================
// AMIS.DGENS - Script JavaScript principal
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ==========================================
  // AOS - Initialisation des animations au scroll
  // ==========================================
  
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,        // Durée de l'animation en ms
      easing: 'ease-in-out', // Type d'easing
      once: true,           // Animation une seule fois
      offset: 120,          // Décalage du déclenchement
      delay: 100,           // Délai avant l'animation
    });
  }
  
  // ==========================================
  // NAVIGATION - Menu hamburger mobile
  // ==========================================
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Fermer le menu au clic sur un lien
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }
  
  // ==========================================
  // NAVIGATION - Highlight de la page active
  // ==========================================
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      item.classList.add('active');
    }
  });
  
  // ==========================================
  // HERO - Slideshow vidéo avec fade et dots
  // ==========================================

  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');

  if (heroSlides.length > 1) {
    let currentSlide = 0;
    let slideshowTimer;

    function goToSlide(index) {
      heroSlides[currentSlide].classList.remove('hero-slide-active');
      heroSlides[currentSlide].pause();
      heroDots[currentSlide].classList.remove('active');

      currentSlide = index;

      heroSlides[currentSlide].classList.add('hero-slide-active');
      heroSlides[currentSlide].currentTime = 0;
      heroSlides[currentSlide].play().catch(() => {});
      heroDots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide((currentSlide + 1) % heroSlides.length);
      resetTimer();
    }

    function resetTimer() {
      clearInterval(slideshowTimer);
      slideshowTimer = setInterval(nextSlide, 6000);
    }

    // Clic sur un dot
    heroDots.forEach(dot => {
      dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index));
        resetTimer();
      });
    });

    // Démarrer
    heroSlides[0].play().catch(() => {});
    slideshowTimer = setInterval(nextSlide, 6000);
  }

  // ==========================================
  // HEADER - Effet au scroll
  // ==========================================
  
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // ==========================================
  // ANIMATIONS AU SCROLL - Intersection Observer
  // ==========================================
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Observer une seule fois
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observer tous les éléments avec la classe scroll-reveal
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => observer.observe(el));
  
  // ==========================================
  // FORMULAIRE DE CONTACT - Validation
  // ==========================================
  
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nom = document.getElementById('nom').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validation basique
      if (!nom || !email || !message) {
        showNotification('Veuillez remplir tous les champs.', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide.', 'error');
        return;
      }
      
      // Simulation d'envoi (à remplacer par votre backend)
      showNotification('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success');
      contactForm.reset();
    });
  }
  
  // ==========================================
  // UTILITAIRES
  // ==========================================
  
  // Validation d'email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Notification système
  function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
        <p>${message}</p>
      </div>
    `;
    
    // Ajouter les styles inline
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#4CAF50' : '#f44336'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      animation: slideInRight 0.4s ease;
      max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Retirer après 4 secondes
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.4s ease';
      setTimeout(() => notification.remove(), 400);
    }, 4000);
  }
  
  // ==========================================
  // SMOOTH SCROLL pour les ancres
  // ==========================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ==========================================
  // CHARGEMENT D'IMAGES LAZY
  // ==========================================
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  // ==========================================
  // HERO VIDÉO - une seule vidéo de fond
  // ==========================================
  
  const heroVideos = document.querySelectorAll('.hero-video video.hero-slide');
  if (heroVideos.length > 0) {
    const video = heroVideos[0];
    video.classList.add('hero-slide-active');
    video.muted = true;
    video.play().catch(() => {});
  }
  
  // ==========================================
  // COMPTEUR ANIMÉ (pour les statistiques)
  // ==========================================
  
  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target.toLocaleString('fr-FR');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString('fr-FR');
      }
    }, 16);
  }
  
  // Observer les compteurs
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
  }
  
  // ==========================================
  // ANNÉE DYNAMIQUE DANS LE FOOTER
  // ==========================================
  
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // ==========================================
  // CLICK SPARK - Effet de particules au clic
  // ==========================================
  
  function createSpark(x, y) {
    const colors = ['#f75e2a', '#FF8A50', '#6D4C41', '#5D4037']; // Couleurs du site
    const sparkCount = 6; // Nombre de particules par clic
    
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      spark.className = 'click-spark';
      
      // Taille aléatoire entre 3 et 8px
      const size = Math.random() * 5 + 3;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      
      // Couleur aléatoire parmi les couleurs du site
      spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Position initiale
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      
      // Direction aléatoire
      const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5;
      const velocity = Math.random() * 50 + 30;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      spark.style.setProperty('--tx', `${tx}px`);
      spark.style.setProperty('--ty', `${ty}px`);
      
      document.body.appendChild(spark);
      
      // Supprimer après l'animation
      setTimeout(() => spark.remove(), 800);
    }
  }
  
  // Écouter les clics sur toute la page
  document.addEventListener('click', (e) => {
    // Ne pas créer de spark sur les liens et boutons (optionnel)
    if (!e.target.closest('a, button, .hamburger')) {
      createSpark(e.clientX, e.clientY);
    }
  });
  
});

// ==========================================
// ANIMATIONS CSS supplémentaires
// ==========================================

// Ajouter les keyframes pour les notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .notification-icon {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .notification p {
    margin: 0;
  }
`;
document.head.appendChild(style);

