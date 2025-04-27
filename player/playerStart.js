const { EmbedBuilder } = require("discord.js");
const config = require("../config");

module.exports = {
    name: "playerStart",
    execute: async(client, queue, track) => {
        const embed = new EmbedBuilder()
        .setDescription(`Playing: ${track.title}`)
        .setColor("Random")
        .setFooter({ text: `Added by: ${queue.metadata.requestedBy.username}`, iconURL:queue.metadata.requestedBy.displayAvatarURL({ size: 1024 })})
        .setTimestamp()
        .setImage(track.thumbnail)

    return queue.metadata.channel.send({ embeds: [embed] })
    }
}