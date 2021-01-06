admin = db.getSiblingDB("admin")
sleep(10000)
admin.createUser(
  {
    user: "cluster",
    pwd: "abc1234", // or cleartext password
    roles: [ { role: "clusterAdmin", db: "admin" } ]
  }
)
sleep(5000)
exit
