const CATEGORIES = {
  "หน้าแรก (Home)": {
    icon: "🏡",
    tools: [
      {
        name: "แนะนำ Capsule OS",
        icon: "💡",
        content: "💡 แนะนำเว็บ จุดประสงค์ แนวคิด BCG Model"
      }
    ]
  },
  "ตลาดและการจำหน่าย (Market Place)": {
    icon: "📦",
    tools: [
      {
        name: "เข้าสู่ตลาดกลาง",
        icon: "🛒",
        content: "🛒 ระบบตลาดกลางออนไลน์กำลังอยู่ระหว่างการพัฒนา..."
      }
    ]
  },
  "การปลูกพืช (Planting Guide)": {
    icon: "🌱",
    tools: [
      {
        name: "ผักสวนครัว",
        image: "https://www.thaihealth.or.th/data/content/34432/cms/thaihealth_c_bdeghjrt1359.jpg",
        content: "🥬 วิธีปลูกผักสวนครัวง่าย ๆ ในบ้าน"
      },
      {
        name: "สมุนไพรไทย",
        image: "https://www.salika.co/wp-content/uploads/2020/10/thai-herb-food-spices.jpg",
        content: "🌿 วิธีปลูกสมุนไพรไทย เช่น โหระพา ตะไคร้"
      },
      {
        name: "ผลไม้เมืองร้อน",
        image: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4VwEH2sPQgYkzDJt267Cud7ypnjOBdRDVNVyd6bT3lmgtgHGOC8.jpg",
        content: "🍍 วิธีปลูกผลไม้เมืองร้อน เช่น มะม่วง กล้วย ลำไย"
      },
      {
        name: "พืชสมุนไพรเพื่อสุขภาพ",
        image: "https://www.chaiyofarm.co.th/storage/app/uploads/public/65c/0b8/6d1/65c0b86d10d86651530296.jpg",
        content: "🌱 วิธีปลูกพืชสมุนไพรเพื่อสุขภาพ เช่น ฟ้าทะลายโจร"
      }
    ]
  },
  "เทคนิคการเกษตร (Farming Techniques)": {
    icon: "🚜",
    tools: [
      {
        name: "การปลูกในพื้นที่เมือง",
        image: "https://aaaplc.com/wp-content/uploads/2025/01/3563.jpg",
        content: "🏙️ เทคนิคการปลูกพืชในพื้นที่จำกัด เช่น ดาดฟ้า"
      },
      {
        name: "ฟาร์มแนวตั้ง",
        image: "https://www.kasetsanjorn.com/wp-content/uploads/2021/05/19.4.64-%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87.jpg",
        content: "🌇 ระบบฟาร์มแนวตั้ง เพิ่มผลผลิตในแนวดิ่ง"
      },
      {
        name: "Hydroponics",
        image: "https://static.scientificamerican.com/sciam/cache/file/72754C85-5CD5-4288-B37E300EF6C2D567_source.jpg?w=1200",
        content: "💧 การปลูกพืชแบบไม่ใช้ดิน (Hydroponics)"
      },
      {
        name: "Aquaponics",
        image: "https://www.renovablesverdes.com/wp-content/uploads/2020/07/Acuaponia.jpg",
        content: "🐟 การผสมผสานระหว่างปลูกพืชกับเลี้ยงปลา (Aquaponics)"
      }
    ]
  },
  "การแปรรูปผลผลิต (Processing & Value Adding)": {
    icon: "🏭",
    tools: [
      {
        name: "วิธีแปรรูปผลผลิต",
        image: "https://www.ditp.go.th/wp-content/uploads/2024/12/headline-pic.jpeg",
        content: "🏭 วิธีแปรรูปผลผลิตเพื่อยืดอายุและเพิ่มมูลค่า"
      },
      {
        name: "การเก็บรักษา",
        image: "https://baansomtum.com/wp-content/uploads/which-fruits-vegetables-to-keep-in-the-fridge-baan-somtum-2.jpg",
        content: "📦 การเก็บรักษาผลผลิตให้สดใหม่"
      },
      {
        name: "ผลิตภัณฑ์เพิ่มมูลค่า",
        image: "https://www.tidlor.com/tidlor/media/tidlor-image/article/5-ideas-for-fruit-processing/processing-ideas.webp",
        content: "💰 การแปรรูปสินค้าให้เกิดมูลค่าเพิ่ม"
      }
    ]
  },
  "การจัดการเศษวัสดุเหลือทิ้ง (Waste Management)": {
    icon: "♻️",
    tools: [
      {
        name: "การทำปุ๋ยหมัก",
        image: "https://s359.kapook.com/r/600/auto/pagebuilder/6fa365b1-443f-4517-b8c1-8aa361ad2e9a.jpg",
        content: "🌿 เปลี่ยนเศษอาหารเป็นปุ๋ยหมัก"
      },
      {
        name: "การผลิตไบโอแก๊ส",
        image: "https://editverse.com/wp-content/uploads/2024/10/biogas-production-1024x585.jpg",
        content: "🔥 ผลิตพลังงานจากของเสียอินทรีย์"
      },
      {
        name: "การรีไซเคิลวัสดุเกษตร",
        image: "https://www.tcdcmaterial.com/uploads/material/MI01016-02/images/65702ad5ea9d8_P1057319.jpg",
        content: "♻️ รีไซเคิลวัสดุเหลือใช้ในฟาร์ม"
      }
    ]
  },
  "BCG Innovation Zone": {
    icon: "🧪",
    tools: [
      {
        name: "บทความงานวิจัย",
        icon: "📖",
        content: "📖 อ่านบทความวิจัยด้าน BCG ล่าสุด"
      },
      {
        name: "นวัตกรรม BCG",
        image: "https://www.salika.co/wp-content/uploads/2022/04/bgc7.webp",
        content: "🧠 ตัวอย่างนวัตกรรมเชิงเกษตรสมัยใหม่"
      },
      {
        name: "งานวิจัยในชุมชน",
        icon: "🏘️",
        content: "🏘️ งานวิจัยที่นำไปใช้ได้จริงในชุมชน"
      }
    ]
  },
  "ชุดความรู้ & ดาวน์โหลด (Resources)": {
    icon: "📚",
    tools: [
      {
        name: "คู่มือ PDF",
        icon: "📄",
        content: "📄 ดาวน์โหลดเอกสารคู่มือการเกษตร"
      },
      {
        name: "คลิปวิดีโอสอนการปลูก",
        icon: "🎬",
        content: "🎬 วิดีโอแนะนำวิธีปลูกพืชแต่ละชนิด"
      },
      {
        name: "Infographic BCG",
        icon: "🖼️",
        content: "🖼️ สรุปแนวคิด BCG Model แบบภาพ"
      }
    ]
  }
};

