import {connect} from 'react-redux';
import Donut from './donut';

const mapStateToProps = ({allocation}) => ({
  allocation
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(Donut);
