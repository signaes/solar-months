```
yarn add solar-months
```
or
```
npm install solar-months
```
then
```
const cal = require('solar-months');

const currentYearCal = cal(2017);
// returns an Array of an Array of months with days 
// as objects with { date Date, day Int, weekday Int }
```
