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


const exibirProdutos = async (req, res) => {
    try {
        const produtos = await knex('produto')
        return res.status(200).json(produtos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}

const produtoPorCategoria = async (req, res) => {
    const { id_categoria } = req.params;
    try {
        const produtos = await knex('produtos').where({ id_categoria })
        console.log(produtos)
        return res.status(200).json(produtos)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro interno no servidor.' })
    }
}


module.exports = {
    destaque,
    exibirProdutos,
    produtoPorCategoria,
}