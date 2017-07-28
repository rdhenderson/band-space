import React, { Component } from 'react';
import SVGInline from 'react-inlinesvg';

import { SearchBar, ResultsList } from '../../components'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchType: "venues",
      searchQuery: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: (target.type === 'checkbox') ? target.checked : target.value
    })
  }

  componentDidMount() {
    this.props.getVenueList();
    this.props.getUserList();
    this.props.getGroupList();
  }

  componentWillUnmount(){
    // this.props.resetMe();
  }

  render() {
    return (
      <div>
        <div className="splash">
          {this.state.searchQuery.length === 0 &&
            <div className="splash__logo" id="splashlogo">
              <SVGInline className="splash__logo__svg" src="/img/amplifier.svg" />
              <h1 id="logotemplate"> BandSpace </h1>
            </div>
          }

          <SearchBar
            searchType={this.state.searchType}
            searchQuery={this.state.searchQuery}
            handleInputChange={this.handleInputChange}
          />
        </div>

        {this.state.searchQuery.length !== 0 &&
          <ResultsList
            searchType={this.state.searchType}
            items={this.props[this.state.searchType]}
          />
        }
      </div>

    );
  }
}

export default Home
