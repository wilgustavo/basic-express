
# Ejemplo básico de express

Ejemplo de utilizacion del framework Express con Node.js

## Instalación

```sh
$ git clone https://github.com/wilgustavo/basic-express.git
$ cd basic-express
$ npm install
```

## Iniciar servidor

```sh
$ node index.js
```

## Ejemplos de uso

### Obtener la lista de usuarios

```
GET http://localhost:8008/usuarios
```

### Consultar un usuario

```
GET http://localhost:8008/usuarios/1
```

### Crear un usuario

```
POST http://localhost:8008/usuarios
Content-Type: application/json

{
  "nombre": "John", 
  "apellido": "Doe"
}
```

### Modificar los datos de un usuario

```
PUT http://localhost:8008/usuarios/1
Content-Type: application/json

{
  "nombre": "John", 
  "apellido": "Doe"
}
```

### Borrar un usuario

```
DELETE http://localhost:8008/usuarios/1
```
