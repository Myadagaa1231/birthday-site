import "./globals.css";

export const metadata = {
  title: "Happy Birthday Mr.J",
  description: "Энэ жилийн хамгийн сайхан нь чи",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
