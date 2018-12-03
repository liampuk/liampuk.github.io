var emojis = ["*faces", "😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","☺","🙂","🤗","🤩","🤔","🤨","😐","😑","😶","🙄","😏","😣","😥","😮","🤐","😯","😪","😫","😴","😌","😛","😜","😝","🤤","😒","😓","😔","😕","🙃","🤑","😲","☹","🙁","😖","😞","😟","😤","😢","😭","😦","😧","😨","😩","🤯","😬","😰","😱","😳","🤪","😵","😡","😠","🤬","😷","🤒","🤕","🤢","🤮","🤧","😇","🤠","🤡","🤥","🤫","🤭","🧐","🤓","😈","👿","👹","👺","💀","👻","👽","👾","🤖","💩","😺","😸","😹","😻","😼","😽","🙀","😿","😾",
    "*people & fantasy", "👶","👦","👧","👨","👩","👴","👵","👨‍⚕️","👩‍⚕️","👨‍🎓","👩‍🎓","👨‍⚖️","👩‍⚖️","👨‍🌾","👩‍🌾","👨‍🍳","👩‍🍳","👨‍🔧","👩‍🔧","👨‍🏭","👩‍🏭","👨‍💼","👩‍💼","👨‍🔬","👩‍🔬","👨‍💻","👩‍💻","👨‍🎤","👩‍🎤","👨‍🎨","👩‍🎨","👨‍✈️","👩‍✈️","👨‍🚀","👩‍🚀","👨‍🚒","👩‍🚒","👮","👮‍♂️","👮‍♀️","🕵","🕵️‍♂️","🕵️‍♀️","💂","💂‍♂️","💂‍♀️","👷","👷‍♂️","👷‍♀️","🤴","👸","👳","👳‍♂️","👳‍♀️","👲","🧕","🧔","👱","👱‍♂️","👱‍♀️","🤵","👰","🤰","🤱","👼","🎅","🤶","🧙","🧙‍♀️","🧙‍♂️","🧚‍♀️","🧚‍♂️","🧛","🧛‍♀️","🧛‍♂️","🧜","🧜‍♀️","🧜‍♂️","🧝","🧝‍♀️","🧝‍♂️","🧞","🧞‍♀️","🧞‍♂️","🧟","🧟‍♀️","🧟‍♂️","🙍","🙍‍♂️","🙍‍♀️","🙎","🙎‍♂️","🙎‍♀️","🙅","🙅‍♂️","🙅‍♀️","🙆","🙆‍♂️","🙆‍♀️","💁","💁‍♂️","💁‍♀️","🙋","🙋‍♂️","🙋‍♀️","🙇","🙇‍♂️","🙇‍♀️","🤦","🤦‍♂️","🤦‍♀️","🤷","🤷‍♂️","🤷‍♀️","💆","💆‍♂️","💆‍♀️","💇","💇‍♂️","💇‍♀️","🚶","🚶‍♂️","🚶‍♀️","🏃","🏃‍♂️","🏃‍♀️","💃","🕺","👯","👯‍♂️","👯‍♀️","🧖","🧖‍♀️","🧖‍♂️","🧘","🕴","🗣","👤","👥","👫","👬","👭","💏","👨‍❤️‍💋‍👨","👩‍❤️‍💋‍👩","💑","👨‍❤️‍👨","👩‍❤️‍👩","👪","👨‍👩‍👦","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👦","👨‍👦‍👦","👨‍👧","👨‍👧‍👦","👨‍👧‍👧","👩‍👦","👩‍👦‍👦","👩‍👧","👩‍👧‍👦","👩‍👧‍👧","🤳","💪","👈","👉","☝","👆","🖕","👇","✌","🤞","🖖","🤘","🖐","✋","👌","👍","👎","✊","👊","🤛","🤜","🤚","👋","🤟","✍","👏","👐","🙌","🤲","🙏","🤝","💅","👂","👃","👣","👀","👁","🧠","👅","👄","💋",
    "*clothing & accessories", "👓","🕶","👔","👕","👖","🧣","🧤","🧥","🧦","👗","👘","👙","👚","👛","👜","👝","🎒","👞","👟","👠","👡","👢","👑","👒","🎩","🎓","🧢","⛑","💄","💍","🌂","☂","💼",
    "*animals & nature", "🙈","🙉","🙊","💥","💦","💨","💫","🐵","🐒","🦍","🐶","🐕","🐩","🐺","🦊","🐱","🐈","🦁","🐯","🐅","🐆","🐴","🐎","🦄","🦓","🐮","🐂","🐃","🐄","🐷","🐖","🐗","🐽","🐏","🐑","🐐","🐪","🐫","🦒","🐘","🦏","🐭","🐁","🐀","🐹","🐰","🐇","🐿","🦔","🦇","🐻","🐨","🐼","🐾","🦃","🐔","🐓","🐣","🐤","🐥","🐦","🐧","🕊","🦅","🦆","🦉","🐸","🐊","🐢","🦎","🐍","🐲","🐉","🦕","🦖","🐳","🐋","🐬","🐟","🐠","🐡","🦈","🐙","🐚","🦀","🦐","🦑","🐌","🦋","🐛","🐜","🐝","🐞","🦗","🕷","🕸","🦂","💐","🌸","💮","🏵","🌹","🥀","🌺","🌻","🌼","🌷","🌱","🌲","🌳","🌴","🌵","🌾","🌿","☘","🍀","🍁","🍂","🍃","🍄","🌰","🌍","🌎","🌏","🌐","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","☀","🌝","🌞","⭐","🌟","🌠","☁","⛅","⛈","🌤","🌥","🌦","🌧","🌨","🌩","🌪","🌫","🌬","🌈","☂","☔","⚡","❄","☃","⛄","☄","🔥","💧","🌊","🎄","✨","🎋","🎍",
    "*food & drink", "🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🥝","🍅","🥥","🥑","🍆","🥔","🥕","🌽","🌶","🥒","🥦","🍄","🥜","🌰","🍞","🥐","🥖","🥨","🥞","🧀","🍖","🍗","🥩","🥓","🍔","🍟","🍕","🌭","🥪","🌮","🌯","🥙","🍳","🥘","🍲","🥣","🥗","🍿","🥫","🍱","🍘","🍙","🍚","🍛","🍜","🍝","🍠","🍢","🍣","🍤","🍥","🍡","🥟","🥠","🥡","🍦","🍧","🍨","🍩","🍪","🎂","🍰","🥧","🍫","🍬","🍭","🍮","🍯","🍼","🥛","☕","🍵","🍶","🍾","🍷","🍸","🍹","🍺","🍻","🥂","🥃","🥤","🥢","🍽","🍴","🥄",
    "*activities & sports", "🧗","🧗‍♀️","🧗‍♂️","🧘","🧘‍♀️","🧘‍♂️","🕴","🏇","⛷","🏂","🏌","🏌️‍♂️","🏌️‍♀️","🏄","🏄‍♂️","🏄‍♀️","🚣","🚣‍♂️","🚣‍♀️","🏊","🏊‍♂️","🏊‍♀️","⛹","⛹️‍♂️","⛹️‍♀️","🏋","🏋️‍♂️","🏋️‍♀️","🚴","🚴‍♂️","🚴‍♀️","🚵","🚵‍♂️","🚵‍♀️","🤸","🤸‍♂️","🤸‍♀️","🤼","🤼‍♂️","🤼‍♀️","🤽","🤽‍♂️","🤽‍♀️","🤾","🤾‍♂️","🤾‍♀️","🤹","🤹‍♂️","🤹‍♀️","🎪","🎗","🎟","🎫","🎖","🏆","🏅","🥇","🥈","🥉","⚽","⚾","🏀","🏐","🏈","🏉","🎾","🎳","🏏","🏑","🏒","🏓","🏸","🥊","🥋","⛳","⛸","🎣","🎽","🎿","🛷","🥌","🎯","🎱","🎮","🎰","🎲","♟","🎭","🎨","🎼","🎤","🎧","🎷","🎸","🎹","🎺","🎻","🥁","🎬","🏹",
    "*travel & places", "🚣","🏎","🏍","🗾","🏔","⛰","🌋","🗻","🏕","🏖","🏜","🏝","🏞","🏟","🏛","🏗","🏘","🏚","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏨","🏩","🏪","🏫","🏬","🏭","🏯","🏰","💒","🗼","🗽","⛪","🕌","🕍","⛩","🕋","⛲","⛺","🌁","🌃","🏙","🌄","🌅","🌆","🌇","🌉","🌌","🎠","🎡","🎢","🚂","🚃","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚝","🚞","🚋","🚌","🚍","🚎","🚐","🚑","🚒","🚓","🚔","🚕","🚖","🚗","🚘","🚚","🚛","🚜","🚲","🛴","🛵","🚏","🛤","⛽","🚨","🚥","🚦","🚧","⚓","⛵","🚤","🛳","⛴","🛥","🚢","✈","🛩","🛫","🛬","💺","🚁","🚟","🚠","🚡","🛰","🚀","🛸","🌠","⛱","🎆","🎇","🎑","💴","💵","💶","💷","🗿","🛂","🛃","🛄",
    "*objects", "☠","🛀","🛌","💌","💣","🕳","🛍","📿","💎","🔪","🏺","🗺","💈","🛢","🛎","⌛","⏳","⌚","⏰","⏱","⏲","🕰","🌡","⛱","🎈","🎉","🎊","🎎","🎏","🎐","🎀","🎁","🔮","🕹","🖼","📯","🎙","🎚","🎛","📻","📱","📲","☎","📞","📟","📠","🔋","🔌","💻","🖥","🖨","⌨","🖱","🖲","💽","💾","💿","📀","🎥","🎞","📽","📺","📷","📸","📹","📼","🔍","🔎","🕯","💡","🔦","🏮","📔","📕","📖","📗","📘","📙","📚","📓","📃","📜","📄","📰","🗞","📑","🔖","🏷","💰","💴","💵","💶","💷","💸","💳","✉","📧","📨","📩","📤","📥","📦","📫","📪","📬","📭","📮","🗳","✏","✒","🖋","🖊","🖌","🖍","📝","📁","📂","🗂","📅","📆","🗒","🗓","📇","📈","📉","📊","📋","📌","📍","📎","🖇","📏","📐","✂","🗃","🗄","🗑","🔒","🔓","🔏","🔐","🔑","🗝","🔨","⛏","⚒","🛠","🗡","⚔","🔫","🛡","🔧","🔩","⚙","🗜","⚖","🔗","⛓","⚗","🔬","🔭","📡","💉","💊","🚪","🛏","🛋","🚽","🚿","🛁","🚬","⚰","⚱","🗿","🚰",
    "*symbols", "👁‍🗨","💘","❤","💓","💔","💕","💖","💗","💙","💚","💛","🧡","💜","🖤","💝","💞","💟","❣","💤","💢","💬","🗯","💭","💮","♨","💈","🛑","🕛","🕧","🕐","🕜","🕑","🕝","🕒","🕞","🕓","🕟","🕔","🕠","🕕","🕡","🕖","🕢","🕗","🕣","🕘","🕤","🕙","🕥","🕚","🕦","🌀","♠","♥","♦","♣","🃏","🀄","🎴","🔇","🔈","🔉","🔊","📢","📣","📯","🔔","🔕","🎵","🎶","🏧","🚮","🚰","♿","🚹","🚺","🚻","🚼","🚾","⚠","🚸","⛔","🚫","🚳","🚭","🚯","🚱","🚷","🔞","☢","☣","⬆","↗","➡","↘","⬇","↙","⬅","↖","↕","↔","↩","↪","⤴","⤵","🔃","🔄","🔙","🔚","🔛","🔜","🔝","🛐","⚛","♾","🕉","✡","☸","☯","✝","☦","☪","☮","🕎","🔯","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","⛎","🔀","🔁","🔂","▶","⏩","◀","⏪","🔼","⏫","🔽","⏬","⏹","⏏","🎦","🔅","🔆","📶","📳","📴","♻","🔱","📛","🔰","⭕","✅","☑","✔","✖","❌","❎","➕","➖","➗","➰","➿","〽","✳","✴","❇","‼","⁉","❓","❔","❕","❗","©","®","™","#️⃣","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","💯","🔠","🔡","🔢","🔣","🔤","🅰","🆎","🅱","🆑","🆒","🆓","ℹ","🆔","Ⓜ","🆕","🆖","🅾","🆗","🅿","🆘","🆙","🆚","🈁","🈂","🈷","🈶","🈯","🉐","🈹","🈚","🈲","🉑","🈸","🈴","🈳","㊗","㊙","🈺","🈵","▪","▫","◻","◼","◽","◾","⬛","⬜","🔶","🔷","🔸","🔹","🔺","🔻","💠","🔲","🔳","⚪","⚫","🔴","🔵",
    "*flags", "🏁","🚩","🎌","🏴","🏳","🏳️‍🌈","🏴‍☠️","🇦🇨","🇦🇩","🇦🇪","🇦🇫","🇦🇬","🇦🇮","🇦🇱","🇦🇲","🇦🇴","🇦🇶","🇦🇷","🇦🇸","🇦🇹","🇦🇺","🇦🇼","🇦🇽","🇦🇿","🇧🇦","🇧🇧","🇧🇩","🇧🇪","🇧🇫","🇧🇬","🇧🇭","🇧🇮","🇧🇯","🇧🇱","🇧🇲","🇧🇳","🇧🇴","🇧🇶","🇧🇷","🇧🇸","🇧🇹","🇧🇻","🇧🇼","🇧🇾","🇧🇿","🇨🇦","🇨🇨","🇨🇩","🇨🇫","🇨🇬","🇨🇭","🇨🇮","🇨🇰","🇨🇱","🇨🇲","🇨🇳","🇨🇴","🇨🇵","🇨🇷","🇨🇺","🇨🇻","🇨🇼","🇨🇽","🇨🇾","🇨🇿","🇩🇪","🇩🇬","🇩🇯","🇩🇰","🇩🇲","🇩🇴","🇩🇿","🇪🇦","🇪🇨","🇪🇪","🇪🇬","🇪🇭","🇪🇷","🇪🇸","🇪🇹","🇪🇺","🇫🇮","🇫🇯","🇫🇰","🇫🇲","🇫🇴","🇫🇷","🇬🇦","🇬🇧","🇬🇩","🇬🇪","🇬🇫","🇬🇬","🇬🇭","🇬🇮","🇬🇱","🇬🇲","🇬🇳","🇬🇵","🇬🇶","🇬🇷","🇬🇸","🇬🇹","🇬🇺","🇬🇼","🇬🇾","🇭🇰","🇭🇲","🇭🇳","🇭🇷","🇭🇹","🇭🇺","🇮🇨","🇮🇩","🇮🇪","🇮🇱","🇮🇲","🇮🇳","🇮🇴","🇮🇶","🇮🇷","🇮🇸","🇮🇹","🇯🇪","🇯🇲","🇯🇴","🇯🇵","🇰🇪","🇰🇬","🇰🇭","🇰🇮","🇰🇲","🇰🇳","🇰🇵","🇰🇷","🇰🇼","🇰🇾","🇰🇿","🇱🇦","🇱🇧","🇱🇨","🇱🇮","🇱🇰","🇱🇷","🇱🇸","🇱🇹","🇱🇺","🇱🇻","🇱🇾","🇲🇦","🇲🇨","🇲🇩","🇲🇪","🇲🇫","🇲🇬","🇲🇭","🇲🇰","🇲🇱","🇲🇲","🇲🇳","🇲🇴","🇲🇵","🇲🇶","🇲🇷","🇲🇸","🇲🇹","🇲🇺","🇲🇻","🇲🇼","🇲🇽","🇲🇾","🇲🇿","🇳🇦","🇳🇨","🇳🇪","🇳🇫","🇳🇬","🇳🇮","🇳🇱","🇳🇴","🇳🇵","🇳🇷","🇳🇺","🇳🇿","🇴🇲","🇵🇦","🇵🇪","🇵🇫","🇵🇬","🇵🇭","🇵🇰","🇵🇱","🇵🇲","🇵🇳","🇵🇷","🇵🇸","🇵🇹","🇵🇼","🇵🇾","🇶🇦","🇷🇪","🇷🇴","🇷🇸","🇷🇺","🇷🇼","🇸🇦","🇸🇧","🇸🇨","🇸🇩","🇸🇪","🇸🇬","🇸🇭","🇸🇮","🇸🇯","🇸🇰","🇸🇱","🇸🇲","🇸🇳","🇸🇴","🇸🇷","🇸🇸","🇸🇹","🇸🇻","🇸🇽","🇸🇾","🇸🇿","🇹🇦","🇹🇨","🇹🇩","🇹🇫","🇹🇬","🇹🇭","🇹🇯","🇹🇰","🇹🇱","🇹🇲","🇹🇳","🇹🇴","🇹🇷","🇹🇹","🇹🇻","🇹🇼","🇹🇿","🇺🇦","🇺🇬","🇺🇲","🇺🇳","🇺🇸","🇺🇾","🇺🇿","🇻🇦","🇻🇨","🇻🇪","🇻🇬","🇻🇮","🇻🇳","🇻🇺","🇼🇫","🇼🇸","🇽🇰","🇾🇪","🇾🇹","🇿🇦","🇿🇲","🇿🇼","🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏴󠁧󠁢󠁳󠁣󠁴󠁿","🏴󠁧󠁢󠁷󠁬󠁳󠁿"];

