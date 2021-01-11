db.createUser({
    user: "nucleusFarma",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "databasename"
        }
    ]
})