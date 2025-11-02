import "./globals.css";

export const metadata = {
  title: "Makmur",
  description: "Aplikasi Pengurangan Food Waste dan Diskon Makanan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">{
      /* Gunakan kelas latar belakang kustom di sini juga */
    }
      <body>
        {children}
      </body>
    </html>
  );
}