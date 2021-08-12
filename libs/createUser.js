const User = require ("../models/user");

const createAdminUser = async () => {
    const userFound = await User.findOne({ correo: "admin@localhost" });
    if (userFound) return;
    const newUser = new User({
        name: "admin",
        email: "admin@localhost",
        role: "admin",
        state: true

    });
    newUser.password = await newUser.encryptPassword("adminpassword");
    const admin = await newUser.save();
    console.log("Admin user created", admin);
    }

module.exports = {
    createAdminUser
}
