import "./globals.css";

export const metadata = {
  title: "Carlytic",
  description: "Carlytic Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

