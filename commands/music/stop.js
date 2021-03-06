module.exports = {
    name: "stop",
    description: "Stops all songs in queue",
    args: false,
    usage: '',
    async execute(message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (!message.member.voiceChannel) {
            return message.channel.send('You must be in a voice channel to skip!');
        }
        if (!serverQueue) {
            return message.channel.send('Theres no songs to be stopped!');
        }
        serverQueue.songs = [];
        message.channel.send('Stopping Songs and Leaving Channel!');
        await serverQueue.connection.dispatcher.end();
        serverQueue.voiceChannel.leave();
    }
};