var searchArray =   ["Grinning Face:1","Beaming Face With Smiling Eyes:2","Face With Tears of Joy:3","Rolling on the Floor Laughing:4","Grinning Face With Big Eyes:5","Grinning Face With Smiling Eyes:6","Grinning Face With Sweat:7","Grinning Squinting Face:8","Winking Face:9","Smiling Face With Smiling Eyes:10","Face Savoring Food:11","Smiling Face With Sunglasses:12","Smiling Face With Heart-Eyes:13","Face Blowing a Kiss:14","Kissing Face:15","Kissing Face With Smiling Eyes:16","Kissing Face With Closed Eyes:17","Smiling Face:18","Slightly Smiling Face:19","Hugging Face:20","Star-Struck:21","Thinking Face:22","Face With Raised Eyebrow:23","Neutral Face:24","Expressionless Face:25","Face Without Mouth:26","Face With Rolling Eyes:27","Smirking Face:28","Persevering Face:29","Sad but Relieved Face:30","Face With Open Mouth:31","Zipper-Mouth Face:32","Hushed Face:33","Sleepy Face:34","Tired Face:35","Sleeping Face:36","Relieved Face:37","Face With Tongue:38","Winking Face With Tongue:39","Squinting Face With Tongue:40","Drooling Face:41","Unamused Face:42","Downcast Face With Sweat:43","Pensive Face:44","Confused Face:45","Upside-Down Face:46","Money-Mouth Face:47","Astonished Face:48","Frowning Face:49","Slightly Frowning Face:50","Confounded Face:51","Disappointed Face:52","Worried Face:53","Face With Steam From Nose:54","Crying Face:55","Loudly Crying Face:56","Frowning Face With Open Mouth:57","Anguished Face:58","Fearful Face:59","Weary Face:60","Exploding Head:61","Grimacing Face:62","Anxious Face With Sweat:63","Face Screaming in Fear:64","Flushed Face:65","Zany Face:66","Dizzy Face:67","Pouting Face:68","Angry Face:69","Face With Symbols on Mouth:70","Face With Medical Mask:71","Face With Thermometer:72","Face With Head-Bandage:73","Nauseated Face:74","Face Vomiting:75","Sneezing Face:76","Smiling Face With Halo:77","Cowboy Hat Face:78","Clown Face:79","Lying Face:80","Shushing Face:81","Face With Hand Over Mouth:82","Face With Monocle:83","Nerd Face:84","Smiling Face With Horns:85","Angry Face With Horns:86","Ogre:87","Goblin:88","Skull:89","Ghost:90","Alien:91","Alien Monster:92","Robot Face:93","Pile of Poo:94","Grinning Cat Face:95","Grinning Cat Face With Smiling Eyes:96","Cat Face With Tears of Joy:97","Smiling Cat Face With Heart-Eyes:98","Cat Face With Wry Smile:99","Kissing Cat Face:100","Weary Cat Face:101","Crying Cat Face:102","Pouting Cat Face:103",
    "Baby:105","Boy:106","Girl:107","Man:108","Woman:109","Old Man:110","Old Woman:111","Man Health Worker:112","Woman Health Worker:113","Man Student:114","Woman Student:115","Man Judge:116","Woman Judge:117","Man Farmer:118","Woman Farmer:119","Man Cook:120","Woman Cook:121","Man Mechanic:122","Woman Mechanic:123","Man Factory Worker:124","Woman Factory Worker:125","Man Office Worker:126","Woman Office Worker:127","Man Scientist:128","Woman Scientist:129","Man Technologist:130","Woman Technologist:131","Man Singer:132","Woman Singer:133","Man Artist:134","Woman Artist:135","Man Pilot:136","Woman Pilot:137","Man Astronaut:138","Woman Astronaut:139","Man Firefighter:140","Woman Firefighter:141","Police Officer:142","Man Police Officer:143","Woman Police Officer:144","Detective:145","Man Detective:146","Woman Detective:147","Guard:148","Man Guard:149","Woman Guard:150","Construction Worker:151","Man Construction Worker:152","Woman Construction Worker:153","Prince:154","Princess:155","Person Wearing Turban:156","Man Wearing Turban:157","Woman Wearing Turban:158","Man With Chinese Cap:159","Woman With Headscarf:160","Man:161","Person:162","Man:163","Woman:164","Man in Tuxedo:165","Bride With Veil:166","Pregnant Woman:167","Breast-Feeding:168","Baby Angel:169","Santa Claus:170","Mrs. Claus:171","Mage:172","Woman Mage:173","Man Mage:174","Woman Fairy:175","Man Fairy:176","Vampire:177","Woman Vampire:178","Man Vampire:179","Merperson:180","Mermaid:181","Merman:182","Elf:183","Woman Elf:184","Man Elf:185","Genie:186","Woman Genie:187","Man Genie:188","Zombie:189","Woman Zombie:190","Man Zombie:191","Person Frowning:192","Man Frowning:193","Woman Frowning:194","Person Pouting:195","Man Pouting:196","Woman Pouting:197","Person Gesturing No:198","Man Gesturing No:199","Woman Gesturing No:200","Person Gesturing OK:201","Man Gesturing OK:202","Woman Gesturing OK:203","Person Tipping Hand:204","Man Tipping Hand:205","Woman Tipping Hand:206","Person Raising Hand:207","Man Raising Hand:208","Woman Raising Hand:209","Person Bowing:210","Man Bowing:211","Woman Bowing:212","Person Facepalming:213","Man Facepalming:214","Woman Facepalming:215","Person Shrugging:216","Man Shrugging:217","Woman Shrugging:218","Person Getting Massage:219","Man Getting Massage:220","Woman Getting Massage:221","Person Getting Haircut:222","Man Getting Haircut:223","Woman Getting Haircut:224","Person Walking:225","Man Walking:226","Woman Walking:227","Person Running:228","Man Running:229","Woman Running:230","Woman Dancing:231","Man Dancing:232","People With Bunny Ears:233","Men With Bunny Ears:234","Women With Bunny Ears:235","Person in Steamy Room:236","Woman in Steamy Room:237","Man in Steamy Room:238","Person in Lotus Position:239","Man in Suit Levitating:240","Speaking Head:241","Bust in Silhouette:242","Busts in Silhouette:243","Man and Woman Holding Hands:244","Two Men Holding Hands:245","Two Women Holding Hands:246","Kiss:247","Kiss:248","Kiss:249","Couple With Heart:250","Couple With Heart:251","Couple With Heart:252","Family:253","Family:254","Family:255","Family:256","Family:257","Family:258","Family:259","Family:260","Family:261","Family:262","Family:263","Family:264","Family:265","Family:266","Family:267","Family:268","Family:269","Family:270","Family:271","Family:272","Family:273","Family:274","Family:275","Family:276","Family:277","Family:278","Selfie:279","Flexed Biceps:280","Backhand Index Pointing Left:281","Backhand Index Pointing Right:282","Index Pointing Up:283","Backhand Index Pointing Up:284","Middle Finger:285","Backhand Index Pointing Down:286","Victory Hand:287","Crossed Fingers:288","Vulcan Salute:289","Sign of the Horns:290","Hand With Fingers Splayed:291","Raised Hand:292","OK Hand:293","Thumbs Up:294","Thumbs Down:295","Raised Fist:296","Oncoming Fist:297","Left-Facing Fist:298","Right-Facing Fist:299","Raised Back of Hand:300","Waving Hand:301","Love-You Gesture:302","Writing Hand:303","Clapping Hands:304","Open Hands:305","Raising Hands:306","Palms Up Together:307","Folded Hands:308","Handshake:309","Nail Polish:310","Ear:311","Nose:312","Footprints:313","Eyes:314","Eye:315","Brain:316","Tongue:317","Mouth:318","Kiss Mark:319",
    "Glasses:321","Sunglasses:322","Necktie:323","T-Shirt:324","Jeans:325","Scarf:326","Gloves:327","Coat:328","Socks:329","Dress:330","Kimono:331","Bikini:332","Woman’s Clothes:333","Purse:334","Handbag:335","Clutch Bag:336","Backpack:337","Man’s Shoe:338","Running Shoe:339","High-Heeled Shoe:340","Woman’s Sandal:341","Woman’s Boot:342","Crown:343","Woman’s Hat:344","Top Hat:345","Graduation Cap:346","Billed Cap:347","Rescue Worker’s Helmet:348","Lipstick:349","Ring:350","Closed Umbrella:351","Umbrella:352","Briefcase:353",
    "See-No-Evil Monkey:355","Hear-No-Evil Monkey:356","Speak-No-Evil Monkey:357","Collision:358","Sweat Droplets:359","Dashing Away:360","Dizzy:361","Monkey Face:362","Monkey:363","Gorilla:364","Dog Face:365","Dog:366","Poodle:367","Wolf Face:368","Fox Face:369","Cat Face:370","Cat:371","Lion Face:372","Tiger Face:373","Tiger:374","Leopard:375","Horse Face:376","Horse:377","Unicorn Face:378","Zebra:379","Cow Face:380","Ox:381","Water Buffalo:382","Cow:383","Pig Face:384","Pig:385","Boar:386","Pig Nose:387","Ram:388","Ewe:389","Goat:390","Camel:391","Two-Hump Camel:392","Giraffe:393","Elephant:394","Rhinoceros:395","Mouse Face:396","Mouse:397","Rat:398","Hamster Face:399","Rabbit Face:400","Rabbit:401","Chipmunk:402","Hedgehog:403","Bat:404","Bear Face:405","Koala:406","Panda Face:407","Paw Prints:408","Turkey:409","Chicken:410","Rooster:411","Hatching Chick:412","Baby Chick:413","Front-Facing Baby Chick:414","Bird:415","Penguin:416","Dove:417","Eagle:418","Duck:419","Owl:420","Frog Face:421","Crocodile:422","Turtle:423","Lizard:424","Snake:425","Dragon Face:426","Dragon:427","Sauropod:428","T-Rex:429","Spouting Whale:430","Whale:431","Dolphin:432","Fish:433","Tropical Fish:434","Blowfish:435","Shark:436","Octopus:437","Spiral Shell:438","Crab:439","Shrimp:440","Squid:441","Snail:442","Butterfly:443","Bug:444","Ant:445","Honeybee:446","Lady Beetle:447","Cricket:448","Spider:449","Spider Web:450","Scorpion:451","Bouquet:452","Cherry Blossom:453","White Flower:454","Rosette:455","Rose:456","Wilted Flower:457","Hibiscus:458","Sunflower:459","Blossom:460","Tulip:461","Seedling:462","Evergreen Tree:463","Deciduous Tree:464","Palm Tree:465","Cactus:466","Sheaf of Rice:467","Herb:468","Shamrock:469","Four Leaf Clover:470","Maple Leaf:471","Fallen Leaf:472","Leaf Fluttering in Wind:473","Mushroom:474","Chestnut:475","Globe Showing Europe-Africa:476","Globe Showing Americas:477","Globe Showing Asia-Australia:478","Globe With Meridians:479","New Moon:480","Waxing Crescent Moon:481","First Quarter Moon:482","Waxing Gibbous Moon:483","Full Moon:484","Waning Gibbous Moon:485","Last Quarter Moon:486","Waning Crescent Moon:487","Crescent Moon:488","New Moon Face:489","First Quarter Moon Face:490","Last Quarter Moon Face:491","Sun:492","Full Moon Face:493","Sun With Face:494","Star:495","Glowing Star:496","Shooting Star:497","Cloud:498","Sun Behind Cloud:499","Cloud With Lightning and Rain:500","Sun Behind Small Cloud:501","Sun Behind Large Cloud:502","Sun Behind Rain Cloud:503","Cloud With Rain:504","Cloud With Snow:505","Cloud With Lightning:506","Tornado:507","Fog:508","Wind Face:509","Rainbow:510","Umbrella:511","Umbrella With Rain Drops:512","High Voltage:513","Snowflake:514","Snowman:515","Snowman Without Snow:516","Comet:517","Fire:518","Droplet:519","Water Wave:520","Christmas Tree:521","Sparkles:522","Tanabata Tree:523","Pine Decoration:524",
    "Grapes:526","Melon:527","Watermelon:528","Tangerine:529","Lemon:530","Banana:531","Pineapple:532","Red Apple:533","Green Apple:534","Pear:535","Peach:536","Cherries:537","Strawberry:538","Kiwi Fruit:539","Tomato:540","Coconut:541","Avocado:542","Eggplant:543","Potato:544","Carrot:545","Ear of Corn:546","Hot Pepper:547","Cucumber:548","Broccoli:549","Mushroom:550","Peanuts:551","Chestnut:552","Bread:553","Croissant:554","Baguette Bread:555","Pretzel:556","Pancakes:557","Cheese Wedge:558","Meat on Bone:559","Poultry Leg:560","Cut of Meat:561","Bacon:562","Hamburger:563","French Fries:564","Pizza:565","Hot Dog:566","Sandwich:567","Taco:568","Burrito:569","Stuffed Flatbread:570","Cooking:571","Shallow Pan of Food:572","Pot of Food:573","Bowl With Spoon:574","Green Salad:575","Popcorn:576","Canned Food:577","Bento Box:578","Rice Cracker:579","Rice Ball:580","Cooked Rice:581","Curry Rice:582","Steaming Bowl:583","Spaghetti:584","Roasted Sweet Potato:585","Oden:586","Sushi:587","Fried Shrimp:588","Fish Cake With Swirl:589","Dango:590","Dumpling:591","Fortune Cookie:592","Takeout Box:593","Soft Ice Cream:594","Shaved Ice:595","Ice Cream:596","Doughnut:597","Cookie:598","Birthday Cake:599","Shortcake:600","Pie:601","Chocolate Bar:602","Candy:603","Lollipop:604","Custard:605","Honey Pot:606","Baby Bottle:607","Glass of Milk:608","Hot Beverage:609","Teacup Without Handle:610","Sake:611","Bottle With Popping Cork:612","Wine Glass:613","Cocktail Glass:614","Tropical Drink:615","Beer Mug:616","Clinking Beer Mugs:617","Clinking Glasses:618","Tumbler Glass:619","Cup With Straw:620","Chopsticks:621","Fork and Knife With Plate:622","Fork and Knife:623","Spoon:624",
    "Person Climbing:626","Woman Climbing:627","Man Climbing:628","Person in Lotus Position:629","Woman in Lotus Position:630","Man in Lotus Position:631","Man in Suit Levitating:632","Horse Racing:633","Skier:634","Snowboarder:635","Person Golfing:636","Man Golfing:637","Woman Golfing:638","Person Surfing:639","Man Surfing:640","Woman Surfing:641","Person Rowing Boat:642","Man Rowing Boat:643","Woman Rowing Boat:644","Person Swimming:645","Man Swimming:646","Woman Swimming:647","Person Bouncing Ball:648","Man Bouncing Ball:649","Woman Bouncing Ball:650","Person Lifting Weights:651","Man Lifting Weights:652","Woman Lifting Weights:653","Person Biking:654","Man Biking:655","Woman Biking:656","Person Mountain Biking:657","Man Mountain Biking:658","Woman Mountain Biking:659","Person Cartwheeling:660","Man Cartwheeling:661","Woman Cartwheeling:662","People Wrestling:663","Men Wrestling:664","Women Wrestling:665","Person Playing Water Polo:666","Man Playing Water Polo:667","Woman Playing Water Polo:668","Person Playing Handball:669","Man Playing Handball:670","Woman Playing Handball:671","Person Juggling:672","Man Juggling:673","Woman Juggling:674","Circus Tent:675","Reminder Ribbon:676","Admission Tickets:677","Ticket:678","Military Medal:679","Trophy:680","Sports Medal:681","1st Place Medal:682","2nd Place Medal:683","3rd Place Medal:684","Soccer Ball:685","Baseball:686","Basketball:687","Volleyball:688","American Football:689","Rugby Football:690","Tennis:691","Bowling:692","Cricket Game:693","Field Hockey:694","Ice Hockey:695","Ping Pong:696","Badminton:697","Boxing Glove:698","Martial Arts Uniform:699","Flag in Hole:700","Ice Skate:701","Fishing Pole:702","Running Shirt:703","Skis:704","Sled:705","Curling Stone:706","Direct Hit:707","Pool 8 Ball:708","Video Game:709","Slot Machine:710","Game Die:711","Chess Pawn:712","Performing Arts:713","Artist Palette:714","Musical Score:715","Microphone:716","Headphone:717","Saxophone:718","Guitar:719","Musical Keyboard:720","Trumpet:721","Violin:722","Drum:723","Clapper Board:724","Bow and Arrow:725",
    "Person Rowing Boat:727","Racing Car:728","Motorcycle:729","Map of Japan:730","Snow-Capped Mountain:731","Mountain:732","Volcano:733","Mount Fuji:734","Camping:735","Beach With Umbrella:736","Desert:737","Desert Island:738","National Park:739","Stadium:740","Classical Building:741","Building Construction:742","Houses:743","Derelict House:744","House:745","House With Garden:746","Office Building:747","Japanese Post Office:748","Post Office:749","Hospital:750","Bank:751","Hotel:752","Love Hotel:753","Convenience Store:754","School:755","Department Store:756","Factory:757","Japanese Castle:758","Castle:759","Wedding:760","Tokyo Tower:761","Statue of Liberty:762","Church:763","Mosque:764","Synagogue:765","Shinto Shrine:766","Kaaba:767","Fountain:768","Tent:769","Foggy:770","Night With Stars:771","Cityscape:772","Sunrise Over Mountains:773","Sunrise:774","Cityscape at Dusk:775","Sunset:776","Bridge at Night:777","Milky Way:778","Carousel Horse:779","Ferris Wheel:780","Roller Coaster:781","Locomotive:782","Railway Car:783","High-Speed Train:784","Bullet Train:785","Train:786","Metro:787","Light Rail:788","Station:789","Tram:790","Monorail:791","Mountain Railway:792","Tram Car:793","Bus:794","Oncoming Bus:795","Trolleybus:796","Minibus:797","Ambulance:798","Fire Engine:799","Police Car:800","Oncoming Police Car:801","Taxi:802","Oncoming Taxi:803","Automobile:804","Oncoming Automobile:805","Delivery Truck:806","Articulated Lorry:807","Tractor:808","Bicycle:809","Kick Scooter:810","Motor Scooter:811","Bus Stop:812","Railway Track:813","Fuel Pump:814","Police Car Light:815","Horizontal Traffic Light:816","Vertical Traffic Light:817","Construction:818","Anchor:819","Sailboat:820","Speedboat:821","Passenger Ship:822","Ferry:823","Motor Boat:824","Ship:825","Airplane:826","Small Airplane:827","Airplane Departure:828","Airplane Arrival:829","Seat:830","Helicopter:831","Suspension Railway:832","Mountain Cableway:833","Aerial Tramway:834","Satellite:835","Rocket:836","Flying Saucer:837","Shooting Star:838","Umbrella on Ground:839","Fireworks:840","Sparkler:841","Moon Viewing Ceremony:842","Yen Banknote:843","Dollar Banknote:844","Euro Banknote:845","Pound Banknote:846","Moai:847","Passport Control:848","Customs:849","Baggage Claim:850",
    "Skull and Crossbones:852","Person Taking Bath:853","Person in Bed:854","Love Letter:855","Bomb:856","Hole:857","Shopping Bags:858","Prayer Beads:859","Gem Stone:860","Kitchen Knife:861","Amphora:862","World Map:863","Barber Pole:864","Oil Drum:865","Bellhop Bell:866","Hourglass Done:867","Hourglass Not Done:868","Watch:869","Alarm Clock:870","Stopwatch:871","Timer Clock:872","Mantelpiece Clock:873","Thermometer:874","Umbrella on Ground:875","Balloon:876","Party Popper:877","Confetti Ball:878","Japanese Dolls:879","Carp Streamer:880","Wind Chime:881","Ribbon:882","Wrapped Gift:883","Crystal Ball:884","Joystick:885","Framed Picture:886","Postal Horn:887","Studio Microphone:888","Level Slider:889","Control Knobs:890","Radio:891","Mobile Phone:892","Mobile Phone With Arrow:893","Telephone:894","Telephone Receiver:895","Pager:896","Fax Machine:897","Battery:898","Electric Plug:899","Laptop Computer:900","Desktop Computer:901","Printer:902","Keyboard:903","Computer Mouse:904","Trackball:905","Computer Disk:906","Floppy Disk:907","Optical Disk:908","DVD:909","Movie Camera:910","Film Frames:911","Film Projector:912","Television:913","Camera:914","Camera With Flash:915","Video Camera:916","Videocassette:917","Magnifying Glass Tilted Left:918","Magnifying Glass Tilted Right:919","Candle:920","Light Bulb:921","Flashlight:922","Red Paper Lantern:923","Notebook With Decorative Cover:924","Closed Book:925","Open Book:926","Green Book:927","Blue Book:928","Orange Book:929","Books:930","Notebook:931","Page With Curl:932","Scroll:933","Page Facing Up:934","Newspaper:935","Rolled-Up Newspaper:936","Bookmark Tabs:937","Bookmark:938","Label:939","Money Bag:940","Yen Banknote:941","Dollar Banknote:942","Euro Banknote:943","Pound Banknote:944","Money With Wings:945","Credit Card:946","Envelope:947","E-Mail:948","Incoming Envelope:949","Envelope With Arrow:950","Outbox Tray:951","Inbox Tray:952","Package:953","Closed Mailbox With Raised Flag:954","Closed Mailbox With Lowered Flag:955","Open Mailbox With Raised Flag:956","Open Mailbox With Lowered Flag:957","Postbox:958","Ballot Box With Ballot:959","Pencil:960","Black Nib:961","Fountain Pen:962","Pen:963","Paintbrush:964","Crayon:965","Memo:966","File Folder:967","Open File Folder:968","Card Index Dividers:969","Calendar:970","Tear-Off Calendar:971","Spiral Notepad:972","Spiral Calendar:973","Card Index:974","Chart Increasing:975","Chart Decreasing:976","Bar Chart:977","Clipboard:978","Pushpin:979","Round Pushpin:980","Paperclip:981","Linked Paperclips:982","Straight Ruler:983","Triangular Ruler:984","Scissors:985","Card File Box:986","File Cabinet:987","Wastebasket:988","Locked:989","Unlocked:990","Locked With Pen:991","Locked With Key:992","Key:993","Old Key:994","Hammer:995","Pick:996","Hammer and Pick:997","Hammer and Wrench:998","Dagger:999","Crossed Swords:1000","Pistol:1001","Shield:1002","Wrench:1003","Nut and Bolt:1004","Gear:1005","Clamp:1006","Balance Scale:1007","Link:1008","Chains:1009","Alembic:1010","Microscope:1011","Telescope:1012","Satellite Antenna:1013","Syringe:1014","Pill:1015","Door:1016","Bed:1017","Couch and Lamp:1018","Toilet:1019","Shower:1020","Bathtub:1021","Cigarette:1022","Coffin:1023","Funeral Urn:1024","Moai:1025","Potable Water:1026",
    "Eye in Speech Bubble:1028","Heart With Arrow:1029","Red Heart:1030","Beating Heart:1031","Broken Heart:1032","Two Hearts:1033","Sparkling Heart:1034","Growing Heart:1035","Blue Heart:1036","Green Heart:1037","Yellow Heart:1038","Orange Heart:1039","Purple Heart:1040","Black Heart:1041","Heart With Ribbon:1042","Revolving Hearts:1043","Heart Decoration:1044","Heavy Heart Exclamation:1045","Zzz:1046","Anger Symbol:1047","Speech Balloon:1048","Right Anger Bubble:1049","Thought Balloon:1050","White Flower:1051","Hot Springs:1052","Barber Pole:1053","Stop Sign:1054","Twelve O’clock:1055","Twelve-Thirty:1056","One O’clock:1057","One-Thirty:1058","Two O’clock:1059","Two-Thirty:1060","Three O’clock:1061","Three-Thirty:1062","Four O’clock:1063","Four-Thirty:1064","Five O’clock:1065","Five-Thirty:1066","Six O’clock:1067","Six-Thirty:1068","Seven O’clock:1069","Seven-Thirty:1070","Eight O’clock:1071","Eight-Thirty:1072","Nine O’clock:1073","Nine-Thirty:1074","Ten O’clock:1075","Ten-Thirty:1076","Eleven O’clock:1077","Eleven-Thirty:1078","Cyclone:1079","Spade Suit:1080","Heart Suit:1081","Diamond Suit:1082","Club Suit:1083","Joker:1084","Mahjong Red Dragon:1085","Flower Playing Cards:1086","Muted Speaker:1087","Speaker Low Volume:1088","Speaker Medium Volume:1089","Speaker High Volume:1090","Loudspeaker:1091","Megaphone:1092","Postal Horn:1093","Bell:1094","Bell With Slash:1095","Musical Note:1096","Musical Notes:1097","Atm Sign:1098","Litter in Bin Sign:1099","Potable Water:1100","Wheelchair Symbol:1101","Men’s Room:1102","Women’s Room:1103","Restroom:1104","Baby Symbol:1105","Water Closet:1106","Warning:1107","Children Crossing:1108","No Entry:1109","Prohibited:1110","No Bicycles:1111","No Smoking:1112","No Littering:1113","Non-Potable Water:1114","No Pedestrians:1115","No One Under Eighteen:1116","Radioactive:1117","Biohazard:1118","Up Arrow:1119","Up-Right Arrow:1120","Right Arrow:1121","Down-Right Arrow:1122","Down Arrow:1123","Down-Left Arrow:1124","Left Arrow:1125","Up-Left Arrow:1126","Up-Down Arrow:1127","Left-Right Arrow:1128","Right Arrow Curving Left:1129","Left Arrow Curving Right:1130","Right Arrow Curving Up:1131","Right Arrow Curving Down:1132","Clockwise Vertical Arrows:1133","Counterclockwise Arrows Button:1134","Back Arrow:1135","End Arrow:1136","On! Arrow:1137","Soon Arrow:1138","Top Arrow:1139","Place of Worship:1140","Atom Symbol:1141","Infinity:1142","Om:1143","Star of David:1144","Wheel of Dharma:1145","Yin Yang:1146","Latin Cross:1147","Orthodox Cross:1148","Star and Crescent:1149","Peace Symbol:1150","Menorah:1151","Dotted Six-Pointed Star:1152","Aries:1153","Taurus:1154","Gemini:1155","Cancer:1156","Leo:1157","Virgo:1158","Libra:1159","Scorpio:1160","Sagittarius:1161","Capricorn:1162","Aquarius:1163","Pisces:1164","Ophiuchus:1165","Shuffle Tracks Button:1166","Repeat Button:1167","Repeat Single Button:1168","Play Button:1169","Fast-Forward Button:1170","Reverse Button:1171","Fast Reverse Button:1172","Upwards Button:1173","Fast Up Button:1174","Downwards Button:1175","Fast Down Button:1176","Stop Button:1177","Eject Button:1178","Cinema:1179","Dim Button:1180","Bright Button:1181","Antenna Bars:1182","Vibration Mode:1183","Mobile Phone Off:1184","Recycling Symbol:1185","Trident Emblem:1186","Name Badge:1187","Japanese Symbol for Beginner:1188","Heavy Large Circle:1189","White Heavy Check Mark:1190","Ballot Box With Check:1191","Heavy Check Mark:1192","Heavy Multiplication X:1193","Cross Mark:1194","Cross Mark Button:1195","Heavy Plus Sign:1196","Heavy Minus Sign:1197","Heavy Division Sign:1198","Curly Loop:1199","Double Curly Loop:1200","Part Alternation Mark:1201","Eight-Spoked Asterisk:1202","Eight-Pointed Star:1203","Sparkle:1204","Double Exclamation Mark:1205","Exclamation Question Mark:1206","Question Mark:1207","White Question Mark:1208","White Exclamation Mark:1209","Exclamation Mark:1210","Copyright:1211","Registered:1212","Trade Mark:1213","Keycap Number Sign:1214","Keycap Digit Zero:1215","Keycap Digit One:1216","Keycap Digit Two:1217","Keycap Digit Three:1218","Keycap Digit Four:1219","Keycap Digit Five:1220","Keycap Digit Six:1221","Keycap Digit Seven:1222","Keycap Digit Eight:1223","Keycap Digit Nine:1224","Keycap 10:1225","Hundred Points:1226","Input Latin Uppercase:1227","Input Latin Lowercase:1228","Input Numbers:1229","Input Symbols:1230","Input Latin Letters:1231","A Button (blood Type):1232","Ab Button (blood Type):1233","B Button (blood Type):1234","CL Button:1235","Cool Button:1236","Free Button:1237","Information:1238","ID Button:1239","Circled M:1240","New Button:1241","NG Button:1242","O Button (blood Type):1243","OK Button:1244","P Button:1245","SOS Button:1246","Up! Button:1247","Vs Button:1248","Japanese “here” Button:1249","Japanese “service Charge” Button:1250","Japanese “monthly Amount” Button:1251","Japanese “not Free of Charge” Button:1252","Japanese “reserved” Button:1253","Japanese “bargain” Button:1254","Japanese “discount” Button:1255","Japanese “free of Charge” Button:1256","Japanese “prohibited” Button:1257","Japanese “acceptable” Button:1258","Japanese “application” Button:1259","Japanese “passing Grade” Button:1260","Japanese “vacancy” Button:1261","Japanese “congratulations” Button:1262","Japanese “secret” Button:1263","Japanese “open for Business” Button:1264","Japanese “no Vacancy” Button:1265","Black Small Square:1266","White Small Square:1267","White Medium Square:1268","Black Medium Square:1269","White Medium-Small Square:1270","Black Medium-Small Square:1271","Black Large Square:1272","White Large Square:1273","Large Orange Diamond:1274","Large Blue Diamond:1275","Small Orange Diamond:1276","Small Blue Diamond:1277","Red Triangle Pointed Up:1278","Red Triangle Pointed Down:1279","Diamond With a Dot:1280","Black Square Button:1281","White Square Button:1282","White Circle:1283","Black Circle:1284","Red Circle:1285","Blue Circle:1286",
    "Chequered Flag:1288","Triangular Flag:1289","Crossed Flags:1290","Black Flag:1291","White Flag:1292","Rainbow Flag:1293","Pirate Flag:1294","Ascension Island:1295","Andorra:1296","United Arab Emirates:1297","Afghanistan:1298","Antigua & Barbuda:1299","Anguilla:1300","Albania:1301","Armenia:1302","Angola:1303","Antarctica:1304","Argentina:1305","American Samoa:1306","Austria:1307","Australia:1308","Aruba:1309","Åland Islands:1310","Azerbaijan:1311","Bosnia & Herzegovina:1312","Barbados:1313","Bangladesh:1314","Belgium:1315","Burkina Faso:1316","Bulgaria:1317","Bahrain:1318","Burundi:1319","Benin:1320","St. Barthélemy:1321","Bermuda:1322","Brunei:1323","Bolivia:1324","Caribbean Netherlands:1325","Brazil:1326","Bahamas:1327","Bhutan:1328","Bouvet Island:1329","Botswana:1330","Belarus:1331","Belize:1332","Canada:1333","Cocos (Keeling) Islands:1334","Congo - Kinshasa:1335","Central African Republic:1336","Congo - Brazzaville:1337","Switzerland:1338","Côte D’Ivoire:1339","Cook Islands:1340","Chile:1341","Cameroon:1342","China:1343","Colombia:1344","Clipperton Island:1345","Costa Rica:1346","Cuba:1347","Cape Verde:1348","Curaçao:1349","Christmas Island:1350","Cyprus:1351","Czechia:1352","Germany:1353","Diego Garcia:1354","Djibouti:1355","Denmark:1356","Dominica:1357","Dominican Republic:1358","Algeria:1359","Ceuta & Melilla:1360","Ecuador:1361","Estonia:1362","Egypt:1363","Western Sahara:1364","Eritrea:1365","Spain:1366","Ethiopia:1367","European Union:1368","Finland:1369","Fiji:1370","Falkland Islands:1371","Micronesia:1372","Faroe Islands:1373","France:1374","Gabon:1375","United Kingdom:1376","Grenada:1377","Georgia:1378","French Guiana:1379","Guernsey:1380","Ghana:1381","Gibraltar:1382","Greenland:1383","Gambia:1384","Guinea:1385","Guadeloupe:1386","Equatorial Guinea:1387","Greece:1388","South Georgia & South Sandwich Islands:1389","Guatemala:1390","Guam:1391","Guinea-Bissau:1392","Guyana:1393","Hong Kong SAR China:1394","Heard & McDonald Islands:1395","Honduras:1396","Croatia:1397","Haiti:1398","Hungary:1399","Canary Islands:1400","Indonesia:1401","Ireland:1402","Israel:1403","Isle of Man:1404","India:1405","British Indian Ocean Territory:1406","Iraq:1407","Iran:1408","Iceland:1409","Italy:1410","Jersey:1411","Jamaica:1412","Jordan:1413","Japan:1414","Kenya:1415","Kyrgyzstan:1416","Cambodia:1417","Kiribati:1418","Comoros:1419","St. Kitts & Nevis:1420","North Korea:1421","South Korea:1422","Kuwait:1423","Cayman Islands:1424","Kazakhstan:1425","Laos:1426","Lebanon:1427","St. Lucia:1428","Liechtenstein:1429","Sri Lanka:1430","Liberia:1431","Lesotho:1432","Lithuania:1433","Luxembourg:1434","Latvia:1435","Libya:1436","Morocco:1437","Monaco:1438","Moldova:1439","Montenegro:1440","St. Martin:1441","Madagascar:1442","Marshall Islands:1443","Macedonia:1444","Mali:1445","Myanmar (Burma):1446","Mongolia:1447","Macau SAR China:1448","Northern Mariana Islands:1449","Martinique:1450","Mauritania:1451","Montserrat:1452","Malta:1453","Mauritius:1454","Maldives:1455","Malawi:1456","Mexico:1457","Malaysia:1458","Mozambique:1459","Namibia:1460","New Caledonia:1461","Niger:1462","Norfolk Island:1463","Nigeria:1464","Nicaragua:1465","Netherlands:1466","Norway:1467","Nepal:1468","Nauru:1469","Niue:1470","New Zealand:1471","Oman:1472","Panama:1473","Peru:1474","French Polynesia:1475","Papua New Guinea:1476","Philippines:1477","Pakistan:1478","Poland:1479","St. Pierre & Miquelon:1480","Pitcairn Islands:1481","Puerto Rico:1482","Palestinian Territories:1483","Portugal:1484","Palau:1485","Paraguay:1486","Qatar:1487","Réunion:1488","Romania:1489","Serbia:1490","Russia:1491","Rwanda:1492","Saudi Arabia:1493","Solomon Islands:1494","Seychelles:1495","Sudan:1496","Sweden:1497","Singapore:1498","St. Helena:1499","Slovenia:1500","Svalbard & Jan Mayen:1501","Slovakia:1502","Sierra Leone:1503","San Marino:1504","Senegal:1505","Somalia:1506","Suriname:1507","South Sudan:1508","São Tomé & Príncipe:1509","El Salvador:1510","Sint Maarten:1511","Syria:1512","Swaziland:1513","Tristan Da Cunha:1514","Turks & Caicos Islands:1515","Chad:1516","French Southern Territories:1517","Togo:1518","Thailand:1519","Tajikistan:1520","Tokelau:1521","Timor-Leste:1522","Turkmenistan:1523","Tunisia:1524","Tonga:1525","Turkey:1526","Trinidad & Tobago:1527","Tuvalu:1528","Taiwan:1529","Tanzania:1530","Ukraine:1531","Uganda:1532","U.S. Outlying Islands:1533","United Nations:1534","United States:1535","Uruguay:1536","Uzbekistan:1537","Vatican City:1538","St. Vincent & Grenadines:1539","Venezuela:1540","British Virgin Islands:1541","U.S. Virgin Islands:1542","Vietnam:1543","Vanuatu:1544","Wallis & Futuna:1545","Samoa:1546","Kosovo:1547","Yemen:1548","Mayotte:1549","South Africa:1550","Zambia:1551","Zimbabwe:1552","England:1553","Scotland:1554","Wales:1555"];

