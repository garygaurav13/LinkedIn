import User from '../models/User.js';
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message:error.message});
    }
};


export const createUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const newUser = new User({ name, email, password});
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};
