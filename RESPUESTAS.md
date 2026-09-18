# Parte A · Estructuras de datos: la pila y la cola

## A1. Conceptos

### a) ¿Qué significan LIFO y FIFO? ¿Cuál corresponde a la pila y cuál a la cola?

* **LIFO** significa *Last In, First Out*, es decir, "último en entrar, primero en salir". Corresponde a la **pila**.
* **FIFO** significa *First In, First Out*, es decir, "primero en entrar, primero en salir". Corresponde a la **cola**.

### b) ¿Por qué extremo entra y por qué extremo sale un elemento en cada estructura?

* En una **pila**, los elementos entran y salen por el mismo extremo, que sería la parte de arriba. Por eso, el último elemento que se agrega es el primero que se puede sacar.
* En una **cola**, los elementos entran por un extremo y salen por el otro. Los nuevos elementos se agregan al final y se retira primero el que llegó primero.

### c) Ejemplos

**Pila:**

* **Ejemplo de la vida real:** una pila de platos. El último plato que ponemos arriba es el primero que sacamos.
* **Ejemplo en una aplicación móvil:** el historial de pantallas. Cuando presionamos "atrás", volvemos a la pantalla anterior.

**Cola:**

* **Ejemplo de la vida real:** una fila de personas esperando para entrar a un lugar. La primera persona que llegó es la primera en ser atendida.
* **Ejemplo en una aplicación móvil:** una cola de canciones, donde las canciones se reproducen en el orden en que fueron agregadas.

## A2. Seguimiento de una pila

La pila comienza vacía.

1. `p.push('Inicio')` → `[Inicio]`
2. `p.push('Productos')` → `[Inicio, Productos]`
3. `p.push('Detalle 3')` → `[Inicio, Productos, Detalle 3]`
4. `p.pop()` → se elimina `Detalle 3` → `[Inicio, Productos]`
5. `p.push('Perfil')` → `[Inicio, Productos, Perfil]`

Entonces:

### (1) `console.log(p.tope());`

Imprime:

```text
Perfil
```

La pila queda:

```text
Inicio → Productos → Perfil
```

### (2) `console.log(p.pop());`

Imprime:

```text
Perfil
```

Porque `pop()` elimina y devuelve el elemento que está en el tope.

La pila queda:

```text
Inicio → Productos
```

### (3) `console.log(p.tope());`

Imprime:

```text
Productos
```

La pila no cambia porque `tope()` solamente consulta cuál es el elemento de arriba.

### (4) `console.log(p.vacia);`

Imprime:

```text
false
```

La pila no está vacía porque todavía contiene `Inicio` y `Productos`.

### Pila final

De **base a tope**:

```text
Inicio → Productos
```

## A3. Seguimiento de una cola

La cola comienza vacía.

1. `c.encolar('Ana')` → `[Ana]`
2. `c.encolar('Beto')` → `[Ana, Beto]`
3. `c.desencolar()` → se elimina `Ana` → `[Beto]`
4. `c.encolar('Caro')` → `[Beto, Caro]`
5. `c.encolar('Dani')` → `[Beto, Caro, Dani]`

Entonces:

### (1) `console.log(c.frente());`

Imprime:

```text
Beto
```

La cola queda:

```text
Beto → Caro → Dani
```

### (2) `console.log(c.desencolar());`

Imprime:

```text
Beto
```

Porque `desencolar()` elimina y devuelve el elemento que está primero.

La cola queda:

```text
Caro → Dani
```

### (3) `console.log(c.vacia);`

Imprime:

```text
false
```

La cola no está vacía porque todavía contiene `Caro` y `Dani`.

### Cola final

De **frente a final**:

```text
Caro → Dani
```

## A4. Análisis de la implementación

### a) En las clases de clase, el array se declara como `#items`. ¿Qué significa el `#` y qué problema evita?

El `#` indica que `items` es un **atributo privado** de la clase. Solo se puede acceder a él desde dentro de la propia clase.

Esto evita que desde afuera se pueda modificar directamente el array y alterar la estructura de la pila o la cola sin usar sus métodos.

### b) La cola usa `array.shift()` para desencolar. ¿Qué problema de rendimiento tiene con colas muy grandes? ¿Cómo lo resuelven las colas “serias”?

`shift()` elimina el primer elemento del array y hace que los demás elementos tengan que desplazarse una posición.

Con una cola muy grande, esto puede ser lento porque hay que mover muchos elementos cada vez que se desencola.

Las implementaciones más eficientes suelen usar **índices o punteros** para saber cuál es el frente y cuál es el final, evitando mover todos los elementos.

### c) ¿Qué método de array usa la pila para sacar y cuál usa la cola? ¿Por qué no pueden usar el mismo?

La **pila** usa `pop()` para sacar el último elemento agregado.

La **cola** usa `shift()` para sacar el primer elemento.

