import { Providers } from "@redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers children={children}></Providers>
      </body>
    </html>
  );
}
