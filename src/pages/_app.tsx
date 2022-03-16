import { Layout } from '@components/templates'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AppContextStore } from 'src/stores/context/AppContext'
import { store } from 'src/stores/redux/store'
import 'src/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <AppContextStore>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextStore>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
