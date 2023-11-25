import { Wrapper } from "@/context/Wrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
