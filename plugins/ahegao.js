let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ahegao?APIKEY=4a8b9aba75823076', '', 'Here..?', m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i

handler.limit = true
handler.group = true
handler.premium = true

module.exports = handler
