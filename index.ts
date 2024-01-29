import { v4 as uuidv4 } from 'uuid';

function createUser(name: string, age: number): User {
    return {
        id: uuidv4(),
        name,
        age,
        cart: []
    };
}
