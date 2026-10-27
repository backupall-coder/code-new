/** Route chính thức dùng cho trang reCAPTCHA. */
export function isRecaptchaRoute(pathname: string): boolean {
  return pathname === '/recaptcha' || pathname.startsWith('/recaptcha/')
}
