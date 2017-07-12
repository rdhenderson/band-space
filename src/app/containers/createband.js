import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Createband extends Component {

  // addbutton(){
  //     var max_fields      = 10; //maximum input boxes allowed
  //     var wrapper         = $(".band_members_wrap"); //Fields wrapper
  //     var add_button      = $(".add_band_member"); //Add button ID
  //
  //     var x = 1; //initlal text box count
  //     $(add_button).click(function(e){ //on add input button click
  //         e.preventDefault();
  //         if(x < max_fields){ //max input box allowed
  //             x++; //text box increment
  //             $(wrapper).append(`<div><input type="text" name="member${x}" placeholder="Member Name"/><a href="#" class="remove_field">Remove</a></div>`); //add input box
  //         }
  //     });
  //
  //     $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
  //         e.preventDefault(); $(this).parent('div').remove(); x--;
  //     });
  // }


  render() {
    return (
      <div className="createband">
        <div className="createband__left">
          <h2> Get ready to rock the stage! </h2>
          <p> We just need a few details before you get started</p>
          <hr/>
          <form action="#">
            <div id="bandnamediv">
              <input className="sinput" name="name" id="name" placeholder="Band Name" />
            </div>
            <div id="membersdiv">
              <div className="band_members_wrap">
                  <div><input type="text" name="member1" placeholder="Member Name" /></div>
              </div>
              <button className="add_band_member" >Add another member</button>
            </div>
            <div id="descriptiondiv">
              <h3> Band Description </h3>
              <textarea name="description" id="description" placeholder="Tell us about your band"> </textarea>
            </div>
            <div id="citydiv">
              <input className="sinput" name="city" id="city" placeholder="Your City" />
            </div>
            <div id="logodiv">
              <input type="file" name="logo"  />
            </div>
            <div id="sButton">
              <button type="submit"> Submit </button>
            </div>
          </form>


        </div>

        <div className="createband__right">
          <img src="http://lorempixel.com/300/500" />
        </div>

      </div>
    )
  }
}

export default Createband;