var emojiSample = [3, 7, 12, 13, 14, 22, 23, 46, 62, 69, 293, 294, 304, 308, 518, 1030];

var emojiMap;
var theme = "light";

var waitForAnim = 0;
var panelOpen = false;
var width;

var foundArr;

var searchErr = false;

function search(value){
    len = searchArray.length;
      if(value == null){
          value = "";
          len = 300;
    }
    value = value.toLowerCase();
    var found = "";
    for(var i=0; i<len; i++){
        if(searchArray[i].toLowerCase().includes(value)){
            found = found + searchArray[i].split(':')[1]+",";
        }
    }
    foundArr = found.substring(0,found.length-1).split(",");
    if(found.length == 0){
        searchErr = true;
        document.getElementById("search-input").style.color = "rgba(202, 67, 49, 0.7)";
    }else if(theme == "light"){
        document.getElementById("search-input").style.color = "black";
        searchErr = false;
    }else{
        document.getElementById("search-input").style.color = "white";
        searchErr = false;
    }
    renderSearch();
}

function storage() {
    if (localStorage.emojis) {
        emojiMap = JSON.parse(localStorage.getItem("emojis"));
        if (emojiMap.length == 0) {
            localStorage.emojis = JSON.stringify(emojiSample);
            emojiMap = emojiSample;
            document.getElementsByClassName("grid")[0].style.transition = "";
            document.getElementsByClassName("grid")[0].style.opacity = 0;
            setTimeout(function () {
                document.getElementsByClassName("grid")[0].style.transition = "all .3s ease";
                document.getElementsByClassName("grid")[0].style.opacity = 1;
            }, 500);
        }
    } else {
        localStorage.emojis = JSON.stringify(emojiSample);
        emojiMap = emojiSample;
    }
    if (localStorage.emojiTheme) {
        if (localStorage.getItem("emojiTheme") == "dark") {
            toggleTheme(false);
        }else{
            toggleTheme(true);
        }
    }else{
        toggleTheme(true);
    }
    if (localStorage.emojiMode) {
        if (localStorage.getItem("emojiMode") == "grid") {
            toggleMode(true);
        } else {
            toggleMode(false);
        }
    }else{
        toggleMode(true);
    }
}

