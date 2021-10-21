function sayHello(text) {
    console.log(text+" "+this.firstName+" "+this.lastName);
}

var person = {
    firstName:"Jan",
    lastName:"Kowalski"
};

sayHello.call(person, "Cześć"); //skorzystanie z funkcji, której nie ma zadelkarowanej jako metody w obiekcie ani nie ma w nim także referencji do niej. Pierwszym parametrem jest
            //this - wskazujemy z jakiego obiektu będziemy wykorzystywali pola, kolejne parametry jak text są bezpośrednio przekazywane do funkcji sayHello

//___________________________________________________________

function sum(first, second, third){
    console.log(first+second+third);
}

sum.call(this, 3,3,3); //przyjmuje jako pierwszy parametr this a nastepnie dowolna ilość parametrow
sum.apply(this, [3,3,3]); //przyjmuje jako pierwszy parametr this a nastepnie jeden parametr jako tablicę
// w obydwu przypadkach zwróci ten sam wynik
// w tym przykładzie wpisano samo this, bo musi być pierwszy parametr wpisany ale funkcja sum nie korzysta z this więc jest, bo jest

