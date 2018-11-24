## running mongodb in container with persistant volume:
- **create volumes:**
```bash
docker run -v /data/db -v /data/configdb --name mongostorage busybox echo 'created mongo volumes'
```

### create mongo server
```bash
docker run -d -p 27017:27017 --volumes-from mongostorage --name mongoserver mongo:3.2
```

### stop
```bash
docker stop mongoserver
docker stop mongostorage
```

### restart mongoserver
```bash
docker restart mongostorage
docker restart mongoserver
```

if this point you GET some data - the ones persisted during the previous session will be in the response

### backing up data
```bash
docker run --rm --volumes-from mongostorage -v $(pwd)/backups:/backup busybox bin/sh -c "tar cvf /backup/db.tar /data/db && tar cvf /backup/configdb.tar /data/configdb"
```
