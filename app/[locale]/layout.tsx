import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Header from "@/components/navbar/header";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getLangDir } from "rtl-detect";
import { ThemeProvider } from "../providers/theme-provider";
import { latin_secondary_font, arabic_font, header_font } from "@/lib/fonts";

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
      <body
        className={cn(
          "antialiased",
          header_font.variable,
          direction === "rtl"
            ? arabic_font.className
            : latin_secondary_font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Header />
            <main>
              <Suspense fallback={<Loader />}>
                {children}
                <Toaster />
              </Suspense>
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
