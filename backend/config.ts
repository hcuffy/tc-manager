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
    switch (process.env.NODE_ENV) {
        case 'development':
            return baseConfig.development;
        default:
            return baseConfig.production;
    }
}
