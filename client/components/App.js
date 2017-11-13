import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

/* Take the state (posts & comments), and dispatch/action creators
to surface those data & functions via props in our component */
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
