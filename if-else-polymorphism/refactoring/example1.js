
class RegularUserLevel {
    getBookPrice(book) {
        return book.getPrice();
    }
    getEpubPrice(epub) {
        return epub.getPrice();
    }
}
class GoldUserLevel {
    getBookPrice(book) {
        return book.getPrice() * 0.8;
    }
    getEpubPrice(epub) {
        return epub.getPrice() * 0.85;
    }
}
class SilverUserLevel {
    getBookPrice(book) {
        return book.getPrice() * 0.9;
    }
    getEpubPrice(epub) {
        return epub.getPrice() * 0.85;
    }
}
class PlatinumUserLevel {
    getBookPrice(book) {
        return book.getPrice() * 0.75;
    }
    getEpubPrice(epub) {
        return epub.getPrice() * 0.8;
    }
}

function getBookPrice(user, book) {
    let level = user.getUserLevel()
    return level.getBookPrice(book);
}

function getEpubPrice(user, epub) {
    let level = user.getUserLevel()
    return level.getEpubPrice(epub);
}

let book = {
    getPrice: () => 1,
}
let epub = {
    getPrice: () => 2,
}

let regularUser = {
    getUserLevel: () => {
        return new RegularUserLevel();
    }
}
console.log("RegularUserLevel getPrice", getBookPrice(regularUser, book));
console.log("RegularUserLevel getEpubPrice", getEpubPrice(regularUser, epub));

let goldUser = {
    getUserLevel: () => {
        return new GoldUserLevel();
    }
}
console.log("RegularUserLevel getPrice", getBookPrice(goldUser, book));
console.log("RegularUserLevel getEpubPrice", getEpubPrice(goldUser, epub));
