import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Moneta",
    image: projectOne,
    description: (
      <>
        <p>
          Moneta is a unique financial tracking app used by multiple people, 
          including small businesses to keep track of their expenses. The app was built using
          Apple's SwiftUI and it uses Core Data to store all the data.
        </p>
      </>
    ),
  },
  2: {
    title: "Threads",
    image: projectTwo,
    description: (
      <>
        <p>
          A clone of the very popular app, Threads. This app was built using Apple's
          SwiftUI but its database was built using Firebase. It functions exactly like 
          the original Threads app, including user authentication, a sign up option for new users,
          and a login page for existing users.
        </p>
      </>
    ),
  },
  3: {
    title: "Roast",
    image: projectThree,
    description: (
      <>
        <p>
          Roast is an iOS and Android compatible app built using React Native, JavaScript, 
          TailwindCSS, HTML, CSS. Roast is an app that I had built for a small coffee shop 
          business in my area and is still being used by its customers to this day. 
        </p>
      </>
    ),
  },
};

export default projects;
