fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game',{

	"method": 'GET',
	"headers": {
		'X-RapidAPI-Key': '81cb98ddb3mshabe196ebcc9b3bep1ddecfjsnf21df230981f',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})

.then(response => response.json() )
.then(data => {
    const list = data.d //toda lista de filmes do array
    
    list.map((item) => {
        const name = item.l
        const poster = item.i.imageUrl
        const movie = `<li><img src="${poster}"> <h2>${name}</h2><li>`
        document.querySelector('.movies').innerHTML += movie
    })
})
.catch(err => {
    console.log(err)

})