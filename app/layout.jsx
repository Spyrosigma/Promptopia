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
      <Analytics/>
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