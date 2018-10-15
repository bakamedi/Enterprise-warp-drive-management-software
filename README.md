# Enterprise-warp-drive-management-software

## Author

Bakke Andrés Medina Abarca

## Estructura del Proyecto

--Engine.js
--Inyector.js
--main.js
--prueba.html

## Codigo

El Engine.js clase que permite crear los inyectores llamandolos desde su clase Inyector.js, estos asi permite obtener el daño, el flujo, el estraflujo y el sobre flujo.
El html test.html permite ver la consola de javascript en el navegador, para poder ver los sucesos del codigo, como tal dentro contiene el script para las variables input de los daños y la velocidad de la luz, para que funcione el codigo;

## Calculo de Formulas

Las formulas para la obtencion del flujo total se las consigue mediante:

flujoTotal = (SobreFlujoA - dañoA) + (SobreFlujoB - dañoB) + (SobreFlujoC - dañoC)

suponiendo que es un caso ideal que los inyectores se prenden y apagan al mismo tiempo, se puede asumir que:

SobreFlujoA = SobreFlujoB = SobreFlujoC = sobreFlujo, tienen un sobre flujo en comun

y que 100%(velocidad de la luz) =  300 [mg/s] por lo que se puede hacer una regla de 3, para calcular el flujoTotal

                        100%            ->  300 [mg/s]
            VelocidadDeLaLuzIngresada   ->  flujoTotal
            flujoTotal = 3 * VelocidadDeLaLuzIngresada

Entonces:


3 * VelocidadDeLaLuzIngresada = (SobreFlujo - dañoA) + (SobreFlujo - dañoB) + (SobreFlujo - dañoC)

--- SobreFlujo = (3*VelocidadDeLaLuzIngresada - dañoA - dañoB - dañoC)/3 ---

Para el calculo del tiempo nos dan que trabaja a 99 [mg/s] y solo funcion durante 1 min, con el flujo to

por lo tanto:
    sobreflujo en los inyectores menos el flujo da lugar a ver si existe un sobre flujo mayor que el flujoNominal que es 100,
    por lo tanto se hace una sumatoria de todos los sobre flujos [SUMA(i=0, hasta 3) SobreFlujo - 100] 
    k = {0,1}, si sobreflujo>100 entonces k = 1, caso contrario k = 0, k es un indice mulitplicativo para ver si exite un
    
    Por lo tanto se tiene la siguiente funcion:
    
    --- tiempoDeFuncionamiento = 99 - ( k*[SUMATORIA(i=0 hasta 3) SobreFlujo - flujo] ) - 1 ---
    
    
