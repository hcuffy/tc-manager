const baseConfig = {
    development: {
        database: {
            host:   'localhost',
            dbName: 'tcManager',
            port:   27017
        }
    },
    production: {
        database: {
            host:   '-',
            dbName: '-',
            port:   27017
        }
    }
};

export default function getConfig() {
    switch (process.env.REACT_APP_ENVIRONMENT) {
        case 'development':
            return baseConfig.development;
        case 'production':
            return baseConfig.production;
        default:
            return baseConfig.production;
    }
}
