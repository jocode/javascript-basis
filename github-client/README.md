# Github Client

Creamos las estructura del proyecto

```
github-client/
├── src/
|       └── index.html
├── app/
|       └── index.js
```

Luego en la terminal ejecutamos el comando

- **npm init --yes** Lo que hace es iniciar el proyecto como un proyecto de nodeJS. Automáticamente le crea el archivo `package.json`

Ahora instalamos las herramientas necesarias como `webpack` (WebPack es un empaquetador de módulos), lo que permite dejar el contenido listo para producción reduciendo el peso del código. `webpack-dev-server`,  `html-webpack-plugin`, `webpack-cli`

- **npm i webpack webpack-dev-server html-webpack-plugin webpack-cli -D**   La `-D` la instala como dependencias de desarrollo


- **webpack.config.js** En este archivo le indicamos los que debe realizar el módulo con los archivos que creemos en el proyecto.

Para eso creamos el objeto donde le indicamos la ruta del archivo principal que tomará y la ruta y nombre de archivo `bundle.js` que creará.

[webpack.config.js](webpack.config.js)
```js
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname__+'/dist',
        filename: 'bundle.js'
    }
}
```

Luego de crear el archivo y definir las propiedades, creamos un comando de script en **package.json** para que nos convierta el código de javascript a producción (Compatible con todos los navegadores). Para eso definimios en `package.json` la valor `"build": "webpack --mode production"` en *scripts*

Luego de tener esta configuración usamos el comando `npm run build`

Usamos el plugin `html-webpack-plugin` para transformar el código html.

Ahora creamos otra propiedad en el atributo *script* llamado `"dev": "webpack-dev-server --mode development"` para generar un servidor de desarrollo, de modo que cada vez que se ejecute convierte el código. 

Al usar el comando `npm run dev` nos crea el servidor de desarrollo y está a la escucha de nuevos cambios recargando automáticamente la página.

Con el módulo **path** podemos usar el código multiplataforma sin preocuparnos por el separador de directorios de los diferentes SO `/ en linux` ó `\ en windows` usando el método `path.join(__dirname, 'dist'),`

Para cambiar el puerto de servidor de webpack podemos usar siguiente propiedad en `webpack.config.js`

```js
devServer: {
    port: 3000
},
```


## Desarrolando el proyecto

Para el proyecto usaremos algunas bibliotecas como 
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) para CSS 
- [Animate.css](https://daneden.github.io/animate.css/) biblioteca de animación con css
- [FontAweasome]() Es una biblioteca de íconos

El `index.js` es el archivo principal, es el punto de entrada de la aplicación.

Para usar el API de github, debemos crearnos una aplicación en `developers settings` en GitHub. Allí indicamos el nombre de la aplicación.

Creamos los archivos de javascript con los cuales vamos a interactuar
- [index.js](src/app/index.js)
- [github.js](src/app/github.js)
- [config.json](src/app/config.json)
- [ui.js](src/app/ui.js)