const esModules = ['ansi-regex', 'ky', 'ky-universal', 'strip-ansi'].join('|');

module.exports = {
    bail: 1,
    clearMocks: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    testMatch: [
        '**/tests/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`]
};
