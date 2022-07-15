const baseConfig = {
    development: {
        databases: {
            host:   'localhost',
            dbName: 'tcManager',
            port:   27017
        }
    }
};

function getConfig() {
    switch (process.env.REACT_APP_ENVIRONMENT) {
        case 'development':
            return baseConfig.development;
        default:
            return null;
    }
}

export default getConfig();