function renderSearch() {
    document.getElementsByClassName("search-results")[0].innerHTML = "";
    width = Math.ceil(Math.sqrt(foundArr.length));
    for (var i = 0; i < foundArr.length; i++) {
        var elem = document.createElement('div');
        elem.className = "em-block";
        elem.onclick = function () { copy(this) };
        elem.textContent = emojis[foundArr[i]];
        document.getElementsByClassName("search-results")[0].appendChild(elem);
    }
}

function renderPad(remove) {
    var extraClass = "";
    if (remove) {
        extraClass = "remove ";
    }
    document.getElementsByClassName("grid")[0].innerHTML = "";
    width = Math.ceil(Math.sqrt(emojiMap.length));
    for (var i = 0; i < emojiMap.length; i++) {
        var elem = document.createElement('div');
        elem.className = extraClass + "em-block";
        if (remove) {
            elem.onclick = function () { removeEmoji(this) };
        } else {
            elem.onclick = function () { copy(this) };
        }
        elem.textContent = emojis[emojiMap[i]];
        document.getElementsByClassName("grid")[0].appendChild(elem);
        if ((i + 1) % width == 0) {
            document.getElementsByClassName("grid")[0].appendChild(document.createElement('br'));
        }
    }
}

function renderPadSearch(){
    document.getElementsByClassName("grid")[0].innerHTML = "";
}

