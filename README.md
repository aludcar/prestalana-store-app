## Store App

## Figma URL

https://www.figma.com/design/ZAdqEE1kpys2cGp36I5IeT/Front-end-Test?node-id=794-1601&t=oTOoIU5sTZ3fFV0O-0

## API URL 
https://fakestoreapi.com/

## Pasos

#### Configuracion

- En la carperta raiz store-app
- npm install 
- npm run dev

#### Estructura Inicial del Proyecto

- El proyecto consta de 3 tres paginas, Login, Dashboard y una pagina de errores que se encarga de mostrar errores o mostrar la pagina 404, permite a los usuarios autenticarse, seleccionar productos favoritos, persistir la data y recuperarla. 
- La pagina Login tiene como funcion recibir al usuario y autenticarlo para permitir su ingreso al dashboard.
- La pagina Dashboard es la encargada de renderizar el filtro de busqueda, los productos del store, los productos favoritos y el carro de compras.
- La pagina de error muestra un mensaje de error generico o muestra un mensaje de pagina no encontrada cuando el usuario intenta acceder a una ruta no establecida.

#### Estructura del Estado Global

- El proyecto cuenta con la libreria de redux y react-redux que permiten hacer uso de un estado global. Para este proyecto fueron implementados 4 estados(reducers) diferentes, un estado para la authenticacion, productos del carro de compras, productos favoritos y productos del store.
- Cada estado contiene actions que permiten su creacion y actualizacion desde cualquier parte de la aplicacion.

#### Estructura de Rutas o Enrutamiento

- EL proyecto cuenta con la libreria de react-router-dom que permite crear y configurar las posibles rutas de mi web-app
- El proyecto cuenta con un createBrowserRouter, un RouterProvider y un componente que se encarga de proteger la rutas de los usuarios no autenticados.
- La configuracion browserRoute es basica, solo contiene dos objetos (login, dashboard), y cada uno de estos objetos tiene un elemenError que permite llamar a la pagina de error en caso tal que se presente un error.
- El componente de proteccion de las rutas actua de manera simple, pero efectiva. Verifica si mi estado de autenticacion existe un usuario y esta autenticado, si esto es correcto permite la carga del dashboard de otra forma redirecciona al login.

#### Estructuras de Estilos o Styled-Components

- El proyecto cuenta con la libreria styled-components que permite crear componentes con codigo css intenamente.
- El proyecto cuenta con una carpeta styled-components al interior de assets(src/assets/styles-components), en esta carpeta estan almacenados todos los componentes estilados que estan siendo utilizados en el proyecto.
- La forma de uso es muy simple, basicamente existen componentes contenedores o padres, que me permiten modificar todo lo que se encuentra hacia abajo en de su jerarquia. 

#### Persistencia Datos

- El proyecto cuenta con funciones de persistencia de datos, esto permite guardar en el localstorage informacion del usuario authenticado, datos como el nombre, token, si esta actenticado o no y su lista de favoritos.
- El proyecto cuenta con un objeto de persistencia global en donde se almancenan objetos individuales de cada usuario que se ha logeado
- Por falta de tiempo no pude implementar incriptacion de la data, como medida de seguridad para salvaguardar la informacion.

#### Funcion Drop and Drag

- El proyecto cuenta con una funcion arrastra y sueta, que permite al usuario seleccionar, arrastrar y soltar un producto de la lista de products en la lista de favoritos, seguido de este proceso, el producto es agregado a la lista de favoritos, guardado en el estado global y guardado en memoria para su posterior consumo.
- De forma inversa, el usuario puede tomar el producto de la lista de favoritos, arrastrar lo fuera de la lista de favoritos y soltarlo. Automaticamente el producto deja de pertenecer a la lista de favoritos, es removido del estado global y es removido de objeto guardado en memoria.


#### Consumo de API

- El proyecto cuenta con la libreia Axios para realizar las diferentes peticiones.
- El proyecto cuenta con una instancia personalizada de Axios para realizar todas las tareas de consumo.

### Authenticacion

- Para realizar las pruebas correspondientes, hice uso del API "fakestoreapi":
    **** Rutas:
    -->Productos: https://fakestoreapi.com/products
    -->Authenticacion/Login: https://fakestoreapi.com/auth/login
    --->Usuarios:
    ------------>{username: "mor_2314", password: "83r5^_"}
    ------------>{username: "mor_2314", password: "83r5^_" }


#### Limitaciones

- Para este proyecto, limite el numero de productos favoritos a 3 por questions de diseno, y a 4 productos del carrito de compras
- Habia dejado un overflow:auto para cada contenedor pero visualmente no estaba bien.