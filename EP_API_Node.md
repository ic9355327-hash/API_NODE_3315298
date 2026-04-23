# 📁 Estructura profesionales de un API en Node.js
api-node
   |-src **Aqui vive todo el código real del proyecto**
       |-config **Configurarciones globales** 
       |-controllers **Controla las peticiones HTTP**
       |-middlewares **Intermediarios de seguridad y validación**
       |-models **Respesenta las tablas de la base de datos**
       |-router **Define las URL de la API**
       |-services **Lógica del negocio**
       |-utils **Funciones reutilizables**
       |-app.js **Configuraciones de la aplicación**
       |-server.js **Punto de arranque**
    |-.env **Variables de entorno**

    ## Inicializar un proyecto 
    ``npm init -y``

    instalar express ``npm install express``

    probar app.js en en terminal ejecutamos -> ``node app.js``
     en el navegador`` http://localhost:3000``
     terminar la ejecución ejecutas en el terminal-> ``ctrl+c``