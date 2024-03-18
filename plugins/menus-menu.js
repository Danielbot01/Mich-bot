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

 _*< TUS ESTADÍSTICAS />*_

 ▢ *Nivel:* ${level}
 ▢ *Experiencia:* ${exp}
 ▢ *Rango:* ${role}
 ▢ *Diamantes:* ${limit}
 ▢ *MonovanCoins:* ${money}
 ▢ *Tokens:* ${joincount}
 ▢ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

  _*< LISTA DE MENUS />*_
  
  ▢ _${usedPrefix}menuaudios_
  ▢ _${usedPrefix}menuanimes_
  ▢ _${usedPrefix}labiblia_ (🔞)

 
   ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
  *┃➤ 🕹️ ${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  *┃➤ 🕹️ ${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  *┃➤ 🕹️ ${usedPrefix}ppt *<papel / tijera /piedra>*_
  *┃➤ 🕹️ ${usedPrefix}prostituto *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}prostituta *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}gay2 *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}lesbiana *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}pajero *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}pajera *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}puto *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}puta *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}manco *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}manca *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}rata *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}love *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}doxear *<nombre / @tag>*_
  *┃➤ 🕹️ ${usedPrefix}pregunta *<txt>*_
  *┃➤ 🕹️ ${usedPrefix}suitpvp *<@tag>*_
  *┃➤ 🕹️ ${usedPrefix}slot *<apuesta>*_
  *┃➤ 🕹️ ${usedPrefix}ttt *<nombre sala>*_
  *┃➤ 🕹️ ${usedPrefix}delttt_
  *┃➤ 🕹️ ${usedPrefix}acertijo_
  *┃➤ 🕹️ ${usedPrefix}simi *<txt>*_
  *┃➤ 🕹️ ${usedPrefix}top *<txt>*_
  *┃➤ 🕹️ ${usedPrefix}topgays_
  *┃➤ 🕹️ ${usedPrefix}topotakus_
  *┃➤ 🕹️ ${usedPrefix}formarpareja_
  *┃➤ 🕹️ ${usedPrefix}verdad_
  *┃➤ 🕹️ ${usedPrefix}reto_
  *┃➤ 🕹️ ${usedPrefix}cancion_
  *┃➤ 🕹️ ${usedPrefix}pista_
  *┃➤ 🕹️ ${usedPrefix}akinator_
  *┃➤ 🕹️ ${usedPrefix}ruleta
  *┃➤ 🕹️ ${usedPrefix}suerte
  *┃➤ 🕹️ ${usedPrefix}wordfind_


 _*< ACT./DESACT. FUNC. />*_

  ▢ _${usedPrefix}enable *welcome*_
  ▢ _${usedPrefix}disable *welcome*_
  ▢ _${usedPrefix}enable *modohorny*_
  ▢ _${usedPrefix}disable *modohorny*_
  ▢ _${usedPrefix}enable *antilink*_
  ▢ _${usedPrefix}disable *antilink*_
  ▢ _${usedPrefix}enable *antilink2*_
  ▢ _${usedPrefix}disable *antilink2*_
  ▢ _${usedPrefix}enable *detect*_
  ▢ _${usedPrefix}disable *detect*_
  ▢ _${usedPrefix}enable *audios*_
  ▢ _${usedPrefix}disable *audios*_
  ▢ _${usedPrefix}enable *autosticker*_
  ▢ _${usedPrefix}disable *autosticker*_
  ▢ _${usedPrefix}enable *antiviewonce*_
  ▢ _${usedPrefix}disable *antiviewonce*_
  ▢ _${usedPrefix}enable *antitoxic*_
  ▢ _${usedPrefix}disable *antitoxic*_
  ▢ _${usedPrefix}enable *antitraba*_
  ▢ _${usedPrefix}disable *antitraba*_
  ▢ _${usedPrefix}enable *antiarabes*_
  ▢ _${usedPrefix}disable *antiarabes*_
  ▢ _${usedPrefix}enable *modoadmin*_
  ▢ _${usedPrefix}disable *modoadmin*_
  ▢ _${usedPrefix}enable *antidelete*_
  ▢ _${usedPrefix}disable *antidelete*_


 _*< DESCARGAS />*_

 ▢ _${usedPrefix}play *<txt>*_
 ▢ _${usedPrefix}play2 *<txt>*_
 ▢ _${usedPrefix}play.1 *<txt>*_
 ▢ _${usedPrefix}play.2 *<txt>*_
 ▢ _${usedPrefix}playdoc *<txt>*_
 ▢ _${usedPrefix}playdoc2 *<txt>*_
 ▢ _${usedPrefix}playlist *<txt>*_
 ▢ _${usedPrefix}ytshort *<url>*_
 ▢ _${usedPrefix}ytmp3 *<url>*_
 ▢ _${usedPrefix}ytmp3doc *<url>*_
 ▢ _${usedPrefix}ytmp4 *<url>*_
 ▢ _${usedPrefix}ytmp4doc *<url>*_
 ▢ _${usedPrefix}videodoc *<url>*_
 ▢ _${usedPrefix}spotify *<txt>*_
 ▢ _${usedPrefix}facebook *<url>*_
 ▢ _${usedPrefix}instagram *<url>*_
 ▢ _${usedPrefix}igstory *<usr>*_
 ▢ _${usedPrefix}tiktok *<url>*_
 ▢ _${usedPrefix}tiktokimg *<url>*_
 ▢ _${usedPrefix}pptiktok *<usr>*_
 ▢ _${usedPrefix}mediafire *<url>*_ 
 ▢ _${usedPrefix}pinterest *<txt>*_
 ▢ _${usedPrefix}gitclone *<url>*_
 ▢ _${usedPrefix}gdrive *<url>*_
 ▢ _${usedPrefix}twitter *<url>*_
 ▢ _${usedPrefix}ringtone *<txt>*_
 ▢ _${usedPrefix}soundcloud *<txt>*_
 ▢ _${usedPrefix}stickerpack *<url>*_
 ▢ _${usedPrefix}wallpaper *<txt>*_ 
 ▢ _${usedPrefix}dapk2 *<url>*_
 ▢ _${usedPrefix}xnxxdl *<url>*_ (🔞)
 ▢ _${usedPrefix}xvideosdl *<url>*_ (🔞)


 _*< BUSCADORES />*_

  ▢ _${usedPrefix}githubsearch *<txt>*_
  ▢ _${usedPrefix}pelisplus *<txt>*_
  ▢ _${usedPrefix}modapk *<txt>*_
  ▢ _${usedPrefix}stickersearch *<txt>*_
  ▢ _${usedPrefix}stickersearch2 *<txt>*_
  ▢ _${usedPrefix}xnxxsearch *<txt>*_
  ▢ _${usedPrefix}animeinfo *<txt>*_
  ▢ _${usedPrefix}google *<txt>*_
  ▢ _${usedPrefix}letra *<txt>*_
  ▢ _${usedPrefix}wikipedia *<txt>*_
  ▢ _${usedPrefix}ytsearch *<txt>*_
  ▢ _${usedPrefix}playstore *<txt>*_


 _*< GRUPOS />*_

  ▢ _${usedPrefix}add *num>*_
  ▢ _${usedPrefix}kick *<@tag>*_
  ▢ _${usedPrefix}kick2 *<@tag>*_
  ▢ _${usedPrefix}listanum *<txt>*_
  ▢ _${usedPrefix}kicknum *<txt>*_
  ▢ _${usedPrefix}grupo *<abrir/cerrar>*_
  ▢ _${usedPrefix}grouptime *<opcion> <tiempo>*_
  ▢ _${usedPrefix}promote *<@tag>*_
  ▢ _${usedPrefix}demote *<@tag>*_
  ▢ _${usedPrefix}infogroup_
  ▢ _${usedPrefix}resetlink_
  ▢ _${usedPrefix}link_
  ▢ _${usedPrefix}setname *<txt>*_
  ▢ _${usedPrefix}setdesc *<txt>*_
  ▢ _${usedPrefix}invocar *<txt>*_
  ▢ _${usedPrefix}setwelcome *<txt>*_
  ▢ _${usedPrefix}setbye *<txt>*_
  ▢ _${usedPrefix}hidetag *<txt>*_
  ▢ _${usedPrefix}hidetag *<audio>*_
  ▢ _${usedPrefix}hidetag *<video>*_
  ▢ _${usedPrefix}hidetag *<img>*_
  ▢ _${usedPrefix}warn *<@tag>*_
  ▢ _${usedPrefix}unwarn *<@tag>*_
  ▢ _${usedPrefix}listwarn_
  ▢ _${usedPrefix}fantasmas_
  ▢ _${usedPrefix}destraba_
  ▢ _${usedPrefix}setpp *<img>*_
  ▢ _admins *<txt>*_ (sin prefijo)


 _*< CONVERTIDORES />*_

  ▢ _${usedPrefix}toanime *<img>*_
  ▢ _${usedPrefix}togifaud *<video>*_
  ▢ _${usedPrefix}toimg *<sticker>*_
  ▢ _${usedPrefix}tomp3 *<video>*_
  ▢ _${usedPrefix}tomp3 *<nota de voz>*_
  ▢ _${usedPrefix}toptt *<video / audio>*_
  ▢ _${usedPrefix}tovideo *<sticker>*_
  ▢ _${usedPrefix}tourl *<video / img / audio>*_
  ▢ _${usedPrefix}tts *<idioma> <txt>*_
  ▢ _${usedPrefix}tts *<efecto> <txt>*_


 _*< EFECTOS & LOGOS />*_

  ▢ _${usedPrefix}logos *<efecto> <txt>*_
  ▢ _${usedPrefix}logochristmas *<txt>*_
  ▢ _${usedPrefix}logocorazon *<txt>*_
  ▢ _${usedPrefix}ytcomment *<txt>*_
  ▢ _${usedPrefix}hornycard *<@tag>*_
  ▢ _${usedPrefix}simpcard *<@tag>*_
  ▢ _${usedPrefix}lolice *<@tag>*_
  ▢ _${usedPrefix}itssostupid_
  ▢ _${usedPrefix}pixelar_
  ▢ _${usedPrefix}blur_


 _*< FRASES & TEXTOS />*_

  ▢ _${usedPrefix}piropo_
  ▢ _${usedPrefix}consejo_
  ▢ _${usedPrefix}fraseromantica_


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


 _*< CHAT ANÓNIMO />*_

  ▢ _${usedPrefix}start_
  ▢ _${usedPrefix}next_
  ▢ _${usedPrefix}leave_


 _*< HERRAMIENTAS />*_
 
  ▢ _${usedPrefix}inspect *<wagc_url>*_
  ▢ _${usedPrefix}chatgpt *<txt>*_
  ▢ _${usedPrefix}delchatgpt
  ▢ _${usedPrefix}gptvoz *<txt>*_
  ▢ _${usedPrefix}dall-e *<txt>*_
  ▢ _${usedPrefix}tamaño *<cant> <img / video>*_
  ▢ _${usedPrefix}readviewonce *<img / video>*_
  ▢ _${usedPrefix}clima *<país> <ciudad>*_
  ▢ _${usedPrefix}encuesta *<txt1|txt2>*_
  ▢ _${usedPrefix}afk *<motivo>*_
  ▢ _${usedPrefix}ocr *<responde a img>*_
  ▢ _${usedPrefix}hd *<responde a img>*_
  ▢ _${usedPrefix}acortar *<url>*_
  ▢ _${usedPrefix}calc *<operacion>*_
  ▢ _${usedPrefix}del *<msj>*_
  ▢ _${usedPrefix}whatmusic *<audio>*_
  ▢ _${usedPrefix}readqr *<img>*_
  ▢ _${usedPrefix}qrcode *<txt>*_
  ▢ _${usedPrefix}readmore *<txt1|txt2>*_
  ▢ _${usedPrefix}styletext *<txt>*_
  ▢ _${usedPrefix}traducir *<txt>*_
  ▢ _${usedPrefix}nowa *num>*_
  ▢ _${usedPrefix}covid *<pais>*_
  ▢ _${usedPrefix}horario_
  ▢ _${usedPrefix}dropmail_
  ▢ _${usedPrefix}igstalk *<usr>*_
  ▢ _${usedPrefix}tiktokstalk *<usr>*_
  ▢ _${usedPrefix}img *<txt>*_


 _*< STICKERS />*_

  ▢ _${usedPrefix}sticker *<responder a img o video>*_
  ▢ _${usedPrefix}sticker *<url>*_
  ▢ _${usedPrefix}sticker2 *<responder a img o video>*_
  ▢ _${usedPrefix}sticker2 *<url>*_
  ▢ _${usedPrefix}s *<responder a img o video>*_
  ▢ _${usedPrefix}s *<url>*_
  ▢ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
  ▢ _${usedPrefix}scircle *<img>*_
  ▢ _${usedPrefix}sremovebg *<img>*_
  ▢ _${usedPrefix}semoji *<tipo> <emoji>*_
  ▢ _${usedPrefix}qc *<txt>*_
  ▢ _${usedPrefix}attp *<txt>*_
  ▢ _${usedPrefix}attp2 *<txt>*_
  ▢ _${usedPrefix}attp3 *<txt>*_
  ▢ _${usedPrefix}ttp *<txt>*_
  ▢ _${usedPrefix}ttp2 *<txt>*_
  ▢ _${usedPrefix}ttp3 *<txt>*_
  ▢ _${usedPrefix}ttp4 *<txt>*_
  ▢ _${usedPrefix}ttp5 *<txt>*_
  ▢ _${usedPrefix}pat *<@tag>*_
  ▢ _${usedPrefix}slap *<@tag>*_
  ▢ _${usedPrefix}kiss *<@tag>*_
  ▢ _${usedPrefix}dado_
  ▢ _${usedPrefix}wm *<packname> <autor>*_
  ▢ _${usedPrefix}stickermarker *<efecto> <img>*_
  ▢ _${usedPrefix}stickerfilter *<efecto> <img>*_`.trim();
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
