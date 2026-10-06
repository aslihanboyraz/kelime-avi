const PROMOTE_AFTER = 4;

const LEVELS = [
  {
    name: "Temel",
    words: [
      { word: "sunucu", clue: "İstekleri yanıtlayan makine" },
      { word: "bellek", clue: "Verinin durduğu donanım alanı" },
      { word: "döngü", clue: "Kendini tekrar eden kod bloğu" },
      { word: "sınıf", clue: "Nesne üreten kalıp" },
      { word: "nesne", clue: "Sınıftan oluşan varlık" },
      { word: "dosya", clue: "Diskteki kayıt birimi" },
      { word: "python", clue: "Genel amaçlı programlama dili" },
      { word: "kotlin", clue: "Mobil geliştirmede sık dil" },
      { word: "react", clue: "Bileşen temelli arayüz kütüphanesi" },
      { word: "docker", clue: "Uygulamayı konteynerde çalıştıran araç" },
      { word: "cache", clue: "Sık veriyi tutan hızlı bellek" },
      { word: "token", clue: "Erişim ya da parçalama anahtarı" },
      { word: "socket", clue: "Ağda uçtan uca bağlantı" },
      { word: "thread", clue: "Süreç içindeki iş parçacığı" },
      { word: "linux", clue: "Açık çekirdekli işletim sistemi" },
      { word: "sorgu", clue: "Veritabanına yöneltilen istek" },
      { word: "tablo", clue: "Satır ve sütunlardan kurulu yapı" },
      { word: "indeks", clue: "Aramayı hızlandıran yan yapı" },
      { word: "mobil", clue: "Telefon ve tablete yazılan yazılım" },
      { word: "siber", clue: "Dijital saldırı ve savunma alanı" },
      { word: "parola", clue: "Kimliği doğrulayan gizli söz" },
      { word: "oturum", clue: "Açık kalan giriş süresi" },
      { word: "paket", clue: "Ağda taşınan veri parçası" },
      { word: "model", clue: "Veriden öğrenen temsil" },
      { word: "vektör", clue: "Sayıların sıralı dizisi" },
      { word: "çerez", clue: "Tarayıcının sakladığı küçük kayıt" },
      { word: "redis", clue: "Bellek içi hızlı veri deposu" },
      { word: "sqlite", clue: "Gömülü hafif veritabanı" },
      { word: "devops", clue: "Geliştirme ile işletimin ortak hattı" },
      { word: "sprint", clue: "Kısa ve planlı geliştirme dilimi" },
    ],
  },
  {
    name: "Sistem",
    words: [
      { word: "algoritma", clue: "Adım adım çözüm tarifi" },
      { word: "fonksiyon", clue: "Belirli işi yapan kod bloğu" },
      { word: "değişken", clue: "Değeri değişebilen isim" },
      { word: "parametre", clue: "Fonksiyona dışarıdan gelen değer" },
      { word: "derleyici", clue: "Kaynak kodu makine diline çevirir" },
      { word: "istemci", clue: "Hizmet isteyen program" },
      { word: "frontend", clue: "Kullanıcının gördüğü yazılım katmanı" },
      { word: "backend", clue: "Sunucuda çalışan yazılım katmanı" },
      { word: "protokol", clue: "İletişimde uyulan kural" },
      { word: "endpoint", clue: "API'nin tek bir adresi" },
      { word: "payload", clue: "İstekle taşınan asıl veri" },
      { word: "pipeline", clue: "Derlemeden dağıtıma akan hat" },
      { word: "konteyner", clue: "Uygulamayı izole paketleyen ortam" },
      { word: "şifreleme", clue: "Veriyi okunmaz hale getirme" },
      { word: "güvenlik", clue: "Sistemi tehdide karşı koruma" },
      { word: "zafiyet", clue: "İstismar edilebilen açıklık" },
      { word: "oltalama", clue: "Sahte mesajla bilgi çalma" },
      { word: "zararlı", clue: "Sisteme zarar veren yazılım" },
      { word: "sertifika", clue: "Kimliği doğrulayan dijital belge" },
      { word: "simetrik", clue: "Aynı anahtarla şifreleyen yöntem" },
      { word: "asimetrik", clue: "Açık ve gizli anahtar çifti" },
      { word: "gecikme", clue: "İsteğin yanıt bekleme süresi" },
      { word: "kuyruk", clue: "İlk girenin ilk çıktığı yapı" },
      { word: "kalıtım", clue: "Sınıfın başka sınıftan özellik alması" },
      { word: "soyutlama", clue: "Gereksiz ayrıntıyı gizleme" },
      { word: "derleme", clue: "Kaynak kodun çalışır hale gelmesi" },
      { word: "dağıtım", clue: "Yazılımın ortama alınması" },
      { word: "çakışma", clue: "Aynı satırın iki dalda değişmesi" },
      { word: "monolit", clue: "Tek parça çalışan uygulama" },
      { word: "bileşen", clue: "Arayüzün yeniden kullanılan parçası" },
      { word: "evrişim", clue: "Örüntüyü tarayan katman işlemi" },
      { word: "gradyan", clue: "Kayıbın azaldığı yön" },
      { word: "regresyon", clue: "Sayısal değer tahmin eden model" },
      { word: "kümeleme", clue: "Etiketsiz veriyi gruplama" },
      { word: "migrasyon", clue: "Şema ya da veriyi taşıma" },
      { word: "bütünlük", clue: "Verinin bozulmadan kalması" },
      { word: "graphql", clue: "Esnek sorgu sunan API dili" },
      { word: "websocket", clue: "Çift yönlü sürekli bağlantı" },
      { word: "postgres", clue: "İlişkisel açık veritabanı" },
      { word: "mongodb", clue: "Belge tabanlı veritabanı" },
      { word: "pentest", clue: "Açık aramak için yapılan güvenlik sınaması" },
      { word: "terraform", clue: "Altyapıyı kodla kuran araç" },
    ],
  },
  {
    name: "Uzman",
    words: [
      { word: "veritabanı", clue: "Kalıcı ve düzenli veri deposu" },
      { word: "mikroservis", clue: "Küçük ve bağımsız hizmet parçası" },
      { word: "kubernetes", clue: "Konteynerleri yöneten platform" },
      { word: "middleware", clue: "İstek ile yanıt arasındaki katman" },
      { word: "repository", clue: "Veri erişimini toplayan katman" },
      { word: "controller", clue: "İsteği karşılayan denetleyici" },
      { word: "normalizasyon", clue: "Tablo tekrarını azaltan tasarım" },
      { word: "sınıflandırma", clue: "Veriyi kategorilere ayırma" },
      { word: "overfitting", clue: "Modelin ezberleyip genelleyememesi" },
      { word: "aktivasyon", clue: "Nöron çıktısını belirleyen fonksiyon" },
      { word: "özyineleme", clue: "Fonksiyonun kendini çağırması" },
      { word: "karmaşıklık", clue: "Algoritmanın büyüme ölçüsü" },
      { word: "kapsülleme", clue: "Veriyi dışarıya kapalı tutma" },
      { word: "sanallaştırma", clue: "Fiziksel kaynağı yazılımla bölme" },
      { word: "hipervizör", clue: "Sanal makineleri çalıştıran katman" },
      { word: "yorumlayıcı", clue: "Kodu satır satır yürüten program" },
      { word: "kilitlenme", clue: "İşlerin birbirini sonsuza dek beklemesi" },
      { word: "indeksleme", clue: "Sorguyu hızlandırmak için yapı kurma" },
      { word: "atomiklik", clue: "İşlemin ya tam olması ya hiç olmaması" },
      { word: "dayanıklılık", clue: "Çöküşten sonra verinin kalması" },
      { word: "izolasyon", clue: "Eşzamanlı işlemlerin birbirini bozmaması" },
      { word: "gözetimli", clue: "Etiketli veriyle öğrenme" },
      { word: "gözetimsiz", clue: "Etiketsiz veriyle örüntü bulma" },
      { word: "öznitelik", clue: "Örneği anlatan ölçülebilir özellik" },
      { word: "hiperparametre", clue: "Eğitimden önce seçilen ayar" },
      { word: "vektörleştirme", clue: "Metni sayı dizisine çevirme" },
      { word: "transformer", clue: "Dikkat mekanizmalı derin model" },
      { word: "embedding", clue: "Anlamı yoğun vektöre gömme" },
      { word: "dengeleyici", clue: "Trafiği birden çok sunucuya paylaştıran" },
      { word: "günlükleme", clue: "Olayları kayıt altına alma" },
      { word: "doğrulama", clue: "Kim olduğunun kanıtlanması" },
      { word: "yetkilendirme", clue: "Ne yapılabileceğinin belirlenmesi" },
      { word: "asenkron", clue: "Yanıtı beklemeden süren işlem" },
      { word: "blokzincir", clue: "Dağıtık ve değiştirilmesi zor kayıt" },
    ],
  },
];

