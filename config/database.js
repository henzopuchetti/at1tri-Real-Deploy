const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://userAdimin:Henzo123@fiaptecnico.jioi3.mongodb.net/at1tri')
}

module.exports = conexao