// ===== Shared Utilities (available globally) =====

function formatCurrency(amount, symbol) {
  symbol = symbol || '$';
  return symbol + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatNumber(num, decimals) {
  decimals = decimals !== undefined ? decimals : 2;
  return Number(num).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getNum(id) {
  var val = parseFloat(document.getElementById(id)?.value);
  return isNaN(val) ? null : val;
}

function showResult(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('visible');
}

function hideResult(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('visible');
}

// ===== Run after DOM is ready =====
document.addEventListener('DOMContentLoaded', function() {

  // Header scroll effect
  var header = document.querySelector('.header');
  if (header) {
    (function checkScroll() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    })();
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll-triggered reveal animations
  var animEls = document.querySelectorAll('.animate-in');
  if (animEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      animEls.forEach(function(el) { observer.observe(el); });
    } else {
      animEls.forEach(function(el) { el.classList.add('visible'); });
    }
  }

  // Recently used tool tracking
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path !== '/') {
    var toolData = {
      '/mortgage-calculator': { title: 'Mortgage Calculator', icon: 'fa-house-chimney', color: '#0d7377' },
      '/compound-interest-calculator': { title: 'Compound Interest Calculator', icon: 'fa-chart-simple', color: '#d97706' },
      '/car-loan-calculator': { title: 'Car Loan Calculator', icon: 'fa-car', color: '#059669' },
      '/home-loan-prepayment-calculator': { title: 'Home Loan Prepayment Calculator', icon: 'fa-hand-holding-dollar', color: '#dc2626' },
      '/vat-calculator': { title: 'VAT Calculator', icon: 'fa-receipt', color: '#7c3aed' },
      '/tip-calculator': { title: 'Tip Calculator', icon: 'fa-utensils', color: '#ec4899' },
      '/fuel-cost-calculator': { title: 'Fuel Cost Calculator', icon: 'fa-gas-pump', color: '#2563eb' },
      '/currency-converter': { title: 'Currency Converter', icon: 'fa-money-bill-transfer', color: '#d97706' },
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
      '/time-zone-converter': { title: 'Time Zone Converter', icon: 'fa-globe', color: '#4f46e5' },
      '/pregnancy-due-date-calculator': { title: 'Pregnancy Due Date Calculator', icon: 'fa-baby', color: '#6366f1' },
      '/ovulation-calculator': { title: 'Ovulation & Fertility Calculator', icon: 'fa-calendar-check', color: '#d97706' },
      '/body-fat-calculator': { title: 'Body Fat Calculator', icon: 'fa-person', color: '#d97706' },
      '/ideal-weight-calculator': { title: 'Ideal Weight Calculator', icon: 'fa-weight-scale', color: '#0d9488' }
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
  }
});

// ===== FAQ Accordion (delegated, runs immediately) =====
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
