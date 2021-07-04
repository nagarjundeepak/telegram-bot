// const express = require('express');
// const cors = require('cors');

// const bot = express();

// const port = 5000;

// bot.use(cors({origin:true}));

// bot.post('/', async(req, res) => {
//     const telegramText = req.body
//     && req.body.message
//     && req.body.message.chat
//     && req.body.message.chat.id
//     && req.body.message.from
//     && req.body.message.from.first_name

//     if(telegramText){
//         const chat_id = req.body.message.chat.id;
//         const first_name = req.body.message.from.first_name;
//         const receivedMessage = req.body.message.text
//         return res.status(200).send({
//             method: 'sendMessage',
//             chat_id,
//             text: `Hello ${first_name}, \n You sent us message: ${receivedMessage}`
//         })
//     }
//     return res.status(200).send({status: 'An error occurred'})
// })

// bot.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// module.exports = bot;

module.exports = (req, res) => {
    const telegramText = req.body
    && req.body.message
    && req.body.message.chat
    && req.body.message.chat.id
    && req.body.message.from
    && req.body.message.from.first_name

    if (telegramText) {
        const chat_id = req.body.message.chat.id
        const first_name = req.body.message.from.first_name
        const receivedMessage = req.body.message.text

        return res.status(200).send({
            method: 'sendMessage',
            chat_id,
            text: `Hello ${first_name}, \n You sent us message: ${receivedMessage}`
        })
    }
    return res.status(200).send({status: 'An error occurred'})
};