"use strict";
exports.__esModule = true;
var Contact = /** @class */ (function () {
    function Contact(email, phone) {
        this._email = email;
        this._phone = phone;
    }
    Contact.prototype.getFullDetails = function () {
        return "Email : " + this._email + " Phone : " + this._phone;
    };
    return Contact;
}());
exports.Contact = Contact;
