import "./globals.css";
import ThemeScript from "../components/ThemeScript";
import AppShell from "../components/AppShell";

export const metadata = {
  title: "metaTrial Prototype",
  description: "metaTrial eCRF workflow prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeScript />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
