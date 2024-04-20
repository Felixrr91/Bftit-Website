# Datenbank Setup

0. Voraussetzung:
   - Datenbank Service ist gestartet
   - Datenbank mit dem Namen 'bftit_dev' existiert
   - Datenbank ist leer
     - sollte die Datenbank nicht leer sein, können mit folgendem Skript die Datenbanktabellen gelöscht werden
   
      ```cmd
      psql -U postgres -d bftit_dev -a -f db/drop-tables.sql
      ```

1. `schema.sql` generieren
   
   ```cmd
   npx dbml2sql db/schema.dbml -o db/schema.sql
   ```

2. SQL Skript ausführen

    ```cmd
    psql -U postgres -d bftit_dev -a -f db/schema.sql
    ```