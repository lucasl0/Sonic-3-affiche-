document.addEventListener('DOMContentLoaded', function() {
    // Préchargement des images
    const images = [
        'img/Project_Sonic_Logo.svg.png',
        'img/SPrimeRing.webp',
        'img/chaos-emerald.webp'
    ];
    
    images.forEach(src => {
        new Image().src = src;
    });

    // Particules améliorées
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Position aléatoire avec distribution plus uniforme
        const left = Math.random() * 100;
        const bottom = Math.random() * 20 - 5;
        
        particle.style.left = `${left}%`;
        particle.style.bottom = `${bottom}px`;
        
        // Taille et durée variables
        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Opacité variable
        particle.style.opacity = Math.random() * 0.6 + 0.4;
        
        particlesContainer.appendChild(particle);
    }
    
    // Lignes de vitesse améliorées
    const speedEffect = document.getElementById('speedEffect');
    for (let i = 0; i < 25; i++) {
        const line = document.createElement('div');
        line.classList.add('speed-line');
        
        // Position et angle aléatoires
        const angle = Math.random() * 50 - 25;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        line.style.setProperty('--angle', `${angle}deg`);
        line.style.left = `${left}%`;
        line.style.top = `${top}%`;
        
        // Longueur et timing variables
        const width = Math.random() * 80 + 60;
        const delay = Math.random() * 3;
        
        line.style.width = `${width}px`;
        line.style.animationDelay = `${delay}s`;
        
        // Opacité variable
        line.style.opacity = Math.random() * 0.7 + 0.3;
        
        speedEffect.appendChild(line);
    }
    
    // Chaos Emerald au clic
    document.body.addEventListener('click', function(event) {
        const emerald = document.createElement('div');
        emerald.className = 'chaos-emerald';
        
        // Position au point de clic
        emerald.style.left = `${event.clientX - 60}px`;
        emerald.style.top = `${event.clientY - 60}px`;
        
        document.body.appendChild(emerald);
        
        // Active l'animation après un léger délai
        setTimeout(() => {
            emerald.classList.add('active');
            
            // Supprime après l'animation
            setTimeout(() => {
                emerald.remove();
            }, 600);
        }, 10);
    });
    
    // Effet hover sur le poster
    const poster = document.querySelector('.poster');
    poster.addEventListener('mouseenter', () => {
        document.querySelector('.sonic-title').style.textShadow = 
            '0 0 20px var(--sonic-blue), 0 0 40px var(--sonic-blue), 0 0 60px #0033ff';
        document.querySelector('.number').style.textShadow = '0 0 20px #ff9900';
        document.querySelector('.subtitle').style.letterSpacing = '5px';
        document.querySelector('.date').style.textShadow = '0 0 15px #ffaa00';
    });
    
    poster.addEventListener('mouseleave', () => {
        document.querySelector('.sonic-title').style.textShadow = 
            '0 0 15px var(--sonic-blue), 0 0 30px var(--sonic-blue), 0 0 45px #0033ff';
        document.querySelector('.number').style.textShadow = '0 0 15px #ff9900';
        document.querySelector('.subtitle').style.letterSpacing = '4px';
        document.querySelector('.date').style.textShadow = '0 0 10px #ff9900';
    });
});