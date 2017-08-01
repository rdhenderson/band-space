import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as searchActions, selectors as searchSelectors } from '../../../state/ducks/search'
import { actions as venueActions} from '../../../state/ducks/venue'
import { actions as userActions} from '../../../state/ducks/user'
import { actions as groupActions} from '../../../state/ducks/group'

import SearchBar from './SearchBar'

function mapStateToProps(state) {
  return {
    displayList: searchSelectors.getFullDisplayList(state),
    query: state.search.query,
    searchType: state.search.searchType,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...searchActions, venueActions, groupActions, userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
