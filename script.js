const story = [
  {
    text: "你一覺醒來，發現自己躺在一張古老的木床上...你的命運，從現在開始編織。",
    options: null
  },
  {
    text: "你踏出門後，不知不覺走到一個熱鬧的村莊。",
    options: null
  },
  {
    text: "請問，你最想靠近哪一張任務卷軸？",
    options: [
      { label: "任務A｜✨只要動口就可以觸發事物的改變", value: "A1" },
      { label: "任務B｜📸成為魔法界大網紅", value: "B1" },
      { label: "任務C｜🏰成為魔法界人生導師", value: "C1" },
      { label: "任務D｜📹活動策劃主辦人", value: "D1" }
    ]
  },
  {
    text: "面對未知，你會如何做出第一步？",
    options: [
      { label: "A.🔍 觀察周圍，蒐集資訊", value: "A2" },
      { label: "B.⚡ 立刻嘗試感受魔法", value: "B2" },
      { label: "C.🧠 問問他人建議", value: "C2" },
      { label: "D.🌙 用直覺感受方向", value: "D2" }
    ]
  },
  {
    text: "請選擇你最想擁有的魔法能力：",
    options: [
      { label: "魔法一：語言魔法（口語表達）", value: "A3" },
      { label: "魔法二：能量建構（自主學習）", value: "B3" },
      { label: "魔法三：魅力吸引（社群經營）", value: "C3" },
      { label: "魔法四：頂天之術（活動企劃）", value: "D3" }
    ]
  },
  {
    text: "你非常努力地在學習魔法，並成功覺醒。",
    options: null
  },
  {
    text: "請問，你會獻上哪件代表內在力量的物品？",
    options: [
      { label: "A.📓 筆記本", value: "A4" },
      { label: "B.🪞 魔鏡", value: "B4" },
      { label: "C.📱 魔法手機", value: "C4" },
      { label: "D.🧩 命運拼圖", value: "D4" }
    ]
  },
  {
    text: "命運之輪轉動，你的測驗結果即將揭曉……",
    options: null
  }
];

let currentPage = 0;
let answers = [];

function nextPage(selected = null) {
  if (selected) answers.push(selected);
  currentPage++;

  const app = document.getElementById("app");
  const oldPage = document.querySelector(".page.active");
  if (oldPage) oldPage.remove();

  if (currentPage >= story.length) {
    showResult();
    return;
  }

  const pageData = story[currentPage];
  const page = document.createElement("section");
  page.className = "page active";

  const text = document.createElement("p");
  text.innerText = pageData.text;
  page.appendChild(text);

  if (pageData.options) {
    pageData.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt.label;
      btn.onclick = () => nextPage(opt.value);
      page.appendChild(btn);
    });
  } else {
    const btn = document.createElement("button");
    btn.innerText = "下一頁";
    btn.onclick = () => nextPage();
    page.appendChild(btn);
  }

  app.appendChild(page);
}
