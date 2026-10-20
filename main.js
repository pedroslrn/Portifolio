// ===== ScrollReveal Animações =====
if (typeof ScrollReveal === 'function' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
const sr = ScrollReveal({
  reset: true,      // as animações reiniciam ao voltar
  distance: '50px',
  duration: 1200,
  easing: 'ease-out',
  opacity: 0
});

sr.reveal('#inicio .textoInicio', { origin: 'left' });
sr.reveal('#inicio .imagemInicio', { origin: 'right', delay: 300 });
sr.reveal('#sobreMim .textoSobreMim', { origin: 'bottom', distance: '60px' });
sr.reveal('#projetos .imgProj', { origin: 'bottom', distance: '40px', interval: 150 });
sr.reveal('#contato .rodape', { origin: 'bottom', distance: '40px' });

// Caso use elementos com classe .reveal personalizados
sr.reveal('.reveal', {
  reset: true,
  beforeReveal: el => el.classList.add('revealed'),
  beforeReset: el => el.classList.remove('revealed')
});


}

// ===== Efeito de gradiente sutil que segue o mouse (somente na seção #inicio) =====
const inicio = document.querySelector('#inicio');
if (inicio) {
  inicio.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // variação leve de matiz e brilho
    const hue = 200 + x * 30;          // base azul-esverdeada
    const brightness = 15 + y * 5;     // brilho mínimo
    const color1 = `hsl(${hue}, 60%, ${brightness + 20}%)`;
    const color2 = `hsl(${hue + 30}, 60%, ${brightness}%)`;

    document.body.style.background = `
      radial-gradient(circle at ${x * 100}% ${y * 100}%, ${color1}, ${color2}, #000)
    `;
  });
}


