export function addItem(key: string, value: any) {
  localStorage.setItem(key, value);
}

export function getItem(key: string, value: any): any {
  return localStorage.getItem(key);
}

export function removeItem(key: string) {
  localStorage.removeItem(key)
}