import React from "react";

const DashboardLayout = ({
    children,
    users,
    notification,
    products,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    notification: React.ReactNode;
    products: React.ReactNode;
    login: React.ReactNode;
}) => {
    // Check if the user is logged in or not, change the layout accordingly
    const isLoggedIn = true;
    return isLoggedIn?(
        <>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div>{users}</div>
                    <div>{products}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notification}</div>
            </div>
        </>
    ):
    (
        <div>
            <div>{login}</div>
        </div>
    );
};

export default DashboardLayout;
