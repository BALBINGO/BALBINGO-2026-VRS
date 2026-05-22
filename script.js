// === KONFIG ===
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwU2JSzQJ1m2Ksa02z8jmyuLnhwyboumacHJdxSCGdIQ0bgzVjFsFSoI7244znB-O5m8g/exec";

// SUPERBINGO-funktion
function hasSuperbingo(completed) {
  function blockHasBingo(startRow, startCol) {
    const idx = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        idx.push((startRow + r) * 9 + (startCol + c));
      }
    }

    const b = [
      [completed[idx[0]], completed[idx[1]], completed[idx[2]]],
      [completed[idx[3]], completed[idx[4]], completed[idx[5]]],
      [completed[idx[6]], completed[idx[7]], completed[idx[8]]]
    ];

    for (let r = 0; r < 3; r++) if (b[r][0] && b[r][1] && b[r][2]) return true;
    for (let c = 0; c < 3; c++) if (b[0][c] && b[1][c] && b[2][c]) return true;

    if (b[0][0] && b[1][1] && b[2][2]) return true;
    if (b[0][2] && b[1][1] && b[2][0]) return true;

    return false;
  }

  const blocks = [
    blockHasBingo(0,0),
    blockHasBingo(0,3),
    blockHasBingo(0,6),
    blockHasBingo(3,0),
    blockHasBingo(3,3),
    blockHasBingo(3,6),
    blockHasBingo(6,0),
    blockHasBingo(6,3),
    blockHasBingo(6,6)
  ];

  return blocks.every(Boolean);
}

// Block-bingos för highlight/progress
function getBlockBingos(completed) {
  function blockHasBingo(startRow, startCol) {
    const idx = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        idx.push((startRow + r) * 9 + (startCol + c));
      }
    }

    const b = [
      [completed[idx[0]], completed[idx[1]], completed[idx[2]]],
      [completed[idx[3]], completed[idx[4]], completed[idx[5]]],
      [completed[idx[6]], completed[idx[7]], completed[idx[8]]]
    ];

    for (let r = 0; r < 3; r++) if (b[r][0] && b[r][1] && b[r][2]) return true;
    for (let c = 0; c < 3; c++) if (b[0][c] && b[1][c] && b[2][c]) return true;

    if (b[0][0] && b[1][1] && b[2][2]) return true;
    if (b[0][2] && b[1][1] && b[2][0]) return true;

    return false;
  }

  return [
    blockHasBingo(0,0),
    blockHasBingo(0,3),
    blockHasBingo(0,6),
    blockHasBingo(3,0),
    blockHasBingo(3,3),
    blockHasBingo(3,6),
    blockHasBingo(6,0),
    blockHasBingo(6,3),
    blockHasBingo(6,6)
  ];
}

