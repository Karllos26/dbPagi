const userService = require('../services/user.service');
const mongoose = require('mongoose');

const validId = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    next();
}

const validBooks = async (req, res, next) => {
    const id = req.params.id;

    const books = await userService.findById(id);

    if (!user) {
        return res.status(400).send({ message: "Book not found" });
    }

    next();
}

module.exports = { validId, validBooks }