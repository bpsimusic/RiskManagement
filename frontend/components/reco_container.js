import {connect} from 'react-redux';
import Reco from './reco';
import {updateDollars} from '../actions/dollar_actions';


const mapStateToProps = ({dollar}) => {
  const newDollar = {};
  Object.keys(dollar).forEach(key=>{
    newDollar[key] = Number(dollar[key]);
  });
  return {
    dollar: newDollar
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateDollars: (dollars)=>dispatch(updateDollars(dollars))
});


export default connect(mapStateToProps, mapDispatchToProps)(Reco);
