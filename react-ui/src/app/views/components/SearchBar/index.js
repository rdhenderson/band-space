import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as searchActions, selectors as searchSelectors } from '../../../state/ducks/search'

import SearchBar from './SearchBar'

function mapStateToProps(state) {
  return {
    displayList: searchSelectors.getLimitedDisplayList(state),
    query: state.search.query,
    searchType: state.search.searchType,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...searchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
