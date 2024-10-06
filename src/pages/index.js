import Head from "next/head";
import Hero from "@/components/landing_page/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>VirtualMane</title>
        <meta name="description" content="Web app for compressing images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Footer />
    </>
  );
}
