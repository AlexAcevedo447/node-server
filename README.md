# Creando funcionalidades con promesas en mi lista de tareas

## ¿Qué sucedió al usar el método .then()?

- La solicitud al inicio se ejecuta más de una vez.
- Lo probé resolviendo varias promesas al mismo tiempo y las promesas se van resolviendo en paralelo.
- Es más comprensible para trabajar en programación funcional

## ¿Qué sucedió al usar async/await?

- La solicitud al inicio se ejecuta más de una vez.
- Lo probé resolviendo varias promesas al mismo tiempo y se resuelven una tras otra en orden.
- Es más comprensible en programación orientada a objetos.
- Su <<Azúcar sintáctica>> hace que sea más legible.

## ¿Qué diferencias encontraste entre estos dos métodos para resolver promesas?

Lo que encontré es que los dos métodos tienen el mismo propósito de manejar Promesas, lo que cambia y marca la diferencia es su enfoque:

Mientras .then() resuelve promesas en paralelo, async/await resuelve promesas en orden de llamado.

Otro aspecto es que noté que la facilidad de comprensión (<<Azúcar sintáctica>>) también es un diferencial:

Mientras que .then() usa un callback que recibe como parámetro el resultado exitoso, en async/await solo es necesario guardar la promesa en una variable, anteponiéndole a la promesa el await, poniendo el async si está dentro de una función.

## CONCLUSIONES:

Es válido usar los dos métodos, lo que hace que cambies entre uno y otro es el propósito de la funcionalidad que necesites desarrollar.
