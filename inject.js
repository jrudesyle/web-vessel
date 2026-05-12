// Custom JavaScript injection for Telegram Web

console.log('🚢 web-vessel custom JS loaded');

// Add Matrix-style typing indicator
function matrixTypingEffect() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes matrix-blink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .typing-indicator::after {
      content: '█';
      animation: matrix-blink 1s infinite;
      color: #00ff00;
    }
  `;
  document.head.appendChild(style);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', matrixTypingEffect);
} else {
  matrixTypingEffect();
}

// Notification sound override (optional)
// You can customize notification behavior here
