export const UPDATE_ALLOCATION = 'UPDATE_ALLOCATION';
export const RISK_LEVEL = 'RISK_LEVEL';


export const updateAllocation = ({values}) => ({
  type: UPDATE_ALLOCATION,
  values
});

export const updateRiskLevel = (id) => ({
  type: RISK_LEVEL,
  risk_level: id
});
