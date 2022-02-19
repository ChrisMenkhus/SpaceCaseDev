import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import 'src/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      // forcedTheme={Component.theme || undefined}
      attribute="class"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
