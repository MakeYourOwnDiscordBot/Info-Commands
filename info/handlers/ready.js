const Logger = require('leekslazylogger');
const log = new Logger();
module.exports = async (client) => {
  log.info(`[EXTENSION READY]: 情報表示コマンドが使用可能です。`);
  require("../loaders/loadCommands")(client);
};