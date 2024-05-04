export default function RootLayout({ children, modal }) {
  return (
    <html>
      <head />
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