// Alla 81 uppdrag
const tasks = [
  { title: "Hälsa på någon som bär något rosa", desc: "Hitta någon med något rosa och säg hej." },
  { title: "Ge en komplimang till någon du inte pratat med på länge", desc: "Säg något snällt till någon du inte pratat med på länge." },
  { title: "High-fiva någon i ett annat kluster", desc: "Gör en high‑five med någon från en annan grupp." },
  { title: "Fråga någon om deras favoritlåt", desc: "Fråga vilken låt de gillar mest just nu." },
  { title: "Ta en bild med någon du inte känner så väl", desc: "Be någon du inte känner så bra om en snabb selfie." },
  { title: "Säg 'ha en magisk kväll' till någon", desc: "Sprid lite magi och önska någon en fin kväll." },
  { title: "Hitta någon som har samma färg på skorna som du", desc: "Jämför era skor och se om ni matchar." },
  { title: "Prata i 30 sekunder med någon du inte pratat med idag", desc: "Starta en kort konversation med någon ny." },
  { title: "Ge någon ett hemligt tummen upp", desc: "Gör en diskret tumme upp till någon." },
  { title: "Hitta någon som fyller år samma månad som du", desc: "Fråga om deras födelsedagsmånad." },
  { title: "Fråga någon vad de ser mest fram emot i nian", desc: "Starta en framtidspratstund." },
  { title: "Hitta någon som har glitter på sig", desc: "Leta efter glitter i kläder, smink eller accessoarer." },
  { title: "Säg något snällt till någon som står ensam", desc: "Gör någons kväll bättre." },
  { title: "Hitta någon som har ett smycke på sig", desc: "Kolla efter halsband, ringar eller armband." },
  { title: "Fråga någon om deras favoritfilm", desc: "Starta ett filmprat." },
  { title: "Ge någon en air hug", desc: "En kram på avstånd." },
  { title: "Hitta någon som har flätor eller lockigt hår", desc: "Leta efter en snygg frisyr." },
  { title: "Hitta någon som har en accessoar du gillar", desc: "Berätta att du gillar den." },
  { title: "Fråga någon om deras bästa minne från högstadiet", desc: "Dela minnen." },
  { title: "Ge någon en komplimang för deras outfit", desc: "Sprid stilglädje." },
  { title: "Snurra runt en gång på dansgolvet", desc: "Gör en snabb piruett." },
  { title: "Gör en synkad pose med någon", desc: "Posera samtidigt." },
  { title: "Gå baklänges fem steg utan att krocka", desc: "Se upp för hinder." },
  { title: "Gör en hemlig handskakning med någon", desc: "Hitta på en snabb ritual." },
  { title: "Dansa i 10 sekunder med någon", desc: "En mini‑dansduett." },
  { title: "Gör en hjärtform med händerna tillsammans med någon", desc: "Forma ett hjärta." },
  { title: "Gör en slow-motion-walk i fem sekunder", desc: "Gå långsamt och dramatiskt." },
  { title: "Gör en mini-catwalk", desc: "Gå tre steg fram och tillbaka." },
  { title: "Gör en rolig pose i fotohörnan", desc: "Ta en skojig bild." },
  { title: "Gör en staty-paus i tre sekunder", desc: "Frys helt stilla." },
  { title: "Ta en gruppbild med minst tre personer", desc: "Samla ett gäng." },
  { title: "Gör en dab med någon", desc: "Synkad dab." },
  { title: "Gör en cirkel och snurra runt med två andra", desc: "Bild en miniring." },
  { title: "Härma någons rörelser i 10 sekunder", desc: "Spegelövning." },
  { title: "Gör en hemlig dansmove och få någon att härma", desc: "Starta en danskedja." },
  { title: "Gör en hjärt-pose med två andra", desc: "Tre personer – ett hjärta." },
  { title: "Gör en superhjältepose med någon", desc: "Power‑pose!" },
  { title: "Ta en selfie med roliga miner", desc: "Gör en grimas." },
  { title: "Gör en tyst applåd åt någon", desc: "Visa uppskattning utan ljud." },
  { title: "Gör en osynlig mikrofon-intervju", desc: "Intervjua någon låtsas‑stil." },
  { title: "Hitta någon med blå naglar", desc: "Kolla händerna." },
  { title: "Hitta någon med slips", desc: "Leta efter en snygg knut." },
  { title: "Hitta någon med glitter i håret", desc: "Glittrig frisyr." },
  { title: "Hitta någon med svarta skor", desc: "Matcha färger." },
  { title: "Hitta någon som bär något randigt", desc: "Randigt plagg." },
  { title: "Hitta någon som har en ring", desc: "Kolla händerna." },
  { title: "Hitta någon som har en rosett", desc: "Hår eller kläder." },
  { title: "Hitta någon som har en klocka", desc: "Armbandsklocka." },
  { title: "Hitta någon som har en jacka med sig", desc: "Jacka i handen eller på stolen." },
  { title: "Hitta någon som har en vit skjorta", desc: "Klassisk stil." },
  { title: "Hitta någon som har en hårklämma", desc: "Håraccessoar." },
  { title: "Hitta någon med tatuering", desc: "Äkta eller fejk." },
  { title: "Hitta någon som har en blomma på sig", desc: "Blommigt smycke eller kläder." },
  { title: "Hitta någon med metallic-detalj", desc: "Glansigt material." },
  { title: "Hitta någon som har en hoodie med sig", desc: "Mysig stil." },
  { title: "Hitta någon som har en färgglad väska", desc: "Färgklick." },
  { title: "Hitta någon med keps eller hatt", desc: "Huvudbonad." },
  { title: "Hitta någon med silveraccessoar", desc: "Smycke eller detalj." },
  { title: "Hitta någon med guldaccessoar", desc: "Guldigt smycke." },
  { title: "Hitta någon med jacka i stark färg", desc: "Färgstark ytterklädsel." },
  { title: "Få någon att skratta", desc: "Sprid glädje." },
  { title: "Gör en hemlig agent-walk", desc: "Smyg runt som en agent." },
  { title: "Gör en charad och låt någon gissa", desc: "Mima något." },
  { title: "Läs en låttext som poesi", desc: "Dramatisk uppläsning." },
  { title: "Gör en tyst dansbattle", desc: "Dansduell utan musik." },
  { title: "Gör en frys-dans", desc: "Frys mitt i en pose." },
 { title: "Säg ett ord baklänges – låt någon gissa", desc: "Baklängesprat." },
  { title: "Gör en osynlig skål", desc: "Skåla utan glas." },
  { title: "Gör en hemlig uppdragshandling", desc: "Som i Förrädarna." },
  { title: "Gör en spionblick tills någon ler", desc: "Stirra tills de skrattar." },
  { title: "Först att nudda väggen vinner", desc: "Mini‑race." },
  { title: "Gör ett ljud – låt någon gissa", desc: "Ljudlek." },
  { title: "Gör en hemlig pose som återkommer under kvällen", desc: "Din signaturpose." },
  { title: "Räkna tyst till tre med någon", desc: "Synka tyst." },
  { title: "Gör en spegelövning", desc: "Härma varandra." },
  { title: "Gör en mini-improvisation", desc: "3 sekunder spontan teater." },
  { title: "Kasta en osynlig ballong till någon", desc: "Låtsaslek." },
  { title: "Gör en hemlig nickning till tre personer", desc: "Diskret nick." },
  { title: "Ge en tyst applåd åt någon som dansar", desc: "Visa stöd." },
  { title: "Gör en låtsas-intervju", desc: "Intervjua någon." },
  { title: "Hitta på ett eget uppdrag", desc: "Var kreativ!" }
];

