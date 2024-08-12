<!-- Centrar el título -->
<h1 align="center">BackEnd con Node.js</h1>

<!-- Subtítulo -->
<p align="center"><em>Bootcamp Desarrollo Web - MÓDULOS 2 Y 3</em></p>

<!-- Separador -->
<hr>

<!-- Tabla de Contenido -->
<!-- <h2 align="center">Tabla de Contenido</h2> -->


<!-- Separador -->
<hr>

<!-- Contenido de cada sección -->

## Instalaciones necesarias

- Instalar version LTS [Node.js](https://nodejs.org/en)
- [Postman](https://www.postman.com/downloads/)
- Crear cuenta en [Mongo DB Atlas](https://www.mongodb.com/products/platform/atlas-database)


## Dependencias que estaremos utilizando

- [Express](https://www.npmjs.com/package/express)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)


<p><b>Recordemos teoría y estructuremos nuestro proyecto con Node.js.</b> Node.js es un entorno de ejecución de JavaScript del lado del servidor que utiliza el motor V8 de Google Chrome. Permite ejecutar código JavaScript en el servidor, lo cual es especialmente beneficioso para aplicaciones escalables y en tiempo real.<p>
<br>

### Material Recomendado 📚🎥

- [Documentación oficial de Node.js](https://nodejs.org/docs/latest/api/) 📚


### Temas Tratados 📖

1. **¿Qué es Node.js?**
   - Descripción de Node.js
   - Sus características.

2. **Conceptos Importantes**
   - Modelo Cliente-Servidor.
   - Protocolo HTTPS.
   - Módulos y dependencias.
   - npm (Node Package Manager).

3. **Sistemas de Módulos**
   - CommonJS.
   - ES6 Modules.

---

## Express
<p><b>Configuremos nuestro servidor con Express.<b> Express.js es un marco de aplicación web para Node.js. Proporciona una estructura minimalista pero robusta para construir aplicaciones web y APIs. Express simplifica la creación de rutas, manejo de middleware y la gestión de solicitudes y respuestas HTTP.<p>
<br>

### Material Recomendado 📚🎥

- [Documentación oficial de Express](https://expressjs.com/en/5x/api.html) 📚

### Temas Tratados 📖

1. **¿Qué es Express?**
   - Descripción de express.
   - Sus características.
   - ¿Cómo configurar nuestro servidor?

---

## MongoDB Atlas
<p><b>Creemos nuestro cluster en la nube y conectemos la base con nuestro proyecto.<b> MongoDB es un sistema de gestión de bases de datos NoSQL (orientado a documentos). A diferencia de las bases de datos relacionales, no utiliza tablas, sino que almacena datos en documentos flexibles con un formato similar a JSON. MongoDB Atlas es un servicio de base de datos en la nube totalmente gestionado para MongoDB, MongoDB Atlas simplifica la implementación, la escalabilidad y la administración de bases de datos.<p>
<br>

### Material Recomendado 📚🎥

- [Documentación oficial de MongoDB Atlas](https://docs.atlas.mongodb.com/) 📚


### Temas Tratados 📖

1. **¿Qué es MongoDB?**
   - Descripción de MongoDB.
   - Uso local vs. en la nube con MongoDB Atlas.

2. **Crear un Cluster en MongoDB Atlas**
   - Pasos para crear un cluster en MongoDB Atlas.

3. **Variables de Entorno y Uso de dotenv**
   - Manejo de variables de entorno.
   - Uso de dotenv para configuración.

4. **Conexión con la Base de Datos y Uso de Mongoose**
   - Establecer conexión con la base de datos.
   - Uso de Mongoose para interactuar con MongoDB.
---

## Modelos, Controladores y Rutas

### Modelos

   <p>Los modelos en Node.js son responsables de la interacción con la base de datos. Representan las entidades o recursos de la aplicación y definen la estructura y lógica de los datos. Algunas de las principales funciones de los modelos son:</p>

#### - Definición de Esquemas

   <p>Los modelos utilizan esquemas para definir la estructura de los datos, incluyendo los tipos de datos, validaciones, relaciones, etc.</p>

#### - Operaciones CRUD
   <p>Los modelos proporcionan métodos para realizar operaciones de creación, lectura, actualización y eliminación (CRUD) en la base de datos.</p>

#### - Lógica de Negocio

   <p>Los modelos pueden encapsular la lógica de negocio relacionada con los datos, como validaciones, cálculos, transformaciones, etc.</p>

### Controladores

   <p>Los controladores en Node.js actúan como intermediarios entre las rutas y los modelos. Sus principales responsabilidades son:</p>

#### - Manejo de Solicitudes

   <p>Los controladores reciben y procesan las solicitudes HTTP entrantes, como GET, POST, PUT y DELETE.</p>

#### - Lógica de Aplicación

   <p>Los controladores contienen la lógica de la aplicación, como la validación de datos, la transformación de respuestas, la gestión de errores, etc.</p>

#### - Interacción con Modelos
 
   <p>Los controladores interactúan con los modelos para realizar operaciones CRUD y obtener o manipular los datos.</p>

#### - Envío de Respuestas

   <p>Los controladores se encargan de enviar las respuestas HTTP adecuadas a los clientes, como JSON, HTML, etc.</p>

### Rutas

   <p>Las rutas en Node.js definen los endpoints de la aplicación web. Algunas de las principales funciones de las rutas son:</p>

#### - Definición de Endpoints
   <p>Las rutas establecen los diferentes endpoints de la aplicación, como /users, /products, /orders, etc.</p>

#### - Asignación de Controladores

   <p>Las rutas mapean los endpoints a los controladores correspondientes, lo que permite que las solicitudes se dirijan a la lógica adecuada.</p>

#### - Manejo de Parámetros
   <p>Las rutas pueden aceptar parámetros en la URL, como /users/:id, que luego pueden ser utilizados por los controladores.</p>

---


### Temas Tratados 📖

1. **Modelo Vista-Controlador (MVC)**
   - Roles de Controllers, Models y Routes.
   - APIs
   - Peticiones CRUD

2. **Creación de nuestro Modelo Productos**
   - Uso de mongoose para acceder al método Schema
   - Creación de nuestro productSchema con la estructura de datos a ingresar en nuestra DB
   - Creación y exportación de nuestro productModel

3. **Creación de nuestros Controllers para las peticiones GET, POST, PUT Y DELETE**
   - Importamos nuestro modelo para poderlo usar como forma de conectarnos con la DB para hacer las peticiones
   - Lógica y códigos HTTP para las peticiones GET, POST, PUT Y DELETE 
   - Creación y exportación de nuestros controladores (getProduct, postProduct, putProduct, deleteProduct)

4. **Creación de nuestras rutas para las peticiones GET, POST, PUT Y DELETE**
   - Importamos nuestros controladores y el router de express
   - Creamos una ruta para cada controlador, teniendo así una ruta para cada petición (GET, POST, PUT Y DELETE)
   - Creación y exportación de nuestros controladores (getProduct, postProduct, putProduct, deleteProduct)
   - exportamos nuestro router y lo usamos en nuestro app.js
   
---


## Videos de las Sesiones
<ul>
  <li><a href="https://www.youtube.com/watch?v=ccRyv838gYw&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=29" target="_blank">Video montar nuestro servidor con express</a> 🎥</li>
  <li><a href="https://www.youtube.com/watch?v=B2FaMb8BxdE&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=30" target="_blank">Video conexión base de datos</a> 🎥</li>
  <li><a href="https://www.youtube.com/watch?v=-2fnMa3djQI&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=31" target="_blank">Video creación de modelo, corntroladores y rutas, primeras pruebas con postman</a> 🎥</li>
  <li><a href="https://www.youtube.com/watch?v=A_oNnQhpV6I&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=32" target="_blank">Lógica para hacer las peticiones GET, PUT, POST Y DELETE en los controladores</a> 🎥</li>
  <li><a href="https://www.youtube.com/watch?v=Vjw3JgWgXN4&list=PLpD_vYWjZt11y0RdptTt9JkIafhOc-evL&index=33" target="_blank">REPASO GENERAL</a> 🎥</li>
</ul>

<!-- Separador -->
<hr>

<!-- Subtítulo de Autor -->
<h2 align="center">Autor</h2>

Realizado por: 
[Luisa Fernanda Castaño Vanegas](https://www.linkedin.com/in/luisacastanovanegas/). © 2024.
<br>

<!-- Mensaje de Estrellita -->
<p>Si te gustó el contenido del repositorio, ¡apóyanos dando una ⭐ al proyecto!</p>