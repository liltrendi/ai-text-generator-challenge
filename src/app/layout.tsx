import { ReactNode } from "react";
import { Inter } from "next/font/google";
import AppLayout from "@/components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "OpenAI Text Generator Challenge",
    description:
        "A polished, user-friendly web application that leverages OpenAI's API to generate text based on user prompts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppLayout>{children}</AppLayout>
            </body>
        </html>
    );
}
