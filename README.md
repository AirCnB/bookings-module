# AirCnB Booking Service

![screenshot](./assets/screenshot.png)

> This module allows users to select a checkin and checkout date from a calendar and displays the total cost associated with the stay.

## Related Projects

  - https://github.com/AirCnB/reviews-module
  - https://github.com/AirCnB/house-description
  - https://github.com/AirCnB/photo-carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- `npm install -g webpack`
- `npm install`

- `mongod` to start MongoDB service

- `npm run seed:db` to seed database with data from `data.tsv`
- `npm start` to run nodejs server on localhost:3004
- `npm run dev:react` to build with webpack

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Mongo

