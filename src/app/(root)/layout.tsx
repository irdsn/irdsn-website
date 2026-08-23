import type { ReactNode } from "react";

import "@/app/styles/global.css";

export default function RootLanguageLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
