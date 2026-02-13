// main.js intentionally left minimal. Avoid removing layout classes on load
// to prevent unintended layout changes on mobile devices.
window.addEventListener('load', () => {
  // no-op for now; keep file in place for future small behaviors
});

(function(){
  const envelope = document.getElementById('envelope');
  const envelopeContainer = document.getElementById('envelopeContainer');
  const bgAudio = document.getElementById('bg-music');

  envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('opened')) {
      // 1. Open the envelope
      envelope.classList.add('opened');
      
      // 2. Play music
      if (bgAudio) bgAudio.play().catch(()=>{});

      // 3. Wait for the letter to be read, then transition automatically
      setTimeout(proceedToFlowers, 4000); // 4 seconds of reading time
    }
  });

  function proceedToFlowers(){
    envelopeContainer.style.transition = 'all 1s ease';
    envelopeContainer.style.opacity = '0';
    envelopeContainer.style.transform = 'scale(1.2)'; // Slight zoom effect
    
    setTimeout(() => {
      envelopeContainer.remove();
      document.body.classList.remove('awaiting');
      document.body.classList.add('play-flowers');
      
      // Trigger the final image overlay after flowers bloom
      setTimeout(() => {
        const overlay = document.getElementById('letterOverlay');
        if (overlay) overlay.classList.remove('hidden');
      }, 3000);
    }, 1000);
  }
})();