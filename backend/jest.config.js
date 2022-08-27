module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testRegex: '/__tests__/.*\\.test\\.ts$',
    transform: {'.(ts)': 'ts-jest'},
    transformIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/client/*',
        '<rootDir>/backend/node_modules/'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/client/*',
        '<rootDir>/backend/node_modules/'
    ],
    moduleFileExtensions: ['ts', 'js'],
    modulePathIgnorePatterns: [
        '<rootDir>/dist/'
    ],
    testTimeout: 35000,
    verbose:true
};
