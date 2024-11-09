let books = [
    {
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949,
        genre: "Дистопия"
    },
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        genre: "Роман"
    },
    {
        title: "Убийство в Восточном экспрессе",
        author: "Агата Кристи",
        year: 1934,
        genre: "Детектив"
    },
    {
        title: "Гарри Поттер и философский камень",
        author: "Дж. К. Роулинг",
        year: 1997,
        genre: "Фэнтези"
    },
    {
        title: "Преступление и наказание",
        author: "Фёдор Достоевский",
        year: 1866,
        genre: "Роман"
    }
];


while(true) {
    let action = +prompt("Выберите действие:\n" +
        "1 - создать книгу\n" +
        "2 - удалить книгу\n" +
        "3 - найти книги\n" +
        "4 - отобразить все книги\n" +
        "5 - отсортировать книги по году\n" +
        "0 - выход");

    if (action == 0) {
        alert("До свидания!");
        break;
    }

    switch (action) {
        case 1:
            createBook();
            break;
        case 2:
            deleteBook();
            break;
        case 3:
            findBooks();
            break;
        case 4:
            outputBooks();
            break;
        case 5:
            sortBooks();
            break;
        default:
            alert("Некорректное действие!");
            break;
    }
}

function createBook() {
    let title, author, year, genre;

    do {
        title = prompt("Введите название книги:");
    } while(!title);

    do {
        author = prompt("Введите автора книги:");
    } while (!author);

    do {
        year = prompt("Введите год издания книги:");
    } while (!year);

    do {
        genre = prompt("Введите жанр книги:");
    } while (!genre);

    let book = {
        title: title,
        author: author,
        year: year,
        genre: genre
        // title,
        // author,
        // year,
        // genre
    };

    books.push(book);
    outputBooks();
}

function deleteBook() {
    let title = prompt("Введите название книги:");
    let index = books.findIndex(function (book) {
        if (title == book.title) {
            return true;
        } else {
            return false;
        }

        // return title == book.title;
    });

    if (index === -1) {
        alert("Книга не найдена!");
        return;
    }

    books.splice(index, 1);
    outputBooks();
}

function findBooks() {
    alert("find");
}

function outputBooks() {
    let output = "";
    books.forEach(function (book, index) {
        output += (index + 1) + ") " + book.title + " (" + book.year + " год, " + book.author + ")" + " [" + book.genre + "]" + "\n";
    });
    alert(output);
}

function sortBooks() {
    alert("sort");
}