import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    console.log("Session data in Dashboard Page", session);

    const user = session?.user;
    if (!user) {
        redirect("/auth/signin");
        return <div>Please Sign In to access the dashboard</div>;
    }

    return (
        <div>
            <h2>This is Dashboard Page</h2>
        </div>
    );
};

export default DashboardPage;