const STORAGE_KEY = "kelime-avi-best";

const slotsEl = document.getElementById("slots");
const tilesEl = document.getElementById("tiles");
const clueEl = document.getElementById("clue");
const statusEl = document.getElementById("status");
const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const bestEl = document.getElementById("best");
const levelEl = document.getElementById("level");
const levelNoteEl = document.getElementById("level-note");
const progressEl = document.getElementById("progress-bar");
const hintBtn = document.getElementById("hint");
const fxEl = document.getElementById("fx");

const state = {
  level: 0,
  cleared: 0,
  order: [],
  cursor: 0,
  word: "",
  clue: "",
  tiles: [],
  slots: [],
  locked: [],
  hintUsed: false,
  busy: false,
  score: 0,
  streak: 0,
  best: 0,
};

let audioCtx = null;

function loadBest() {
  const value = Number(localStorage.getItem(STORAGE_KEY));
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function saveBest() {
  localStorage.setItem(STORAGE_KEY, String(state.best));
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function showLetter(char) {
  return char.toLocaleUpperCase("tr-TR");
}

function ensureAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioCtx) audioCtx = new AudioContextClass();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playTone(kind) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const notes = kind === "win" ? [523, 659, 784] : [196, 164];
  const now = ctx.currentTime;
  notes.forEach((frequency, index) => {
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + index * 0.1;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.1, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.26);
  });
}

