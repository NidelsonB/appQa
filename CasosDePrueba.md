Plan de pruebas para la aplciación de solicitudes de de vacaciones

Este plan tiene como objetivo verificar la correcta funcionalidad de inicio de sesion y la visualizacion de puntos en comercios.

Escenarios de pruebas automatizados: 

Caso De Prueba Automatizado 1: Inicio De Sesión Exitoso.

ID
AL01

Descripción Del Caso De Prueba
Verificar que un usuario puede iniciar sesion correctamente utilizando las credenciales correctos

Pre Requisitos:
Haber seleccionado El Salvador como pais de residencia.

Pasos A Seguir:
1- Abrir la aplicación.
2- Dirigirse al campo de correo electronico e ingresarlo.
3- Dirigirse al campo de contraseña e ingresarla.
4- Hacer click/tap al boton de "Acceder".


Test Data
Correo Electrónico: guillememo95@gmail.com
Contraseña: 12345678

Resultados Esperados
El Usuario debería ingresar y tener acceso a sus puntos de lealtad.

Resultados Actuales
Login es efectivo

Pass/Fail
PASS.
-----------------------------------------------------------------------------------------------------------------------------

Caso De Prueba Automatizado 2: Verificación De Los Puntos

ID
AL02

Descripción Del Caso De Prueba
Verificar que la lista de comercios despliega los puntos disponibles

Pre Requisitos:
Haber iniciado sesión

Pasos A Seguir:
1- Dirigirte a la sección Mis Planes
2- Pulsar la opción "Ver todos"
3- Verificar los puntos del comercio


Test Data
N/A

Resultados Esperados
El usuario debería ver sus puntos.

Resultados Actuales
El usuario puede ver sus puntos

Pass/Fail
PASS

-----------------------------------------------------------------------------------------------------------------------------------

Caso De Prueba Manual 1: Validación De Notificaciones 

ID
AL001

Descripción Del Caso De Prueba
Verificar que las notificaciones desplieguen el historial de puntos de la aplicación

Pre Requisitos:
Haber iniciado sesión

Pasos A Seguir:
1- Dirigirse al menú principal
2- Pulsar en el icono de campana hubicado en la esquina superior derecha.


Test Data
N/A

Resultados Esperados
El usuario debería verificar el historial de transacciones de puntos

Resultados Actuales
El usuario es capaz de ver el historial de transacciones de puntos

Pass/Fail
PASS
---------------------------------------------------------------------------------------------------------------------------------------

Caso De Prueba Manual 2: Verificación De Categorías En La Página De Inicio

ID
AL002

Descripción Del Caso De Prueba
Verificar que existan mas de 4 categorías en la pagina de inicio

Pre Requisitos:
Haber iniciado sesión

Pasos A Seguir:
1- Dirigirse al menú principal
2- Verificar la sección de categorias
3- Verificar cuantas categorias se muestran.


Test Data
N/A

Resultados Esperados
El usuario debería visualizar al menos 4 categorias

Resultados Actuales
El usuario visualiza 2 categorias validas

Pass/Fail
FAIL