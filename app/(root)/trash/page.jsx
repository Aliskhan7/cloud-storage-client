import { checkAuth } from "@/utils/checkAuth";
import React from "react";
import { Layout } from "@/layouts/Layout";

import * as Api from "@/api";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Files } from "@/modules/Files";


const DashboardTrash = ({ items }) => {
    return (
        <DashboardLayout>
            <Files items={items} />
        </DashboardLayout>
    );
};

DashboardTrash.getLayout = (page) => {
    return <Layout title="Dashboard / Корзина">{page}</Layout>;
};

export const getServerSideProps = async (ctx) => {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
        return authProps;
    }

    try {
        const items = await Api.files.getAll("trash");

        return {
            props: {
                items,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: { items: [] },
        };
    }
};

export default DashboardTrash;