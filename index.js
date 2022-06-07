require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

// const planos = [
//     {
//       id: 1,
//       nome: "TIME DO POVO",
//       descricao:
//         "Ingressos a R$ 10 para os setores Amarelo Inferior e Amarelo Superior; Prioridade 6 nos demais ingressos; Nível 1 de acúmulo de Cruzeiros Descontos na rede de parceiros",
//       preco: "R$ 21,00 /mês"
//     },
//     {
//       id: 2,
//       nome: "CRUZEIRO SEMPRE",
//       descricao:
//         "50% de desconto no ingresso nos setores Amarelo, Laranja, Vermelho e Roxo Superior; Prioridade 5 na compra de ingressos; Nível 2 de acúmulo de Cruzeiros; Descontos na rede de parceiros",
//     preco: "R$ 42,00 /mês"
//     },
//     {
//       id: 3,
//       nome: "FENOMENAL",
//       descricao:
//         "50% de desconto em até 2 ingressos nos setores Amarelo, Laranja, Vermelho e Roxo Superior; Prioridade 4 na compra de ingressos; Nível 3 de acúmulo de Cruzeiros; Descontos na rede de parceiros",
//     preco: "R$ 99,00 /mês",
//     }
//   ];
// rotas

// let socios = undefined;

// app.get("/", (req, res) => {
//     res.render("index", { planos, socios});
//   });

//   app.get("/sobre/:id", (req, res) => {
//     const id = req.params.id - 1;
//     res.render("sobre", { planos, socios, id});
//   });

//   app.post("/create", (req, res) => {
//     const socios = req.body;
//     socios.id = planos.length + 1;
//     planos.push(socios);
//     res.redirect("/#cards");
//   }); 

//   app.get("/detalhes/:id", (req, res) => {
//     const id = +req.params.id;
//     socios = planos.find((socios) => socios.id === id);
//     res.redirect("/#cadastro");
//   });

//   app.post("/update/:id", (req, res) => {
//     const id = +req.params.id - 1;
//     const newPlano = req.body;
//     newPlano.id = id + 1;
//     planos[id] = newPlano;
//     socios = undefined;
//     res.redirect("/#cards");
//   });


const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);