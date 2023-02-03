// Uses of continue in a loop

// bookpricelist = [ 92, 180, 630, 200, 120, 450, 190, 150, 350, 130, 680, 200, 150, 400, 30]

/* for (let i = 0; i < bookpricelist.length; i++) {
    if ( bookpricelist[i] > 200 ) {
        continue
    }
    console.log(bookpricelist[i])
} */


const bookpricelist = [ 92, 180, 630, 200, 120, 450, 190, 150, 350, 130, 680, 200, 150, 400, 30]

let i = 0;
while ( i < bookpricelist.length ) {
    if (bookpricelist[i] > 200) {
        i++;
        continue
    }
    console.log(bookpricelist[i]);
    i++;
}