function burst() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#3ee0c5", "#8b7cff", "#ff5d8f", "#e8fff8"];
  const rect = slotsEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  for (let i = 0; i < 22; i += 1) {
    const spark = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 120;
    spark.className = "spark";
    spark.textContent = i % 2 === 0 ? "1" : "0";
    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;
    spark.style.color = colors[i % colors.length];
    spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--dy", `${Math.sin(angle) * distance - 30}px`);
    fxEl.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }
}

function currentLevel() {
  return LEVELS[state.level];
}

function updateHud() {
  const last = state.level >= LEVELS.length - 1;
  scoreEl.textContent = String(state.score);
  streakEl.textContent = String(state.streak);
  bestEl.textContent = String(state.best);
  levelEl.textContent = currentLevel().name;
  levelNoteEl.textContent = last
    ? `${currentLevel().name} · son seviye`
    : `${currentLevel().name} · ${state.cleared}/${PROMOTE_AFTER}`;
  progressEl.style.width = last ? "100%" : `${(state.cleared / PROMOTE_AFTER) * 100}%`;
  document.documentElement.dataset.level = String(state.level);
  hintBtn.disabled = state.hintUsed || state.busy;
}

function renderBoard() {
  slotsEl.innerHTML = "";
  state.slots.forEach((tileId, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "slot";
    if (state.locked[index]) button.classList.add("is-locked");
    if (tileId !== null) {
      const tile = state.tiles.find((item) => item.id === tileId);
      button.textContent = showLetter(tile.char);
    }
    button.addEventListener("click", () => clearSlot(index));
    slotsEl.appendChild(button);
  });

  tilesEl.innerHTML = "";
  state.tiles.forEach((tile) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = tile.used ? "tile is-used" : "tile";
    button.textContent = showLetter(tile.char);
    button.disabled = tile.used || state.busy;
    button.addEventListener("click", () => placeTile(tile.id));
    tilesEl.appendChild(button);
  });
}

function startRound() {
  const pack = currentLevel().words;
  if (state.cursor >= state.order.length) {
    state.order = shuffle(pack.map((_, index) => index));
    state.cursor = 0;
  }
  const entry = pack[state.order[state.cursor]];
  state.cursor += 1;
  state.word = entry.word.toLocaleLowerCase("tr-TR");
  state.clue = entry.clue;
  state.hintUsed = false;
  state.busy = false;
  const mixed = shuffle([...state.word]);
  if (mixed.join("") === state.word) mixed.reverse();
  state.tiles = mixed.map((char, id) => ({ id, char, used: false }));
  state.slots = Array(state.word.length).fill(null);
  state.locked = Array(state.word.length).fill(false);
  const size = state.word.length > 10 ? "long" : "short";
  slotsEl.dataset.size = size;
  tilesEl.dataset.size = size;
  clueEl.textContent = state.clue;
  statusEl.textContent = "Harfe bas veya klavyeden yaz.";
  slotsEl.classList.remove("is-shake");
  updateHud();
  renderBoard();
}

