// const EXPRESS = require('express')
// const ROUTER = EXPRESS.Router()
// const axios = require('axios')
// const COLLIBRA = require('../collibra')
// const CONFIG = require('../config')
// const { Router } = require('express')

// const post_body = {
//   name: 'Data Use Request Mar 6 002',
//   displayName: 'Data Use Request Mar 6 002',
//   domainId: 'a8de34f5-997a-4f91-aea8-f8ea82c5bd3c',
//   typeId: '00000000-0000-0000-0000-000000031131'
// }
// const get_body = {
//   name: 'custom asset',
//   domainId: 'a8de34f5-997a-4f91-aea8-f8ea82c5bd3c',
//   nameMatchMode: 'EXACT'
// }

// const auth = {
//   username: 'Admin',
//   password: 'admin'
// }

// const headers = {
//   'Content-Type': 'application/json'
// }

// let getAsset = async (resource, params) => {
//   let request = await COLLIBRA.DGC_GET({
//     host: CONFIG.host,
//     port: CONFIG.port,
//     baseUrl: CONFIG.baseUrl,
//     resource: resource,
//     params:get_body,
//     authentication: auth,
//     headers: headers
//   })
//   console.log("call response")
//   let response = await request;
//   return response;
// }



// let postAsset = async () =>{
//   let request = await COLLIBRA.DGC_POST({
//     host: CONFIG.host,
//     port: CONFIG.port,
//     baseUrl: CONFIG.baseUrl,
//     resource: 'assets',
//     params: post_body,
//     authentication: auth,
//     headers: headers
//   })
//   console.log("call response")
//   let response = await request;
//   console.log(response.results)
// }

// let getResourceById = async () => {
//   let request = await COLLIBRA.DGC_GET_RESOURCE_BY_ID({
//     host: CONFIG.host,
//     port: CONFIG.port,
//     baseUrl: CONFIG.baseUrl,
//     resource: 'assets/',
//     assetId: '3311f91a-be34-4843-a962-84d7206dec13',
//     authentication: auth,
//     headers: headers
//   })

//   let response = await request;
//   console.log(response.results)  
// }
// //getResourceById()

// Router.get('/findWorkflows', (req, res)=>{
//   let data = getAsset('assets/', {})
//   res.send(data)
// })

// module.exports = ROUTER
