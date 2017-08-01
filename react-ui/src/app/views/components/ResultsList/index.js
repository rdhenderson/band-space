import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { actions as searchActions, selectors as searchSelectors } from '../../../state/ducks/search'

import ResultsList from './ResultsList'

function mapStateToProps(state) {
  return {
    displayList: searchSelectors.getFullDisplayList(state),
    searchType: state.search.searchType,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...searchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
