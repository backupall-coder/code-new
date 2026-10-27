const isDev = process.env.NODE_ENV === 'development'

/** Log chỉ chạy ở development — tránh noise trên server production */
export const devLog = (...args: unknown[]) => {
  if (isDev) {
    console.log(...args)
  }
}

export const devWarn = (...args: unknown[]) => {
  if (isDev) {
    console.warn(...args)
  }
}
