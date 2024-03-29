import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/600.css'
import "@fontsource/league-spartan/400.css"
import "@fontsource/league-spartan/700.css"
import "@fontsource/league-spartan/600.css"
import '../styles/globals.css'
import theme from '../styles/theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>  
  )
  
   
}

export default MyApp
