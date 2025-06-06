
import { Button } from "antd";

import styles from "@/styles/Profile.module.scss";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import React from "react";
import { Layout } from "@/layouts/Layout";


const DashboardProfilePage = ({ userData }) => {
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    return (
        <main>
            <div className={styles.root}>
                <h1>Мой профиль</h1>
                <br />
                <p>
                    ID: <b>{userData.id}</b>
                </p>
                <p>
                    Полное имя: <b>{userData.fullName}</b>
                </p>
                <p>
                    E-Mail: <b>{userData.email}</b>
                </p>
                <br />
                <Button onClick={onClickLogout} type="primary" danger>
                    Выйти
                </Button>
            </div>
        </main>
    );
};

DashboardProfilePage.getLayout = (page) => {
    return <Layout title="Dashboard / Профиль">{page}</Layout>;
};

export const getServerSideProps = async (ctx) => {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
        return authProps;
    }

    const userData = await Api.auth.getMe();

    return {
        props: {
            userData,
        },
    };
};

export default DashboardProfilePage;
