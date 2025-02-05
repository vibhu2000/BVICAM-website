var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    encry_password: {
        type: String,
        required: true
    },
    salt: String,

}, { timestamps: true });

userSchema
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
    autheticate: function(plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password;
    },
    updatePassword: function(plainpassword) {
        this.encry_password = this.securePassword(plainpassword);

    },

    securePassword: function(plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto
                .createHmac("sha256", this.salt)
                .update(plainpassword)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

module.exports = mongoose.model("User", userSchema);