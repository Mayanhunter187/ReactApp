1. For local dev environment, run "docker-compose up --build --watch" inside of the directory containing the "docker-compose.yaml" file.
    a. The "--watch flag" allows changes to be synced in the container as they are made inside of the development environment.
2. For accessing the front end container, navigate to  "http://localhost:80" in your webbrowser
3. For removing the image and container, run "docker compose down --rmi all -v"