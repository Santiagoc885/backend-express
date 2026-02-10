# 👥 Gestor de Usuarios - Backend Express + Frontend

Una aplicación completa para gestionar usuarios con MongoDB, Express y una interfaz web moderna.

## 📋 Características

- ✅ Crear nuevos usuarios
- 🔍 Buscar usuarios por ID
- 📋 Listar todos los usuarios
- 🗑️ Eliminar usuarios
- 🎨 Interfaz web moderna y responsiva
- 📱 Compatible con dispositivos móviles

## 🚀 Despliegue en Vercel

### Paso 1: Preparar el repositorio

1. Asegúrate de que todo esté en Git:

```bash
git add .
git commit -m "Agregar frontend y configuración Vercel"
git push origin main
```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Haz clic en "New Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración

### Paso 3: Configurar variables de entorno

1. En la sección "Environment Variables" de Vercel, agrega:
   - **MONGO_URI**: Tu cadena de conexión de MongoDB

Ejemplo:

```
mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombreBaseDatos
```

### Paso 4: Desplegar

1. Haz clic en "Deploy"
2. Espera a que termine el despliegue
3. ¡Tu aplicación estará en línea! 🎉

## 🛠️ Desarrollo Local

### Instalación

```bash
npm install
```

### Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
MONGO_URI=mongodb://127.0.0.1:27017/testBack
PORT=3000
```

### Ejecutar

**Desarrollo (con nodemon):**

```bash
npm run dev
```

**Producción:**

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
backend-express/
├── public/              # Archivos estáticos (HTML, CSS, JS)
│   └── index.html      # Interfaz web principal
├── src/
│   ├── app.js          # Configuración de Express
│   ├── config/
│   │   └── db.js       # Conexión a MongoDB
│   ├── models/
│   │   └── user.js     # Esquema de Usuario
│   └── routes/
│       └── user.js     # Rutas de la API
├── .env                # Variables de entorno (no versionar)
├── vercel.json         # Configuración para Vercel
└── package.json        # Dependencias del proyecto
```

## 🔌 API Endpoints

### POST /users

Crear un nuevo usuario

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Santiago",
    "email": "santiago@test.com"
  }'
```

### GET /users

Obtener todos los usuarios

```bash
curl http://localhost:3000/users
```

### GET /users/:id

Obtener un usuario por ID

```bash
curl http://localhost:3000/users/65a123b456c789d012e34f56
```

### PUT /users/:id

Actualizar un usuario

```bash
curl -X PUT http://localhost:3000/users/65a123b456c789d012e34f56 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nuevo Nombre",
    "email": "nuevo@test.com"
  }'
```

### DELETE /users/:id

Eliminar un usuario

```bash
curl -X DELETE http://localhost:3000/users/65a123b456c789d012e34f56
```

## 📦 Dependencias

- **express**: Framework web
- **mongoose**: ODM para MongoDB
- **dotenv**: Manejo de variables de entorno
- **nodemon**: Reinicio automático en desarrollo

## ⚠️ Notas Importantes para Vercel

1. **MongoDB Atlas**: Para Vercel, usa MongoDB Atlas (cloud) en lugar de MongoDB local
2. **Variables de entorno**: Configúralas en el dashboard de Vercel
3. **CORS**: Si accedes desde otro dominio, asegúrate de configurar CORS si es necesario
4. **Timeout**: Vercel tiene límites de tiempo, asegúrate de que las operaciones sean rápidas

## 🐛 Solución de Problemas

### Error E11000 (Email duplicado)

- El email ya existe en la base de datos
- Usa un email diferente o elimina el usuario existente

### "Database not connected"

- Verifica que MONGO_URI esté configurada correctamente
- Comprueba que MongoDB Atlas esté accesible desde Vercel

### Error de CORS

- Si accedes desde un dominio diferente, agrega configuración CORS en `app.js`

## 📞 Soporte

Si encuentras problemas, verifica:

1. La conexión a MongoDB
2. Las variables de entorno en Vercel
3. Los logs de la consola de Vercel

---

**¡Hecho con ❤️ para gestionar usuarios!**
