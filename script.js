// const skills = document.getElementById("skills"); // Fix method name

// const skillsObj = [
//     { image: "", text: "C++" },
//     { image: "", text: "C" },
//     { image: "", text: "JavaScript" },
//     { image: "", text: "Python" },
//     { image: "", text: "HTML5" },
//     { image: "", text: "CSS3" },
//     { image: "", text: "Tailwind CSS" },
//     { image: "", text: "Bootstrap" },
//     { image: "", text: "ReactJs" },
//     { image: "", text: "Node.js" },
//     { image: "", text: "Express.js" },
//     { image: "", text: "Java" },
//     { image: "", text: "MongoDB" },
//     { image: "", text: "SQL" },
//     { image: "", text: "MySQL" },
//     { image: "", text: "DSA" },
//     { image: "", text: "Numpy" },
//     { image: "", text: "Pandas" },
//     { image: "", text: "Matplotlib" },
//     { image: "", text: "Mongoose" },
// ];

// function createSkillsSection(skillsObj) {
//     for (let i = 0; i < skillsObj.length; i++) {
//         const divImage = document.getElementById(`skillImage${i}`);
//         const divh4 = document.getElementById(`skillh4${i}`);
        
//         if (divImage && divh4) {  // Ensure elements exist before accessing properties
//             divImage.style.backgroundImage = `url(${skillsObj[i].image})`;
//             divh4.innerHTML = skillsObj[i].text;
//         }
//     }
// }

// createSkillsSection(skillsObj);

const skillsContainer = document.getElementById("skills");

const skillsObj = [
    { image: "./Video/C++.jpeg", text: "C++" },
    { image: "./Video/C.jpeg", text: "C" },
    { image: "./Video/Js.png", text: "JavaScript" },
    { image: "./Video/python.png", text: "Python" },
    { image: "./Video/htmlpng.png", text: "HTML5" },
    { image: "./Video/Css3.jpeg", text: "CSS3" },
    { image: "./Video/TailwindCss.png", text: "Tailwind CSS" },
    { image: "./Video/bootstrap.jpeg", text: "Bootstrap" },
    { image: "./Video/react.png", text: "ReactJs" },
    { image: "./Video/nodejs.png", text: "Node.js" },
    { image: "./Video/express.png", text: "Express.js" },
    { image: "./Video/java.png", text: "Java" },
    { image: "./Video/mongodb.jpeg", text: "MongoDB" },
    { image: "./Video/Sql.png", text: "SQL" },
    { image: "./Video/Mysql.png", text: "MySQL" },
    { image: "./Video/dsa.png", text: "DSA" },
    { image: "./Video/numpy.png", text: "Numpy" },
    { image: "./Video/pandas.png", text: "Pandas" },
    { image: "./Video/matplotlib.png", text: "Matplotlib" },
    { image: "./Video/mongoose.png", text: "Mongoose" },
];

function createSkillsSection() {
    skillsContainer.innerHTML = skillsObj.map((skill, index) => `
        <div class="skill">
            <div class="skill-image" id="skillImage${index}" style="background-image: url(${skill.image || 'default-skill.png'})"></div>
            <h4 class="skill-title" id="skillh4${index}">${skill.text}</h4>
        </div>
    `).join('');
}

// Load skills on page load
document.addEventListener("DOMContentLoaded", createSkillsSection);

