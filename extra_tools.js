function showAddToolForm(categoryName, toolName) {
  if (!isAdmin) {
    alert("ต้องเข้าสู่ระบบ Admin ก่อนเพิ่มเครื่องมือ");
    return;
  }

  const toolId = `${categoryName}-${toolName}`.replace(/\s/g, "_");

  const form = document.createElement("div");
  form.className = "add-tool-form";
  form.style = "max-width: 500px; padding: 20px; margin-top: 20px;";
  form.innerHTML = `
    <h3>เพิ่มเครื่องมือใน ${toolName}</h3>
    <input id="newToolImage" placeholder="URL รูปภาพ" />
    <input id="newToolName" placeholder="ชื่อเครื่องมือ" />
    <textarea id="newToolContent" placeholder="ข้อความเมื่อคลิก"></textarea>
    <button onclick="saveNewTool('${toolId}')">💾 บันทึก</button>
  `;

  toolOutput.innerHTML = "";
  toolOutput.appendChild(form);
}

function saveNewTool(toolId) {
  if (!isAdmin) {
    alert("คุณไม่มีสิทธิ์เพิ่มเครื่องมือ (Admin เท่านั้น)");
    return;
  }

  const img = document.getElementById("newToolImage").value;
  const name = document.getElementById("newToolName").value;
  const content = document.getElementById("newToolContent").value;

  if (!name || !content) {
    alert("กรุณากรอกชื่อและข้อความ");
    return;
  }

  const saved = JSON.parse(localStorage.getItem("tools")) || [];
  saved.push({ toolId, img, name, content });
  localStorage.setItem("tools", JSON.stringify(saved));

  loadSavedToolsForTool(toolId);
  toolOutput.innerHTML = "";
}
