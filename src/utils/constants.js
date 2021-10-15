/*
    const prod = {
        PROTOCOL: 'https://',
        URL: 'api.union.catbellcompany.com',
};
/*/
const prod = {
    PROTOCOL: 'http://',
    URL: 'union.dev.catbellcompany.com:5050',
};// */

const dev = {
    PROTOCOL: 'http://',
    URL: '172.16.1.192:4001',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
