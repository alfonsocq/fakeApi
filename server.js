const { faker } = require('@faker-js/faker');
const express = require("express");

const app = express();



const usuario = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    contrasena: faker.internet.password() 

});

const empresa = () => ({
    _id: faker.datatype.uuid(),
    nombre: faker.company.companyName(),
    dirección: {
                calle: faker.address.streetAddress(),
                ciudad: faker.address.cityName(),
                estado: faker.address.state(),
                codigo_postal: faker.address.zipCode(),
                país: faker.address.country()

                }
});

app.get("/api/users/new", (req, res) => {
    const nuevo = usuario();
    res.json(nuevo);
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = empresa();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
    const nuevo = usuario();
    const newCompany = empresa();
    res.json([nuevo, newCompany]);
    
})

app.listen(8000, () => {
    console.log("The server is working")
})