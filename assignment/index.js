// My little library

var program = require('commander');
 

 var book1_title = "De Greppel"
 var book1_author = "Jojo Moyes"
 var book1_price = "21,99"
 var book1_kind = "Gekartoneerd"
 var book1_pronounced_title = "Title: De Greppel";
 var book1_pronounced_author = "Author: Jojo Moyes";
 var book1_pronounced_price = "Price: 21,99";
 var book1_pronounced_kind = "Kind: Gekartoneerd";
 
 var book2_title = "Judas"
 var book2_author = "Astrid Holleeder"
 var book2_price = "22,50"
 var book2_kind = "Paperback"
 var book2_pronounced_title = "Title: Judas";
 var book2_pronounced_author = "Author: Astrid Holleeder";
 var book2_pronounced_price = "Price: 22,50";
 var book2_pronounced_kind = "Kind: Paperback";

 var book3_title = "We moeten allemaal feminist zijn"
 var book3_author = "Chimamanda Ngozi Adichie"
 var book3_price = "4,99"
 var book3_kind = "Paperback"
 var book3_pronounced_title = "Title: We moeten allemaal feminist zijn";
 var book3_pronounced_author = "Author: Chimamanda Ngozi Adichie";
 var book3_pronounced_price = "Price: 4,99";
 var book3_pronounced_kind = "Kind: Paperback";

 var book4_title = "Juliana"
 var book4_author = "Jolande Withuis"
 var book4_price = "39,99"
 var book4_kind = "Gekartoneerd"
 var book4_pronounced_title = "Title: Juliana";
 var book4_pronounced_author = "Author: Jolande Withuis";
 var book4_pronounced_price = "Price: 39,99";
 var book4_pronounced_kind = "Kind: Gekartoneerd";

 var book5_title = "How to win an argument"
 var book5_author = "Marcus Tullius Cicero"
 var book5_price = "17,50"
 var book5_kind = "Paperback"
 var book5_pronounced_title = "Title: How to win an argument";
 var book5_pronounced_author = "Author: Marcus Tullius Cicero";
 var book5_pronounced_price = "Price: 17,50";
 var book5_pronounced_kind = "Kind: Paperback";

program
  .version('0.1')
  .option('-t, --title [string]', 'Title of the book')
  .option('-a, --author [string]', 'Author of the book')
  .option('-p, --price [string]', 'Price of the book')
  .option('-k, --kind [string]', 'Kind of book')
  .parse(process.argv);


switch(program.title)
{
    case book1_title:
        console.log(book1_pronounced_title);
        console.log(book1_pronounced_author);
        console.log(book1_pronounced_price);
        console.log(book1_pronounced_kind);
        break;
    
    case book2_title:
        console.log(book2_pronounced_title);
        console.log(book2_pronounced_author);
        console.log(book2_pronounced_price);
        console.log(book2_pronounced_kind);
        break;

    case book3_title:
        console.log(book3_pronounced_title);
        console.log(book3_pronounced_author);
        console.log(book3_pronounced_price);
        console.log(book3_pronounced_kind);
        break;

    case book4_title:
        console.log(book4_pronounced_title);
        console.log(book4_pronounced_author);
        console.log(book4_pronounced_price);
        console.log(book4_pronounced_kind);
        break;

    case book5_title:
        console.log(book5_pronounced_title);
        console.log(book5_pronounced_author);
        console.log(book5_pronounced_price);
        console.log(book5_pronounced_kind);
        break;

}


