export const metadata = { title: "Auth | Makmur" };

export default function AuthLayout({ children }) {
  return (
    <html lang="id">
      <body
        className="min-h-dvh grid place-items-center"
        style={{
          background:
            "linear-gradient(180deg, #2E8B57 0%, #A9F0C5 100%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
