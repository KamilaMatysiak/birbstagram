import bcrypt from  'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/User.js';

dotenv.config();

export const signin = async (req, res) => {
    const { emailAddress, password } = req.body;

    try {
        const exsistingUser = await User.findOne({emailAddress});

        if(!exsistingUser) return res.status(404).json({message: "User doesn't exsist."})

        const isPasswordCorrect = await bcrypt.compare(password, exsistingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token = jwt.sign({emailAddress: exsistingUser.emailAddress, id: exsistingUser._id}, process.env.JWT_SECRET, { expiresIn: '1h'});

        res.status(200).json({result: exsistingUser, token });
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong.'});
    }
};

export const signup = async (req, res) => {
    const { emailAddress, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const exsistingUser = await User.findOne({emailAddress});

        if(exsistingUser) return res.status(400).json({message: "User already exsist."});

        if(password !== confirmPassword)  return res.status(400).json({message: "Passwords don't match."});
        const hash = await bcrypt.hash(password, 12);

        const result = await User.create({emailAddress, password: hash, userName:`${firstName} ${lastName}`});
        const token = jwt.sign({emailAddress: result.emailAddress, id: result._id}, 'test', { expiresIn: '1h'}); 
        
        res.status(200).json({user: result, token });
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Something went wrong.'});
    }
};