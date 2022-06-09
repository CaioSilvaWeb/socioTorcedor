const Socio = require('../models/socios');
const socio = require('../models/socios');

let message = '';

const getAll = async (req, res) =>{
    try{
        const socios = await socio.findAll();
        res.render('index',{
            socios,
            sociosPut:  null,
            sociosDel: null,
            message,
        })
    }catch(err){
        res.status(500).send({err: err.message});
    }
}

const getById = async (req, res) => {
  try {
    const socio = await Socio.findByPk(req.params.id);
    //encontrando o socio, e o find, tvai procurar a chave primaria que é o id, fazendo ele chegar como parametro.
    res.render("detalhes", {
      socio,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

//rota de criação do socio
const criar = (req,res ) => {
    try{
        res.render("criar", {message});
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};
const criacao  = async (req,res) =>{
    try{
        const socio = req.body;//a requisição que vem do body, pegando os dados que vem do body
        if(
            !socio.nome ||
            !socio.descricao ||
            !socio.preco
        ){
            message = "Preencha todos os campos para cadastro!"
            type = "danger";
            return res.redirect("/criar");
        }
        await Socio.create(socio);

        res.redirect('/')
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota editar socio
const editar1 = async (req,res) =>{
    const socio = await Socio.findByPk(req.params.id);
 
    if(!socio){
        res.render('editar', {
            message: "plano não foi encontrado!"
        })
    }
    res.render('editar',{
        socio,
        message:''
    })


}

  //rota de editar do socio
  const editar = async (req,res) => {
      try{
          const socio = await Socio.findByPk(req.params.id);
          const {nome, descricao, preco} = req.body;

          socio.nome = nome;
          socio.descricao = descricao;
          socio.preco = preco;

          const socioEditado = await socio.save();
          /* res.render('editar', {
              socio: socioEditado,
              messsage:'socio editado com sucesso'
          }) */
          res.redirect('/')
      }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
}

//rota delete
const deletar = async (req,res)=>{
    try{
        await Socio.destroy({where: {id: req.params.id}});
        message = 'plano removido com sucesso'
        res.redirect('/')
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
}
module.exports = {
  getAll,
  getById,
  criar,
  criacao,
  editar1,
  editar,
  deletar
};
