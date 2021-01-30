# API FILES

Api Files es el que se encarga de toda la gestion de archivos de HoloSalud.

# Instalacion

```
npm install
```

# Configuracion

Las configuraciones basicas se encuentran en el archivo **config.ts**

```
export const PORT = process.env.PORT || 2000
export const SECRET_TOKEN = Utils.getConfiguration().secretToken
export const PATH_INVOICES = 'bucket/invoice'
```

**Importante:** debe crear un archivo con nombre **configuration.json** y definir lo siguiente:

```json
{
  "secretToken": "indicarclavetoken"
}
```

# Compilacion

Para compilar el proyecto use:

```
npm run build
```
Para que el proyecto pueda funcionar correcta,ente no olvide el archivo **configuration.json**
