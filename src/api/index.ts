import afterFetchHandlers from './fetch';
import config from './config';
import http from './http';

const api: any = {
    fetch,
    http,
    config,
    afterFetchHandlers
};

export default api;