// (ไม่ต้องเปลี่ยนโค้ดส่วนล่างด้านล่างนี้)
const categoryList = document.getElementById("categoryList");
const toolGrid = document.getElementById("toolGrid");
const toolOutput = document.getElementById("toolOutput");
const categoryTitle = document.getElementById("categoryTitle");

Object.keys(CATEGORIES).forEach(catName => {
  const btn = document.createElement("button");
  btn.innerText = `${CATEGORIES[catName].icon} ${catName}`;
  btn.onclick = () => renderCategory(catName, btn);
  categoryList.appendChild(btn);
});

function renderCategory(name, activeBtn) {
  document.querySelectorAll(".sidebar button").forEach(b => b.classList.remove("active"));
  activeBtn.classList.add("active");

  categoryTitle.innerText = `${CATEGORIES[name].icon} ${name}`;
  toolGrid.innerHTML = "";
  toolOutput.innerHTML = "";
  activeTools.innerHTML = ""; // เคลียร์ของเก่าทั้งหมด

  CATEGORIES[name].tools.forEach((tool, i) => {
    const card = document.createElement("div");
    card.className = "card";

    if (tool.image) {
      const img = document.createElement("img");
      img.src = tool.image;
      card.appendChild(img);
    } else if (tool.icon) {
      const iconDiv = document.createElement("div");
      iconDiv.style = "font-size: 48px; text-align: center; padding: 30px;";
      iconDiv.innerText = tool.icon;
      card.appendChild(iconDiv);
    }

    const btn = document.createElement("button");
    btn.innerText = `เปิด ${tool.name}`;
    btn.dataset.toolId = `${name}-${tool.name}`.replace(/\s/g, "_");

    btn.onclick = () => {
    const wasOpened = renderToolContent(name, tool); // true = เปิด, false = ปิด
    btn.innerText = `${wasOpened ? "ปิด" : "เปิด"} ${tool.name}`;
    };

    card.appendChild(btn);
    toolGrid.appendChild(card);
  });
}

