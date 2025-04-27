module.exports.data = {
    name:"avatar",
    description: "Avatar",
    type:"1",
    options: [{
        name: "user",
        description: "Slect user to see avatar",
        type: 6,
        require: false
    }],
    integration_types: [0, 1],
    contexts: [0, 1 ,2]
}

module.exports.execute = async(interaction) => {
    const user = interaction.options.getUser("user") || interaction.user

    interaction.reply(user.displayAvatarURL({ size: 1024 }));
    return;
}