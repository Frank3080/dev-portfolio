import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Frank",
  description: "This is my developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={
          "min-h-screen flex flex-col text-slate-700" + poppins.className
        }
      >
        <header className="flex p-4 sm:p-5 border-b">
          <div className="flex font-medium text-xs sm:text-smm items-center max-w-[900px] mx-auto w-full">
            <Link
              href={"/"}
              className="hover:text-blue-500 cursor-pointer hidden sm:inline"
            >
              Frank Ortiz
            </Link>
            <Link href={"/"} className="sm:hidden">
              FO
            </Link>
          </div>
        </header>
        {children}
        <footer className="flex p-8 py-16 text-xs border-t text-slate-600 sm:text-sm items-center justify-center flex-col">
          <div className="flex flex-cols gap-4">
            <h4 className="cursor-pointer hover:opacity-70 duration-200">
              PDF Resume
            </h4>
            <p>|</p>
            <Link
              href={"/projects"}
              className="cursor-pointer hover:opacity-70 duration-200"
            >
              Projects
            </Link>
          </div>
          <div className="flex items-center w-fit mx-auto gap-8 text-lg">
            <a
              href={"https://www.linkedin.com/in/frank-ortiz-1180a0295/"}
              className="cursor-pointer hover:opacity-70 duration-200"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in ml-[27px]" />
            </a>
            <a
              href={"https://github.com/Frank3080"}
              className="cursor-pointer hover:opacity-70 duration-200"
              target="_blank"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