function addEmoji(elem) {
    if (emojiMap.includes(emojis.indexOf(elem.textContent))) {
        flashToast("already added " + elem.textContent);
    } else if (document.getElementsByClassName("grid")[0].clientHeight + 180 > document.getElementsByClassName("main")[0].clientHeight && emojiMap.length % width == 0) {
        flashToast("no space " + emojis[Math.floor(Math.random() *101) +1]);
    }
    if (!emojiMap.includes(emojis.indexOf(elem.textContent)) && !(document.getElementsByClassName("grid")[0].clientHeight + 180 > document.getElementsByClassName("main")[0].clientHeight && emojiMap.length % width == 0)) {
        emojiMap.push(emojis.indexOf(elem.textContent));
        localStorage.emojis = JSON.stringify(emojiMap);
        renderPad(true);
    }
}

function removeEmoji(elem) {
    if(emojiMap.length > 1){
        emojiMap.splice(emojiMap.indexOf(emojis.indexOf(elem.textContent)), 1);
        localStorage.emojis = JSON.stringify(emojiMap);
    }else{
        emojiMap = [];
        emojiMap = emojiSample.slice(0);
        localStorage.emojis = JSON.stringify(emojiMap);
        document.getElementsByClassName("grid")[0].style.transition = "";
        document.getElementsByClassName("grid")[0].style.opacity = 0;
        setTimeout(function () {
            document.getElementsByClassName("grid")[0].style.transition = "all .3s ease";
            document.getElementsByClassName("grid")[0].style.opacity = 1;
        }, 200);
    }
    renderPad(true);
}

