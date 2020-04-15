const express = require('express')

const server = express()
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is up! Listening on ${PORT}`));

function calcDateDiff(dateString) {
	var day = dateString.substring(0, 2) 
	var month = dateString.substring(2, 4)
	var year = dateString.substring(4)

	var formattedDate = year + "-" + month + "-" + day // Formatamos a data para o padrao ISO, que o javascript usa
	var requestedDate = new Date(formattedDate) // Instanciamos um objeto com a data que foi pedida
	var today = new Date() // Instanciamos um objeto com a data de hoje

	var diffMilli = (requestedDate - today ) // Diferenca das datas em milissegundos
	var diffDays = parseInt( diffMilli/ (1000 * 60 * 60 * 24), 10);  // Diferenca das datas em dias

	return diffDays
}

server.get("/asd", (request, response) => {

	var reqDate = request.query.date // Pegamos o argumento da URL
	var days = calcDateDiff(reqDate) // Calculamos a diferenca em dias
    
 	response.json({ "dias": days }); // Retornamos ao usuário essa contagem de dias!
} );

