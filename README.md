 # Navegador Web Sencillo

Este es un navegador web sencillo que utiliza iframes, un proxy y Wails para mostrar los contenidos.

## Características

- Utiliza iframes para cargar y mostrar los contenidos de las páginas web.
- Utiliza un proxy para acceder a los sitios web y evitar problemas de seguridad.
- Creado con Wails, una herramienta que permite crear aplicaciones con WebView utilizando tecnologías web como HTML, CSS y JavaScript.

## Requisitos

- [Wails](https://wails.app/) instalado en tu sistema.

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/DiegPS/noban-browser.git
    ```

2. Navega al directorio del repositorio:

    ```bash
    cd navegador-web-sencillo
    ```

3. Instala las dependencias:

    ```bash
    wails build
    ```

## Uso

1. Ejecuta la aplicación:

    ```bash
    wails serve
    ```

2. Abre tu navegador web y accede a la siguiente URL:

    ```
    http://localhost:34115
    ```

3. Ingresa la URL del sitio web que deseas visitar en el campo de búsqueda y presiona Enter.

4. El contenido del sitio web se cargará en el navegador utilizando iframes y el proxy.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama para tu contribución.
3. Realiza los cambios y realiza un commit.
4. Envía un pull request con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.