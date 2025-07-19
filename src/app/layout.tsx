import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belajar Coding Jadi Mudah & Menyenangkan | Platform #1 Indonesia",
  description: "Platform pembelajaran coding terbaik di Indonesia. Dari pemula ke expert dengan metode interaktif yang terbukti. Praktek langsung, bukan cuma teori. Job guarantee tersedia!",
  keywords: [
    "belajar coding",
    "kursus programming",
    "bootcamp coding indonesia",
    "belajar react",
    "belajar javascript",
    "fullstack developer",
    "job guarantee",
    "mentoring coding",
    "platform pembelajaran online"
  ],
  authors: [{ name: "ELearning Platform" }],
  creator: "ELearning Platform",
  publisher: "ELearning Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Belajar Coding Jadi Mudah & Menyenangkan",
    description: "Platform pembelajaran coding terbaik di Indonesia dengan metode interaktif yang terbukti efektif. Job guarantee tersedia!",
    url: "https://your-domain.com",
    siteName: "ELearning Platform",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ELearning Platform - Belajar Coding Interaktif",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belajar Coding Jadi Mudah & Menyenangkan",
    description: "Platform pembelajaran coding terbaik di Indonesia dengan metode interaktif yang terbukti efektif.",
    images: ["https://your-domain.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                let effectiveTheme = 'light';
                
                if (theme === 'auto') {
                  effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                } else {
                  effectiveTheme = theme === 'dark' ? 'dark' : 'light';
                }
                
                document.documentElement.classList.add(effectiveTheme);
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
