import '../styles/globals.css'
import Header from '../components/Header'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>
          Frontend Mentor Solutions
        </title>
      </head>

      <body>
        <Header />
        {children}
      </body>

    </html>
  )
}