const grid = document.getElementById("bingo-grid");
const namePopup = document.getElementById("name-popup");
const nameInput = document.getElementById("name-input");
const saveNameBtn = document.getElementById("save-name");
const studentNameEl = document.getElementById("student-name");
const progressEl = document.getElementById("progress");

const taskPopup = document.getElementById("task-popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-description");
const markBtn = document.getElementById("mark-complete");
const closePopupBtn = document.getElementById("close-popup");

const submitBtn = document.getElementById("submit-board");
const submitPopup = document.getElementById("submit-popup");
const closeSubmitPopupBtn = document.getElementById("close-submit-popup");
const changeNameBtn = document.getElementById("change-name");

const superbingoPopup = document.getElementById("superbingo-popup");
const closeSuperbingoBtn = document.getElementById("close-superbingo");
const superbingoSound = document.getElementById("superbingo-sound");

let currentIndex = null;
let saved = [];
let shuffledTasks = [];
let studentName = localStorage.getItem("balbingo_name") || "";

// Slumpa array
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Skicka progress till Google Sheet
function sendProgress(submitted = false) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === "YOUR_APPS_SCRIPT_URL_HERE") return;
  const completedCount = saved.filter(Boolean).length;
  const payload = {
    name: studentName,
    completed: saved,
    completedCount,
    submitted,
    timestamp: new Date().toISOString()
  };
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(() => {});
}

