# Getting Started with the Weather App

Download Node_modules with:

### `npm install`

This project is currently using verison `10.7.0`

## API setup

At the root of the project add a `.env` file.
Inside this file add an enviroment variable and namme it `REACT_APP_WEATHER_API_KEY`.

Next you will need to set up an account with [weatherapi](https://www.weatherapi.com/signup.aspx) to acquire a key.

When you have a key place this in you enviroment variable. `REACT_APP_WEATHER_API_KEY=YOUR_API_KEY` for example.

## Running The Project

### Development Build

In the project directory, you can run for development mode:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Production Build

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Important Information Based On Project Requirements

### Days of Summer

The first feature asked to display the days of summer as in remainding days of summer left. Given that we aren't curently in summer I have further implmented this feature to display the days until summer. When it is the offical day of summer i.e 20th June the count displays the days of summer remaining.

In addition to this feature I have also made the years dynamic rather than just recording just the current year.

To test this please read my comment in [<CountdownTimer/>](src/components/molecules/CountDownTimer.tsx) on line `17-22`.

### Future Development

To account for leap years as the date of summer is usually on 21th June and 20th of June on leap years.

### Displaying Weather Results

I couldn't get the rain mesurements as shown in the designs `Rain: 2mm` as this wasn't a property in the response body. Instead I have replaced this with `wind degree`.

## Technologies

### `React - 18.3.1`

### `Typescript - 5.4.5`

### `Sass`

### `Node - 22.0.0`