switch(program.author)
{
    case book1_author:
        console.log(book1_pronounced_title);
        console.log(book1_pronounced_author);
        console.log(book1_pronounced_price);
        console.log(book1_pronounced_kind);
        break;
    
    case book2_author:
        console.log(book2_pronounced_title);
        console.log(book2_pronounced_author);
        console.log(book2_pronounced_price);
        console.log(book2_pronounced_kind);
        break;

    case book3_author:
        console.log(book3_pronounced_title);
        console.log(book3_pronounced_author);
        console.log(book3_pronounced_price);
        console.log(book3_pronounced_kind);
        break;

    case book4_author:
        console.log(book4_pronounced_title);
        console.log(book4_pronounced_author);
        console.log(book4_pronounced_price);
        console.log(book4_pronounced_kind);
        break;

    case book5_author:
        console.log(book5_pronounced_title);
        console.log(book5_pronounced_author);
        console.log(book5_pronounced_price);
        console.log(book5_pronounced_kind);
        break;


}


switch(program.price)
{
    case book1_price:
        console.log(book1_pronounced_title);
        console.log(book1_pronounced_author);
        console.log(book1_pronounced_price);
        console.log(book1_pronounced_kind);
        break;
    
    case book2_price:
        console.log(book2_pronounced_title);
        console.log(book2_pronounced_author);
        console.log(book2_pronounced_price);
        console.log(book2_pronounced_kind);
        break;

    case book3_price:
        console.log(book3_pronounced_title);
        console.log(book3_pronounced_author);
        console.log(book3_pronounced_price);
        console.log(book3_pronounced_kind);
        break;

    case book4_price:
        console.log(book4_pronounced_title);
        console.log(book4_pronounced_author);
        console.log(book4_pronounced_price);
        console.log(book4_pronounced_kind);
        break;

    case book5_price:
        console.log(book5_pronounced_title);
        console.log(book5_pronounced_author);
        console.log(book5_pronounced_price);
        console.log(book5_pronounced_kind);
        break;

}


switch(program.kind)
{
    case book1_kind:
        console.log(book1_pronounced_title);
        console.log(book1_pronounced_author);
        console.log(book1_pronounced_price);
        console.log(book1_pronounced_kind);

        console.log(book4_pronounced_title);
        console.log(book4_pronounced_author);
        console.log(book4_pronounced_price);
        console.log(book4_pronounced_kind);
        break;
    
    case book2_kind:
        console.log(book2_pronounced_title);
        console.log(book2_pronounced_author);
        console.log(book2_pronounced_price);
        console.log(book2_pronounced_kind);

        console.log(book3_pronounced_title);
        console.log(book3_pronounced_author);
        console.log(book3_pronounced_price);
        console.log(book3_pronounced_kind);

        console.log(book5_pronounced_title);
        console.log(book5_pronounced_author);
        console.log(book5_pronounced_price);
        console.log(book5_pronounced_kind);
        break;

    case book3_kind:
        console.log(book2_pronounced_title);
        console.log(book2_pronounced_author);
        console.log(book2_pronounced_price);
        console.log(book2_pronounced_kind);

        console.log(book3_pronounced_title);
        console.log(book3_pronounced_author);
        console.log(book3_pronounced_price);
        console.log(book3_pronounced_kind);

        console.log(book5_pronounced_title);
        console.log(book5_pronounced_author);
        console.log(book5_pronounced_price);
        console.log (book5_pronounced_kind);
        break;

    case book4_kind:
        console.log(book1_pronounced_title);
        console.log(book1_pronounced_author);
        console.log(book1_pronounced_price);
        console.log(book1_pronounced_kind);

        console.log(book4_pronounced_title);
        console.log(book4_pronounced_author);
        console.log(book4_pronounced_price);
        console.log(book4_pronounced_kind);
        break;

    case book5_kind:
        console.log(book2_pronounced_title);
        console.log(book2_pronounced_author);
        console.log(book2_pronounced_price);
        console.log(book2_pronounced_kind);

        console.log(book3_pronounced_title);
        console.log(book3_pronounced_author);
        console.log(book3_pronounced_price);
        console.log(book3_pronounced_kind);

        console.log(book5_pronounced_title);
        console.log(book5_pronounced_author);
        console.log(book5_pronounced_price);
        console.log(book5_pronounced_kind);
        break;    

}            