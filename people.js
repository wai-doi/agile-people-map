const PEOPLE = [
  {
    id: 'beck', name: 'Kent Beck', nameJa: 'ケント・ベック',
    books: ['テスト駆動開発', 'エクストリームプログラミング', '実装パターン'],
    achievements: ['XPを創始した', 'テスト駆動開発(TDD)を提唱した', 'Erich GammaとJUnitを作った'],
    wiki: 'https://en.wikipedia.org/wiki/Kent_Beck',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kent_Beck_no_Workshop_Mapping_XP.jpg/500px-Kent_Beck_no_Workshop_Mapping_XP.jpg',
    photoFocus: '25%',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Kent_Beck_no_Workshop_Mapping_XP.jpg',
    by: 'Improve It', lic: 'CC BY-SA 2.0',
  },
  {
    id: 'fowler', name: 'Martin Fowler', nameJa: 'マーティン・ファウラー',
    books: ['リファクタリング', 'エンタープライズアプリケーションアーキテクチャパターン', 'UMLモデリングのエッセンス'],
    achievements: ['リファクタリングを体系化して広めた', 'アジャイルソフトウェア開発宣言の起草者の一人', 'bliki（ブログ＋Wiki）で発信を続けている'],
    wiki: 'https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Webysther_20150414193208_-_Martin_Fowler.jpg/500px-Webysther_20150414193208_-_Martin_Fowler.jpg',
    photoFocus: '10%',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Webysther_20150414193208_-_Martin_Fowler.jpg',
    by: 'Webysther Nunes', lic: 'CC BY-SA 4.0',
  },
  {
    id: 'cunningham', name: 'Ward Cunningham', nameJa: 'ウォード・カニンガム',
    books: ['Wiki Way'],
    achievements: ['世界初のWikiを開発した', '「技術的負債」という比喩を生んだ', 'デザインパターンとXPの発展に関わった'],
    wiki: 'https://en.wikipedia.org/wiki/Ward_Cunningham',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ward_Cunningham_-_Commons-1_%28cropped%29.jpg/500px-Ward_Cunningham_-_Commons-1_%28cropped%29.jpg',
    photoFocus: '10%',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Ward_Cunningham_-_Commons-1_(cropped).jpg',
    by: 'Carrigg Photography for the Wikimedia Foundation', lic: 'CC BY-SA 3.0',
  },
  {
    id: 'unclebob', name: 'Robert C. Martin', nameJa: 'ロバート・C・マーチン',
    books: ['Clean Code', 'Clean Architecture', 'アジャイルソフトウェア開発の奥義'],
    achievements: ['SOLID原則をまとめた', 'Object Mentorを創業した', '通称 Uncle Bob'],
    wiki: 'https://en.wikipedia.org/wiki/Robert_C._Martin',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Robert_C._Martin_surrounded_by_computers_%28cropped%29.jpg/500px-Robert_C._Martin_surrounded_by_computers_%28cropped%29.jpg',
    photoFocus: '25%',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Robert_C._Martin_surrounded_by_computers_(cropped).jpg',
    by: 'Angelacleancoder', lic: 'CC BY-SA 4.0',
  },
  {
    id: 'sutherland', name: 'Jeff Sutherland', nameJa: 'ジェフ・サザーランド',
    books: ['スクラム 仕事が4倍速くなる“世界標準”のチーム戦術'],
    achievements: ['Ken Schwaberとスクラムを作った', '1995年のOOPSLAでスクラムを発表した', '野中郁次郎・竹内弘高の論文に着想を得た'],
    wiki: 'https://en.wikipedia.org/wiki/Jeff_Sutherland',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jeff_Sutherland.JPG/500px-Jeff_Sutherland.JPG',
    photoFocus: '10%',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Jeff_Sutherland.JPG',
    by: 'Anders Wegge Keller', lic: 'CC BY-SA 3.0',
  },
  {
    id: 'schwaber', name: 'Ken Schwaber', nameJa: 'ケン・シュウェイバー',
    books: ['アジャイルソフトウェア開発スクラム', 'スクラム入門'],
    achievements: ['Jeff Sutherlandとスクラムを作った', 'Agile Allianceを創設した', 'Scrum.orgを立ち上げ、スクラムガイドを共同で管理している'],
    wiki: 'https://en.wikipedia.org/wiki/Ken_Schwaber',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Ken_Schwaber.jpg',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Ken_Schwaber.jpg',
    by: 'Ratha Grimes / Sebastian Wallroth', lic: 'CC BY 2.0',
  },
  {
    id: 'cockburn', name: 'Alistair Cockburn', nameJa: 'アリスター・コーバーン',
    books: ['ユースケース実践ガイド', 'アジャイルソフトウェア開発'],
    achievements: ['Crystalファミリーを提唱した', 'ユースケースの書き方を体系化した', 'アジャイル運動の発起人の一人'],
    wiki: 'https://en.wikipedia.org/wiki/Alistair_Cockburn',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Alistair_Cockburn_%282007%29.jpg/500px-Alistair_Cockburn_%282007%29.jpg',
    photoFocus: '25%',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Alistair_Cockburn_(2007).jpg',
    by: 'Dennis Hamilton', lic: 'CC BY 2.0',
  },
  {
    id: 'jeffries', name: 'Ron Jeffries', nameJa: 'ロン・ジェフリーズ',
    books: ['XPエクストリーム・プログラミング導入編'],
    achievements: ['Beck・CunninghamとXPを立ち上げた', 'C3プロジェクトのXPコーチを務めた'],
    wiki: 'https://en.wikipedia.org/wiki/Ron_Jeffries',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ron_Jeffries.jpg',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Ron_Jeffries.jpg',
    by: 'Michael Hüttermann', lic: 'CC BY-SA 3.0',
  },
  {
    id: 'thomas', name: 'Dave Thomas', nameJa: 'デビッド・トーマス',
    books: ['達人プログラマー', 'プログラミングRuby'],
    achievements: ['DRY原則と「コードカタ」を名付けた', 'Pragmatic Bookshelfを立ち上げた', 'Rubyの解説書を書いて英語圏に紹介した'],
    wiki: 'https://en.wikipedia.org/wiki/Dave_Thomas_(programmer)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Dave_Thomas_speaking_at_the_Pasadena_Rails_Studio.jpg/500px-Dave_Thomas_speaking_at_the_Pasadena_Rails_Studio.jpg',
    photoPage: 'https://commons.wikimedia.org/wiki/File:Dave_Thomas_speaking_at_the_Pasadena_Rails_Studio.jpg',
    by: 'James Davidson', lic: 'CC BY 2.0',
  },
  {
    id: 'cohn', name: 'Mike Cohn', nameJa: 'マイク・コーン',
    books: ['アジャイルな見積りと計画づくり', 'User Stories Applied'],
    achievements: ['Scrum Allianceを共同設立した', 'Mountain Goat Softwareを創業した', '「テスト自動化ピラミッド」を提唱した'],
    wiki: 'https://en.wikipedia.org/wiki/Mike_Cohn',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/WEB_RES-Mike_Cohn-%C2%A9-2016-Hows_Your_Headshot-6.jpg/500px-WEB_RES-Mike_Cohn-%C2%A9-2016-Hows_Your_Headshot-6.jpg',
    photoPage: 'https://commons.wikimedia.org/wiki/File:WEB_RES-Mike_Cohn-%C2%A9-2016-Hows_Your_Headshot-6.jpg',
    by: 'Merrick Chase', lic: 'CC BY-SA 4.0',
  },
];

function el(tag, cls = '', text = '') {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
}

function photoImg(p) {
  const img = new Image();
  img.src = p.photo;
  img.alt = '';
  // 写真ごとに顔の位置が違う。中央で切ると頭が欠けるものは photoFocus で上寄せする
  if (p.photoFocus) img.style.objectPosition = `center ${p.photoFocus}`;
  return img;
}

function renderCredits(ul) {
  for (const p of PEOPLE) {
    const file = el('a', '', p.name);
    file.href = p.photoPage;
    const lic = el('a', '', p.lic);
    lic.href = 'https://creativecommons.org/licenses/' +
      (p.lic.includes('SA') ? 'by-sa/' : 'by/') + p.lic.match(/[\d.]+$/)[0];
    const li = el('li');
    li.append(file, document.createTextNode(` © ${p.by} / `), lic);
    ul.append(li);
  }
}
