# westchestercovidtracker.com

![westchestercovidtracker.com site preview image](https://i.imgur.com/x0sn6bU.png)

This repository contains code for the frontend and serverless functions of [westchestercovidtracker.com](https://westchestercovidtracker.com).

## Introduction 
[westchestercovidtracker.com](https://westchestercovidtracker.com) was a newly-redesigned application to view histories and trends of COVID-19 in Westchester County, NY. It features the ability to compare the presence of COVID-19 within two towns with data that was updated daily, as soon as they were made available. This site is now inactive as data release has ended, and exists for historical reasons only.

## Technical Details

The frontend and API were developed with [Next.js](https://nextjs.org/), while the data were stored in a MongoDB database and are in a local JSON file. 

Daily updates were achieved through a scheduled Python process, querying Westchester County's interface directly.

## Local Usage

To run the application locally in development mode, clone this repository and run the following commands.
```
cd westchestercovidtracker.com
npm install
npm run dev
```

## Data Availability

A copy of the data is in the repository, titled `data.json`.
