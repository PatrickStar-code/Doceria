const knex = require('../connectionDb')

const destaque = async (req, res) => {
    try {
        const produtosDestaque = await knex('produto').where({ destaque: true }).orderByRaw('random()').limit(4);
        return res.status(200).json(produtosDestaque)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}

module.exports = {
    destaque,
}