import { Layout } from '@components/templates'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Context, ContextStore } from 'src/stores/Context'
import 'src/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ContextStore>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextStore>
    </ThemeProvider>
  )
}

export default MyApp
