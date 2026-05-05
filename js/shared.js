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

// Recently used tool tracking
(function() {
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/') return;
  var toolData = {
    '/mortgage-calculator': { title: 'Mortgage Calculator', icon: 'fa-house-chimney', color: '#0284c7' },
    '/compound-interest-calculator': { title: 'Compound Interest Calculator', icon: 'fa-chart-simple', color: '#d97706' },
    '/car-loan-calculator': { title: 'Car Loan Calculator', icon: 'fa-car', color: '#059669' },
    '/home-loan-prepayment-calculator': { title: 'Home Loan Prepayment Calculator', icon: 'fa-hand-holding-dollar', color: '#dc2626' },
    '/vat-calculator': { title: 'VAT Calculator', icon: 'fa-receipt', color: '#7c3aed' },
    '/tip-calculator': { title: 'Tip Calculator', icon: 'fa-utensils', color: '#ec4899' },
    '/fuel-cost-calculator': { title: 'Fuel Cost Calculator', icon: 'fa-gas-pump', color: '#2563eb' },
    '/currency-converter': { title: 'Currency Converter', icon: 'fa-money-bill-transfer', color: '#ea580c' },
    '/bmi-calculator': { title: 'BMI Calculator', icon: 'fa-weight-scale', color: '#10b981' },
    '/calorie-calculator': { title: 'Calorie Calculator', icon: 'fa-fire', color: '#db2777' },
    '/password-generator': { title: 'Password Generator', icon: 'fa-key', color: '#0d9488' },
    '/qr-code-generator': { title: 'QR Code Generator', icon: 'fa-qrcode', color: '#9333ea' },
    '/word-counter': { title: 'Word Counter', icon: 'fa-file-lines', color: '#a16207' },
    '/age-calculator': { title: 'Age Calculator', icon: 'fa-cake-candles', color: '#6d28d9' },
    '/json-formatter': { title: 'JSON Formatter', icon: 'fa-code', color: '#2563eb' },
    '/percentage-calculator': { title: 'Percentage Calculator', icon: 'fa-percent', color: '#8b5cf6' },
    '/savings-calculator': { title: 'Savings Calculator', icon: 'fa-piggy-bank', color: '#0891b2' },
    '/unit-converter': { title: 'Unit Converter', icon: 'fa-ruler-combined', color: '#7c3aed' },
    '/time-zone-converter': { title: 'Time Zone Converter', icon: 'fa-globe', color: '#4f46e5' }
  };
  var match = toolData[path];
  if (match) {
    try {
      var recent = JSON.parse(localStorage.getItem('recentTools') || '[]');
      var filtered = recent.filter(function(t) { return t.path !== path; });
      filtered.unshift({ path: path, title: match.title, icon: match.icon, color: match.color });
      localStorage.setItem('recentTools', JSON.stringify(filtered.slice(0, 6)));
    } catch(e) {}
  }
})();

// FAQ Accordion
document.addEventListener('click', function(e) {
  var btn = e.target.closest('.faq-question');
  if (!btn) return;
  var item = btn.closest('.faq-item');
  if (!item) return;
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
});

