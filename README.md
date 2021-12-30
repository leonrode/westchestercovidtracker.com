# westchestercovidtracker.com

![westchestercovidtracker.com site preview image](https://i.imgur.com/6KxNDND.png)


This repository contains code for the frontend and serverless functions of [westchestercovidtracker.com](https://westchestercovidtracker.com).

## Introduction 
[westchestercovidtracker.com](https://westchestercovidtracker.com) is a newly-redesigned application to view histories and trends of COVID-19 in Westchester County, NY. It features the ability to compare the presence of COVID-19 within two towns with data that's updated daily, as soon as they're available.

## Technical Details

The frontend and API are developed with [Next.js](https://nextjs.org/), while the data are stored in a MongoDB database.

Daily updates are achieved through a scheduled Python process (not public), querying Westchester County's interface directly.

## Local Usage

To run the application locally in development mode, clone this repository and run the following commands.
```
cd westchestercovidtracker.com
npm install
npm run dev
```
You'll need to set `URI` as an environment variable, pointing to your MongoDB database.
