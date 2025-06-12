# Lista de Compras Simple

Este proyecto contiene un script en JavaScript que implementa una lista de compras sencilla, permitiendo agregar productos, mostrarlos y contar la cantidad total de productos. Además, incluye una funcionalidad básica de autenticación mediante correo electrónico y contraseña.

## Características

- **Agregar productos** con nombre y cantidad.
- **Mostrar la lista de productos** con sus cantidades de forma clara por consola.
- **Contar el total** de productos agregados a la lista.
- **Autenticación básica** con validación de correo electrónico y contraseña mediante prompts.

## Cómo usar

1. Clona o descarga este repositorio.
2. Abre el archivo `.js` en un entorno que soporte ejecución de JavaScript (como la consola del navegador).
3. Ejecuta el script para:
   - Agregar productos a la lista de compras.
   - Visualizar la lista y el total de productos en consola.
   - Realizar el login básico mediante ventanas emergentes (`prompt`).

## Ejemplo

```javascript
agregarProductos('huevos', 32);
agregarProductos('manzanas', 3);
agregarProductos('peras', 5);
mostrarLista();
console.log('Total de productos:', contarProductos());
