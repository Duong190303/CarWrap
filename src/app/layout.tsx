import "@/theme/global.css"
import { ColorSchemeScript, type MantineColorScheme } from "@mantine/core"
import type { Metadata } from "next"
import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { ViewTransitions } from "next-view-transitions"
import { Providers } from "../providers"

import "./layout.css"
import "@mantine/core/styles.layer.css"
import "@mantine/dates/styles.css"
import "@mantine/carousel/styles.css"
import "mantine-datatable/styles.layer.css"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Daisy Nail",
    description: "Daisy Nail Art",
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const colorScheme = (getCookie("theme", { cookies }) ||
    "dark") as MantineColorScheme

  return (
    <ViewTransitions>
      <html
        lang="en"
        style={{
          scrollBehavior: "smooth",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        }}
        data-mantine-color-scheme="light"
      >
        <head>
          <ColorSchemeScript
            defaultColorScheme={colorScheme}
            suppressContentEditableWarning
            suppressHydrationWarning
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <Providers colorScheme={colorScheme}>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
