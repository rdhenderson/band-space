//Here we grab the needed packages from their libraries. We need connect to connect React and Redux and make
//state flow in our app. Like Tupac and Biggie #RIP.
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//Lets also grab our actions so we can bind them to the props of our Component
import { incrementCount, decrementCount, changeColor } from '../actions/countActions'
//CSS libraries rock! Lets grab Row & Col so we can style easily.
import { Row, Col } from 'react-grid-system'

//MORE CSS MAGIC :D
class Welcome extends Component {

  //We bind our incrementCount and decrementCount functions to this so that we always keep reference to
  //the scope for when the function is called.
  constructor(props) {
    super(props)

    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  incrementCount() {
    this.props.incrementCount();
  }

  decrementCount() {
    this.props.decrementCount();
  }

  changeColor(){
    this.props.changeColor();
  }

  render() {
    return (
      <div>
        <div className="splash">
          <div className="splash__logo">
            <h1> BandSpace </h1>
          </div>

          <div className="splash__searchbar">
            <input name="query" placeholder="Search your venue here!" />
          </div>

        </div>
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
        </div>
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


//REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
function mapDispatchToProps(dispatch){
  return bindActionCreators({ incrementCount, decrementCount }, dispatch);
}

//MORE REDUX MAGIC! This function takes in all of our Application State and takes pieces of it and maps it
//to the Component's props.
function mapStateToProps(state) {
  return {
    count: state.counter.count,
  };
}

//We export our Component using connect so that we can connect our React with our Redux for an awesome app!
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
