import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') middlewares.push(logger)
  return createStore(
    reducer,
    compose(applyMiddleware(...middlewares))
  )
}
