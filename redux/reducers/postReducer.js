import types from '../types'
const initialState = {
    user: {},
    loading: false,
    error: '',
    message : ''
  }

export const  postReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'LOGIN_REQUEST': 
        return { ...state, loading: true, error: '' }
  
      case 'LOGIN_SUCCESS':
        console.log("=====")
       
        return { ...state, loading: false,  message : "Logged In SuccesFully" }
  
      case 'LOGIN_FAILED':
        return { ...state, loading: false,  }
        default:
            return { ...state }
      
    }
}