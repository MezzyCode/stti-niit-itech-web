export const metadata = {
  title: 'ITech Admin',
  description: 'Studio untuk mengelola website STTI NIIT I-Tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body >{children}</body>
    </html>
  )
}