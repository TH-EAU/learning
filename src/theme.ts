import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins'


const fonts = {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    text: "Poppins, sans-serif",
}


const colors = {
    brand: { 100: "#4224C2", 200: "#5500FF" },
}

const theme = extendTheme({ fonts, colors })
export default theme