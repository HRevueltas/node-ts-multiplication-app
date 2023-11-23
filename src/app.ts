import { yarg } from "./config/plugins/args.plugins";
import { ServerApp } from "./presentation/server-app";



(async () => {

    await main();

})();

async function main() {

    const { 
        b: base,
        s: showTable,
        l: limit,
        n: fileName,
        d: fileDestination
    } = yarg;

    ServerApp.run({ base, showTable, limit, fileName, fileDestination });



}