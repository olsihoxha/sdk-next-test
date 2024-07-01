export function saveOnStorage(key: string, value: string): void {
  const SEVEN_DAYS = 1000 * 60 * 60 * 7;
  localStorage.setItem(key, btoa(JSON.stringify({ value, expiration: Date.now() + SEVEN_DAYS })));
}

export function getFromStorage(key: string): string | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(atob(itemStr));
  if (Date.now() > item.expiration) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

type RetailerId = string;
type CartId = string;

export function saveCarts(carts: Record<RetailerId, CartId>): void {
  saveOnStorage('liquid_ui_carts', JSON.stringify(carts));
}

export function loadCarts(): Record<string, string> {
  return JSON.parse(getFromStorage('liquid_ui_carts') || '{}');
}

export function saveCheckouts(carts: Record<RetailerId, CartId>): void {
  saveOnStorage('liquid_ui_checkouts', JSON.stringify(carts));
}

export function loadCheckouts(): Record<string, string> {
  return JSON.parse(getFromStorage('liquid_ui_checkouts') || '{}');
}
