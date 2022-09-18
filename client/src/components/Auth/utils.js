import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const createOrGetUser = async (res, addUser) => {
    console.log(res.credential);
    const decoded = jwt_decode(res.credential);
    console.table(decoded);
    const picture = decoded.picture;
    const name = decoded.name;
    const sub = decoded.sub;

    const user = {
        _id: sub,
        _type: 'user',
        userName: name,
        avatar: picture
    };

    localStorage.setItem('profile', JSON.stringify({ ...user }))
    //await axios.post(`http://localhost:3000/api/auth`)
};
