import {foo} from './legacy/app'

function greeter(person: string) {
    return `Hello ${person}!`
  }
  
const name1 = 'Node Hero'
 
console.log(greeter(name1))

foo("World");
