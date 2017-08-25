# Risk Management exercise

Part A - Create a Risk Profile by building an interface that illustrates a donut chart
for every Risk Level. This chart will have five columns for the individual's finances in percentages.

Part B - Create a section for recommendations for user entries of their finances in dollars.

## Allocation

Allocation is a slice of state for redux; instead of drawing 10 different donut charts, only one donut chart is needed. The donut chart updates based on the allocation slice of state.


```javascript
const rootReducer = combineReducers({
  allocation: AllocationReducer,
  dollar: DollarReducer
});
```

## Dollar

Dollar is the second slice of state. Because these are entries in dollars and not in percentages, it is separate from the allocation slice. The "reco" container listens to any changes in the dollar slice of state, and updates its recommendations based on the amounts entered.

```javascript
switch(type){
  case "stock":
    if (value < 100){
      recos.push("You need to invest more stocks!");
    }
    return;
  case "bond":
    if (value < 100){
      recos.push("You need to sell more bonds!");
    }
    return;
  case "cash":
    if (value < 100){
      recos.push("You need to save more cash!");
    }
    return;
  }
```

## Donut Chart and Table

I used npm's package 'react-donut-chart' to react to changes in the allocation slice of state.

For the table, I decided to go for ease-of-use; instead of pressing the "submit" button every time after completing a row, the user can click anywhere on a row to see the corresponding donut chart. If a row is incomplete (does not add up to 100), the donut chart does not reflect the row's information. 

## Future Project Plans

- Add more tests for individual React Components and Containers
