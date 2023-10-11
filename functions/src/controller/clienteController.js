const {db} = require('../utils/admin');

exports.create = async(req, res) => {
    const dadosUsuarios = {
        nome: req.body.nome,
        logradouro: req.body.logradouro,
        numero: req.body.numero
    };

    try {
        db.collection('usuarios').doc()
            .create(dadosUsuarios);
        return res.status(200).send({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}