function renderAddPad() {
    var currItem = "";
    for (var i = 0; i < emojis.length; i++) {
        currItem = emojis[i];
        if (currItem.startsWith("*")) {
            var elem = document.createElement('div');
            elem.className = "em-title";
            elem.textContent = currItem.substring(1);
            document.getElementsByClassName("large-grid")[0].appendChild(elem);
        } else {
            var elem = document.createElement('div');
            elem.className = "add em-block";
            elem.onclick = function () { addEmoji(this) };
            elem.textContent = currItem;
            document.getElementsByClassName("large-grid")[0].appendChild(elem);
        }
    }
}

function copy(elem) {
    var copyElem = document.createElement("input");
    document.body.appendChild(copyElem);
    copyElem.setAttribute("id", "copyElem");
    document.getElementById("copyElem").value = elem.textContent;
    copyElem.select();
    document.execCommand("copy");
    document.body.removeChild(copyElem);
    flashToast("Copied " + elem.textContent);
}

function flashToast(message) {
    var toast = document.getElementsByClassName("bottom-toast")[0];
    toast.style.opacity = 1;
    toast.innerHTML = message;
    waitForAnim += 1;
    setTimeout(function () {
        waitForAnim -= 1;
        if (waitForAnim == 0) {
            toast.style.opacity = 0;
        }
    }, 1500);
}

