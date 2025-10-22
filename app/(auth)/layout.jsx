import "../globals.css";

export default function AuthLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-peyda bg-gray-50">
        {children}
      </body>
    </html>
  );
}
