import axios from 'axios';

export const util = {
  api: 'https://pure-headland-56298.herokuapp.com',

  axiosWithAuth: function() {
    return axios.create({
      url: this.api,
      headers: {
        Authorization: `Token ${localStorage.getItem('key')}`
      }
    });
  }
};

export default util;
