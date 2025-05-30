import axios from "@/core/axios";


export const getAll = async (type = "all") => {
    return (await axios.get("/files?type=" + type)).data;
};

export const remove = (ids) => {
    return axios.delete("/files?ids=" + ids);
};

export const uploadFile = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    formData.append("file", file);

    const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onProgress: (event) => {
            onProgress({ percent: (event.loaded / event.total) * 100 });
        },
    };

    try {
        const { data } = await axios.post("files", formData, config);

        onSuccess();

        return data;
    } catch (err) {
        onError({ err });
    }
};