module.exports.data = {
    name:"ping",
    description: "Check ping",
    type:"1",
    options: [],
    integration_types: [0, 1],
    contexts: [0, 1 ,2]
}

module.exports.execute = async(interaction) => {
    const ping = interaction.client.ws.ping;
    interaction.reply(`Ping: ${ping}`);
    return;
}