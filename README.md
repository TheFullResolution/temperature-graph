# Temperature Monitoring and Control

## General Usage Notes
- To run the project locally, clone the repo, run yarn install and then yarn start
- You can see production version hosted under following address: https://www.thefullresolution.com/temperature/

## Project Description

### Loading of the Page
- Upon loading of the page, a call to Open Weather API will be made.
- Until the call is successful, a user will be seeing a loading screen.
- If the call was unsuccessful, an error page will be displayed.
- If the call was successful, a page with graph and controls will be displayed.

### Graph
- First value on the graph is the current temperature in Berlin.
- Immediately after loading timer starts counting down seconds before new random temperature will be generated.
- The time before next calculation and minimum and maxim temperature can be control by controls displayed above the graph.

### Controls
- A user can adjust timeout, max temperature and minimum temperature with plus and minus buttons.
- Default values are 30s timeout, 30 maximum temperature, 10 minimum temperature.
- A user can long press the button to adjust the values faster.
- If values will be invalid, a message will be displayed below the control buttons.
- Timeout can't be smaller than 1s.
- Maximum temperature cannot be smaller than minimum temperature.
- Minimum temperature cannot be bigger than the maximum temperature.

## Used Technologies and Packages
- The project was initiated, using [`create-react-app`](https://github.com/facebook/create-react-app) and then it was ejected to expose the Webpack configuration.
- Adjusted Webpack settings were related to `sass-loader` and preloading mixing/variables files before each style sheet.
- The graph is being rendered using [`react-chartjs-2`](https://github.com/jerairrest/react-chartjs-2), which is a wrapper around [Chart.js](http://www.chartjs.org/).
- Call to Open Weather API is being made using [`axios`](https://github.com/axios/axios).
- Additionally, a polyfill for `Number.isInteger()` and `String.padStart()` is loaded to support IE11.
- Helper function `decimalAdjust` (to round decimal numbers) is being loaded.

## Project Folder Structure
- All files related to the frontend of the project are in `src/` folder.
  - `Components/` folder contains all React components, ControlsContainer and GraphContainer have additional presentational components located inside.
  - `helpers/` folder contains additional polyfills, axios setup and decimal adjust function.
  - `scss/` folder contains the global styling, mixins, and variables.
  - `store/` folder contains the redux store files.

## Additional Notes
- No tests have been included in the project, due to the time constraints.
- The requirement: "*The graph always displays the values from the last 30 minutes*" hasn't been fully implemented since Chart.js will automatically minimize the number of visible labels once data gets bigger. Nevertheless, if the project was dealing with big data sets I would add filter function in Graph component to remove entries older than 30 minutes.
