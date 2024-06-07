import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/home-page/navbar/navbar"
import { ThemeProvider } from "@/assets/contexts/theme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Food recipe",
  description: "Recipes for food"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
