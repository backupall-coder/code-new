/**
 * Chrome trình duyệt (favicon Meta) chỉ trên nhánh gốc production (.app).
 * Preview / nhánh khác (*.vercel.app): title theo locale + favicon từ public/favicon-32x32.png (có thể để trống).
 */
export function useMetaBrowserChrome(): boolean {
  // Mỗi deploy Vercel build riêng — preview ≠ production
  if (process.env.VERCEL_ENV === 'preview') return false
  return true
}

/** Client: hostname không phải domain gốc .app (và không phải localhost). */
export function isPrimaryAppHost(hostname: string): boolean {
  const h = hostname.toLowerCase().split(':')[0] ?? ''
  if (h === 'localhost' || h === '127.0.0.1') return true
  if (h.endsWith('.vercel.app')) return false
  return h.endsWith('.app')
}

/** Favicon preview: thay file `public/favicon-32x32.png`. Không có file / file trống → không icon. */
export const PREVIEW_FAVICON = '/favicon-32x32.png'
