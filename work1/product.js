function toggleBars(){
    document.getElementsByClassName("small-bar")[0].classList.toggle("hide");
}

function search(){
    const keywords = document.getElementById("search-content").value;
    console.log(keywords);
}

let check = true;
function showSideBar(){
    document.getElementsByClassName("side-bar")[0].classList.toggle("hide");
    if(check){
        document.getElementById("button-for-side-bar").innerText = "SHOW SIDE BAR";
        check = !check;
    }   else{
        document.getElementById("button-for-side-bar").innerText = "HIDE SIDE BAR";
        check = !check;
    }
}

const place_data = [
    {
        pic_src : "https://cms.dmpcdn.com/travel/2022/09/26/4ea92f30-3d72-11ed-aff8-dbde766ef26b_webp_original.jpg",
        name : "Kawachi Fuji Garden",
        Duration:"1 week",
        Group:"3-6 people",
        Price:"16,000",
        description:"จินตนาการเหมือนได้ไปเดินอยู่ในภาพวาดสีน้ำมันแสนสวยในฝัน ตามเรามาปักหมุดที่นี่ได้เลยค่ะ สวน Kawachi Fuji Garden เดินชมดอกไม้สวยๆ ท่ามกลาง อุโมงค์ดอกไม้ Wisteria นั่นเอง ที่นี่มีต้น Wisteria มากกว่า 150 ต้นและ 20 สายพันธุ์ บานสะพรั่งเต็มพื้นที่ 10,000 ตารางเมตร เหมาะกับการไปเดินชิลๆ ผ่อนคลายสบายใจ นอกจากนี้ช่วงปลายๆ เดือนเมษายนของทุกปีจะมีการเฉลิมฉลอง Wisteria Festival อีกด้วยค่ะ"
    },
    {
        pic_src : "https://cms.dmpcdn.com/travel/2022/09/26/6e6fc4c0-3d75-11ed-aff8-dbde766ef26b_webp_original.jpg",
        name : "Nachi Fall",
        Duration:"1 week",
        Group:"3-6 people",
        Price:"24,000",
        description:"Nachi Fall เป็นน้ำตกที่สูงที่สุดและใหญ่ที่สุดของญี่ปุ่นค่ะ ซึ่งมีความสูงถึง 133 เมตร เป็นอีกหนึ่งสถานที่ที่จัดได้ว่าสวยมากๆ ในญี่ปุ่น และบริเวณน้ำตกยังมี วัดเซกันโทจิ (Seiganto-ji Temple) ที่งดงาม โดดเด่นด้วยเจดีย์สามชั้นสีแดง อีกทั้งน้ำตก Nachi Fall ที่นี่ยังเป็นหนึ่งในเส้นทาง คุมาโนะ โคโดะ (Kumano Kodo) เส้นทางแสวงบุญ ซึ่งคนญี่ปุ่นเชื่อว่าที่นี่เป็นดินแดนศักดิ์สิทธิ์ของเทพเจ้าอีกด้วย"
    },
    {
        pic_src : "https://cms.dmpcdn.com/travel/2022/09/26/69f93b50-3d76-11ed-aff8-dbde766ef26b_webp_original.jpg",
        name : "Hitachi Seaside Park",
        Duration:"1 week",
        Group:"3-6 people",
        Price:"16,000",
        description:"Hitachi Seaside Park เป็นสวนที่ได้รับความนิยมมากๆ ในญี่ปุ่นบนเนินเขา Miharashi ค่ะ ที่นี่มีพื้นที่ถึง 2,187.5 ไร่ เป็นแหล่งท่องเที่ยวที่น่าตื่นตาตื่นใจ เพราะในแต่ละฤดูกาล ทางสวนจะมีการปลูกดอกไม้ที่แตกต่างกันออกไปค่ะ ทำให้เที่ยวได้ตลอดทั้งปี ไฮไลท์คือการมาถึงเนินเขาที่เต็มไปด้วย ดอก Nemophilia ซึ่งเป็นดอกไม้สีฟ้าขนาดเล็ก สวยเหมือนในนิทานเรียงรายกันอย่างอลังการ"
    },
    {
        pic_src : "https://cms.dmpcdn.com/travel/2022/09/26/22beb700-3d77-11ed-aff8-dbde766ef26b_webp_original.jpg",
        name : "Happo Pond",
        Duration:"1 week",
        Group:"3-6 people",
        Price:"16,000",
        description:"Happo Pond ตั้งอยู่ในบริเว อุทยานแห่งชาติของนากาโน่ ถูกโอบล้อมด้วยเทือกเขาเจแปนแอลป์ เป็นสวถานที่ท่องเที่ยวญี่ปุ่น ที่สวยงามมากๆ และเหมาะกับการมาเล่นสกีในฤดูหนาว บึงน้ำนี้อยู่ในภูเขาที่มีความสูงถึง 2,060 เมตรจากระดับน้ำทะเลเลยทีเดียว แน่นอนว่าวิวตรงนี้สวยงามจับใจมากๆ ค่ะ เพราะเราจะได้เห็นภาพของเทือกเขาเจแปนแอลป์สะท้อนน้ำสวยใสราวกับกระจก"
    },
    {
        pic_src : "https://cms.dmpcdn.com/travel/2022/09/26/47667420-3d78-11ed-88f1-dd506a656386_webp_original.jpg",
        name : "Motonosumi Jinja",
        Duration:"1 week",
        Group:"3-6 people",
        Price:"16,000",
        description:"เสาโทริอิสีแดงตั้งตระง่านจากภูเขาเรียงรายไปจนถึงทะเล ที่นี่คือ Motonosumi Inari Shire ยามากุจิ เป็นอีกหนึ่งสถานที่ท่องเที่ยวที่ต้องห้ามพลาดถ้าได้มาเที่ยวที่ยามากุจิกันเลยทีเดียว ศาลเจ้าริมทะเลที่นี่มีความสวย และมีความเชื่อว่า จะช่วยให้ผู้คนที่มาอธิษฐานประสบความสำเร็จในด้านเงินทอง โชคลาภ และการเดินทางปลอดภัย  ไฮไลท์ที่โดดเด่นอีกอย่างของที่นี่ก็คือ กล่องรับบริจาค ที่จะตั้งอยู่บนเสาโทริอิซึ่งตั้งอยู่หน้าทางเข้าศาลเจ้า ลองไปโยนเหรียญกันได้ค่ะ ใครสามารถทำได้สำเร็จ ก็จะทำให้สิ่งที่เราได้อธิษฐานขอพรไว้เป็นไปดังที่ตั้งใจนั่นเอง"
    },
    {
        pic_src : "https://cms.dmpcdn.com/travel/2022/09/26/cd5a2e90-3d79-11ed-9732-adb8407151fd_webp_original.jpg",
        name : "Mt. Zao",
        Duration:"1 week",
        Group:"3-6 people",
        Price:"16,000",
        description:"อีกหนึ่ง ที่เที่ยวหน้าหนาวญี่ปุ่น ที่สวยงาม และต้องห้ามพลาดเลยก็คือ Mt. Zao ที่นี่เป็นเทือกเขาที่ทอดตัวระหว่างจังหวัดมิยางิ (Miyagi) และจังหวัดยามากาตะ (Yamagata) ค่ะ ในช่วงฤดูหนาวที่มีหิมะปกคลุม ที่นี่จะขาวโพลนสวยงามอลังการมากๆ อีกทั้งยังมี Ice Monster หรือ อสูรหิมะ ซึ่งในภาษาญี่ปุ่นเรียกว่า จุเฮียว (Juhyo) เป็นการทับถมของหิมะจนมีรูปร่างแตกต่างกันไป มองจากกระเช้าไฟฟ้า สวยงามมากๆ ทีเดียวค่ะ"
    },
]

