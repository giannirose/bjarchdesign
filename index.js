function updateClipPath() {
  const minWidth = 350;
  const maxWidth = 768;
  const currentWidth = window.innerWidth;

  // Clamp the width between 350 and 768
  const clampedWidth = Math.min(Math.max(currentWidth, minWidth), maxWidth);

  // Calculate progress from 0 to 1
  const progress = (clampedWidth - minWidth) / (maxWidth - minWidth);

  // Interpolate from 100% to 70%
  const clipX = 100 - (30 * progress); // 100% → 70%

  // Apply to CSS variable
  document.querySelector('.flagOne').style.setProperty('--clip-x', `${clipX}%`);
}

// Initial run
updateClipPath();

// Update on resize
window.addEventListener('resize', updateClipPath);


// Add resize debounce for performance
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateClipPaths, 50);
});



