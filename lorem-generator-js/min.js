const paragraphsInput = document.getElementById("paragraphs");
const paragraphsValurPrint = document.getElementById("paragraphsValue");
const wordsInput = document.getElementById("words");
const wordsValuePrint = document.getElementById("wordsValue");
const tagsInput = document.getElementById("tags");
const AddHtmlTag = document.getElementById("include");
const generateBtn = document.getElementById("generate");
const output = document.querySelector(".output");

const loremIpsumText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae saepe, eum optio culpa quam commodi vitae praesentium fugiat, accusamus recusandae nesciunt pariatur error eligendi, reiciendis beatae adipisci eos ducimus veritatis blanditiis asperiores exercitationem sint maxime incidunt? Ex, repudiandae repellat nisi qui debitis voluptates obcaecati expedita! Eligendi, iste! Vero magni quae blanditiis ullam enim tempora adipisci corporis neque quis facilis, unde, suscipit commodi. Minus, id. Eaque, laborum! Nihil unde rem incidunt, minima laborum repellendus voluptate corporis qui sequi maxime voluptatum odio quia a ipsum consequuntur delectus! Alias modi doloribus accusamus laboriosam earum, illum nemo molestias eius optio officia quis nesciunt reprehenderit.`;

const loremIpsumWords = loremIpsumText.split(" ");

const tagOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"];

tagOptions.map((tagOption) => {
  let createElement = document.createElement("option");
  let appendChildValue = tagsInput.appendChild(createElement);
  appendChildValue.setAttribute("value", tagOption);
  appendChildValue.textContent = "<" + tagOption + ">";
});

function printValue(printeInput, printValue) {
  printeInput.textContent = printValue.value;
}

// events ma function no refrence pass thay
// that's why function no call karavava function sathe ".bind" karvu
// and first parameter "null" pass karvu
paragraphsInput.addEventListener(
  "input",
  printValue.bind(null, paragraphsValurPrint, paragraphsInput)
);
wordsInput.addEventListener(
  "input",
  printValue.bind(null, wordsValuePrint, wordsInput)
);

generateBtn.addEventListener("click", function () {
  if (AddHtmlTag.value == "Yes") {
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }
    let simplePrint = [];
    for (let j = 0; j < wordsInput.value; j++) {
      simplePrint.push(loremIpsumWords[j]);
    }
    for (let i = 0; i < paragraphsInput.value; i++) {
      let setText = simplePrint.join(" ");
      let createElement = document.createElement(tagsInput.value);
      if (setText[setText.length - 1] == ",") {
        output.appendChild(createElement).textContent = setText;
      } else {
        output.appendChild(createElement).textContent = setText;
      }
    }
  } else {
    let simplePrint = [];
    for (let i = 0; i < paragraphsInput.value; i++) {
      for (let j = 0; j < wordsInput.value; j++) {
        simplePrint.push(loremIpsumWords[j]);
      }
    }
    let setText = simplePrint.join(" ");
    if (setText[setText.length - 1] == ",") {
      output.textContent = setText.replace(setText[setText.length - 1], ".");
    } else {
      output.textContent = setText;
    }
  }
});
