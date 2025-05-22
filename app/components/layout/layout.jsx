import Head from "next/head";
import { Header } from "@/components/Header";
import React from "react";

import styles from "@/styles/Home.module.scss";



export const Layout = ({
                                                                           title,
                                                                           children,
                                                                       }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Header />
                <div className={styles.main}>
                    <div className={styles.layout}>{children}</div>
                </div>
            </main>
        </>
    );
};