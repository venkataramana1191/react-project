import axios from 'axios';
const KEY='AIzaSyBeXuhDKoDYOMXF2A30RCKIxnwwCToQawM';

export default axios.create ({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});