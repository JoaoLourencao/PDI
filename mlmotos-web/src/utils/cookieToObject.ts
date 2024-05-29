export default function CookieToObject(cookie: string): any {
  return (cookie || '').split('; ').reduce((prev, current) => {
    const [name, ...value] = current.split('=')
    prev[name] = value.join('=')
    return prev
  }, {})
}