function toggleTheme(day) {
    if (localStorage.emojiTheme === null) {
        localStorage.setItem("emojiTheme", "light")
    }
    if (day) {
        theme = "light";
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        document.getElementById("sun").style.display = 'none';
        document.getElementById("moon").style.display = 'block';
        if(!searchErr){
            document.getElementById("search-input").style.color = 'black';
        }
        localStorage.setItem("emojiTheme", "light")
    } else {
        theme = "dark";
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        document.getElementById("sun").style.display = 'block';
        document.getElementById("moon").style.display = 'none';
        if(!searchErr){
            document.getElementById("search-input").style.color = 'white';
        }
        localStorage.setItem("emojiTheme", "dark")
    }
    if (localStorage.emojiMode) {
        if (localStorage.getItem("emojiMode") == "search") {
            document.getElementById("search-input").focus();
        }
    }
}

function toggleMode(grid) {
    if (localStorage.emojiMode === null) {
        localStorage.setItem("emojiMode", "grid")
    }
    if (grid) {
        document.getElementsByClassName("remove-header")[0].style.display = 'block';
        document.getElementsByClassName("search-box")[0].style.display = 'none';
        document.getElementsByClassName("grid")[0].style.transition = "";
        document.getElementsByClassName("grid")[0].style.opacity = 0;
        document.getElementById("grid").style.display = 'none';
        document.getElementById("search").style.display = 'block';
        document.getElementsByClassName("grid")[0].style.display = 'block';
        document.getElementsByClassName("panel")[0].style.display = 'block';
        document.getElementsByClassName("search-display")[0].style.flexGrow = '0';
        document.getElementsByClassName("search-results")[0].style.opacity = 0;
        setTimeout(function () {
            document.getElementsByClassName("grid")[0].style.transition = "all .3s ease";
            renderPad(false);
            document.getElementsByClassName("grid")[0].style.opacity = 1;
            document.getElementsByClassName("panel")[0].style.opacity = 1;
            document.getElementsByClassName("search-results")[0].style.display = 'none';
        }, 1);
        localStorage.setItem("emojiMode", "grid")
    } else {
        if (panelOpen) {
            togglePanel();
        }
        document.getElementById("grid").style.display = 'block';
        document.getElementById("search").style.display = 'none';
        document.getElementsByClassName("panel")[0].style.opacity = 0;
        document.getElementsByClassName("grid")[0].style.opacity = 0;
        document.getElementsByClassName("search-results")[0].style.opacity = 1;
        setTimeout(function () {
            renderPadSearch();
            padHidden = true;
            document.getElementsByClassName("grid")[0].style.opacity = 1;
            document.getElementsByClassName("panel")[0].style.display = 'none';
            document.getElementsByClassName("search-display")[0].style.flexGrow = '3';
            document.getElementsByClassName("remove-header")[0].style.display = 'none';
            document.getElementsByClassName("search-box")[0].style.display = 'block';
            document.getElementsByClassName("search-results")[0].style.display = 'block';
            document.getElementById("search-input").focus();
        }, 300);
        localStorage.setItem("emojiMode", "search")
        search();
    }
}