No pueden usar el mismo método porque tienen comportamientos diferentes:

* La pila sigue **LIFO**: sale el último que entró.
* La cola sigue **FIFO**: sale el primero que entró.

Por eso la pila necesita sacar desde el final y la cola desde el principio.



# A6. Pila y cola dentro de Expo Router

### a) Historial de pantallas en un Stack

* **Estructura que lo describe:** El historial se maneja mediante una estructura de **pila (Stack)**, donde las pantallas se apilan una encima de la otra siguiendo la lógica **LIFO** (*Last In, First Out*).
* **Pantalla visible:** La pantalla visible es siempre la que se encuentra en el **tope de la pila** (el elemento superior).
* **Operación para ir "atrás":** La operación que se ejecuta es un **desapilar (`pop`)**. Esto remueve la pantalla actual del tope de la pila y muestra la que estaba inmediatamente abajo.

### b) Acciones de navegación y comportamiento ante clics rápidos

* **Estructura para acciones de navegación:** Expo Router gestiona las solicitudes de navegación internamente mediante una **cola (Queue)** de acciones. Las transiciones se encolan y se procesan de manera secuencial (**FIFO** - *First In, First Out*).
* **Comportamiento si el usuario toca dos links muy rápido:** Ambas acciones se encolan casi al mismo tiempo. Al ser una navegación asincrónica, la aplicación procesa ambas órdenes consecutivamente y termina abriendo las dos pantallas en secuencia, montando la segunda por encima de la primera de forma incorrecta.

B1. Del archivo a la URL
Completá la tabla. Si el archivo no genera una pantalla, explicá qué hace. Si genera un problema,
indicalo.

| Archivo | URL que genera / Función |
| :--- | :--- |
| `src/app/(tabs)/index.tsx` | **`/`**<br>*(Pestaña principal/raíz. El grupo `(tabs)` no suma segmento a la URL).* |
| `src/app/acerca.tsx` | **`/acerca`** |
| `src/app/(tabs)/perfil.tsx` | **`/perfil`** |
| `src/app/(tabs)/productos/index.tsx` | **`/productos`** |
| `src/app/(tabs)/productos/[id].tsx` | **`/productos/:id`**<br>*(Ejemplo: `/productos/123`. Ruta dinámica por ID).* |
| `src/app/docs/[...slug].tsx` | **`/docs/*`**<br>*(Ruta Catch-All / comodín. Captura rutas anidadas como `/docs/a/b/c`).* |
| `src/app/_layout.tsx` | **No genera pantalla/URL.**<br>*(Define la estructura, contexto o UI compartida/layout para todas las rutas del nivel e inferiores).* |
| `src/app/+not-found.tsx` | **Ruta especial de fallback (404).**<br>*(Se renderiza automáticamente cuando ninguna otra ruta coincide con la URL solicitada).* |
| `src/app/Boton.tsx` | **Genera la URL `/Boton` (Problema de arquitectura).**<br>*(Al estar dentro de `src/app/`, Expo Router lo interpreta como una pantalla navegable. Los componentes reutilizables deben ir fuera, por ejemplo en `src/components/`).* |



### B2. De la URL al archivo

| URL | Archivo a crear (ruta completa dentro de `src/app`) |
| :--- | :--- |
| `/categorias/bebidas` *(y cualquier otra categoría)* | `src/app/categorias/[categoria].tsx` |
| `/buscar?q=mate&categoria=kiosco` | `src/app/buscar.tsx` |
| `/ayuda/pagos/tarjeta` y `/ayuda/horarios` | `src/app/ayuda/[...slug].tsx` |
| `/ayuda` *(con una pantalla propia)* | `src/app/ayuda/index.tsx` *(o `src/app/ayuda.tsx`)* |

---

1. **`/categorias/bebidas`:**
   * **Archivo:** `src/app/categorias/[categoria].tsx`
   * **Razón:** Usa corchetes `[categoria]` para definir un parámetro dinámico en la ruta, permitiendo capturar cualquier valor (como `bebidas`, `almacen`, `limpieza`, etc.).

2. **`/buscar?q=mate&categoria=kiosco`:**
   * **Archivo:** `src/app/buscar.tsx`
   * **Razón:** Los query parameters (como `?q=mate&categoria=kiosco`) no modifican la estructura de archivos en Expo Router; se leen dinámicamente dentro del componente `buscar.tsx` usando el hook `useLocalSearchParams()`.

3. **`/ayuda/pagos/tarjeta` y `/ayuda/horarios`:**
   * **Archivo:** `src/app/ayuda/[...slug].tsx`
   * **Razón:** La sintaxis Catch-All `[...slug]` permite capturar rutas anidadas con un número variable de segmentos (tanto `/ayuda/horarios` con 1 segmento como `/ayuda/pagos/tarjeta` con 2 segmentos).

