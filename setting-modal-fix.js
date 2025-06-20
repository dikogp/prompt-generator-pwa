// Handler untuk reset onboarding
function resetOnboarding() {
    localStorage.removeItem('onboarding_shown');
    showToast('Onboarding direset. Reload...', 'success');
    setTimeout(function(){ location.reload(); }, 800);
}
// Fungsi untuk membuka modal Setting
function openSettingScreen() {
    var overlay = document.getElementById('settingOverlay');
    if (overlay) {
        overlay.classList.add('show');
        overlay.style.display = 'flex';
    }
}
// Fungsi untuk menutup modal Setting
function closeSettingScreen() {
    var overlay = document.getElementById('settingOverlay');
    if (overlay) {
        overlay.classList.remove('show');
        overlay.style.display = 'none';
    }
}
