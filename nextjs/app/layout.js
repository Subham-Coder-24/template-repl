import './globals.css';

export const metadata = {
  title: 'Next.js App',
  description: 'Created in CodeSpace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
