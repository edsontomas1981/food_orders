const carregaTabelaCategorias = async()=>{
  try {
      let url ='/produtos/categorias/read/'
      let dados = {}
      let conn = new Conn(url, dados)
      let result = await conn.sendPostRequest()
      return result
  } catch (error) {
      console.error('Ocorreu um erro:', error);
  }
}