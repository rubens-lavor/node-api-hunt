const mongoose =  require('mongoose');

const Product = mongoose.model("Product");

module.exports = {

    //rota de listagem
    async index(req, res) {
        //const products = await Product.find();
        //após a instalação do mongoose-paginate:

        const { page = 1 } = req.query;

        const products = await Product.paginate({  }, {page:page, limit:10 });
        //primeiro parametro seria para por condições, algum filtro. O segundo parametro a página atual, e  o limite de dados que será retornado por página

        return res.json(products);
    },

    //rota de detalhes
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //rota de criação
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //rota de update
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(product);
    },

    //rota de remover
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();

    }

};

/**
 * CRUD (acrónimo do inglês Create, Read, Update and *Delete) são as quatro operações básicas (criação, *consulta, atualização e destruição de dados) utilizadas em *bases de dados relacionais
 */