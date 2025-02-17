module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^.+\\.module\\.scss$": "identity-obj-proxy",
    "\\.svg\\?react$": "<rootDir>/__mocks__/svgMock.ts",
    "\\.jpg$": "<rootDir>/__mocks__/fileMock.ts",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
