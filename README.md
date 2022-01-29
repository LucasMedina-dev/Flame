# Flame- Trabajo final para Coderhouse
En este archivo se hará una explicacion de las aplicaciones de diferentes herramientas en la web
Adjunto este video para comprender mas el funcionamiento del sitio.
https://youtu.be/ViMpQOWNnG0

# Esta web esta alojada en vercel para que pueda probarla usted mismo https://noose.vercel.app/

## En este proyecto se aplicó
React router
SweetAlert2
Firestore
SASS

### firestore
Se usó Cloud Firestore para almacenar productos, cuenta de administrador y para almacenar los productos agregados al carrito.
Al ser unicamente una pagina para estudiar sobre React, decidi que los productos del carrito no se guardarian por usuario sino que se guardaria en la base de datos general de la web.
Se usaron filtros como .where para encontrar los productos que correspondan a cada categoria de busqueda
Se usó updateDoc, deleteDoc y setDoc para actualizar informacion, borrar documentos y crear nuevos, estas opciones se pueden encontrar en el panel de administrador
