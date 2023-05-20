import { pino } from "pino";
import PinoPretty from "pino-pretty";
import dayjs from "dayjs";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  prettifier: PinoPretty,
  timestamp: () => `"time":"${dayjs().format()}"`,
});
export { log };
