function createAddToolButton(categoryName) {
  const card = document.createElement("div");
  card.className = "card";
  card.style = "padding: 20px; text-align: center;";

  const btn = document.createElement("button");
  btn.innerText = "+ เพิ่มเครื่องมือ";
  btn.onclick = () => {
    openAddToolForm(categoryName);
  };

  card.appendChild(btn);
  return card;
}

function showAddToolForm(categoryName, toolName) {
  const toolId = `${categoryName}-${toolName}`.replace(/\s/g, "_");

  const form = document.createElement("div");
  form.className = "add-tool-form";
  form.style = "max-width: 500px; padding: 20px; margin-top: 20px;";
  form.innerHTML = `
    <h3>เพิ่มเครื่องมือใน ${toolName}</h3>
    <input id="newToolImage" placeholder="URL รูปภาพ" style="width: 100%; margin-bottom: 10px;" />
    <input id="newToolName" placeholder="ชื่อเครื่องมือ" style="width: 100%; margin-bottom: 10px;" />
    <textarea id="newToolContent" placeholder="ข้อความเมื่อคลิก" style="width: 100%; height: 100px; margin-bottom: 10px;"></textarea>
    <button onclick="saveNewTool('${toolId}')">💾 บันทึก</button>
  `;

  toolOutput.innerHTML = "";
  toolOutput.appendChild(form);
}

function saveNewTool(toolId) {
  const img = document.getElementById("newToolImage").value;
  const name = document.getElementById("newToolName").value;
  const content = document.getElementById("newToolContent").value;

  if (!name || !content) {
    alert("กรุณากรอกชื่อและข้อความ");
    return;
  }

  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.style = "width: 100%; margin: 10px 0; text-align: center;";

  if (img) {
    const image = document.createElement("img");
    image.src = img;
    image.style = "max-height: 200px; object-fit: cover;";
    newCard.appendChild(image);
  }

  const nameBtn = document.createElement("button");
  nameBtn.innerText = name;
  nameBtn.onclick = () => {
    const outputId = `output-${toolId}-${name}`;
    const existing = document.getElementById(outputId);

    if (existing) {
      existing.remove(); // ถ้ามีอยู่แล้ว -> ปิด
    } else {
      // ลบตัวอื่นก่อน (ถ้าต้องการเปิดได้ทีละอัน)
      toolOutput.innerHTML = "";

    const output = document.createElement("div");
    output.className = "card";
    output.id = outputId;

    const contentDiv = document.createElement("div");
    contentDiv.style = "padding: 10px; white-space: pre-wrap;";
    contentDiv.textContent = content;  // ใช้ textContent แทน innerHTML เพื่อรักษา format

output.appendChild(contentDiv);
      toolOutput.appendChild(output);
    }
  };
  newCard.appendChild(nameBtn);

  const subToolContainer = document.getElementById(`subtools-${toolId}`);
  if (subToolContainer) {
    subToolContainer.appendChild(newCard);
  }

  toolOutput.innerHTML = ""; // ล้างฟอร์มหลังบันทึก
  
  // ดึงข้อมูลเดิมจาก localStorage (ถ้ามี)
const saved = JSON.parse(localStorage.getItem("tools")) || [];

saved.push({
  toolId,
  img,
  name,
  content
});

localStorage.setItem("tools", JSON.stringify(saved));
// โหลดกลับมาแสดงใหม่ทันที
loadSavedToolsForTool(toolId);
}

