import types from '../types'
import {loginAPI } from '../../pages/api/hello'
export function login (data) {
      dispatch({
        type: 'LOGIN_REQUEST'
      })
        dispatch({
          type: 'LOGIN_SUCCESS',
          // user: success
        })
        dispatch({
          type: 'LOGIN_FAILED'
        })
  

    }
  
  