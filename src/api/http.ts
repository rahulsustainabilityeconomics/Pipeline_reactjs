
const getToken = () => {
    const idToken = localStorage.getItem("idToken");
    return `Bearer khjbhjb `;
}

const httpConfig = {
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': getToken(),
    },
};

const httpNoAuthConfig = {
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
};

const httpNoAuthConfigFormData = {
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        // "Content-Type": "multipart/form-data",
    },
};

const httpDownloadFileConfig = {
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "blob",
        'Authorization': getToken(),
    },
};

function getConfigForForm(formData: any, method: any) {
    type headers = {
        "Content-Type"?: string
        'Authorization'?: string
    }

    type httpHeaders = {
        headers: headers;
        body?: any;
        method?: any
    }

    const config: httpHeaders = {
        method: method,
        ...httpConfig,
        headers: { ...httpConfig.headers },
        body: formData,
    };
    delete config.headers["Content-Type"];
    return config;
}

const http = {
    get: (headers = {}) => ({
        method: "GET",
        ...httpConfig,
        headers: {
            ...httpConfig.headers,
            ...headers,
        },
    }),
    getNoAuth: (headers = {}) => ({
        method: "GET",
        ...httpNoAuthConfig,
        headers:
        {
            "Content-Type": "application/json;",
        }
        ,
    }),
    post: (payload: any) => ({
        method: "POST",
        ...httpConfig,
        body: JSON.stringify(payload),
    }),
    patch: (payload: any) => ({
        method: "PATCH",
        ...httpConfig,
        body: JSON.stringify(payload),
    }),
    postForm: (formData: any) => {
        return getConfigForForm(formData, "POST");
    },
    patchForm: (formData: any) => {
        return getConfigForForm(formData, "PATCH");
    },
    put: (payload: any) => ({
        method: "PUT",
        ...httpConfig,
        body: JSON.stringify(payload),
    }),
    delete: () => ({
        method: "DELETE",
        ...httpConfig,
    }),
    postNoAuth: (payload: any) => ({
        method: "POST",
        ...httpNoAuthConfig,
        body: JSON.stringify(payload),
    }),
    postNoAuthFormData: (payload: any) => ({
        method: "POST",
        ...httpNoAuthConfigFormData,
        body: payload,
    }),
    patchNoAuth: (payload: any) => ({
        method: "PATCH",
        ...httpNoAuthConfig,
        body: JSON.stringify(payload),
    }),
    getDownloadFiles: (headers = {}) => ({
        method: "GET",
        ...httpDownloadFileConfig,
        headers: {
            ...httpDownloadFileConfig.headers,
            ...headers,
        },
    }),

};



export default http;