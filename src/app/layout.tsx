"use client";
import '../app/globals.css';
import Navbar from '../components/Navbar';
import { AppProvider } from '../context/AppContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Navbar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}