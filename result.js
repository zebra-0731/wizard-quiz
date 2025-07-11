function showResult() {
  const app = document.getElementById("app");
  const page = document.createElement("section");
  page.className = "page active";

  const result = analyzeResult(answers);
  const resultMap = {
    A: ["語靈使者", "口語表達", "第一屆 陳承"],
    B: ["迴響探索師", "自主學習", "第二屆 芳棠"],
    C: ["星燦引流者", "社群經營", "第四屆 魚皮"],
    D: ["魔訊主辦師", "活動企劃", "第三屆 鯊鯊"]
  };

  const [title, theme, member] = resultMap[result] || ["未知巫師", "未分類", "無"];

  // 顯示結果
  page.innerHTML = `
    <h2>${title}</h2>
    <p>${theme}</p>
    <p>${member}</p>
    <p>👉 想了解更多，請前往展板探索四大課程內容！</p>
    <button onclick="location.reload()">重新測驗</button>
  `;

  app.appendChild(page);

  // ⬇️ 送資料到 Google Sheet
  fetch("https://script.google.com/macros/s/AKfycbyisDKWH5xEsCrGo8puLUNOE-vTcPv5lcgEeAqR6-34pYocTqTrVhpBlK_FdSUX5I3J/exec", {
    method: "POST",
    body: JSON.stringify({
      answers: answers,
      result: title
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(txt => console.log("已儲存測驗結果：" + txt))
    .catch(err => console.error("儲存失敗：", err));
}

function analyzeResult(answers) {
  let count = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => {
    const key = a[0];
    if (count[key] !== undefined) count[key]++;
  });
  return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}
