# docker
# Create folder to storage data follow docker-compose file
mkdir ./data/m1 ./data/m2 ./data/m3
# Initiate docker container
docker-compose up -d
# Init mongodb replication
docker exec -it localmongo1 bash -c "mongo < /home/init.js"
# Create user for authentication
docker exec -it localmongo1 bash -c "mongo < /home/admin_user.js"
# Create user for manage replication
docker exec -it localmongo1 bash -c "mongo -u "user" -p "pass" --authenticationDatabase "admin" < /home/cluster_user.js"
# Stop and remove
docker-compose down
