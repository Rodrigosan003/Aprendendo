// function createUser(id, name, email, password) {
//     // Chamar uma API
//     return {
//         id,
//         name,
//         email,
//         password,
//     };
// }

// createUser(1, 'John Doe', "jhon@email.com","12345678"); 

// Nova funcionalidade adicionada
// Função createUser com parâmetros em objeto.

function createUser({id, name, email, password}) {
    // Chamar uma API
    return {
        id,
        name,
        email,
        password,
    };
}

createUser({
    id: 1,
    name: 'John Doe',
    email: "john@email.com",
    password:"12345678"
}); 