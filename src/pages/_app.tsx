import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import 'src/styles/globals.css'

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
