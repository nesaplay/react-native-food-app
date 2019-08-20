import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer URPHOuxX5LlTstTrW5_JFEL5zlyQmaif6PfOPlypplDH5W3Q_GkZSLPAYIWmL8m59Gsf2P2gS-RAaB3AABrhjmzvyvic1zhVGJzXDOQ54JR_J0Q3H3QuWIrp6V9aXXYx'
  }
})
