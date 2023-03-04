// node my-app.js | pino-pg --connectionUrl <your connection string> --table <your logs table> --column <your column table>
// https://benlimmer.com/2020/10/23/make-pino-log-messages-appear-with-the-correct-status-in-datadog/
// https://github.com/pinojs/pino/blob/8786e3acbb0f50eeed13d4d599b4f25b0fa43730/docs/api.md#formatters-object
// https://css-tricks.com/how-to-implement-logging-in-a-node-js-application-with-pino-logger/
// https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-pino-to-log-node-js-applications/
// https://stackoverflow.com/questions/tagged/pinojs/

// not able to get level labels to print text in caps; transport and formatters not able to work together
// when using formatters, cannot get destination path to print to log file. 

// need to add header information (pino-http)

const pino = require('pino');

const transport = pino.transport({
    targets: [
        {
            target: 'pino/file',
            level: 'info',
            options: {destination: 'logs/pino.log'},
        }
        // {
        //     target: 'pino/file',
        //     level: 'warn',
        //     options: {destination: 'logs/pino-warn.log'},
        // }
        // {
        //     target: 'pino/file',
        //     options: { destination: '1' }, // 1 represents the standard output
        // },
    ],
});

const logger = pino({
    level: 'info'
    // formatters: { level: (label) => { return { level: label.toUpperCase() } } }
},
    transport
);


// const logger = pino({
//     formatters: {
//       level(level) {
//         return { level };
//       },
//     },
// });

module.exports = logger;