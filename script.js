let books = [
    {
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949,
        genre: "Дистопия"
    },
    {
        title: "Д Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        genre: "Роман"
    },
    {
        title: "Гарри Поттер и Убийство в Восточном экспрессе",
        author: "Агата Кристи",
        year: 1934,
        genre: "Детектив"
    },
    {
        title: "Б Гарри Поттер и философский камень",
        author: "Дж. К. Роулинг",
        year: 1997,
        genre: "Фэнтези"
    },
    {
        title: "А Преступление и наказание",
        author: "Фёдор Достоевский",
        year: 1866,
        genre: "Роман"
    }
];


while(true) {
    let action = +prompt("Выберите действие:\n" +
        "1 - создать книгу\n" +
        "2 - редактировать книгу\n" +
        "3 - удалить книгу\n" +
        "4 - найти книги\n" +
        "5 - отсортировать книги\n" +
        "6 - отфильтровать книги\n" +
        "7 - отобразить все книги\n" +
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
            editBook();
            break;
        case 3:
            deleteBook();
            break;
        case 4:
            findBooks();
            break;
        case 5:
            sortBooks();
            break;
        case 6:
            filterBooks();
            break;
        case 7:
            outputBooks(books);
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
    outputBooks(books);
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
    outputBooks(books);
}

function sortBooks() {
    let direction = +prompt("Выберите порядок сортировки:\n" +
        "1 - название по возрастанию (по умолчанию)\n" +
        "2 - название по убыванию\n" +
        "3 - год по возрастанию\n" +
        "4 - год по убыванию"
    );
    
    books.sort(function (book1, book2) {
        switch (direction) {
            case 2:
                return book2.title.charCodeAt(0) - book1.title.charCodeAt(0);
            case 3:
                return book1.year - book2.year;
            case 4:
                return book2.year - book1.year;
            default:
                return book1.title.charCodeAt(0) - book2.title.charCodeAt(0);
        }
        
        // if (book1.year > book2.year) {
        //     return 1;
        // } else if (book1.year == book2.year) {
        //     return 0;
        // } else {
        //     return -1;
        // }
    });
    outputBooks(books);
}

function findBooks() {
    let title = prompt("Введите название книги:");
    title = title.toLowerCase();

    let filtredBooks = books.filter(function (book) {
        if (book.title.toLowerCase().includes(title)) {
            return true;
        } else {
            return false;
        }
    });

    outputBooks(filtredBooks);
}

function filterBooks() {
    let field = prompt("Выберите поле для фильтрации:\n" +
        "1 - по жанру (по умолчанию)\n" +
        "2 - по автору"
    );
    let value;
    if (field == 2) {
        value = prompt("Введите автора для фильтрации");
    } else {
        value = prompt("Введите жанр для фильтрации");
    }
    value = value.toLowerCase();

    let filtredBooks = books.filter(function (book) {
        if (field == 2) {
            if (book.author.toLowerCase().includes(value)) {
                return true;
            } else {
                return false;
            }
        } else {
            if (book.genre.toLowerCase().includes(value)) {
                return true;
            } else {
                return false;
            }
        }
    });

    outputBooks(filtredBooks);
}

function outputBooks(list, question = "") {
    let output = "";
    if (list.length <= 0) {
        alert("Список пуст");
        return;
    }
    list.forEach(function (book, index) {
        output += (index + 1) + ") " + book.title + " (" + book.year + " год, " + book.author + ")" + " [" + book.genre + "]" + "\n";
    });
    if (question) {
        return prompt(question + "\n\n" + output);
    } else {
        alert(output);
    }
}

function editBook() {
    let number = outputBooks(books, "Выберите номер книги");
    if (!number) {
        return;
    }
    let index = number - 1;
    let book = books[index];
    if (typeof book === "undefined") {
        alert("Введен некорректный номер книги");
        return;
    }
    let title = prompt('Введите новое название книги (по умолчанию "' + book.title + '"):');
    let author = prompt('Введите нового автора книги (по умолчанию "' + book.author + '"):');
    let year = prompt('Введите новый год издания книги (по умолчанию "' + book.year + '"):');
    let genre = prompt('Введите новый жанр книги (по умолчанию "' + book.genre + '"):');

    if (title) {
        book.title = title;
    }

    if (author) {
        book.author = author;
    }

    if (year) {
        book.year = year;
    }

    if (genre) {
        book.genre = genre;
    }
    
    books[index] = book;
    outputBooks(books);
}