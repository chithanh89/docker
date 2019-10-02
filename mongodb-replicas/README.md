# docker
# Initiate docker container
docker-compose up -d
# Init mongodb cluster
docker exec -it localmongo1 bash -c "bash /home/init.sh"
