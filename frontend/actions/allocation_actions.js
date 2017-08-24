export const UPDATE_ALLOCATION = 'UPDATE_ALLOCATION';


export const updateAllocation = ({values, risk_level}) => ({
  type: UPDATE_ALLOCATION,
  values,
  risk_level
});
