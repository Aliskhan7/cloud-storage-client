import React from "react";
import { FileItem } from "@/api/dto/files.dto";
import { FileActions } from "@/components/FileActions";
import { FileList, FileSelectType } from "@/components/FileList";
import { Empty } from "antd";

import * as Api from "@/api";


export const Files = ({ items, withActions }) => {
    const [files, setFiles] = React.useState(items || []);
    const [selectedIds, setSelectedIds] = React.useState([]);

    const onFileSelect = (id, type) => {
        if (type === "select") {
            setSelectedIds((prev) => [...prev, id]);
        } else {
            setSelectedIds((prev) => prev.filter((_id) => _id !== id));
        }
    };

    const onClickRemove = () => {
        setSelectedIds([]);
        setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
        Api.files.remove(selectedIds);
    };

    const onClickShare = () => {
        alert("share");
    };

    return (
        <div>
            {files.length ? (
                <>
                    {withActions && (
                        <FileActions
                            onClickRemove={onClickRemove}
                            onClickShare={onClickShare}
                            isActive={selectedIds.length > 0}
                        />
                    )}
                    <FileList items={files} onFileSelect={onFileSelect} />
                </>
            ) : (
                <Empty className="empty-block" description="Список файлов пуст" />
            )}
        </div>
    );
};