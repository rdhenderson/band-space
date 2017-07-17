//Here we grab the needed packages from their libraries. We need connect to connect React and Redux and make
//state flow in our app. Like Tupac and Biggie #RIP.
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//MORE CSS MAGIC :D
class Welcome extends Component {

  //We bind our incrementCount and decrementCount functions to this so that we always keep reference to
  //the scope for when the function is called.
  constructor(props) {
    super(props)
    this.state = {
      querytype: "",
      query : ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name

  this.setState({
    [name]: value
  })


  }


  render() {
    return (
      <div>
        <div className="splash">
          {this.state.query.length === 0 &&
            <div className="splash__logo" id="splashlogo">
              <img src="./img/amplifier.svg"/>
              <h1 id="logotemplate"> BandSpace </h1>
            </div>
          }
          {/* <div className="splash__logo" id="splashlogo">
            <img src="./img/amplifier.svg"/>
            <h1 id="logotemplate"> BandSpace </h1>
          </div> */}

          <div className="splash__searchbar">
            <div className="splash__searchbar__icondiv">
              <a className="splash__searchbar__icondiv_drop">
                <img src="http://lorempixel.com/50/50" />
              </a>


            </div>
            <div className="splash__searchbar__input">
              <input
                name="query"
                value={this.state.query}
                placeholder="Search for a venue or artist!"
                type="text"
                id="query"
                onChange={this.handleInputChange}
               />
           </div>
          </div>

        </div>

        {this.state.query.length !== 0 &&
          <div className="mreview">
          <div className="mreview__header">
            <h2> Reviews in Washington D.C. </h2>
          </div>
          <div className="mreview__body">

            <div className="mreview__body__item">
              <div className="mreview__body__item__imgdiv">
                <img className="mreview__body__item__imgdiv__img" src="http://lorempixel.com/100/100" />
                <img className="mreview__body__item__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
              <div className="mreview__body__item__text">
                <h3> Bill </h3>
                <ul>
                  <li> Very Professional </li>
                  <li> Drinks A Lot </li>
                  <li> Cheap! </li>
                </ul>
              </div>
            </div>

            <div className="mreview__body__item">
              <div className="mreview__body__item__imgdiv">
                <img className="mreview__body__item__imgdiv__img" src="http://lorempixel.com/100/100" />
                <img className="mreview__body__item__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
              <div className="mreview__body__item__text">
                <h3> Bill </h3>
                <ul>
                  <li> Very Professional </li>
                  <li> Drinks A Lot </li>
                  <li> Cheap! </li>
                </ul>
              </div>
            </div>

            <div className="mreview__body__item">
              <div className="mreview__body__item__imgdiv">
                <img className="mreview__body__item__imgdiv__img" src="http://lorempixel.com/100/100" />
                <img className="mreview__body__item__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
              <div className="mreview__body__item__text">
                <h3> Bill </h3>
                <ul>
                  <li> Very Professional </li>
                  <li> Drinks A Lot </li>
                  <li> Cheap! </li>
                </ul>
              </div>
            </div>

            <div className="mreview__body__item">
              <div className="mreview__body__item__imgdiv">
                <img className="mreview__body__item__imgdiv__img" src="http://lorempixel.com/100/100" />
                <img className="mreview__body__item__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
              <div className="mreview__body__item__text">
                <h3> Bill </h3>
                <ul>
                  <li> Very Professional </li>
                  <li> Drinks A Lot </li>
                  <li> Cheap! </li>
                </ul>
              </div>
            </div>

          </div>
        </div>}
      </div>


      // <Row>
      //   <Col md={8} offset={{ md: 2 }}>
      //     <Card>
      //       <CardText>
      //         React-Redux Example!
      //       </CardText>
      //       <CardTitle
      //         title={`Welcome ${this.props.user}!`}
      //         subtitle={`The Count is ${this.props.count} and color is ${this.props.color}`}
      //       />
      //       <CardActions>
      //         <RaisedButton
      //           label="Increment Count!"
      //           primary={true}
      //           onClick={this.incrementCount}
      //         />
      //         <RaisedButton
      //           label="Decrement Count!"
      //           secondary={true}
      //           onClick={this.decrementCount}
      //         />
      //         <RaisedButton
      //           label="Change Color!"
      //           secondary={true}
      //           onClick={this.changeColor}
      //         />
      //       </CardActions>
      //     </Card>
      //   </Col>
      // </Row>
    );
  }
}


// //REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
// function mapDispatchToProps(dispatch){
//   // return bindActionCreators({ incrementCount, decrementCount }, dispatch);
// }
//
// //MORE REDUX MAGIC! This function takes in all of our Application State and takes pieces of it and maps it
// //to the Component's props.
// function mapStateToProps(state) {
//   // return {
//   //   count: state.counter.count,
//   // };
// }

//We export our Component using connect so that we can connect our React with our Redux for an awesome app!
export default Welcome
