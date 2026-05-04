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
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;
  const item = btn.closest('.faq-item');
  if (!item) return;
  const answer = item.querySelector('.faq-answer');
  if (!answer) return;
  const isOpen = item.classList.contains('open');
  // Close all open FAQs
  document.querySelectorAll('.faq-item.open').forEach(function(i) {
    i.classList.remove('open');
    var a = i.querySelector('.faq-answer');
    if (a) a.style.maxHeight = '0';
  });
  // Open clicked one if it was closed
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
});

// AdSense placeholder (remove in production)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.ad-placeholder').forEach(el => {
    el.textContent = ''; // Clear placeholder text for production
  });
});
