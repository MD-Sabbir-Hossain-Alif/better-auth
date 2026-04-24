"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const { data, isPending } = useSession();
    if (isPending) {
        return <div>Loading...</div>;
    }
    console.log(data);

    const user = data?.user;

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    {/* <Logo /> */}
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
                <div>
                    {user ? (
                        <div className="flex gap-2">
                            <p>Wellcome {user.name}</p>
                            <button onClick={() => signOut()}>Sign Out</button>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/signin">Sign In</Link>
                        </>
                    )}
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
