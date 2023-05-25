import { app } from "./app";

import { log } from "./app/utils/logger";

const { PORT } = process.env;

const startServer = async (): Promise<void> => {
  try {
    app.listen(PORT, () => {
      console.log(`🌐 server started on port ${PORT}`);
    });
  } catch (err: any) {
    log.error(err.message);
  }
};

startServer();
