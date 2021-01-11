db.createUser({
    user: "userName",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "databasename"
        }
    ]
})