const param = new URLSearchParams(window.location.search);
const id = param.get("id");

const main_content = document.getElementById("main-container");
//////img_container
const img_container = document.createElement("div");
img_container.classList.add("img-container");

const img = document.createElement("img");
img.src = place_data[id].pic_src;

img_container.appendChild(img);

//////Title
const Title = document.createElement("h1");
Title.id = "Name-Info";
Title.innerText = place_data[id].name;

//////all
const description = document.createElement("p");
description.innerText = place_data[id].description;

const duration = document.createElement("p");
duration.innerText = `Duration : ${place_data[id].Duration}`;

const group = document.createElement("p");
group.innerText = `Group : ${place_data[id].Group}`;

const price = document.createElement("p");
price.innerText = `Price : ฿${place_data[id].Price}`;


duration.id = "sell-info";
group.id = "sell-info";
price.id = "sell-info";
description.id = "description";

//////button_container
const button_container = document.createElement("div");
button_container.classList.add("button-container");

const add_to_cart_button = document.createElement("button");
add_to_cart_button.classList.add("add-to-cart");
add_to_cart_button.innerText = "Add to cart";

button_container.appendChild(add_to_cart_button);

main_content.appendChild(img_container);
main_content.appendChild(Title);
main_content.appendChild(description);
main_content.appendChild(duration);
main_content.appendChild(group);
main_content.appendChild(price);
main_content.appendChild(button_container);