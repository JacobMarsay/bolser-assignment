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

To test this please read my comment in `<CountdownTimer/>` on line `17-22`.

The logic takes 4 dates.

- `Year date` to get `current year` (This is so we can get the next years after this).
- `Now date` to get todays date.
- `Start date` to get the first day of summer.
- `End date` to get the last day of summer.

I have used `current year` and placed it within the `start` and `end` dates to dynamically capture future years

To get the days and hours until summer I have declared a variable (`isBeforeStartDate`) which checks if the now date is before the start date in which if it is, is set to true.
Then I have declared another variable called `countdownEndDate` and used `isBeforeStartDate` to conditionally display the start date or end date.

### Number of summer months lived

This functionality is done by taking in the users age and multiplying their age by 3.

I have added a reset button to clear the text and input

Also disabled the calculate button so that users can't submit empty fields.

Lastly, restricted the users from enetering alphbetical / special characters.

### Displaying Weather Results

I couldn't get the rain mesurements as shown in the designs `Rain: 2mm` as this wasn't a property in the response body. Instead I have replaced this with `wind degree`.

To get the data I am using axios inside a custom hook called `useWeatherData`.

Inside the hook I am using state to capture the weather data, and also using state to capture any errors and loading state.

Inside this hook I have named a function called `fetchWeatherData` wrapped in a useEffect.

This function is done with a try and catch in which we are constructing the URL based on a valid key and passing a location as a parameter and the we are returning the response and capturing it in the weatherData state. If the request fails we then catch the errors and store them within the error state.

Please note, I have added in location as a parameter to make this more dynamic. I.e, if we wanted a select with different cities then we can pass these to this hook to get other specific cities.

### Future Development

To account for non-leap years as the date of summer is usually on 21th June and 20th of June on leap years.

## Technologies

### `React - 18.3.1`

### `Typescript - 5.4.5`

### `Sass`

### `Node - 22.0.0`

## Design Patterns

### Sass - 7 in 1

For Sass I have used the 7 in 1 design pattern.

#### Breif into into 7 in 1

The 7–1 Sass Architecture pattern essentially breaks style files into 7 different subdirectories (the 7 part), which are all imported through one main sheet in the Sass root folder (the 1 part). The main sheet is called the input file and contains no actual style rules. It simply imports all of the other styles from the seven other directories in a specific order.

[Read More here](https://medium.com/@diyorbekjuraev77/be-a-master-at-creating-the-7-1-sass-pattern-776fdfb5a3b1)

### React - Atomic

For React I have used the Atomic design pattern.

#### Breif into into ATOMIC

Clear Hierarchical Structure: Atomic Design offers a clear and hierarchical structure for organizing UI elements. React components, likewise, are arranged in a tree-like structure, enabling developers to map Atomic Design's atoms, molecules, organisms, templates, and pages directly to React's component hierarchy.

[Read More here](https://atomicdesign.bradfrost.com/chapter-2/)
