const { useMainPlayer, useQueue } = require("discord-player");
const player = useMainPlayer()



module.exports.data = {
    name:"play",
    description: "Play music",
    type: 1,
    options: [{
        name:"query",
        description: "Name of song",
        require: true,
        type: 3,
        autocomplete: true
    }],
    integration_types: [0],
    contexts: [0],
}

module.exports.execute = async(interaction) => {
    const query = interaction.options.getString("query");
    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) return interaction.reply({ content: "You have not joined any voice rooms yet." });
    const voiceMe = interaction.guild.members.cache.get(interaction.client.user.id).voice.channel;
    if(voiceMe && voiceMe.id !== voiceChannel.id) return interaction.reply({ content:"Bot has joined another voice channel" });
    await interaction.deferReply({ fetchReply: true })
    queue = useQueue(interaction.guild.id)
    const res  = await player.play(voiceChannel, query, {
        nodeOptions: {
            selfDeaf: true,
            volume: 100,
            leaveOnEmpty: true,
            leaveOnEmptyCooldown: 5000,
            leaveOnEnd: true,
            leaveOnEndCooldown: 500000,
            metadata: queue?.metadata || {
                channel: interaction.channel,
                requestedBy: interaction.user,
                mess: await interaction.fetchReply()
            }
        }
    })
    if(queue?.metadata) return interaction.deleteReply().catch(e => { })
    interaction.editReply(`Added songs: ${res.track.title}`)
}