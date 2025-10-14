import { type MantineColorScheme, useMantineColorScheme } from '@mantine/core'
import { setCookie } from 'cookies-next'

export const useTheme = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme()
  const setTheme = (colorScheme: MantineColorScheme) => {
    const expired = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    setCookie('theme', colorScheme, { expires: expired, path: '/' })
    setColorScheme(colorScheme)
  }
  return { colorScheme, setColorScheme: setTheme }
}
