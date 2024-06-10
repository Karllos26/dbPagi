const userService = require('../services/user.service');

const create = async (req, res) => {
    const { titulo, autor, isbn, paginas, ano, valor } = req.body;

    if (!titulo || !autor || !isbn || !paginas || !ano || !valor) {
        return res.status(400).send("Submit all fields for registration");
    }

    try {
        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Erro ao cadastrar livro" });
        }

        res.status(201).send({
            message: "User created successfully",
            livro: {
                _id: user._id,
                titulo,
                autor,
                isbn,
                paginas,
                ano,
                valor
            },
        });
    } catch (error) {
        res.status(500).send({ message: "Erro ao cadastrar livro", error });
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAllService();

        if (users.length === 0) {
            return res.status(400).send({ message: "There are no registered books" });
        }

        res.send(users);
    } catch (error) {
        res.status(500).send({ message: "Erro ao buscar livros", error });
    }
};

const findById = async (req, res) => {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    try {
        const user = await userService.findByIdService(id);

        if (!user) {
            return res.status(400).send({ message: "Book not found" });
        }

        res.send(user);
    } catch (error) {
        res.status(500).send({ message: "Erro ao buscar livro", error });
    }
};

const update = async (req, res) => {
    const { titulo, autor, isbn, paginas, ano, valor } = req.body;

    if (!titulo && !autor && !isbn && !paginas && !ano && !valor) {
        return res.status(400).send("Submit at least one field for update");
    }

    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }

    try {
        const updateData = { titulo, autor, isbn, paginas, ano, valor };
        const updateResult = await userService.updateService(id, updateData);

        if (!updateResult) {
            return res.status(400).send({ message: "Books not found" });
        }

        res.send({ message: "Book successfully updated" });
    } catch (error) {
        res.status(500).send({ message: "Erro ao atualizar livro", error });
    }
};

module.exports = { create, findAll, findById, update };
