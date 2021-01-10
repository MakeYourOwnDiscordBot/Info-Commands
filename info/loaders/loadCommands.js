const fs = require("fs");
const path = require("path");
const { Collection } = require("discord.js");

module.exports = (client) => {
  fs.readdirSync(path.resolve(__dirname, "../commands"))
    .map((filename) => filename.split(".").slice(0, -1).join("."))
    .forEach((filenameWithoutExtension) => {
      const command = require(`../commands/${filenameWithoutExtension}`)
      client.commands.set(command.name, command);
    });
};