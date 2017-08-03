import { combineReducers } from 'redux'

import error from './error'
import loading from './loading'
import list from './list'

export default combineReducers({ error, list, loading })

export const getVenueList = state =>
  state.venue.list.ids.map( (id) => state.venue.list.byId[id]);

export const getVenue = (state, id) => state.venue.list.byId[id];
export const isVenueLoading = state => state.venue.loading;
export const isVenueError = state => state.venue.error;
