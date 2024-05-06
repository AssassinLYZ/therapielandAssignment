type Func<T extends any[]> = (...args: T) => void

export function debounce<T extends any[]>(func: Func<T>, wait: number): Func<T> {
  let timeout: ReturnType<typeof setTimeout>

  return function (...args: T) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
