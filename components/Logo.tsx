export default function Logo ({ theme }) {
  console.log(theme)
  return theme === 'light' ? <img color='currentColor' width='155' src='/Logo.png' /> : <img width='155' src='/Logo-dark.png' />
}
