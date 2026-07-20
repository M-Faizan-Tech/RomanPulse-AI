import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-white">

      <Navbar />

      <main className="pt-24">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}