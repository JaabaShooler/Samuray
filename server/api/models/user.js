const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    id: Number,
    created: {type: Date, default:Date.now},
    nickname: {type: String, required: true},
    password: {type: String, required: true},
    name: String,
    surname: String,
    img: String,
    sex: String,
    follow: { type: [Number], default: [] },
    description: {
        website: String,
        location: {
            type: Object,
            country: String,
            city: String
        }
    }
},{
    timestamps: true,
    toObject: {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            return ret;
        }
    }
});

module.exports = model('User', UserSchema);

