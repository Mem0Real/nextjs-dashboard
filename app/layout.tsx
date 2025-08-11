import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export const metadata = {
  title: "NextJS Dashboard",
  description: "Practice project for NextJS 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
