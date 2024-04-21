# Datenbank Setup

0. Voraussetzung:
   - Datenbank Service ist gestartet
   - Datenbank mit dem Namen 'bftit_dev' existiert
     - sollte die Datenbank einen anderen Namen haben, muss `-d bftit_dev` unter 2. angepasst werden
   - Datenbank ist leer
     - sollte die Datenbank nicht leer sein, können mit folgendem Skript die Datenbanktabellen gelöscht werden
   
      ```cmd
      psql -U postgres -d bftit_dev -a -f db/schema/drop-tables.sql
      ```

1. `schema.sql` generieren
   
   ```cmd
   npx dbml2sql db/schema/schema.dbml -o db/schema/schema.sql
   ```

2. SQL Skript ausführen

    ```cmd
    psql -U postgres -d bftit_dev -a -f db/schema/schema.sql
    ```