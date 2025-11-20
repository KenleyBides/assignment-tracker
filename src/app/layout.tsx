import "./globals.css";
import Navbar from "../components/Navbar";
import { AppProvider } from "../context/AppContext"; 

export const metadata = {
  title: "Assignment App",
  description: "A Next.js assignment tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">

        <AppProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <footer className="py-4 text-center text-sm text-gray-400 border-t border-gray-800">
            © {new Date().getFullYear()} Ken — Assignment Tracker
          </footer>
        </AppProvider>

      </body>
    </html>
  );
}