4. **`/ayuda` (pantalla propia):**
   * **Archivo:** `src/app/ayuda/index.tsx` (recomendado si la carpeta `ayuda` contiene otras subrutas) o `src/app/ayuda.tsx`.
   * **Razón:** Sirve como la ruta raíz o landing principal de la sección de ayuda.



### B3. Verdadero o Falso

* **a) Con Expo Router, cada pantalla nueva se debe registrar en una tabla de configuración.**  
  **Falso.** Expo Router utiliza un enrutamiento basado en el sistema de archivos (*file-based routing*). La simple creación de un archivo en el directorio `src/app` genera automáticamente la ruta correspondiente sin necesidad de registrarla de forma manual.

* **b) Los archivos `_layout.tsx` son pantallas que el usuario puede visitar.**  
  **Falso.** Los archivos `_layout.tsx` no son pantallas navegables ni generan segmentos en la URL. Su propósito es definir layouts compartidos, navegadores (como Stacks o Tabs) y proveer contextos a las rutas hijas.

* **c) Una carpeta entre paréntesis, como `(tabs)`, no aparece en la URL.**  
  **Verdadero.** Las carpetas entre paréntesis se denominan *route groups* (grupos de rutas) y sirven exclusivamente para organizar el código o aplicar layouts sin afectar la estructura de la URL.

* **d) Para agregar una librería conviene usar `npm install`, porque siempre trae la última versión.**  
  **Falso.** En proyectos con Expo es recomendable utilizar **`npx expo install <paquete>`**. Esta herramienta instala versiones de las librerías que están expresamente probadas y garantizadas para ser compatibles con la versión específica del SDK de Expo que está utilizando el proyecto.

* **e) En `package.json`, `"main": "expo-router/entry"` reemplaza al viejo `App.tsx`.**  
  **Verdadero.** Esa línea le indica a React Native/Expo que el punto de entrada principal de la aplicación pasa a ser gestionado dinámicamente por el motor de Expo Router en lugar de un archivo `App.tsx` tradicional.

* **f) La ruta `/_sitemap` lista todas las rutas de la app y sirve para depurar.**  
  **Verdadero.** En entornos de desarrollo, Expo Router genera la pantalla auxiliar `/_sitemap` para previsualizar, navegar y depurar el árbol completo de rutas registradas.

* **g) Si existen `docs/index.tsx` y `docs/[...slug].tsx`, la URL `/docs` muestra `docs/index.tsx`.**  
  **Verdadero.** La coincidencia exacta (*exact match*) representada por `index.tsx` tiene prioridad sobre las rutas comodín (*catch-all*) como `[...slug].tsx`.

* **h) En SDK 57, `expo-router` usa el mismo número de versión mayor que el SDK (57).**  
  **Verdadero.** A partir del SDK 50, Expo unificó el versionado de sus paquetes clave (incluyendo `expo-router`), haciendo que el número de versión mayor coincida siempre con el número del SDK.


  ### C1. Métodos de `router`

| Método | Qué le hace a la pila |
| :--- | :--- |
| `router.push(href)` | **Apila una nueva pantalla.** Agrega siempre una nueva ruta al tope de la pila, incluso si esa pantalla ya existía previamente en el historial. |
| `router.navigate(href)` | **Navega reutilizando o apilando.** Si la ruta destino ya existe dentro del historial actual de la pila, regresa a ella desapilando las pantallas intermedias; si no existe, la apila al final como un `push`. |
| `router.replace(href)` | **Reemplaza la pantalla actual.** Elimina la pantalla que está en el tope de la pila y la sustituye por la nueva ruta sin cambiar la profundidad total del historial. |
| `router.back()` | **Desapila la pantalla actual (`pop`).** Remueve el elemento del tope de la pila para regresar a la pantalla inmediatamente anterior en el historial. |
| `router.dismissTo(href)` | **Desapila hasta una pantalla específica.** Remueve en secuencia todas las pantallas superiores hasta quedar posicionado en la ruta destino indicada. |
| `router.dismissAll()` | **Desapila todo hasta la raíz.** Remueve todas las pantallas apiladas por encima de la ruta inicial/raíz del Stack. |
| `router.canGoBack()` | **Consulta el estado de la pila (Booleano).** No modifica la pila; retorna `true` si hay al menos una pantalla previa a la cual regresar con `back()`, o `false` si se está en la primera pantalla. |
| `router.setParams({...})` | **Actualiza los parámetros de la pantalla actual.** No modifica la cantidad ni el orden de elementos en la pila; solo muta el objeto de parámetros (`params`) de la ruta activa en el tope. | 


### C2. Simulación de la pila

