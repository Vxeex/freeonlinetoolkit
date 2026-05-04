// ===== Shared Utilities =====

// Format currency
function formatCurrency(amount, symbol = '$') {
  return symbol + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Format number with commas
function formatNumber(num, decimals = 2) {
  return Number(num).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Validate number input
function getNum(id) {
  const val = parseFloat(document.getElementById(id)?.value);
  return isNaN(val) ? null : val;
}

// Show result box
function showResult(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('visible');
}

// Hide result box
function hideResult(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('visible');
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
});

// AdSense placeholder (remove in production)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.ad-placeholder').forEach(el => {
    el.textContent = ''; // Clear placeholder text for production
  });
});
