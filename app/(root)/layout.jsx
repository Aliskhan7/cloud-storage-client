"use client";

export default function HomeLayout({
                                       children,
                                   }) {
    return (
        <main className="min-h-screen">
            {children}
        </main>
    );
}
