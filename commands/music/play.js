module.exports.data = {
    name:"play",
    description: "Play music",
    type:"1",
    options: [],
    integration_types: [0],
    contexts: [0]
}

module.exports.execute = async(interaction) => {
    const ping = interaction.client.ws.ping;
    interaction.reply(ping);
    return;
}