document.addEventListener('DOMContentLoaded', function() {
    // Particules
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${Math.random() * 5 + 1}px`;
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particlesContainer.appendChild(particle);
    }
    
    // Lignes de vitesse
    const speedEffect = document.getElementById('speedEffect');
    for (let i = 0; i < 30; i++) {
        const line = document.createElement('div');
        line.classList.add('speed-line');
        line.style.setProperty('--angle', `${Math.random() * 60 - 30}deg`);
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.width = `${Math.random() * 100 + 50}px`;
        line.style.animationDelay = `${Math.random() * 2}s`;
        speedEffect.appendChild(line);
    }
    
    // Interaction au clic
    document.body.addEventListener('click', function(event) {
        const poster = document.querySelector('.poster');
        poster.classList.toggle('freeze-animation');
        
        // Ajoute un effet spécial au clic
        const clickEffect = document.createElement('div');
        clickEffect.style.position = 'absolute';
        clickEffect.style.width = '100px';
        clickEffect.style.height = '100px';
        clickEffect.style.background = 'radial-gradient(circle, rgba(255,204,0,0.8) 0%, rgba(255,204,0,0) 70%)';
        clickEffect.style.borderRadius = '50%';
        clickEffect.style.pointerEvents = 'none';
        clickEffect.style.transform = 'translate(-50%, -50%)';
        clickEffect.style.left = `${event.clientX}px`;
        clickEffect.style.top = `${event.clientY}px`;
        clickEffect.style.animation = 'expand 1s forwards';
        
        document.body.appendChild(clickEffect);
        
        setTimeout(() => {
            clickEffect.remove();
        }, 1000);
    });
});