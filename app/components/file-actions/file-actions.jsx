import React from "react";
import styles from "./FileActions.module.scss";
import { Button, Popconfirm } from "antd";


export const FileActions = ({
                                                            onClickRemove,
                                                            onClickShare,
                                                            isActive,
                                                        }) => {
    return (
        <div className={styles.root}>
            <Button onClick={onClickShare} disabled={!isActive}>
                Поделиться
            </Button>

            <Popconfirm
                title="Удалить файл(ы)?"
                description="Все файлы будут перемещены в корзину"
                okText="Да"
                cancelText="Нет"
                disabled={!isActive}
                onConfirm={onClickRemove}
            >
                <Button disabled={!isActive} type="primary" danger>
                    Удалить
                </Button>
            </Popconfirm>
        </div>
    );
};