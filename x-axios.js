const axios = require('axios');  

static async accessUserApi(url, token) {
    try {
      const response = await axios.get(url,
        {
          headers: {
            "x-access-token": token
          }
        });
      if (response.status === 200) {
        const userData = response.data.result;
        return userData
      }
    } catch (error) {
      console.error(error);
    }
  }