function highlightBlocks() {
  const blocks = getBlockBingos(saved);
  const blockStarts = [
    [0,0],[0,3],[0,6],
    [3,0],[3,3],[3,6],
    [6,0],[6,3],[6,6]
  ];

  document.querySelectorAll(".cell").forEach(c => c.classList.remove("block-bingo"));

  blocks.forEach((hasBingo, i) => {
    if (!hasBingo) return;
    const [sr, sc] = blockStarts[i];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const index = (sr + r) * 9 + (sc + c);
        grid.children[index].classList.add("block-bingo");
      }
    }
  });
}

function updateProgress() {
  const completedCount = saved.filter(Boolean).length;
  const blockBingos = getBlockBingos(saved);
  const blocksDone = blockBingos.filter(Boolean).length;
  progressEl.textContent =
    `Progress: ${completedCount}/81 klara — ${blocksDone}/9 minibrickor har bingo`;
}

// Bygg grid
function buildGrid() {
  grid.innerHTML = "";
  shuffledTasks.forEach((task, index) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = task.title;
    if (saved[index]) cell.classList.add("marked");
    cell.addEventListener("click", () => {
      currentIndex = index;
      popupTitle.textContent = task.title;
      popupDesc.textContent = task.desc;
      taskPopup.classList.remove("hidden");
    });
    grid.appendChild(cell);
  });
  highlightBlocks();
  updateProgress();
}

// Init
function init() {
  if (!studentName) {
    namePopup.classList.remove("hidden");
  } else {
    studentNameEl.textContent = studentName;
  }

  const storedState = localStorage.getItem("balbingo_state");
  const storedTasks = localStorage.getItem("balbingo_tasks");

  if (storedTasks) {
    shuffledTasks = JSON.parse(storedTasks);
  } else {
    shuffledTasks = shuffle(tasks);
    localStorage.setItem("balbingo_tasks", JSON.stringify(shuffledTasks));
  }

  if (storedState) {
    saved = JSON.parse(storedState);
  } else {
    saved = Array(shuffledTasks.length).fill(false);
    localStorage.setItem("balbingo_state", JSON.stringify(saved));
  }

  buildGrid();
}

saveNameBtn.addEventListener("click", () => {
  const val = nameInput.value.trim();
  if (!val) return;
  studentName = val;
  localStorage.setItem("balbingo_name", studentName);
  studentNameEl.textContent = studentName;
  namePopup.classList.add("hidden");
  sendProgress(false);
});

changeNameBtn.addEventListener("click", () => {
  nameInput.value = studentName || "";
  namePopup.classList.remove("hidden");
});

markBtn.addEventListener("click", () => {
  if (currentIndex === null) return;
  saved[currentIndex] = true;
  localStorage.setItem("balbingo_state", JSON.stringify(saved));
  buildGrid();
  taskPopup.classList.add("hidden");
  sendProgress(false);

  if (hasSuperbingo(saved)) {
    if (superbingoSound) superbingoSound.play();
    const title = document.querySelector("h1");
    title.classList.add("superbingo-explosion");
    setTimeout(() => {
      title.classList.remove("superbingo-explosion");
    }, 1000);
    superbingoPopup.classList.remove("hidden");
  }
});

closePopupBtn.addEventListener("click", () => {
  taskPopup.classList.add("hidden");
});

submitBtn.addEventListener("click", () => {
  sendProgress(true);
  submitPopup.classList.remove("hidden");
});

closeSubmitPopupBtn.addEventListener("click", () => {
  submitPopup.classList.add("hidden");
});

closeSuperbingoBtn.addEventListener("click", () => {
  superbingoPopup.classList.add("hidden");
});

init();
