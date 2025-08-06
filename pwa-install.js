if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/radio69/sw.js', { scope: '/radio69/' })
    .then((reg) => {
      console.log('Service Worker regisztrálva:', reg.scope);
    })
    .catch((err) => {
      console.log('Service Worker hiba:', err);
    });
}

let deferredPrompt;

window.addEventListener('load', () => {
  const installBtn = document.getElementById('btn-install');
  if (!installBtn) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('Telepítés eredménye:', outcome);
    deferredPrompt = null;
  });
});