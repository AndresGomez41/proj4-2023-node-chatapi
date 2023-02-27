


[X] Manejar usuarios
[X] Esos usarios puedan inicar sesion 
[X] Crear conversaciones
[X] Leer las conversaciones de las cuales son miembros
[X] Crear grupos de conversaciones 
[X] Enviar mensajes 
[X] Eliminar mensajes 

- Confirmacion de lectura del mensaje 
- Manejar fotos de perfil 
- Reenviar un mensaje 
- Crear links para invitar gente a un grupo
- Manejar un historial de mensajes para unicamente mostrar desde que te agregaron a un grupo

![Database Diagram](https://i.imgur.com/IHhtWv2.png)

1. POST /api/v1/conversations
  - Recibir la informacion para crear la conversacion junto al usuario invitado
2. En la peticion se valida si el id del invitado existe
3. se crea la conversacion
4. se crea el participante owner
5. se crea el participante guest

Conversation Router

/api/v1/conversations

- /
- /:conversation_id
- /:converation_id/messages
- /:conversation_id/participants

Conversaciones Tatiana

- Tatiana y Orianna
- Tatiana y Sahid
- Tatiana y Alan

Conversaciones Orianna

- Orianna y Alan


