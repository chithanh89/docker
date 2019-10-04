# docker
# Initiate docker container
docker-compose up -d
# Init mongodb replication
docker exec -it localmongo1 bash -c "bash /home/init.sh"
# Create user for authentication
docker exec -it localmongo1 bash -c "mongo < /home/create_user.js"
