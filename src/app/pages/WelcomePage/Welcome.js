import React, { Component } from 'react';

import SVGInline from 'react-svg-inline';
import amp from '../../../../public/img/amplifier.svg';

import { getVenue, getUser, getGroup } from '../../helpers'
import { withRouter } from 'react-router'

import { SearchBar } from '../SearchBar'
import { ResultsList } from '../ResultsList'

class Welcome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query : "",
      artists : [],
      venues : [],
      groups : [],
      searchType: "venues",
      searchQuery: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.resultsClickHandler = this.resultsClickHandler.bind(this);
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: (target.type === 'checkbox') ? target.checked : target.value
    })
  }

  resultsClickHandler(id) {
    return () => this.props.history.push(`${this.state.searchType}/${id}`);
  }

  componentWillMount(){
    // FIXME: Should consider doing a promise.all solution here
    getUser().then( ({ data }) => this.setState({ users: data }))
    getVenue().then( ({ data }) => this.setState({ venues: data }))
    getGroup().then( ({ data }) => this.setState({ groups: data }))
  }

  // If you decide to use icons, you'd just
  // user img src={icon[searchType]}
  icon = {
    venues: "/img/stage.svg",
    groups: "/img/microphone.svg",
    artists: "/img/profile.svg",
  }

  render() {
    console.log('venues in render', this.state[this.state.searchType]);
    return (
      <div>
        <div className="splash">
          {this.state.searchQuery.length === 0 &&
            <div className="splash__logo" id="splashlogo">
              <SVGInline className="splash__logo__svg" svg={amp} />
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
            clickHandler={this.resultsClickHandler}
            searchType={this.state.searchType}
            items={this.state[this.state.searchType]}
          />
        }
      </div>

    );
  }
}


//We export our Component using connect so that we can connect our React with our Redux for an awesome app!
export default withRouter(Welcome)
