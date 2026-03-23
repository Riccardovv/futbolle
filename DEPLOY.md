# FUTBOL-LE - Guía de Despliegue

## 📦 Archivos del proyecto

**Archivo fuente:** `s3://claudio-tt/proyectos/futbolle/futbolle-app-v1.zip`

Para descargar:
```bash
aws s3 cp s3://claudio-tt/proyectos/futbolle/futbolle-app-v1.zip .
unzip futbolle-app-v1.zip
```

---

## 🚀 Opción 1: Vercel (Recomendado)

Vercel es el más sencillo y gratuito para proyectos React.

### Pasos:

1. **Crear cuenta en Vercel**
   - Ir a https://vercel.com
   - Registrarse con GitHub (recomendado) o email

2. **Instalar Vercel CLI (opcional)**
   ```bash
   npm i -g vercel
   ```

3. **Desplegar desde CLI**
   ```bash
   cd futbolle-app
   vercel
   ```
   - Seguir las instrucciones
   - Confirmar el nombre del proyecto
   - Listo, te dará una URL como `futbolle.vercel.app`

4. **O subir manualmente**
   - Ir a https://vercel.com/new
   - Subir la carpeta `futbolle-app` como zip
   - Framework preset: Vite
   - Deploy

### Ventajas Vercel:
- ✅ Gratis para proyectos personales
- ✅ Dominio propio gratuito (.vercel.app)
- ✅ HTTPS automático
- ✅ CI/CD automático

---

## 🚀 Opción 2: Netlify

Alternativa igual de buena.

### Pasos:

1. **Crear cuenta en Netlify**
   - https://www.netlify.com

2. **Desplegar**
   - Ir a "Add new site" → "Deploy manually"
   - Arrastrar la carpeta `futbolle-app/dist` (después de hacer build)
   - O conectar GitHub

3. **Build local primero**
   ```bash
   cd futbolle-app
   npm install
   npm run build
   # Subir carpeta 'dist'
   ```

---

## 🚀 Opción 3: GitHub Pages (gratis)

1. **Subir a GitHub**
   - Crear repo nuevo
   - Subir el código

2. **Activar GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main /root
   - Guardar

3. **Configurar Vite para GitHub Pages**
   - Editar `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/nombre-del-repo/',
   })
   ```

---

## 🛠️ Desarrollo local

```bash
# Descargar y entrar al proyecto
cd futbolle-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abre http://localhost:5173

# Para producción
npm run build
# Genera carpeta 'dist' lista para subir
```

---

## 📋 Checklist antes de desplegar

- [ ] Base de datos de equipos completa (actualmente solo 5 equipos)
- [ ] Sistema para cambiar equipo diario
- [ ] Analytics básico (opcional)
- [ ] Dominio personalizado (opcional)

---

## 🔧 Configuración recomendada

### Para Vercel:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Variables de entorno (opcional):
- `VITE_DAY_SEED` - Para sincronizar equipo del día entre usuarios

---

## 🌐 Dominio personalizado (opcional)

Una vez desplegado, puedes comprar un dominio:
- futbolle.app
- futbol-le.com
- adivina-equipo.com

Y configurarlo en Vercel/Netlify gratis.

---

## 📊 Próximos pasos después del despliegue

1. Ampliar base de datos (más equipos europeos)
2. Sistema de estadísticas
3. Compartir resultados en redes
4. Modo oscuro/claro
5. App móvil (PWA)

---

**¿Necesitas ayuda con algún paso específico?** 🚀
