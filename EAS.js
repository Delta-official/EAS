const Discord = require("discord.js")
const linebutshorter = "‎‎‏‏‎ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶ ̶"

const client = new Discord.Client()


client.on("ready", () => {
    console.log("EAS active, awaiting input...")
    client.user.setActivity("Elixer Announcement System | elx-help")
    /*setInterval(() => {
        setTimeout(() => {client.user.setActivity("Elixer Announcement System | elx-help")})
        setTimeout(() => {client.user.setActivity("Elixer Space Technologies | <placeholder>")}, 60000)
    })*/
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
            .setColor("#021f69")
            .setDescription("All available commands")
            .addFields(
                { name: "vehicles", value: "Shows the current Elixer fleet", inline: true},
                { name: "krs", value: "Shows current, past and future KRS missions", inline: true},
                { name: "upcoming", value: "Shows upcoming launches", inline: true},
                { name: "recoveries", value: "Shows successful landings", inline: true}
            )
            message.channel.send(helpEmbed)
        }
        if(command === "vehicles") {
            const vhcl_embed = new Discord.MessageEmbed()
            .setTitle("Current Elixer vehicle fleet")
            .setFooter("Elixer Announcement System")
            .setColor("#021f69")
            .addFields(
                { name: "E2", value: "Normal sized reusable rocket"}
            )
            message.channel.send(vhcl_embed)
        }
        if(command === "krs") {
            const KRS_EMBED = new Discord.MessageEmbed()
            .setTitile("KRS information")
            .setFooter("Elixer Announcement System")
            .setColor("#021f69")
            .addFields(
                { name: "Successful launches: N/A", value: linebutshorter, inline: true},
                { name: "Next launch: KRS-1", value: linebutshorter, inline: true},
                { name: "Previous launch: N/A", value: linebutshorter, inline: true}
            )
            message.channel.send(KRS_EMBED)
        }
        if(command === "upcoming") {
            const DESC = "KERBIN AERONAUTICS and SPACE ADMINISTRATION | KRS-1\n12th December 2020\n\nElixer & KASA are targeting 7:15PM for the launch of the first Kerbal Resupply Mission to Station Freedom.\n\nKRS is a 10 mission long contract for resupplies to the station which will provide food, water, and science experiments, as well as expansions to the orbital laboratory. The Maven capsule will dock to the station 4 hours after liftoff, and will stay there for 60 days before returning to Kerbin for a landing.\n\nMission Stats\n\n* 14^(th) Elixer Mission\n* 6^(th) Flight of E2\n* 14^(th) Booster Landing Attempt\n* 3^(rd) Maven Capsule Launch\n* Mission will use upgraded docking software\n* E2 will use new landing software\n\nExclusion zones & Mission patch will be released on the 11^(th)\nWebcast will be available on launch day"
            
            const upcoming_embed = new Discord.MessageEmbed()
            .setTitle("Upcoming launch")
            .setFooter("Elixer Announcement System")
            .setColor("#021f69")
            .setDescription(DESC)
            
            message.channel.send(upcoming_embed)
        }
        if(command === "recoveries") {
            const RECOVERY_EMBED = new Discord.MessageEmbed()
            .setTitle("Number of first and second stage recoveries")
            .setFooter("Elixer Announcement System")
            .setColor("#021f69")
            .addFields( 
                { name: "First stage recoveries: 3"},
                { name: "Second stage recoveries: 2"}
            )
            message.channel.send(RECOVERY_EMBED)
        }
    }
});

client.login(process.env.token)