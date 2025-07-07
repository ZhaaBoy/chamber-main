import { mode } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

export default {
  variants: {
    'nav-link': (props: Dict) => {
      const { isActive } = props

      const hoverColor = mode('gray.900', 'white')(props)
      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? hoverColor
          : mode('gray.700', 'whiteAlpha.700')(props),
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
        },
      }
    },

    // 👇 ini varian default solid button
    solid: (props: Dict) => ({
      bg: mode('orange.400', '#ee7114')(props),
      color: 'white',
      _hover: {
        bg: mode('#ee7114', 'orange.400')(props),
      },
    }),
  },
}
