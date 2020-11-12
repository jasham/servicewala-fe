import axios from 'axios'  

export const localBaseURL = "http://localhost:8080/api/v1/"
export const testBaseURL = "https://spidy-server.herokuapp.com/api/v1/"
export const productionBaseURL = ""

export const usedBaseURL = testBaseURL || testBaseURL
export const userInfo = () => localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : undefined

export const client = () => {
  let userData = userInfo()
  if(userData){
    let token = userData.token
    let userId = userData.user_id
    let uid = userData.uid 
    if(token){
      return axios.create({
        baseURL: usedBaseURL,
        headers : {
          "Authorization" : `Bearer ${token}`,
          "user_id" : userId,
          "uid" : uid
        }
      })
    }
  }else{
    return axios.create({
      baseURL: usedBaseURL
    })
  }
}


// User Login API
export const USER_LOGIN_API = `${usedBaseURL}userlogin`

// Admin & Vendor Login API
export const ADMIN_LOGIN_API = `${usedBaseURL}adminlogin`

// Vendor signup api
export const VENDOR_SIGNUP_API = `${usedBaseURL}vendorsignup`

// Category API
export const CATEGORY_API = `${usedBaseURL}category`

// SubCategory API
export const SUB_CATEGORY_API = `${usedBaseURL}user/sub_category`

// Service API
export const SERVICE_API = `${usedBaseURL}service`

// Category Image
export const CATEGORY_IMAGE_API = `${usedBaseURL}category/category_image`

// Sub Category Image
export const SUB_CATEGORY_IMAGE_API = `${usedBaseURL}sub_category/sub_category_image`



