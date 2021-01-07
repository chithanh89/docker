# docker
# Initiate docker container
docker-compose up -d
# Init mongodb replication
docker exec -it localmongo1 bash -c "mongo -u "user" -p "pass" --authenticationDatabase "admin" < /${SCRIPT_PATH}/init.js"
# Create user and set role
docker exec -it localmongo1 bash -c "mongo < /home/create_user.js"
# Stop and remove
docker-compose down
