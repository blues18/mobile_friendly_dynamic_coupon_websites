import "./styles/globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import NavigationBar from "./components/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coupon Website",
  description: "Mobile Dynamic Coupon Website",
};

export default function Layout({ children }) {
  return (
    <>
      <html lang="en">
        <NavigationBar />
        <Header />
        <main className={inter.className}>{children}</main>
        <Footer />
      </html>
    </>
  );
}
