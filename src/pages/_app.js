import App from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <NextIntlClientProvider
        locale={router.locale}
        timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
