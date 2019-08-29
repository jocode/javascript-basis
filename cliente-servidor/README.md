# Modelo Cliente/Servidor

Las tecnologías utilizadas en aplicaciones web son:
- Bases de datos, MySQL es una base de datos relacionales y MondoDB es una base de datos no relacional
- Backend, existen muchos lenguajes que puedes usar cómo Python, Ruby, JavaScript
- Servidores, existen tecnologías como NGINX, Apache, Node
- Frontend, son las tecnologías que corren en el navegador, HTML, CSS y JavaScript

A un grupo de tecnologías se les conoce como Stack

> Recuerda:
> Si tuvieras un código en el Frontend que se conectara a una base de datos, esta seria visible para todos.

El método POST envía los datos en los headers HTTP, a diferencia de GET no muestras los valores en la url.

*Ver protocolo HTTP*

Uno de los Stacks más populares actualmente es el MEAN (mongoDB-Express - Angular - nodeJS)

Los *Sockets* es una opción especial para trasmitir datos cliente-servidor en tiempo real.

El Stack para ArduinoBot es nodeJS, express y JS.

## Primer servidor web con express

Instalemos NodeJS y los paquetes que necesitamos para programar nuestro arduino
Con esto instalado podemos crear nuestro primer servidor web.


**Recuerda:**
- NodeJS es un runtime para poder correr JavaScript sin un navegador.
- Debes tener permisos de administrador para poder instalar NodeJS en tu computador.

Comprobando la instalación de nodeJS

- **node -v** Verificamos la versión de node instalada.

- **npm install express** Instala express en el directorio actual.

- **npm install express -g** Instala express de manera global, para todos los usuarios.

- **node servidor.js** Con este comando ejecutamos express 

- **npm start** Iniciamos el servidor también. Para ellos debemos agregarel script en *package.json* con `"start": "node servidor.js"`

- **npm init `--yes`** Con este comando nodeJS nos crea automáticamente el package.json, incluyendo las dependencias de nuestro proyecto