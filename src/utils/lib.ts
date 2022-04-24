interface CountType {
    count:number;
}

interface MovieType {
  name: string;
  actors: string[];
}
/**
 * 1) Create a function that takes an array of integers as its lone argument and returns an array containing
 the square of each value in the input.
 */

export const calcSquare = (values:number[]) =>( values.map((value) => {
    const _val= isNaN(value)? 0: value;
    return Math.pow(_val, 2)}) 
    ); 

/**
 * 2) Create a function that takes an array of counter objects (see example) as its lone argument and returns
 the sum of all of the counters' `count` properties.
 */

export const sumCounts= (counts:CountType[]) => counts.reduce((accumulator:number, current:CountType) => accumulator + current.count, 0);


/**
 *  4) Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends
 an unordered list of every actor's name to the DOM's `body` element.
 
 The names in the list should be unique (no actor's name should appear in the list more than once).
 If the list element already exists in the DOM, the procedure should replace the existing list with a new one.
 
 Bonus points if the names are alphabetically sorted :)

 */
export const sortActors = (movies:MovieType[])=>(
    movies.map(movie=>({...movie, actors: movie.actors.sort()}))
)