| # | Instrucción | Pila resultante (base $\rightarrow$ tope) |
| :---: | :--- | :--- |
| **0** | *(Estado inicial)* | `[ "/productos" ]` |
| **1** | `router.push("/productos/1")` | `[ "/productos", "/productos/1" ]` |
| **2** | `router.push("/productos/2")` | `[ "/productos", "/productos/1", "/productos/2" ]` |
| **3** | `router.navigate("/productos/5")` | `[ "/productos", "/productos/1", "/productos/2", "/productos/5" ]` |
| **4** | `router.push("/perfil")` | `[ "/productos", "/productos/1", "/productos/2", "/productos/5", "/perfil" ]` |
| **5** | `router.replace("/buscar")` | `[ "/productos", "/productos/1", "/productos/2", "/productos/5", "/buscar" ]` |
| **6** | `router.back()` | `[ "/productos", "/productos/1", "/productos/2", "/productos/5" ]` |
| **7** | `router.dismissTo("/productos")` | `[ "/productos" ]` |
| **8** | `router.canGoBack()` | **Devuelve `false`** *(No altera la pila; como solo queda `"/productos"` en la base, no hay pantallas previas a las cuales volver)* |



### C3. ¿`<Link>` o `router`?

* **a) El usuario toca la tarjeta de un producto en una lista:**
  * **Elección:** `<Link>`
  * **Prop / Método:** `href="/productos/[id]"`
  * **Justificación:** Es una acción de navegación puramente declarativa iniciada por la interacción directa del usuario. El componente `<Link>` de Expo Router optimiza la accesibilidad, soporta la precarga de rutas (*prefetching*) y permite abrir en una pestaña nueva si se compila para Web.

* **b) Se guarda un formulario, la API responde OK y hay que mostrar la pantalla de éxito:**
  * **Elección:** `router`
  * **Prop / Método:** `router.replace("/exito")` (o `router.push("/exito")`)
  * **Justificación:** Requiere una navegación imperativa condicional a una operación asíncrona (esperar la respuesta satisfactoria del servidor). Se suele recomendar `replace` si no se desea que el usuario vuelva atrás al formulario ya enviado.

* **c) Botón "Cancelar" dentro de un modal:**
  * **Elección:** `router` (o `<Link>` configurado como *dismiss*)
  * **Prop / Método:** `router.back()` o `router.dismiss()`
  * **Justificación:** Al cancelar la acción en un flujo modal, se debe cerrar la pantalla suprimiendo el tope de la pila. Ejecutar `router.back()` o `router.dismiss()` mediante un controlador de eventos (`onPress`) es la forma estándar e imperativa de cerrar modales en React Native.

* **d) Después de un login exitoso hay que ir a la pantalla principal:**
  * **Elección:** `router`
  * **Prop / Método:** `router.replace("/(tabs)")`
  * **Justificación:** Es una respuesta a un evento del sistema (autenticación). Se utiliza `replace` para limpiar o sustituir el flujo de login de la pila, evitando que el usuario presione el botón físico de "Atrás" y regrese a la pantalla de inicio de sesión.

* **e) Volver desde el detalle de un pedido directamente a la lista de pedidos, que quedó tres pantallas más abajo:**
  * **Elección:** `router`
  * **Prop / Método:** `router.dismissTo("/pedidos")` (o `router.navigate("/pedidos")`)
  * **Justificación:** Para saltar múltiples pantallas en el historial de forma imperativa sin encadenar varios `router.back()`, `dismissTo("/pedidos")` desapila en un solo paso todas las rutas intermedias hasta llegar a la vista especificada.


  ### C5. Pensar: `<Link>` y URLs reales

* **Ventaja concreta para el usuario en la Web:**
  * **Enlazabilidad (*Deep Linking*):** Cada pantalla posee una URL única que el usuario puede copiar, guardar en marcadores o compartir directamente con otras personas (por ejemplo, enviar por chat la URL de un producto específico `/productos/123`).
  * **Navegación nativa del navegador:** Permite el uso correcto de los botones del navegador ("Atrás", "Adelante"), recargar la página (`F5`) sin perder el contexto actual y abrir enlaces en nuevas pestañas mediante clic derecho o `Ctrl + Clic` / `Cmd + Clic`.
  * **Indexación y SEO:** Facilita que los buscadores como Google indexen el contenido de la aplicación como páginas individuales.

* **¿Qué pasa en el celular (App nativa), donde no hay barra de direcciones?**
  * **Deep Linking nativo:** Aunque no exista una barra de direcciones visible, la URL sigue estando presente. Esto permite abrir pantallas específicas dentro de la aplicación desde enlaces externos (por ejemplo, desde un correo electrónico, una notificación *push*, un mensaje de WhatsApp o un sitio web con un enlace tipo `miapp://productos/123`).
  * **Gestión del estado de navegación:** Expo Router utiliza la estructura de la URL internamente para sincronizar el estado de la aplicación. Al hacer un *push* o un *back*, el motor sabe exactamente qué componente renderizar en la pila de navegación nativa (React Navigation) basándose en el esquema de rutas.



  ### D1. Comparación de Navegadores (Stack, Tabs y Drawer)

