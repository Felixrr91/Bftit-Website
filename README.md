# Datenbank Setup

0. Voraussetzung: Datenbank Service muss gestartet sein und Datenbank angelegt

1. `schema.sql` generieren
   
   ```cmd
   cd db
   npx dbml2sql schema.dbl -o schema.sql
   ```

2. SQL Skript ausführen

    ```cmd
    psql -U postgres -d <db name> -a -f schema.sql
    ```