import "./globals.css";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/mainContent";
import Header from "@/components/Header";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']})

export const metadata = {
  title: "MetricLead",
  description: "CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <body className="layout">
        <div className="fullSidebar">
          <Sidebar />
        </div>
        <div className="header">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
