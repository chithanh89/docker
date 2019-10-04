admin = db.getSiblingDB("admin")
sleep(10000)
admin.createUser(
  {
    user: "admin",
    pwd: "abc1234", // or cleartext password
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
sleep(5000)

db.getSiblingDB("admin").createUser(
  {
    "user" : "cluster",
    "pwd" : "cluster123",     // or cleartext password
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
sleep(5000)
exit
