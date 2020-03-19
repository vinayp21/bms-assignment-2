module.exports = {
    verbose: true,
    // collectCoverage: true,
    // "collectCoverageFrom": [
    //     "src/client/components/**/*.{js,jsx}",
    //     "!**/node_modules/**",
    //     "!**/vendor/**"
    // ],
    moduleDirectories: ["node_modules", "src"],
    testMatch: ["src/client/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(test).[jt]s?(x)"],
    "transform": {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    "moduleNameMapper": { '^.+\\.(css|scss)$': '<rootDir>/config/CSSStub.js' }
}