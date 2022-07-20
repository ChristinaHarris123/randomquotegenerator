function generate(){
    var quotes = {
        "- Maya Angelou" : '"If I am not good to myself, how can I expect anyone else to be good to me?."',
        "- W.E.B. Du Bois" : '"The cost of liberty is less than the price of repression."',
        "- Thurgood Marshall" : '"In recognizing the humanity of our fellow beings, we pay ourselves the highest tribute."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)]

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}