const pino = require("pino");
const PinoPretty = require("pino-pretty");
import dayjs from "dayjs";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  prettifier: PinoPretty,
  timestamp: () => `🕰 "${dayjs().format()}"`,
});
export { log };