| Criterio | Stack | Tabs | Drawer |
| :--- | :--- | :--- | :--- |
| **¿Apila pantallas?** | **Sí.** Cada nueva pantalla se coloca encima de la anterior en un historial (*LIFO: Last In, First Out*). | **No.** Mantiene pantallas independientes al mismo nivel de jerarquía (cambia la vista activa sin crear un historial acumulativo). | **No.** Cambia entre vistas del mismo nivel jerárquico desde un menú lateral (no apila por defecto). |
| **¿Cómo cambia de pantalla el usuario?** | Mediante acciones de navegación (presionando un `<Link>`, un botón con `router.push()`, o volviendo atrás deslizando/botón *back*). | Tocando los botones o íconos fijados en la barra inferior (o superior). | Deslizando el dedo desde el borde lateral izquierdo o tocando el ícono de menú (*hamburguesa*). |
| **¿Desde dónde se importa en SDK 57?** | `import { Stack } from 'expo-router';` | `import { Tabs } from 'expo-router';` | `import Drawer from 'expo-router/drawer';` *(Requiere `@react-navigation/drawer` instalado)* |
| **Un caso de uso típico** | Flujos lineales de navegación profunda (ej. Lista de productos $\rightarrow$ Detalle del producto $\rightarrow$ Checkout). | Las secciones principales y más frecuentes de la app (ej. *Inicio*, *Buscar*, *Notificaciones*, *Perfil*). | Opciones secundarias o de configuración global de la cuenta (ej. *Ajustes*, *Historial*, *Ayuda*, *Cerrar Sesión*). |

### D2. Cada tab tiene su pila

* **¿Qué pantalla ve el usuario?**
  Ve la pantalla del **detalle del producto 4** (`/productos/4`).

* **¿Por qué?**
  Porque cada pestaña (*tab*) en Expo Router encapsula y mantiene su propio estado de navegación (su propio Stack independiente). Al cambiar a la pestaña *Inicio* y regresar a *Productos*, la pila de la pestaña *Productos* no se destruye ni se reinicia; permanece en el estado exacto en el que el usuario la dejó (con la pantalla del detalle en el tope de la pila).

* **Ejemplo de app cotidiana:**
  **Instagram** o **Spotify**. Si estás explorando el perfil de un usuario o una lista de reproducción específica, cambias a la pestaña de *Buscar* o *Inicio*, y luego regresas a la pestaña anterior, sigues viendo la misma pantalla donde te quedaste.

---

### D3. ¿Dónde va cada pantalla?

* **a) El detalle de un producto, que debe mantener visible la barra de pestañas:**
  * **Ubicación:** **Dentro de la pestaña (Tab)**.
  * **Razón:** Para que la barra inferior de pestañas permanezca visible, la pantalla debe ser parte de la jerarquía del Stack interno del grupo `(tabs)`.

* **b) Un modal para confirmar una compra, que debe tapar la barra de pestañas:**
  * **Ubicación:** **Stack raíz** (fuera del grupo `(tabs)`).
  * **Razón:** Cualquier pantalla o modal que deba superponerse a la interfaz global y ocultar la barra de pestañas debe registrarse en el Stack principal/raíz de la aplicación.

* **c) La pantalla de login que se abre como modal:**
  * **Ubicación:** **Stack raíz** (fuera del grupo `(tabs)`).
  * **Razón:** Al ser un flujo global de autenticación o de interrupción, debe presentarse sobre toda la interfaz, cubriendo los navegadores internos como las pestañas.

* **d) La pantalla “Mis pedidos anteriores” dentro de la sección Perfil:**
  * **Ubicación:** **Dentro de la pestaña (Tab) de Perfil**.
  * **Razón:** Es un nivel de navegación secundaria inherente al flujo de la pestaña *Perfil*, por lo que pertenece al Stack propio de esa sección.


  ### D4. Configurar el Stack

* **a) Diferencia entre `screenOptions` y las `options` de un `Stack.Screen`:**
  * **`screenOptions` (en `<Stack>`):** Define la configuración visual o de comportamiento por **defecto para todas las pantallas** dentro del Stack.
  * **`options` (en `<Stack.Screen>`):** Sobrescribe la configuración global y aplica opciones **exclusivas para una pantalla en particular**.

* **b) Por qué `(tabs)` suele llevar `headerShown: false`:**
  * Porque el grupo `(tabs)` suele implementar su propio navegador interno con encabezados individuales por pestaña. Si el Stack raíz no oculta su header (`headerShown: false`), se mostrarían **dos barras de navegación superpuestas** (el header del Stack raíz por encima y el header de las Tabs por debajo).

