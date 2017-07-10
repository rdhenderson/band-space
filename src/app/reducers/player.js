// import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
  test: 'test'
}


export default function Player(state=initialState, action) {

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

  switch(action.type){
  default:
      return state;
  }
}
