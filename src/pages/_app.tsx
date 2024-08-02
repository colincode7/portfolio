import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/birds.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="forest">
      <div className="flex flex-col min-h-screen">
        <Component {...pageProps} />
        <Analytics />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_MEASUREMENT_ID}');
                        `,
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
