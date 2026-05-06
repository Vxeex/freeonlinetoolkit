// Shared calculator utility functions (ported from shared.js)

export function formatCurrency(amount: number, symbol = '$'): string {
  return symbol + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatNumber(num: number, decimals = 2): string {
  return Number(num).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getNum(id: string): number | null {
  const el = document.getElementById(id) as HTMLInputElement | null;
  if (!el) return null;
  const val = parseFloat(el.value);
  return isNaN(val) ? null : val;
}

export function showResult(id: string): void {
  const el = document.getElementById(id);
  if (el) el.classList.add('visible');
}

export function hideResult(id: string): void {
  const el = document.getElementById(id);
  if (el) el.classList.remove('visible');
}
