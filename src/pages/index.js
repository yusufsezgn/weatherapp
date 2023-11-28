import Forecast from "@/components/Forecast";

export default function Home() {
  return (
    <main className="container mx-auto grid place-content-center my-24 bg-bgImage bg-cover w-[700px] h-[670px] rounded-xl">
      <Forecast />
    </main>
  );
}
