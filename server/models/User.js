import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    id: {type: String},
    userName: {type: String, required: true},
    emailAddress: {type: String, required: true},
    password: {type: String, required: true}
});

const User = mongoose.model('User', UserSchema);

export default User;