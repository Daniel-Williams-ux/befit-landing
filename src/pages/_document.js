// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Fitness instructions & Artificial Intelligence trained for only you." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="BeFit" />
        <meta property="og:description" content="Fitness instructions & Artificial Intelligence trained for only you." />
        <meta property="og:image" content="https://befitweb1.netlify.app/favicon.icon" />
        <meta property="og:image:alt" content="BeFit - Your personalized fitness journey." />

        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="BeFit" />
        <meta name="twitter:description" content="Fitness instructions & Artificial Intelligence trained for only you." />
        <meta name="twitter:url" content="https://befitweb1.netlify.app/?src=twitter" />
        <meta name="twitter:image:src" content="https://befitweb1.netlify.app/favicon.icon" />
        <meta name="twitter:image:alt" content="BeFit" />
        <meta name="twitter:creator" content="@BeFit90524246" />
        <meta name="twitter:site" content="@BeFit90524246" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.icon" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.icon" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Language Alternate Links */}
        <link rel="alternate" href="https://befitweb1.netlify.app/fr/" hreflang="fr-FR" />
        <link rel="alternate" href="https://befitweb1.netlify.app/pt/" hreflang="pt-BR" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://befitweb1.netlify.app/" />

        {/* Web Manifest */}
        <link rel="manifest" href="/mlwmanifest.json" />

        {/* Google Fonts - DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
