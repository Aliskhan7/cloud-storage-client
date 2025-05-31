import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import React from "react";
import { Layout } from "@/layouts/Layout";

import * as Api from "@/api";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Files } from "@/modules/Files";



const DashboardPhotos = ({ items }) => {
    return (
        <DashboardLayout>
            <Files items={items} withActions />
        </DashboardLayout>
    );
};

DashboardPhotos.getLayout = (page) => {
    return <Layout title="Dashboard / Фотографии">{page}</Layout>;
};

export const getServerSideProps = async (ctx) => {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
        return authProps;
    }

    try {
        const items = await Api.files.getAll("photos");

        return {
            props: {
                items,
            },
        };
    } catch (err) {
        return {
            props: { items: [] },
        };
    }
};

export default DashboardPhotos;