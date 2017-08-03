import React, { Component } from 'react';
import SVGInline from 'react-inlinesvg';
import { SearchBar, ResultsList, Spinner } from '../../components'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchType: "venues",
      searchQuery: '',
      displayList: this.props.venue || [],
      data: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    // this.setState({[target.name]: target.value});
    if (target.name === 'searchType' ) {
      this.setState({[target.name]: target.value});
    } else {
      const newSearchQuery = target.value;
      const filter = newSearchQuery.toUpperCase();
      const newDisplayList = this.props[this.state.searchType]
      .filter( (item) => item.name.toUpperCase().indexOf(filter) > -1);
      this.setState({searchQuery: newSearchQuery, displayList: newDisplayList });
    }
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps) {
          this.setState({ data: true });
      }
  }
  componentDidMount(){
    if (!this.props.userIsLoading)
      this.props.fetchUserList();
    if (!this.props.isVenueLoading)
      this.props.fetchVenueList();
    if (!this.props.groupIsLoading)
      this.props.getGroupList();
  }
  componentWillUnmount(){
    this.props.resetSearch();
    // this.props.resetMe();
  }

  render() {
    if (this.props.isLoading || !this.state.data ) return (<Spinner />);

    return (
      <div>
        <div className="splash">
          {this.props.query.length === 0 &&
            <div className="splash__logo" id="splashlogo">
              <SVGInline className="splash__logo__svg" src="/img/amplifier.svg" />
              <h1 id="logotemplate"> BandSpace </h1>
            </div>
          }

          <SearchBar
            searchType={this.state.searchType}
            searchQuery={this.state.searchQuery}
            handleInputChange={this.handleInputChange}
            placeholderText='Search for a venue, group or user!'
            showSelect={true}
          />
        </div>

        {this.props.query.length !== 0 &&
          <ResultsList />
        }
      </div>

    );
  }
}

export default Home
