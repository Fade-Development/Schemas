// shared-models/welcomeSystem.js
const { Schema, model } = require("mongoose");

const welcomeSystemSchema = new Schema({
    guildID: { type: String, required: true },
    channelId: { type: String, required: true },
    customMessage: { type: String },
    enabled: { type: Boolean, default: false },
});

const WelcomeSystemModel = model("WelcomeSystem", welcomeSystemSchema, "WelcomeSystem");

module.exports = WelcomeSystemModel;