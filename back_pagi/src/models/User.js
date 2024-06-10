const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
}, {
    collection: 'livro',
    versionKey: false
}); // Força o nome da coleção para 'livro'

// Esconde o campo __v na saída JSON
LivroSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.__v;
        return ret;
    }
});

const Livro = mongoose.model('livro', LivroSchema);

module.exports = Livro;
