import Image from "next/image";
import Layout from "./layout";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello World (Body)</h1>
      </main>
    </>
  );
}
