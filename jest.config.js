const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './src/'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@atoms/(.*)$': '<rootDir>/src/components/Atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/components/Molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/components/Organisms/$1'
  }
}

module.exports = createJestConfig(customJestConfig)