function placeTile(id) {
  if (state.busy) return;
  const tile = state.tiles.find((item) => item.id === id);
  if (!tile || tile.used) return;
  const index = state.slots.findIndex((slot, slotIndex) => slot === null && !state.locked[slotIndex]);
  if (index === -1) return;
  ensureAudio();
  state.slots[index] = id;
  tile.used = true;
  renderBoard();
  if (state.slots.every((slot) => slot !== null)) checkAnswer();
}

function clearSlot(index) {
  if (state.busy || state.locked[index] || state.slots[index] === null) return;
  const tile = state.tiles.find((item) => item.id === state.slots[index]);
  tile.used = false;
  state.slots[index] = null;
  renderBoard();
}

function removeLast() {
  for (let index = state.slots.length - 1; index >= 0; index -= 1) {
    if (state.slots[index] !== null && !state.locked[index]) {
      clearSlot(index);
      return;
    }
  }
}

function guess() {
  return state.slots
    .map((id) => state.tiles.find((tile) => tile.id === id).char)
    .join("");
}

function checkAnswer() {
  if (guess() === state.word) {
    succeed();
    return;
  }
  slotsEl.classList.remove("is-shake");
  window.requestAnimationFrame(() => slotsEl.classList.add("is-shake"));
  statusEl.textContent = "Sözdizimi hatası. Bir harfi geri al.";
  playTone("miss");
}

function succeed() {
  state.busy = true;
  state.streak += 1;
  state.cleared += 1;
  const gained = state.word.length * (state.level + 1) * (state.hintUsed ? 1 : state.streak);
  state.score += gained;
  if (state.score > state.best) {
    state.best = state.score;
    saveBest();
  }
  let promoted = false;
  if (state.cleared >= PROMOTE_AFTER && state.level < LEVELS.length - 1) {
    state.level += 1;
    state.cleared = 0;
    state.order = [];
    state.cursor = 0;
    promoted = true;
  }
  statusEl.textContent = promoted
    ? `Derlendi. Seviye yükseldi: ${currentLevel().name}. +${gained}`
    : `Derlendi. +${gained}`;
  updateHud();
  burst();
  playTone("win");
  window.setTimeout(startRound, 700);
}

function useHint() {
  if (state.busy || state.hintUsed) return;
  const index = state.word.split("").findIndex((char, slotIndex) => {
    const id = state.slots[slotIndex];
    if (id === null) return true;
    return state.tiles.find((tile) => tile.id === id).char !== char;
  });
  if (index === -1) return;
  if (state.slots[index] !== null && !state.locked[index]) {
    const sitting = state.tiles.find((tile) => tile.id === state.slots[index]);
    sitting.used = false;
    state.slots[index] = null;
  }
  const wanted = state.word[index];
  const tile = state.tiles.find((item) => !item.used && item.char === wanted);
  if (!tile) return;
  tile.used = true;
  state.slots[index] = tile.id;
  state.locked[index] = true;
  state.hintUsed = true;
  statusEl.textContent = "Debug bir harfi yerine oturttu.";
  updateHud();
  renderBoard();
  if (state.slots.every((slot) => slot !== null)) checkAnswer();
}

function skipWord() {
  if (state.busy) return;
  state.streak = 0;
  statusEl.textContent = "Kelime atlandı. Seri sıfırlandı.";
  updateHud();
  startRound();
}

function shuffleBank() {
  if (state.busy) return;
  const loose = state.tiles.filter((tile) => !tile.used);
  const chars = shuffle(loose.map((tile) => tile.char));
  loose.forEach((tile, index) => {
    tile.char = chars[index];
  });
  renderBoard();
}

document.getElementById("shuffle").addEventListener("click", shuffleBank);
document.getElementById("hint").addEventListener("click", useHint);
document.getElementById("skip").addEventListener("click", skipWord);

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    event.preventDefault();
    removeLast();
    return;
  }
  if (event.key === "Enter") {
    if (state.slots.every((slot) => slot !== null)) checkAnswer();
    return;
  }
  if (event.key.length !== 1) return;
  const char = event.key.toLocaleLowerCase("tr-TR");
  if (!/[a-zçğıöşü]/.test(char)) return;
  const tile = state.tiles.find((item) => !item.used && item.char === char);
  if (tile) placeTile(tile.id);
});

state.best = loadBest();
startRound();
