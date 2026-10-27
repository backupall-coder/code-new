import { existsSync, statSync } from 'fs'
import { join } from 'path'

/** true khi `public/favicon-32x32.png` tồn tại và không rỗng. */
export function hasPreviewFaviconFile(): boolean {
  try {
    const filePath = join(process.cwd(), 'public', 'favicon-32x32.png')
    return existsSync(filePath) && statSync(filePath).size > 0
  } catch {
    return false
  }
}