* **c) Si existe `src/app/perfil-publico.tsx` pero no está declarada en el Stack:**
  * **¿Existe la pantalla?** **Sí.** Gracias al *file-based routing* de Expo Router, la ruta es funcional y navegable automáticamente por el simple hecho de existir el archivo en el sistema.
  * **¿Para qué sirve declararla explícitamente con `<Stack.Screen>`?** Sirve para personalizar sus opciones de navegación (por ejemplo, definir un título dinámico, personalizar los botones del header, ocultar la barra superior o definir su estilo de presentación como modal) sin depender solo de los valores por defecto.

* **d) Cuatro valores posibles de `presentation` y cuál usar para una hoja inferior al 50%:**
  * **Valores posibles:** `card` (por defecto/transición estándar), `modal` (estilo modal tradicional), `transparentModal` (fondo transparente sobre la pantalla anterior) y `formSheet` (hoja flotante/desplizable).
  * **Para una hoja inferior al 50%:** Se utiliza **`presentation: 'formSheet'`**, acompañado de las propiedades de ajuste de altura para modales de hoja (`sheetAllowedDetents`, fijándolo en `[0.5]` o `['50%']`).

* **e) Cambiar el título del header a "Producto 7" desde la propia pantalla:**
  * Se utiliza el componente especial **`<Stack.Screen />`** dentro del mismo archivo de la pantalla (o mediante el hook `useNavigation` / `navigation.setOptions`):

  ```tsx
  import { Stack } from 'expo-router';

  export default function DetalleProducto() {
    return (
      <>
        {/* Sobrescribe dinámicamente las opciones del header para esta vista */}
        <Stack.Screen 'Producto 7' options="{{" title: }}/>
        
        {/* Contenido de la pantalla */}
      </>
    );
  }


  ### D5. Tabs y Drawer en SDK 57

* **a) Cambio al importar `Tabs` en SDK 57 y alternativa experimental:**
  * **Cambio principal:** En SDK 57, `Tabs` se importa de manera estándar desde `expo-router` (`import { Tabs } from 'expo-router'`), integrando por debajo la implementación nativa optimizada.
  * **Alternativa experimental:** Existe **`NativeTabs`** (o *BottomTabs* nativo), que permite renderizar barras de pestañas utilizando componentes verdaderamente nativos de la plataforma (UIKit en iOS y Material en Android) para lograr transiciones, animaciones y comportamiento táctil 100% nativo.

* **b) Paquetes necesarios para Drawer y componente en el layout raíz:**
  * **Paquetes necesarios:** Requiere `@react-navigation/drawer` y `react-native-reanimated`.
  * **Componente en el layout raíz:** Se debe envolver la aplicación con **`GestureHandlerRootView`** (del paquete `react-native-gesture-handler`) en el `_layout.tsx` raíz para garantizar que los gestos de deslizamiento (*swipes*) funcionen correctamente.

* **c) ¿Hace falta instalar `@react-navigation/drawer` en SDK 57? ¿Por qué?**
  * **Sí, hace falta instalarlo.** A diferencia del Stack y las Tabs (que vienen completamente integrados de forma predeterminada dentro de `expo-router`), el Drawer no está empaquetado por defecto para mantener liviano el núcleo de la librería. Se importa desde `expo-router/drawer`, el cual depende de `@react-navigation/drawer` como par de dependencia (*peer dependency*).

* **d) Comportamiento de `router.back()` en navegadores anidados:**
  * Actúa sobre el **navegador activo más profundo de la jerarquía** que tenga una pantalla previa en su historial para desapilar. Si la pila del navegador interno (por ejemplo, el Stack de una Tab) no tiene más pantallas a las cuales regresar, la orden escala hacia el navegador padre (el Stack raíz).


  ### E1. Encontrá el error

* **Causa:** `useLocalSearchParams()` devuelve los parámetros como cadenas de texto (`string`). La comparación estricta (`===`) entre un `number` (`p.id`) y un `string` (`id`) siempre da `false` (`3 === "3"` es `false`).

* **Corrección:**
```tsx
const productoId = Number(id); // convertir a número antes de comparar
const producto = productos.find((p) => p.id === productoId);



### E2. Catch-all

| URL | Valor de `slug` |
| :--- | :--- |
| `/docs/react` | `["react"]` *(Array con 1 string)* |
| `/docs/react/hooks/useState` | `["react", "hooks", "useState"]` *(Array con 3 strings)* |
| `/docs` | `undefined` *(O no se ejecuta este archivo si existe un `docs/index.tsx` que tome la ruta exact match)* |

---


### E3. Anatomía de una URL

* **a) Identificación de partes de la URL (`rutasipf://buscar?q=mate&categoria=bebidas`):**
  * **Scheme:** `rutasipf` *(El protocolo de Deep Linking nativo)*
  * **Ruta (Path):** `/buscar` *(El recurso o pantalla dentro de `src/app/`)*
  * **Parámetros de búsqueda (Query Params):** `q=mate` y `categoria=bebidas`

