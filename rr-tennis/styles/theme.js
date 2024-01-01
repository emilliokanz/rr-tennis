import { color, extendTheme } from '@chakra-ui/react';

const primaryColor = '#0069A9'

const theme = extendTheme({
  colors: {
    brand: {
      primary: primaryColor,
      secondary: '#034732',
      accent: '#ceff1a',
      bgLight: 'white',
      bgDark:'#f5f5f5',
      text: 'white',
      card: 'rgba(217, 217, 217, 0.7)',
    }
  },
  components: {
    Button: {
      sizes: {
        lg:{
          fontWeight: 600,
          borderRadius: 0,
          h: '53px',
          fontSize: '18px',
          px: '17px',
          color: 'white',
          bg: primaryColor,
          _hover: {
            textDecorator: 'none'
          }
        },
        md: {
          fontWeight: 600,
          borderRadius: 0,
          h: '50px',
          fontSize: '16px',
          px: '15px',
          color: 'white',
          bg: primaryColor
        },
        xs: {
          fontWeight: 600,
          borderRadius: 0,
          h: '48px',
          fontSize: '14px',
          px: '13px',
          color: 'white',
          bg: primaryColor
        }
      }
    }
  },
  fonts: {
    heading: `"Montserrat", sans-serif`,
    body: `"League Spartan", sans-serif`,
  },
})



export default theme;
