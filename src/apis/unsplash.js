 import axios from 'axios';
  
 export default axios.create({
     baseURL:'https://api.unsplash.com',
     headers:{
        Authorization:'Client-ID fa6ddf369a9cde423c20015a0322e4b66940f9a29eaca42b0346121654b74ac1'} 
 });
