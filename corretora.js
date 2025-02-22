const prompt = require("prompt-sync")();
let ultimoId = 1;
const corretoras = [];


const modelo = (id = ultimoId++) => {
  const nome = prompt("Digite o nome da corretora: ");

  if (nome != "") {
    return {
      id, nome
    };
  }

  console.log("Nome inválido.");
};

const store = () => {
  const novo = modelo();
  if (novo) {
    corretoras.push(novo);
    console.log("Corretora adicionada com sucesso!");
  } 
};

const index = () => {
  if(corretoras.length == 0) {
    console.log("Nenhuma corretora registrada.")
    return false
  }
  corretoras.forEach(el => console.log(el))
  return true
}
const show = id => corretoras.find(el => el.id == id)

const update = () => {
 if (index())
 {
   const id = parseInt(prompt("ID: "));

   const indice = corretoras.findIndex(el => el.id == id);

   if (indice != -1) {
     const novo = modelo(id);
     
     if (novo) {
      corretoras[indice] = novo;
      console.log("Atualizado com sucesso!")
     }
   } else { 
    console.log("Registro não encontrado.")
   }
 }
};
 
const destroy = () => {
  if(index()) {
    const id = prompt("ID: ");
   if(id != -1) {
     const indice = corretoras.findIndex(el => el.id == id);
     corretoras.splice(indice, 1);
     console.log("Registro deletado com sucesso!")
    }
  } else {
    console.log("Registro não encontrado.")
  }

};

module.exports = {
  store,
  index,
  update,
  destroy,
  show
};