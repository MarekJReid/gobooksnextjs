// pages/_app.tsx

import { AppProps } from "next/app";
import { ProductsProvider } from "../contexts/ProductContexts";
import { CartProvider } from "../contexts/CartContexts";
import "../styles/globals.css";

// Import other providers...

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ProductsProvider>
      <CartProvider>
        {/* Wrap with other providers as needed... */}
        <Component {...pageProps} />
      </CartProvider>
    </ProductsProvider>
  );
}

export default MyApp;
