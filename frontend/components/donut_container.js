import {connect} from 'react-redux';
import Donut from './donut';

const mapStateToProps = ({allocation}) => {
  const {values} = allocation;
  return {
    values
  };
};

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Donut);