* **b) Lo que devuelve `useLocalSearchParams()` en `buscar.tsx`:**
  * Devuelve un objeto con las claves y valores extraídos de la Query String:
    ```json
    {
      "q": "mate",
      "categoria": "bebidas"
    }
    ```

* **c) ¿Hacen falta corchetes en el nombre del archivo para recibir `q`?**
  * **No.** Los corchetes (como en `[q].tsx`) sirven para definir *parámetros de ruta* (*Path Parameters*, como `/buscar/mate`). Los *Query Parameters* (después del signo `?`) se leen automáticamente con `useLocalSearchParams()` sin necesidad de modificar el nombre del archivo (`buscar.tsx`).

* **d) Por qué usar `router.setParams({ q: texto })` en lugar de `router.push()` al escribir en el buscador:**
  1. **Evita saturar la pila de navegación:** `setParams` actualiza la URL y el estado de la pantalla actual sin apilar un nuevo registro por cada letra tipeada.
  2. **Mejora el rendimiento y la experiencia del usuario:** No recrea ni vuelve a montar el componente de la pantalla; solo muta sus parámetros, previniendo parpadeos visuales y permitiendo un filtrado en tiempo real más fluido.   


  ### E4. ¿Dónde estoy?

| Hook | En `/productos/3` | En `/buscar?q=chipa` |
| :--- | :--- | :--- |
| **`usePathname()`** | `"/productos/3"` | `"/buscar"` |
| **`useSegments()`** | `["(tabs)", "productos", "[id]"]` | `["buscar"]` |
| **`useLocalSearchParams()`** | `{ id: "3" }` | `{ q: "chipa" }` |

---


### E5. Local vs global

* **a) Diferencia entre `useLocalSearchParams` y `useGlobalSearchParams`:**
  * **`useLocalSearchParams` (Opción por defecto):** Retorna los parámetros vinculados únicamente a la pantalla actual. Se usa por defecto porque evita renders innecesarios y previene conflictos cuando existen múltiples pantallas o modales montados al mismo tiempo.
  * **`useGlobalSearchParams`:** Retorna todos los parámetros presentes en la pila de navegación global. Se utiliza cuando un componente global (como un Header en el layout raíz) necesita leer los parámetros de una pantalla hija.

* **b) ¿Para qué sirve `useFocusEffect`?**
  * Sirve para ejecutar código cada vez que una pantalla entra en foco (se vuelve visible) y ejecutar una función de limpieza cuando pierde el foco. Es clave en *Tabs* o *Stack* donde las pantallas se quedan montadas en memoria aunque no estén visibles.
* **c) La URL `/productos/mate` abre la pantalla de detalle aunque no exista ese producto:**
  * **No es un error de Expo Router.**
  * **Responsabilidad:** La responsabilidad es de la **lógica de negocio de la aplicación (el desarrollador)**. Expo Router solo se encarga de matchear la URL con el archivo `[id].tsx`. El código interno de la pantalla debe validar si el id/slug existe en la base de datos o API y, en caso contrario, mostrar un mensaje de error o redirigir.
  

### F1. Redirect

* **a) ¿Qué hace `<Redirect />` y a qué método de `router` equivale?**
  * Es un componente de Expo Router que, al renderizarse, navega de forma declarativa e inmediata a otra ubicación.
  * Equivale directamente al método **`router.replace()`**.

* **b) ¿Por qué una redirección debe reemplazar y no apilar?**
  * **Problema del bucle infinito en el botón "Atrás":** Si la redirección usara `router.push()` (apilar), la pantalla previa (por ejemplo, una pantalla de `/login` o de verificación) permanecería en la pila de navegación. Al presionar el botón físico o gesto de volver atrás, el usuario regresaría a esa pantalla protegida/no autorizada, la cual volvería a ejecutar el `<Redirect />`, atrapando al usuario en un **bucle infinito de navegación** del que no podría salir.
  * Reemplazar la ruta actual asegura que la pantalla origen sea sustituida en el historial, manteniendo una pila limpia y segura.

### F2. Stack.Protected

```tsx
import { Stack } from 'expo-router';

function NavegacionRaiz() {
  const { usuario } = useAuth();
  const conSesion = usuario !== null;

  return (
    <Stack>
      {/* Pantalla privada: solo existe en la pila cuando hay sesión */}
      <Stack.Protected guard="{conSesion}" name="(privado)"/>

      {/* Pantalla de login: solo existe en la pila cuando NO hay sesión */}
      <Stack.Protected guard="{!conSesion}" name="(auth)/login"/>
    </Stack>
  );
}
```

* **a) ¿Qué le pasa a una pantalla cuando su `guard` es `false`?**
  * Queda **completamente removida de la jerarquía de navegación**. Expo Router ni siquiera registra la pantalla en la pila; no se puede navegar a ella ni se mantiene su código o estado montado en memoria.

