import { Html, Head, Main, NextScript } from "next/document";

const themeSelector = `
// On page load or when changing themes, best to add inline in 'head' to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeSelector }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Uchen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-jk-offwhite">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
