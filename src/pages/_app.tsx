import { Layout } from '@components/templates'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { AppContextStore } from 'src/stores/AppContext'
import 'src/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AppContextStore>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextStore>
    </ThemeProvider>
  )
}

export default MyApp