let openedToolId = null; // เก็บว่าเปิดหัวข้อไหนอยู่

function renderToolContent(categoryName, tool) {
  const toolId = `${categoryName}-${tool.name}`.replace(/\s/g, "_");

  const existingSection = document.getElementById(toolId);
  if (existingSection) {
    existingSection.remove();
    return false;
  }

  const section = document.createElement("div");
  section.id = toolId;
  section.className = "card";
  section.style = "margin-top: 20px; padding: 20px;";

  const content = document.createElement("div");
  content.innerHTML = `<h3>${tool.name}</h3><p style="white-space: pre-wrap;">${tool.content}</p>`;
  section.appendChild(content);

  const subToolContainer = document.createElement("div");
  subToolContainer.id = `subtools-${toolId}`;
  subToolContainer.className = "grid";
  section.appendChild(subToolContainer);

  const addBtn = document.createElement("button");
  addBtn.innerText = "+ เพิ่มเครื่องมือ";
  addBtn.onclick = () => {
    showAddToolForm(categoryName, tool.name);
  };
  section.appendChild(addBtn);

  activeTools.appendChild(section);

  // ✅ โหลด subtools เฉพาะของ tool นี้
  loadSavedToolsForTool(toolId);

  return true;
}

function loadSavedToolsForTool(toolId) {
  const saved = JSON.parse(localStorage.getItem("tools")) || [];

  const subToolContainer = document.getElementById(`subtools-${toolId}`);
  if (!subToolContainer) return;

  // ล้างก่อนป้องกันซ้ำซ้อน
  subToolContainer.innerHTML = "";

  saved
    .filter(tool => tool.toolId === toolId)
    .forEach(({ img, name, content }) => {
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
          existing.remove();
        } else {
          toolOutput.innerHTML = "";

          const output = document.createElement("div");
          output.className = "card";
          output.id = outputId;

          const contentDiv = document.createElement("div");
          contentDiv.style = "padding: 10px; white-space: pre-wrap;";
          contentDiv.textContent = content;

          output.appendChild(contentDiv);
          toolOutput.appendChild(output);
        }
      };
      newCard.appendChild(nameBtn);

      // 🗑️ ปุ่มลบ
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "🗑️";
      deleteBtn.style = "margin-top: 10px; background-color: red; color: white;";
      deleteBtn.onclick = () => {
        if (confirm(`คุณต้องการลบ "${name}" ใช่หรือไม่?`)) {
          // ลบจาก localStorage
          const updated = saved.filter(
            tool => !(tool.toolId === toolId && tool.name === name)
          );
          localStorage.setItem("tools", JSON.stringify(updated));

          // ลบจาก DOM
          newCard.remove();

          // ลบ output (ถ้าแสดงอยู่)
          const output = document.getElementById(`output-${toolId}-${name}`);
          if (output) output.remove();
        }
      };
      newCard.appendChild(deleteBtn);

      subToolContainer.appendChild(newCard);
    });
}