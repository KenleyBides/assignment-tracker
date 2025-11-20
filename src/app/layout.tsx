// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Assignment App",
  description: "A Next.js assignment tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-4 text-center text-sm text-gray-400 border-t border-gray-800">
          © {new Date().getFullYear()} Kenley Bides — Assignment Tracker
        </footer>
      </body>
    </html>
  );
}