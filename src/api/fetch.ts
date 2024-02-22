const checkStatus = (response: any) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = response;
    //  error.error = response;
    throw error;
};

const parseContent = (response: any, options: any) => {
    const { requestId, payload, ...headers } = options;


    let json;

    if (headers["Content-Type"] === "blob") {
        return response.blob();
    }

    if (headers["Content-Type"] === "text/plain") {
        return response.text();
    }

    json = response.json();
    return json;
};

const afterFetchHandlers = {
    checkStatus,
    parseContent
}
export default afterFetchHandlers;

