import "./globals.css";

export const metadata = {
  title: "TAM Assessment",
  description: "TAM Technical Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
