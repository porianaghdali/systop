import Header from "../components/header";
import Footer from "../components/footer";
import "../globals.css";

export default function MainLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-peyda bg-[#F3F4F4] ">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
