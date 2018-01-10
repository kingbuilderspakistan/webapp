var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
name: { type: String, lowercase: true, required: true},
nameoffatherhusband: { type: String, lowercase:true, required: true},
residenceaddress: { type: String, required: true, lowercase: true},
telephoneofficeresidence: { type: String, required: true},
mobilenumber: { type: String, required: true ,unique: true},
officeaddress: { type: String, required: true},
cnic: { type: String, required: true, unique: true},
password: { type: String, required: true},
nominee: { type: String, required: true, lowercase: true},
relationship: { type: String, required: true, lowercase:true},
nomineeaddress: { type: String, required: true, lowercase: true},
nomineecnic: { type: String, required: true, unique: true},
apartmentshopnumber: { type: String, required: true},
groundfloor: { type: String, required: true, lowercase: true},
block: { type: String, required: true, lowercase: true},
dated: { type: String, required: true},
floor: { type: String, required: true},
onbooking: { type: String, required: true},
onallocation: { type: String, required: true},
onconfirmation: { type: String, required: true},
startofwork: { type: String, required: true},
monthlyinstallments: { type: String, required: true},
sixhalfyearlyinstallments: { type: String, required: true},
onfoundation: { type: String, required: true},
onplinth: { type: String, required: true},
roofcasting: { type: String, required: true},
blockmasonry: { type: String, required: true},
onplasterinternal: { type: String, required: true},
onplasterexternal: { type: String, required: true},
oncolouring: { type: String, required: true},
onfinishing: { type: String, required: true},
onpossesion: { type: String, required: true}



});

module.exports = mongoose.model('User',UserSchema);