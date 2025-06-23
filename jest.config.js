module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(three|@react-three|leva)/)',
  ],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
        isolatedModules: true,
      },
    },
  },
}; 