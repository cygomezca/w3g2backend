const User = require ("../models/user");

module.exports = {
    createAdminUser : async () => {
    const userFound = await User.findOne({ correo: "admin@localhost" });
    if (userFound) return;
    const newUser = new User({
        nombre: "admin",
        correo: "admin@localhost"
    });
    newUser.password = await newUser.encryptPassword("adminpassword");
    const admin = await newUser.save();
    console.log("Admin user created", admin);
    }
}
