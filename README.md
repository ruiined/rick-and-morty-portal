# Rick and Morty Portal

[![CI](https://github.com/ruiined/rick-and-morty-portal/actions/workflows/CI.yml/badge.svg)](https://github.com/ruiined/rick-and-morty-portal/actions/workflows/CI.yml)

Coding challenge for a Rick & Morty portal that lists all the characters and their profile using https://rickandmortyapi.com/graphql

#### **🚀 [Live Preview](https://main--stunning-baklava-81ee73.netlify.app/)**

## Instructions

1. `yarn` to install the dependencies
2. `yarn dev` to run locally
3. `yarn test` & `yarn lint` to run the tests & eslint check
4. `yarn generate` to generate new graphql types referencing `schema.graphql`

## Approach

- Used **graphql** with @apollo/client to fetch data from https://rickandmortyapi.com/graphql.

- Implemented the layout and design components using **tailwindcss** and /wireframes as a reference

- Added eslint rules/plugins, prettier and graphql type generation.

- **Deployed** via netlify [here](https://main--stunning-baklava-81ee73.netlify.app/)

- Used **Github Actions** as a CI tool

- Implemented minor UX improvements like loading, error pages and pagination.

## Challenges

- Apollo Client for graphql doesn't quite work out of the box as it used to with Next.js 13+, so it needed some help of a package `@apollo/experimental-nextjs-app-support`
- First time experience with `vitest` and while there are a lot of similarities with `jest`, I suspect I haven't used it to the maximum of its ability.
- Did some work on testing & accessibility, but certainly not enough.
