// criaCategoria = document.getElementById('criaCategoria');
// readCategorias = document.getElementById('readCategorias');
// deleteCategorias = document.getElementById('deleteCategoria');

// // const carregaTabelaCategorias = async()=>{
// //   try {
// //       let url ='/api/read_categorias'
// //       let dados = {}
// //       let conexao = new Conexao(url, dados)
// //       let result = await conexao.sendPostRequest()
// //       return result
// //   } catch (error) {
// //       console.error('Ocorreu um erro:', error);
// //   }
// // }

// // const deletaCategoria=async(idCategoria)=>{
// //   try {
// //     let url = '/api/delete_categoria'
// //     let dados = {
// //         'id': idCategoria
// //     }
// //     let conexao = new Conexao(url, dados)
// //     let result = await conexao.sendPostRequest()
// //     populaTabelaCategoria()
// //     carrega_cmb_categorias()
// // } catch (error) {
// //     console.error('Ocorreu um erro:', error);
// // }
// // }

// // criaCategoria.addEventListener('click', async (e) => {
// //     let categoriaNome = document.getElementById('categoria').value
// //     try {
// //         let url = '/api/add_categoria'
// //         let dados = {
// //             'item': categoriaNome
// //         }
// //         let conexao = new Conexao(url, dados)
// //         let result = await conexao.sendPostRequest()
// //         if (result.status == 200){
// //           msgOK("Categoria cadastrada com sucesso! 🎉")
// //           carrega_cmb_categorias()
// //           populaTabelaCategoria()
// //         }
// //     } catch (error) {
// //         console.error('Ocorreu um erro:', error);
// //     }
// //     e.preventDefault();

// // })

// const populaTabelaCategoria = async () => {
//   let tabela_categorias = document.getElementById('tabela_categorias');
//   let htmlTabela = ``;
//   let data = await carregaTabelaCategorias();
//   let template = ``;

//   data.forEach(item => {
//     if (item[0] !== undefined && item[1] !== undefined) {
//       template += `<tr class="tr" id=${item[0]}>
//           <td>${item[0]}</td>
//           <td>${item[1]}</td>
//           <td><button type="button" class="btn btn-outline-danger btn-sm" data-id="${item[0]}">Apagar</button></td>
//         </tr>`;
//     }
//   });

//   template = `
//     <thead>
//       <tr>
//         <th scope="col">Id</th>
//         <th scope="col" colspan="3">Categoria</th>
//       </tr>
//     </thead>
//     <tbody>
//       ${template}
//     </tbody>
//   `;

//   tabela_categorias.innerHTML = template;

//   // Adicione um evento de clique aos botões "Apagar"
//   const botoesApagar = tabela_categorias.querySelectorAll('.btn-outline-danger');
//   botoesApagar.forEach(botao => {
//     botao.addEventListener('click', (e) => {
//       const idCategoria = e.target.getAttribute('data-id');
//       deletaCategoria(idCategoria);
//     });
//   });
// };


// // Obtenha o elemento do modal
// var modal = document.getElementById("cadastro_categoria");

// // Use o jQuery para adicionar um ouvinte de evento ao modal
// $(modal).on('shown.bs.modal', function () {
//     // Executa sua ação aqui quando o modal é 
//     populaTabelaCategoria()
// });

// // carregaTabelaCategorias()

// // // Adicione um evento de clique aos botões "Apagar"
// // const botoesApagar = tabela_categorias.querySelectorAll('.btn-outline-danger');
// // botoesApagar.forEach(botao => {
// //   botao.addEventListener('click', (e) => {
// //     const idCategoria = e.target.getAttribute('data-id');
// //     deletaCategoria(idCategoria);
// //   });
// // });

// const carrega_cmb_categorias = async()=>{
//   let cmb_categorias = document.getElementById("cmb_categorias")
//   let template
//   let data = await carregaTabelaCategorias()
//   data.forEach(item => {
//   template +=`<option value=${item[0]}>${item[1]}</option>
//   `;
//   cmb_categorias.innerHTML=template
//   });
// }

// // carrega_cmb_categorias()





