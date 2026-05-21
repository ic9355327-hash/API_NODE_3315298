# 📁 Estructura profesionales de un API en Node.js
api-node
   |-src **Aqui vive todo el código real del proyecto**
       |-config **Configurarciones globales** 
         |-database.js

       |-controllers **Controla las peticiones HTTP**

       |-middlewares **Intermediarios de seguridad y validación**

       |-models **Respesenta las tablas de la base de datos**

       |-router **Define las URL de la API**

      |validators **Validar campos**
      
       |-services **Lógica del negocio**

       |-utils **Funciones reutilizables**

       |-seeders **datos pregrabados**

       |-app.js **Configuraciones de la aplicación**
       
       |-server.js **Punto de arranque**

    |-.env **Variables de entorno**

    |-.gitignore

    ## Inicializar un proyecto 
    ``npm init -y``

    instalar express ``npm install express``

    probar app.js en en terminal ejecutamos -> ``node app.js``
     en el navegador`` http://localhost:3000``
     terminar la ejecución ejecutas en el terminal-> ``ctrl+c``

     Instalamos otras dependencias en api.node
     npm install dotenv sequelize mysql2 pg pg-hstore

     cambios en el package.json

     ```
  "main": "src/server.js",
  "script": {
  },
     ```
     se puede ejecutar con``npm start``

     Modelo (Entidad Usuario)
     ruta src/models/usuario.model.js
     Servicio(Lógica de negocios)
     ruta src/services/usuario.service.js
     Controlador
     ruta src/controllers/usuario.controller.js
     Rutas
     src/routes/usuario.routes.js

     Dependencias
     npm install bcryptjs jsonwebtoken cors helmet morgan express-validator express-rate-limit

     dependencias desarrrollo
     npm install -D nodemon 

      "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },

  ejecutar con npm run dev

  configuración de seguridad en  .env 
  JWT_SECRET=mi_clave
SUPERADMIN_EMAIL=ic9355327@gmail.com
SUPERADMIN_PASSWORD=Admin123*

modificar usuario.model.js