function togglePanel() {
    if (panelOpen) {
        document.getElementsByClassName("main")[0].style.width = "100vw";
        document.getElementsByClassName("panel")[0].style.width = "3vw";
        document.getElementsByClassName("panel")[0].style.backgroundColor = "rgba(192, 192, 192, 0)";
        document.getElementById("toggle-panel").innerHTML = '<i class="fas fa-chevron-right"></i>';
        document.getElementsByClassName("remove-header")[0].style.opacity = 0;
        document.getElementsByClassName("panel-content")[0].style.opacity = 0;
        document.getElementsByClassName("large-grid")[0].style.width = "0vw";
        renderPad(false);
        panelOpen = !panelOpen;

    } else {
        document.getElementsByClassName("main")[0].style.width = "50vw";
        document.getElementsByClassName("panel")[0].style.width = "50vw";
        document.getElementsByClassName("panel")[0].style.backgroundColor = "rgba(192, 192, 192, 0.2)";
        document.getElementById("toggle-panel").innerHTML = '<i class="fas fa-chevron-left"></i>';
        document.getElementsByClassName("remove-header")[0].style.opacity = 1;
        document.getElementsByClassName("panel-content")[0].style.opacity = 1;
        document.getElementsByClassName("large-grid")[0].style.width = "44vw";
        renderPad(true);
        panelOpen = !panelOpen;
    }
}

var keyStore = "";
var keyStoreEnable = false;

window.onload = function () {
    storage();
    renderAddPad();
    setTimeout(function(){
        window.addEventListener('keydown', function(){
            if (localStorage.emojiMode) {
                if (localStorage.getItem("emojiMode") == "grid" && event.keyCode >= 48 && event.keyCode <= 90 && !event.ctrlKey) {
                    console.log("test");
                    toggleMode(false);
                    keyStoreEnable = true;
                    setTimeout(function(){
                        keyStoreEnable = false;
                        document.getElementById("search-input").value = keyStore;
                        search(keyStore);
                        keyStore = "";
                    }, 300)
                }
            }
            if(keyStoreEnable && event.keyCode >= 48 && event.keyCode <= 90){
                keyStore += event.key;
            }
        });
    }, 300);
}
