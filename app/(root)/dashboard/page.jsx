import React from 'react';
import LoginForm from "@/app/components/auth/login-form";
import RegisterForm from "@/app/components/auth/register-form";
import Head from "next/head";


function Tabs(props) {
    return null;
}

export const AuthPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard / Auth</title>
            </Head>
            <main style={{ width: 400, margin: "50px auto" }}>
                <Tabs
                    items={[
                        {
                            label: "Войти",
                            key: "1",
                            children: <LoginForm />,
                        },
                        {
                            label: "Регистрация",
                            key: "2",
                            children: <RegisterForm />,
                        },
                    ]}
                />
            </main>
        </>
    );
};
