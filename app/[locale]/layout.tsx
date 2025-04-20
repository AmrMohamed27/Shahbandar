import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Zain } from "next/font/google";
import { getLangDir } from "rtl-detect";
import { ThemeProvider } from "../providers/theme-provider";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "700", "800", "900"],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const direction = getLangDir(locale);
  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${zain.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
