const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db");

        module.exports = {
            config: {
                name: "addmoney",
                category: "economy",
                description: "Adiciona dinheiro a um usuário",
            },
           run: async (client, message, args, storage) => {

            if (!['493282797222494230',].includes(message.author.id))
            return message.reply(
              "❌Apenas o criador do bot pode utilizar esse comando!")
                      if (!args[0]) return message.channel.send("❌ **Mencione um usuário!**")

            let args0 = args.join(" ")
            let dindin = db.fetch(`cristais_${message.author.id}`)
            let verificado = '<a:verificado:908562051927007242>'
            let booster = '<a:booster:859296451594944522>'
            let discorddono = '<a:coroa:898814229640019968>'
            let hype = '<a:hype:859296488479391764>'
            let coração = '<a:Red_CoraPixelCDL:947624620608090172>'
            let Plug = '<a:p_diorgifs:950876092393193482>'
            let Developer = '<a:developer:912914634846109706>'
            
            
            
            if(args0==='Verificado'){
              if(dindin<0) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
            
              message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
              db.subtract(`cristais_${message.author.id}`, 0)
            
              db.set(`emblemas_${message.author.id}`, verificado)
            }
            
            if(args0==='Booster'){
                if(dindin<0) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
              
                message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
                db.subtract(`cristais_${message.author.id}`, 0)
              
                db.set(`emblemas_${message.author.id}`, booster)
              }
            
            if(args0==='donogizmo'){
                if(dindin<1) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
              
                message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
                db.subtract(`cristais_${message.author.id}`, 1)
              
                db.set(`emblemas_${message.author.id}`, discorddono)
              }
            
            if(args0==='Hype'){
                if(dindin<0) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
              
                message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
                db.subtract(`cristais_${message.author.id}`, 0)
              
                db.set(`emblemas_${message.author.id}`, hype)
              }
            
            if(args0==='Coração'){
                if(dindin<0) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
              
                message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
                db.subtract(`cristais_${message.author.id}`, 0)
              
                db.set(`emblemas_${message.author.id}`, coração)
              }
            
            
              if(args0==='Plug'){
                if(dindin<0) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
              
                message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
                db.subtract(`cristais_${message.author.id}`, 0)
              
                db.set(`emblemas_${message.author.id}`, Plug)
              }
            
              if(args0==='Desenvolvedor'){
                if(dindin<0) return message.reply(`Ops ${message.author} você não possui Cristais suficiente!`)
              
                message.reply('<:dcl_ypSino:914350019182723122> | Emblema setado com sucesso!')
                db.subtract(`cristais_${message.author.id}`, 0)
              
                db.set(`emblemas_${message.author.id}`, Developer)
              }


        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Mencione um usuário valido!**")
        if (args[0] > 10000) return message.channel.send("**❌ Não é possível**")
        db.add(`emblemas_${user.id}`, args[0])
        

        let moneyEmbed = new MessageEmbed()
            .setColor("WHITE")
            .setDescription(`✅ Adicionado ${args[0]}`);
        message.channel.send({embeds: [moneyEmbed]})
  }
        }