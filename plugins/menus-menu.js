import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `_*MICHI BOT*_

   ╭━〔  𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓  ${taguser} ⛅  〕⬣
  *┃➤ 👤 Creador : Michi Shop* 
  *┃➤ 👤 Soporte : wa.me/527821010442*
  *┃➤ ⌛ Tiempo activo : #uptime*
   ╰━━━━━━━━━━━━⬣
  
  ╭━〔 📊 ᴇsᴛᴀᴅɪsᴛɪᴄᴀs 📊〕
 *┃➤ *Nivel:* ${level}
 *┃➤ *Experiencia:* ${exp}
 *┃➤ *Rango:* ${role}
 *┃➤ *Diamantes:* ${limit}
 *┃➤ *MonovanCoins:* ${money}
 *┃➤ *Tokens:* ${joincount}
 *┃➤ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}
  ╰━━━━━━━━━━━━
  
   ╭━〔 🔩ʟɪsᴛᴀ ᴅᴇ ᴍᴇɴᴜs 🔩〕
  *┃➤ ${usedPrefix}menuaudios
  *┃➤ ${usedPrefix}menuanimes
  *┃➤ ${usedPrefix}labiblia (🔞)
   ╰━━━━━━━━━━━━
 
   ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
  *┃➤ 🕹️ ${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*
  *┃➤ 🕹️ ${usedPrefix}fake *<txt1> <@tag> <txt2>*
  *┃➤ 🕹️ ${usedPrefix}ppt *<papel / tijera /piedra>*
  *┃➤ 🕹️ ${usedPrefix}prostituto *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}prostituta *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}gay2 *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}lesbiana *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}pajero *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}pajera *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}puto *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}puta *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}manco *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}manca *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}rata *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}love *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}doxear *<nombre / @tag>*
  *┃➤ 🕹️ ${usedPrefix}pregunta *<txt>*
  *┃➤ 🕹️ ${usedPrefix}suitpvp *<@tag>*
  *┃➤ 🕹️ ${usedPrefix}slot *<apuesta>*
  *┃➤ 🕹️ ${usedPrefix}ttt *<nombre sala>*
  *┃➤ 🕹️ ${usedPrefix}delttt*
  *┃➤ 🕹️ ${usedPrefix}acertijo*
  *┃➤ 🕹️ ${usedPrefix}simi *<txt>*
  *┃➤ 🕹️ ${usedPrefix}top *<txt>*
  *┃➤ 🕹️ ${usedPrefix}topgays*
  *┃➤ 🕹️ ${usedPrefix}topotakus*
  *┃➤ 🕹️ ${usedPrefix}formarpareja*
  *┃➤ 🕹️ ${usedPrefix}verdad*
  *┃➤ 🕹️ ${usedPrefix}reto*
  *┃➤ 🕹️ ${usedPrefix}cancion*
  *┃➤ 🕹️ ${usedPrefix}pista*
  *┃➤ 🕹️ ${usedPrefix}akinator*
  *┃➤ 🕹️ ${usedPrefix}ruleta*
  *┃➤ 🕹️ ${usedPrefix}suerte*
  *┃➤ 🕹️ ${usedPrefix}wordfind*
   ╰━━━━━━━━━━━━
   
  ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
*┃➤ 📥 ${usedPrefix}play.1*
*┃➤ 📥 ${usedPrefix}play2.2*
*┃➤ 📥 ${usedPrefix}ytv.2*
*┃➤ 📥 ${usedPrefix}yta.2*
*┃➤ 📥 ${usedPrefix}playlist*
*┃➤ 📥 ${usedPrefix}spotify*
*┃➤ 📥 ${usedPrefix}spotifydl*
*┃➤ 📥 ${usedPrefix}tiktok*
*┃➤ 📥 ${usedPrefix}instagram*
*┃➤ 📥 ${usedPrefix}mediafire*
*┃➤ 📥 ${usedPrefix}gdrive*
*┃➤ 📥 ${usedPrefix}twitter*
*┃➤ 📥 ${usedPrefix}yta*
*┃➤ 📥 ${usedPrefix}ytv*
*┃➤ 📥 ${usedPrefix}imagen*
*┃➤ 📥 ${usedPrefix}iaimagen*
*┃➤ 📥 ${usedPrefix}pinteres*
*┃➤ 📥 ${usedPrefix}igstory*
*┃➤ 📥 ${usedPrefix}playdoc*
*┃➤ 📥 ${usedPrefix}ytmp3*
*┃➤ 📥 ${usedPrefix}xvideosdl*
 ╰━━━━━━━━━━━━

 ╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
*┃➤ 🔍 ${usedPrefix}xnxxsearch*
*┃➤ 🔍 ${usedPrefix}google*
*┃➤ 🔍 ${usedPrefix}letra*
*┃➤ 🔍 ${usedPrefix}wikipedia*
*┃➤ 🔍 ${usedPrefix}ytsearch*
*┃➤ 🔍 ${usedPrefix}playstore*
*┃➤ 🔍 ${usedPrefix}mercadolibre*
*┃➤ 🔍 ${usedPrefix}pornhubsearch*
 ╰━━━━━━━━━━━━


  ╭━〔 ❄️ 𝐆𝐑𝐔𝐏𝐎𝐒 ❄️〕
*┃➤ 👥 ${usedPrefix}kick*
*┃➤ 👥 ${usedPrefix}grupo*
*┃➤ 👥 ${usedPrefix}promote*
*┃➤ 👥 ${usedPrefix}demote*
*┃➤ 👥 ${usedPrefix}demote*
*┃➤ 👥 ${usedPrefix}link*
*┃➤ 👥 ${usedPrefix}invocar*
*┃➤ 👥 ${usedPrefix}setwelcome*
*┃➤ 👥 ${usedPrefix}setbye*
*┃➤ 👥 ${usedPrefix}hidetag*
*┃➤ 👥 ${usedPrefix}fantasmas*
*┃➤ 👥 ${usedPrefix}kickfantasmas*
*┃➤ 👥 ${usedPrefix}add*
*┃➤ 👥 ${usedPrefix}Kick2*
*┃➤ 👥 ${usedPrefix}listanum*
*┃➤ 👥 ${usedPrefix}infogroup*
*┃➤ 👥 ${usedPrefix}resetlink*
*┃➤ 👥 ${usedPrefix}fantasmas*
*┃➤ 👥 ${usedPrefix}destrabas*
*┃➤ 👥 ${usedPrefix}admins*
 ╰━━━━━━━━━━━━


*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
*┃➤ 📍 ${usedPrefix}toimg*
*┃➤ 📍 ${usedPrefix}tomp3*
*┃➤ 📍 ${usedPrefix}toptt*
*┃➤ 📍 ${usedPrefix}tovideo*
*┃➤ 📍 ${usedPrefix}tts*
 ╰━━━━━━━━━━━━

 *╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
  *┃➤ ❄️ ${usedPrefix}logos <efecto> <txt>*
  *┃➤ ❄️ ${usedPrefix}logochristmas <txt>*
  *┃➤ ❄️ ${usedPrefix}logocorazon <txt>*
  *┃➤ ❄️ ${usedPrefix}ytcomment <txt>*
  *┃➤ ❄️ ${usedPrefix}hornycard <@tag>*
  *┃➤ ❄️ ${usedPrefix}simpcard <@tag>*
  *┃➤ ❄️ ${usedPrefix}lolice <@tag>*
  *┃➤ ❄️ ${usedPrefix}itssostupid*
  *┃➤ ❄️ ${usedPrefix}pixelar*
  *┃➤ ❄️ ${usedPrefix}blur*
   ╰━━━━━━━━━━━━

 ╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 🥀 ${usedPrefix}piropo*
*┃➤ 🥀 ${usedPrefix}consejo*
*┃➤ 🥀 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━


 _*< ALEATORIO />*_

  ▢ _${usedPrefix}kpop *<blackpink/exo/bts>*_
  ▢ _${usedPrefix}cristianoronaldo_
  ▢ _${usedPrefix}messi_
  ▢ _${usedPrefix}cat_
  ▢ _${usedPrefix}dog_
  ▢ _${usedPrefix}meme_
  ▢ _${usedPrefix}itzy_
  ▢ _${usedPrefix}blackpink_
  ▢ _${usedPrefix}navidad_
  ▢ _${usedPrefix}wpmontaña_
  ▢ _${usedPrefix}pubg_
  ▢ _${usedPrefix}wpgaming_
  ▢ _${usedPrefix}wpaesthetic_
  ▢ _${usedPrefix}wpaesthetic2_
  ▢ _${usedPrefix}wprandom_
  ▢ _${usedPrefix}wallhp_
  ▢ _${usedPrefix}wpvehiculo_
  ▢ _${usedPrefix}wpmoto_
  ▢ _${usedPrefix}coffee_
  ▢ _${usedPrefix}pentol_
  ▢ _${usedPrefix}caricatura_
  ▢ _${usedPrefix}ciberespacio_
  ▢ _${usedPrefix}technology_
  ▢ _${usedPrefix}doraemon_
  ▢ _${usedPrefix}hacker_
  ▢ _${usedPrefix}planeta_
  ▢ _${usedPrefix}randomprofile_


 _*< EFECTOS P. AUDIOS />*_

*- Responde a un audio o nota de voz.*

  ▢ _${usedPrefix}bass_
  ▢ _${usedPrefix}blown_
  ▢ _${usedPrefix}deep_
  ▢ _${usedPrefix}earrape_
  ▢ _${usedPrefix}fast_
  ▢ _${usedPrefix}fat_
  ▢ _${usedPrefix}nightcore_
  ▢ _${usedPrefix}reverse_
  ▢ _${usedPrefix}robot_
  ▢ _${usedPrefix}slow_
  ▢ _${usedPrefix}smooth_
  ▢ _${usedPrefix}tupai_


  ╭━〔 👾 CHAT ANONIMO 👾 〕
*┃➤ ⭐ ${usedPrefix}start*
*┃➤ ⭐ ${usedPrefix}next*
*┃➤ ⭐ ${usedPrefix}leave*
 ╰━━━━━━━━━━━━


 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕 
  *┃➤ 🍃 _${usedPrefix}inspect *<wagc_url>*_
  *┃➤ 🍃 _${usedPrefix}chatgpt *<txt>*_
  *┃➤ 🍃 _${usedPrefix}delchatgpt
  *┃➤ 🍃 _${usedPrefix}gptvoz *<txt>*_
  *┃➤ 🍃 _${usedPrefix}dall-e *<txt>*_
  *┃➤ 🍃 _${usedPrefix}tamaño *<cant> <img / video>*_
  *┃➤ 🍃 _${usedPrefix}readviewonce *<img / video>*_
  *┃➤ 🍃 _${usedPrefix}clima *<país> <ciudad>*_
  *┃➤ 🍃 _${usedPrefix}encuesta *<txt1|txt2>*_
  *┃➤ 🍃 _${usedPrefix}afk *<motivo>*_
  *┃➤ 🍃 _${usedPrefix}ocr *<responde a img>*_
  *┃➤ 🍃 _${usedPrefix}hd *<responde a img>*_
  *┃➤ 🍃 _${usedPrefix}acortar *<url>*_
  *┃➤ 🍃 _${usedPrefix}calc *<operacion>*_
  *┃➤ 🍃 _${usedPrefix}del *<msj>*_
  *┃➤ 🍃 _${usedPrefix}whatmusic *<audio>*_
  *┃➤ 🍃 _${usedPrefix}readqr *<img>*_
  *┃➤ 🍃 _${usedPrefix}qrcode *<txt>*_
  *┃➤ 🍃 _${usedPrefix}readmore *<txt1|txt2>*_
  *┃➤ 🍃 _${usedPrefix}styletext *<txt>*_
  *┃➤ 🍃 _${usedPrefix}traducir *<txt>*_
  *┃➤ 🍃 _${usedPrefix}nowa *num>*_
  *┃➤ 🍃 _${usedPrefix}covid *<pais>*_
  *┃➤ 🍃 _${usedPrefix}horario_
  *┃➤ 🍃 _${usedPrefix}dropmail_
  *┃➤ 🍃 _${usedPrefix}igstalk *<usr>*_
  *┃➤ 🍃 _${usedPrefix}tiktokstalk *<usr>*_
  *┃➤ 🍃 _${usedPrefix}img *<txt>*_
   ╰━━━━━━━━━━━━

  ╭━〔  𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⛅  〕
  *┃➤ ☁️ _${usedPrefix}sticker *<responder a img o video>*_
  *┃➤ ☁️ _${usedPrefix}sticker *<url>*_
  *┃➤ ☁️ _${usedPrefix}sticker2 *<responder a img o video>*_
  *┃➤ ☁️ _${usedPrefix}sticker2 *<url>*_
  *┃➤ ☁️ _${usedPrefix}s *<responder a img o video>*_
  *┃➤ ☁️ _${usedPrefix}s *<url>*_
  *┃➤ ☁️ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  *┃➤ ☁️ _${usedPrefix}scircle *<img>*_
  *┃➤ ☁️ _${usedPrefix}sremovebg *<img>*_
  *┃➤ ☁️ _${usedPrefix}semoji *<tipo> <emoji>*_
  *┃➤ ☁️ _${usedPrefix}qc *<txt>*_
  *┃➤ ☁️ _${usedPrefix}attp *<txt>*_
  *┃➤ ☁️ _${usedPrefix}attp2 *<txt>*_
  *┃➤ ☁️ _${usedPrefix}attp3 *<txt>*_
  *┃➤ ☁️ _${usedPrefix}ttp *<txt>*_
  *┃➤ ☁️ _${usedPrefix}ttp2 *<txt>*_
  *┃➤ ☁️ _${usedPrefix}ttp3 *<txt>*_
  *┃➤ ☁️ _${usedPrefix}ttp4 *<txt>*_
  *┃➤ ☁️ _${usedPrefix}ttp5 *<txt>*_
  *┃➤ ☁️ _${usedPrefix}pat *<@tag>*_
  *┃➤ ☁️ _${usedPrefix}slap *<@tag>*_
  *┃➤ ☁️ _${usedPrefix}kiss *<@tag>*_
  *┃➤ ☁️ _${usedPrefix}dado_
  *┃➤ ☁️ _${usedPrefix}wm *<packname> <autor>*_
  *┃➤ ☁️ _${usedPrefix}stickermarker *<efecto> <img>*_
  *┃➤ ☁️ _${usedPrefix}stickerfilter *<efecto> <img>*_
   ╰━━━━━━━━━━━━`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
