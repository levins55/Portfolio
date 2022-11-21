 AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "NAME ",
    cardImage: "./assets/image/levin S.jpg",
    place: "LEVIN S",
    objective: "Hi I'm Looking For a Good and Passinating Job Role, And Eager to Learn New Skills",
    time: "DOB:01/08/2002",
    desp: "<ul><li>ADDRESS : Vavi kadu,Ganapathi palayam,Mangalam,Tiruppur-641 663.</li> <li>Phone no : 6383065938</li> <li> g-mail : levinsbscit2019@gmail.com</li></ul>" 
  },

  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, objective}) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span><br><br><br>                                                         
              <span class="career">${objective}</span>
              
            </p>
            <ol>
           
             
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Github screen (project)

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nhaac Restaurant Website",
   /* cardImage: "assets/images/experience-page/1.jpg",*/
    cardImage: "assets/images/designs/ProjetoPizza.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Registration Form",
  /*  cardImage: "assets/images/experience-page/2.jpg", */
    cardImage: "assets/images/designs/Blog_dark_light.png",
    description: "Registration Form to receive newsletter",
  },
  {
    title: "Landing Page Nike",
    /* cardImage: "assets/images/experience-page/3.jpg", */
    cardImage: "assets/images/designs/Projeto_Chuteira.jpg",
    description:
      "Landing Page Football Boots Nike ",
  },
  {
    title: "Tutorial Rest API (In Developing)",
    cardImage: "assets/images/designs/rest_tutorial.png",
    description:"REST API  tutorial for all levels: What is Rest?, HTTP methods, Resource Name, IdemPotence...",
  },
  {
    title: "BMI calculator",
    cardImage:"assets/images/designs/BMI Calculator.jpg",
    description:"BMI Calculator app. Developed using Flutter",
  },
];

