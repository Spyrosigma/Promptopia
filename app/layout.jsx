import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'PromptoPia',
  description: 'Discover and Share AI prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <Analytics />
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>

        </Provider>
      </body>
    </html>
  )
}

export default RootLayout 