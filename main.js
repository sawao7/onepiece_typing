var wordlist = [
    "kaizokuouniorehanaru",
    "aisitekurete,arigatou",
    "nagaiaida,kusoosewaninarimasita",
    "itukamataaetara,mouitidonakamatoyonndekuremasuka",
    "omaegaoreni,kateruwakeneedarouga",
    "hitohaitusinutoomou,,hitoniwasureraretatokisa",
    "hosikeryakureteyaruze,konoyonosubetewosokonioitekita",
    "oikokku,10byouteekase",
    "syousyadakegaseigida",
    "igitai",
    "oretatinoinotikuraiissyonikaketemiro,nakamadarouga",
    "hitonoyumeha,owaranee",
    "otokogaitido,kanarazukaerutoittanodakara",
    "orelasirohigedala",
];
var wordlistJapanese = [
    "海賊王におれはなる",
    "愛してくれて、ありがとう",
    "長い間、くそお世話になりました",
    "いつかまた会えたら、もう一度仲間と呼んでくれますか",
    "お前がおれに、勝てるわけねェだろうが",
    "人はいつ死ぬと思う、、人に忘れられた時さ",
    "欲しけりゃくれてやるぜ、この世の全てをそこに置いてきた",
    "おいコック、10秒手ぇかせ",
    "勝者だけが正義だ",
    "生ぎたい",
    "おれ達の命くらい一緒に賭けてみろ、仲間だろうが",
    "人の夢は、終わらねェ",
    "男が一度、必ず帰ると言ったのだから",
    "おれァ白ひげだァ",
];
var imagelist = [
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/719/original.jpg?1525253489",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/720/original.jpg?1525253516",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/722/original.jpg?1525253540",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/723/original.jpg?1525253562",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/754/original.jpg?1525254286",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/740/original.jpg?1525253984",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/739/original.jpg?1525253951",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/737/original.png?1525253885",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/753/original.jpg?1525254262",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/751/original.jpg?1525254240",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/750/original.jpg?1525254218",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/749/original.jpg?1525254198",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/748/original.jpg?1525254168",
    "https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/012/746/original.jpg?1525254138",
];
var time_limit = 50;
var readytime = 3;
var score;
var correct;
var mistake;
var char_num = 0;
var word_char;
var random;
function ready() {
    readytime = 3;
    scoredis.innerHTML = "";
    start_button.style.visibility = "hidden";
    var readytimer = setInterval(function () {
        count.innerHTML = readytime;
        readytime--;
        if (readytime < 0) {
            clearInterval(readytimer);
            gameStart();
        }
    }, 1000);
}
function gameStart() {
    score = 0.0;
    mistake = 0;
    correct = 0;
    wordDisplay();
    var time_remaining = time_limit;
    var gametimer = setInterval(function () {
        count.innerHTML = "残り時間：" + time_remaining;
        time_remaining--;
        if (time_remaining <= 0) {
            clearInterval(gametimer);
            finish();
        }
    }, 1000);
}
function wordDisplay() {
    random = Math.floor(Math.random() * wordlist.length);
    console.log(imagelist[random]);
    // var img = document.getElementById("myimage");
    myimage.setAttribute("src", imagelist[random]);
    word.innerHTML = wordlist[random];
    japanese.innerHTML = wordlistJapanese[random];
    charInsort();
    // wordlist.splice(random, 1);
    // wordlistJapanese.splice(random, 1);
}
function charInsort() {
    word_char = wordlist[random].charAt(char_num);
}
function finish() {
    score = correct - mistake * 3;
    let lank = "C";
    if (score >= 200) {
        lank = "A";
    } else if (score >= 100) {
        lank = "B";
    }
    scoredis.innerHTML =
        "<h1>" +
        "あなたのランクは..." +
        "<span style='font-size:40px;'>" +
        lank +
        "</span>" +
        " です" +
        "</h1>" +
        "スコア : " +
        "<span style='font-size:40px;'>" +
        score +
        "</span>" +
        " 点" +
        "<hr>正タイプ数:" +
        correct +
        "<br>ミスタイプ数:" +
        mistake +
        "<br>正答率" +
        ((correct / (correct + mistake)) * 100).toFixed(1) +
        "%";
    count.innerHTML = "";
    word.innerHTML = "";
    japanese.innerHTML = "";
    myimage.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfM6jUrwbFgixgky_ckXEvQwG7JmKekcr9A&usqp=CAU"
    );
    start_button.style.display = "none";
    word_char = 0;
    random = 0;
    char_num = 0;
}
document.onkeydown = function (e) {
    if (e.keyCode == 189) {
        keyStr = "-";
    } else if (e.keyCode == 188) {
        keyStr = ",";
    } else {
        var keyStr = String.fromCharCode(e.keyCode);
        keyStr = keyStr.toLowerCase();
    }
    if (keyStr == word_char) {
        // document.getElementById("missaudio").pause();
        // document.getElementById("missaudio").currentTime = 0;
        // document.getElementById("correctaudio").pause();
        // document.getElementById("correctaudio").currentTime = 0;
        // document.getElementById("correctaudio").play();
        word.innerHTML =
            "<span style='color: rgb(148, 223, 241);'>" +
            wordlist[random].substr(0, char_num + 1) +
            "</span>" +
            wordlist[random].substr(char_num + 1, wordlist[random].length);
        char_num++;
        correct++;
        charInsort();
    } else {
        // document.getElementById("missaudio").pause();
        // document.getElementById("missaudio").currentTime = 0;
        // document.getElementById("correctaudio").pause();
        // document.getElementById("correctaudio").currentTime = 0;
        mistake++;
        // document.getElementById("missaudio").play();
    }
    if (char_num == wordlist[random].length) {
        char_num = 0;
        wordlist.splice(random, 1);
        wordlistJapanese.splice(random, 1);
        imagelist.splice(random, 1);
        console.log(wordlistJapanese);
        wordDisplay();
    }
};
