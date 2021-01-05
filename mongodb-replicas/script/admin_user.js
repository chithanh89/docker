admin = db.getSiblingDB("admin")
sleep(10000)
admin.createUser(
  {
    user: "thanhhc",
    pwd: "abc1234", // or cleartext password
    roles: [ { role: "root", db: "admin" } ]
  }
)
sleep(5000)
exit
