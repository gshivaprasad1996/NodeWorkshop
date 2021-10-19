const axios = require('axios')

module.exports = {
  /**
   * This method used to make a get request to collibra dgc
   */
  DGC_GET: async function(body) {
    let url = body.host + body.port + body.baseUrl + body.resource
    return new Promise(async (resolve, reject) => {
      await axios({
        method: 'get',
        url: url,
        params: body.params,
        auth: body.authentication,
        headers: body.headers
      })
        .then(response => {
          //console.log(response.data)
          resolve(response.data)
        })
        .catch(error => {
          console.error('something went wrong with the get call')
        })
    })
  },

  /**
   * This method used to make a post request to collibra dgc
   */
  DGC_POST: async function(body) {
    let url = body.host + body.port + body.baseUrl + body.resource
    return new Promise(async (resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: body.params,
        auth: body.authentication,
        headers: body.headers
      })
        .then(response => {
          console.log(response.data)
          resolve(response.data)
        })
        .catch(error => {
          console.error('something went wrong with the post call')
        })
    })
  },

  /**
   * This method used to make a get request with id to collibra dgc
   */
  DGC_GET_RESOURCE_BY_ID: async function(body) {
    let url = body.host + body.port + body.baseUrl + body.resource + body.assetId
    return new Promise(async (resolve, reject) => {
      await axios({
        method: 'get',
        url: url,
        auth: body.authentication,
        headers: body.headers
      })
        .then(response => {
          console.log(response)
          resolve(response.data)
        
        })
        .catch(error => {
          console.error('something went wrong with the get call')
        })
    })
  },

}
