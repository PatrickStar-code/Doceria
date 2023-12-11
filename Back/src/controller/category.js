const knex = require('../connectionDb')

const exibirCategorias = async (req, res) => {
    try {
        const categorias = await knex('categoria')
        return res.status(200).json(categorias)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}

module.exports = {
    exibirCategorias,
}