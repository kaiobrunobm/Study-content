const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategory = booksByCategory.length //variavel para armazenar o tamanho de dados na array que é igual as categorias do booksByCatagory
console.log(`O total de categorias é ${totalCategory}`) //printar o total de categorias

for (let category of booksByCategory) { // armazenando na variavel category dados da booksByCategory
    console.log(`total de livros da  categoria ${category.category}`) //printando o total de livros da categoria mais a varival category com os dados de category do booksByCategory
    console.log(category.books.length) // printando as categorias e o tanto de books em cada categoria
}

function countAuthors () { // function para contar os  autores de booksByCategory
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
            authors.push(book.author)
            }
        }
    }

    console.log('Total de autores:', authors.length)
}
countAuthors();

function booksOfAuthor(author) { 
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author ) {
                books.push(book.title)
            }
    }
}
    console.log(`Livros do autor ${author}: ${books.join("\n")}`)
}
booksOfAuthor('Augusto Cury');