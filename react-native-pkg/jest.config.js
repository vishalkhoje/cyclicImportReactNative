const { pathsToModuleNameMapper
} = require("ts-jest/utils");
// Load the config which holds the path aliases.
const { compilerOptions
} = require("../../tsconfig.json");

module.exports = {
  preset: "ts-jest",
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testEnvironment": "node",
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/test/"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,ts}"
  ],
  "globals": {
    "window": {}
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths,
    {
      // This has to match the baseUrl defined in tsconfig.json.
      prefix: "<rootDir>/../../",
    }),
};