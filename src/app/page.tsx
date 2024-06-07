import Image from "next/image";
import Head from "next/head";
import Phone from "@/components/phone";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Head>
        <title>Feedback App</title>
        <meta name="description" content="Feedback app with star rating system" />
      </Head>
      <Phone />
    </main>
  );
}
