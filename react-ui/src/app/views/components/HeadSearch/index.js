
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as searchActions, selectors as searchSelectors } from '../../../state/ducks/search'

import HeadSearch from './HeadSearch'

function mapStateToProps(state) {
  return {
    isLoading: state.group.loading,
    displayList: searchSelectors.getDisplayList(state),
    query: state.search.query,
    searchType: state.search.searchType,

  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...searchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadSearch);
