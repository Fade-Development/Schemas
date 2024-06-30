// shared-models/giveaway.js
const { Schema, model } = require("mongoose");

const giveawaySchema = new Schema({
    id: { type: String, required: true },
    duration: { type: String, required: true },
    prize: { type: String, required: true },
    description: { type: String },
    winners: { type: Number, required: true, default: 0 },
    pingRole: { type: String },
    requiredRole: { type: String },
});

const GiveawayModel = model("Giveaway", giveawaySchema, "Giveaway");

module.exports = GiveawayModel;
