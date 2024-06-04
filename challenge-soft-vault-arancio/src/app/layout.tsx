import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" />
        <title>Arancio Gabriel SoftVault</title>
        <link
          rel="icon"
          type="image/jpg"
          href="https://media.licdn.com/dms/image/D4D0BAQGMYlP_pGCFTQ/company-logo_200_200/0/1708352939661/softvault_sas_logo?e=1725494400&v=beta&t=InWazv8oNhQdoHLOU-1hQzjfs2adX_Xb5qwCA3mcMFE"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
