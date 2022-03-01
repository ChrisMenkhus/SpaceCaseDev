import { Layout } from '@components/templates'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import 'src/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
