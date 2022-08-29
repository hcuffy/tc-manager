# TC-Manager

This application is a manual test case manager

# What you need
- Note: This project holds both the backend and client projects
- mongo running locally and node version >= 16.0.0 
- If you use yarn classic ensure it is  up-to-date. As of August 2022 it is 1.22.19

# Running the app:
- From the root directory run `yarn install-dependencies`
- Run `yarn build-env`
- Start it up `yarn dev`

## Running the backend or client individually:
- cd into the workspace 
- Example: `cd client`
- Run `yarn install`
- Run `yarn build`
- Run `yarn dev`

# Installing new dependencies
## From the root
- yarn workspace <workspace name> add <optional flag> <package>
- Example `yarn workspace tc-manager-client add -D typescript`
## From the individual workspace
- cd into the workspace; then everything is as normal
- Example `cd client` then `yarn add -D typescript`
