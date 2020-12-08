const Discord = require("discord.js") 

const client = new Discord.Client()

client.on("ready", () => {
    console.log("EAS active, awaiting input...")
    client.user.setActivity("Elixer Announcement System | elx-help")
})

prefix = "elx-";

client.on('message', async(message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        const args = message.content.toLowerCase().split(' ');
        const command = args.shift().slice(prefix.length);
        if(command === "help") {
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle("Elixer Space Technologies")
            .setFooter("Elixer Announcement System")
            .setDescription("All available commands")
            .setColor("#021f69")
            .addFields(
                { name: "vehicles", value: "Shows the current Elixer fleet", inline: true},
                { name: "krs", value: "Shows current, past and future KRS missions", inline: true},
                { name: "upcoming", value: "Shows upcoming launches", inline: true},
                { name: "recoveries", value: "Shows successful landings", inline: true}
            )
        }
        if(command === "vehicles") {
            const vhcl_embed = new Discord.MessageEmbed()
            .setTitle("Current Elixer vehicle fleet")
            .setColor("#021f69")
            .addFields(
                { name: "E2", value: "Normal sized reusable rocket"}
            )
        }
        /*if(command === "krs") {
            
        }*/
    }
});
