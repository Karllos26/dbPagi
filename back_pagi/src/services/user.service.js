const { ObjectId } = require('mongodb');
const connectDatabase = require('../database/db');

const createService = async (body) => {
    const { db } = await connectDatabase();
    const collection = db.collection('livro');
    const result = await collection.insertOne(body);
    return result.ops[0]; // Retorna o documento inserido
};

const findAllService = async () => {
    const { db } = await connectDatabase();
    const collection = db.collection('livro');
    const results = await collection.find().toArray();
    return results;
};

const findByIdService = async (id) => {
    const { db } = await connectDatabase();
    const collection = db.collection('livro');
    const result = await collection.findOne({ _id: new ObjectId(id) });
    return result;
};

const updateService = async (id, data) => {
    const { db } = await connectDatabase();
    const collection = db.collection('livro');
    try {
        const updatedBook = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: data },
            { returnOriginal: false } // Retorna o documento atualizado
        );
        return updatedBook.value;
    } catch (error) {
        console.error("Erro ao atualizar livro:", error);
        return null;
    }
};

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService,
};
