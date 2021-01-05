db.getSiblingDB("admin").createUser(
  {
    "user" : "cluster",
    "pwd" : "cluster123",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
exit
