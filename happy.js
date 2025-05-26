document.addEventListener('DOMContentLoaded', function() {
    // Preguntar por el nombre del cumpleañero
    const name = prompt("¿Para quién es este cumpleaños?") || 'Amigo';
    document.getElementById('name').textContent = name;
    
    // Crear confeti
    function createConfetti() {
        const colors = ['#ff6b9d', '#6bb9ff', '#6bff9d', '#ffcc6b', '#cc6bff'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(confetti);
        }
    }
    
    // Iniciar confeti después de un breve retraso
    setTimeout(createConfetti, 500);
    
    // Efecto de globos que explotan al hacer clic
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {
            this.style.transform = 'scale(1.2)';
            this.style.opacity = '0';
            setTimeout(() => {
                this.remove();
            }, 300);
            
            // Agregar nuevo confeti cuando se hace clic en un globo
            createConfetti();
        });
    });
});