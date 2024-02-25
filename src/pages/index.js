import { Poppins } from "next/font/google";
import Landing from "@/components/landing/Landing";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Landing />
    </main>
  );
}
