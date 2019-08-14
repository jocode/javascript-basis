# Introducción a la programación Funcional

Hay algunas bibliotecas como react, Redux, RX que ya utilizan este paradigma.

## ¿Qué es la programación funcional?

Es un paradigma de programación, un paradigma es la forma en que modelamos una solución.

- Paradigmas de programación
    - POO (Programación orientada a objetos - Objetos)
    - Imperativo (Ejecutamos paso a paso un programa - Pasos)
    - Funcional (Funciones) Todo de basa en funciones
- Estilo de código
- Evita los cambios de estado y los datos mutables
- Se basan en datos de entrada -> salida


## ¿Por qué la programación funcional en JS?

- POO JS es confusa para los desarrolladores que usan lenguajes orientados a objetos como (C#, C++, Java)
- Fácil de depurar, de mantener y es más seguro al usar `this`
- Está acogiendo una gran comunidad
- Funciones de orden superior


> No iterar, usar map(), reduce(), filter(). Estos métodos devuelven un nuevo arreglo y no modifican el original.


- Persistencia a estructuras de datos para una inmutabilidad eficiente, librerías como `Mori`, `inmutable.js`, `underscore`, `Lodash`, `Ramda` se encargan de eso.