* **b) Al iniciar sesión, el modal de login se cierra solo, sin llamar a `router.back()`. ¿Por qué?**
  * Porque al cambiar el estado del usuario (`usuario !== null`), el `guard` de la pantalla de login pasa a ser `false`. Expo Router desmonta y destruye automáticamente la pantalla de la pila al dejar de cumplir la condición de acceso, sin requerir un comando de navegación manual.

* **c) ¿Qué causa el aviso “The action ‘NAVIGATE’ … was not handled por ningún navegador” y cómo se evita?**
  * **Causa:** Ocurre al intentar navegar manualmente (por ejemplo, con `router.push()`) hacia una ruta cuyo `guard` en ese momento es `false`, por lo que el navegador no la reconoce como una ruta válida.
  * **Solución:** Evitar llamar a `router.push()`/`navigate()` manualmente para cambiar de flujo. Se debe actualizar únicamente el estado global (ej. el token o sesión) para que `Stack.Protected` reaccione y realice la transición de forma automática.

* **d) Ventaja de `Stack.Protected` frente a poner un `<Redirect />` condicional en cada pantalla:**
  * **Seguridad y prevención de destellos (*flashes*):** Evita que el componente privado se monte o renderice siquiera un milisegundo en memoria antes de ejecutarse el redireccionamiento.
  * **Mantenibilidad (DRY):** Centraliza la lógica de protección en el Layout principal en lugar de duplicar hooks de sesión y componentes `<Redirect />` en decenas de pantallas individuales.


### F4. Deep links

| Entorno | URL |
| :--- | :--- |
| **App instalada (build propia)** | `comedoripf://menu/7` |
| **Expo Go en desarrollo** | `exp://192.168.1.20:8081/--/menu/7` |
| **Web (`npx expo start --web`)** | `http://localhost:8081/menu/7` |

---

* **Significado de `/--/` en la URL de Expo Go:**
  * Funciona como un delimitador. Le indica al cliente de Expo Go dónde termina la dirección de la app contenedora y dónde comienza la ruta interna de tu proyecto (`/menu/7`).

* **Por qué el scheme propio (`comedoripf://`) no funciona dentro de Expo Go:**
  * Los esquemas personalizados se deben registrar en el sistema operativo durante la compilación nativa de la app. Expo Go es una aplicación precompilada con su propio esquema (`exp://`), por lo que el sistema operativo no sabe cómo asociar `comedoripf://` con Expo Go. Para usar tu propio scheme, se requiere una *Development Build* (`npx expo run:android` / `ios`).


  ### F5. Errores comunes

* **a) Error: "You are passing an array of styles to a child of `<Link>`"**
  * **Causa:** Ocurre al usar `<Link asChild>` cuando el componente hijo recibe sus estilos en forma de array (ej. `style={[styles.btn, styles.activo]}`). `<Link>` intenta inyectar props de estilo directamente y falla al fusionar el arreglo.
  * **Solución:** Aplanar el array de estilos usando `StyleSheet.flatten()` en el componente hijo:

    ```tsx
    <Link asChild href="/detalles">
      <Pressable style="{StyleSheet.flatten([styles.btn," styles.activo])}>
        <Text>Ver detalles</Text>
      </Pressable>
    </Link>
    ```

* **b) Un componente en `src/app/TarjetaProducto.tsx` genera una ruta no deseada**
  * **Causa:** Expo Router usa *file-based routing*. Todo archivo `.tsx`/`.js` guardado dentro de la carpeta `src/app/` que no empiece con `_` o `+` se interpreta y registra automáticamente como una pantalla pública.
  * **Solución:** Mover los componentes reutilizables a una carpeta fuera de `app`, por ejemplo a `src/components/TarjetaProducto.tsx`.

* **c) Al presionar "Atrás" después de `router.push("/")` el usuario vuelve al login**
  * **Causa:** `router.push()` agrega la pantalla de inicio encima de la pila de navegación, manteniendo la pantalla de `/login` guardada debajo en el historial.
  * **Solución:** Utilizar `router.replace("/")` para sustituir el historial o implementar rutas protegidas con `Stack.Protected` para que la vista de login se desmonte sola.

* **d) Expo Go indica que el proyecto es incompatible tras instalar un paquete**
  * **Causa:** Se instaló con `npm install` una librería que contiene código nativo personalizado (C++/Java/Swift) o una versión no soportada por el binario de Expo Go.
  * **Solución:** Instalar las dependencias usando la CLI de Expo para asegurar compatibilidad de versiones con el SDK:
    ```bash
    npx expo install nombre-del-paquete
    ```
    Si la librería requiere código nativo a medida, se debe generar una *Development Build* con `npx expo run:android` / `ios`.