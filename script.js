document.addEventListener('DOMContentLoaded', () => {
  // Create noise texture
  const noise = document.querySelector('.noise');
  const noiseCanvas = document.createElement('canvas');
  const ctx = noiseCanvas.getContext('2d');

  const resize = () => {
    noiseCanvas.width = window.innerWidth;
    noiseCanvas.height = window.innerHeight;
    createNoise();
  };

  const createNoise = () => {
    const imageData = ctx.createImageData(noiseCanvas.width, noiseCanvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 15;
    }

    ctx.putImageData(imageData, 0, 0);
    noise.style.backgroundImage = `url(${noiseCanvas.toDataURL()})`;
  };

  window.addEventListener('resize', resize);
  resize();

  // Intersection Observer for sections
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // let trail = [];
  // const trailLength = 20;

  // for (let i = 0; i < trailLength; i++) {
  //   const dot = document.createElement('div');
  //   dot.className = 'trail-dot';
  //   dot.style.cssText = `
  //         width: ${4 - (i / trailLength) * 4}px;
  //         height: ${4 - (i / trailLength) * 4}px;
  //         opacity: ${1 - (i / trailLength)};
  //         background: var(--accent);
  //         position: fixed;
  //         border-radius: 50%;
  //         pointer-events: none;
  //         z-index: 9999;
  //     `;
  //   document.body.appendChild(dot);
  //   trail.push({ dot, x: 0, y: 0 });
  // }

  // document.addEventListener('mousemove', e => {
  //   trail.forEach((item, index) => {
  //     setTimeout(() => {
  //       item.dot.style.left = e.pageX + 'px';
  //       item.dot.style.top = e.pageY + 'px';
  //     }, index * 10);
  //   });
  // });
});