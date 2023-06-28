import Image from "next/image";
import Layout from "./layout";
import Head from "next/head";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <header className="text-2xl font-bold mb-4">Welcome to Our Coupon System!</header>
        <p className="text-lg text-center mb-8">
          Discover the latest deals, discounts, and offers with our coupon system.
        </p>
        <a href="/coupons" className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">
          Explore Coupons
        </a>
      </main>
    </>
  );
}
