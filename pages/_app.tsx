// pages/_app.tsx

import { AppProps } from "next/app";
import { ProductsProvider } from "../contexts/ProductContexts";
import { CartProvider } from "../contexts/CartContexts";
import "../styles/globals.css";
import { TransitionProvider } from "../contexts/TransitionContext";

// Import other providers...

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ProductsProvider>
      <CartProvider>
        <TransitionProvider>
          {/* Wrap with other providers as needed... */}
          <Component {...pageProps} />
        </TransitionProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default MyApp;
