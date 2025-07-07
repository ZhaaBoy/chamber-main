import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components,
    colors: {
      brand: {
        50: '#FFF1E6',
        100: '#FFD9BF',
        200: '#FFBF99',
        300: '#FFA366',
        400: '#FF904D',
        500: '#ee7114', // 🔶 Warna utama kamu
        600: '#CC6F2E',
        700: '#A65925',
        800: '#80441C',
        900: '#592E13',
      },
    },
  },
  baseTheme,
)
