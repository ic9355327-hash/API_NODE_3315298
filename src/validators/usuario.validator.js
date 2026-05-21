const { body } = require('express-validator');
const crearUsuarioValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('Nombre requerido'),
    body('apellido')
    .notEmpty()
    .withMessage('Apellido requerido'),
    body('correo')
    .isEmail()
    .withMessage('Correo invalido'),
    body('password')
    .isLength({min: 6})
    .withMessage('Password mìnimo 6 caracteres'),
 ];
module.exports = { crearUsuarioValidator };