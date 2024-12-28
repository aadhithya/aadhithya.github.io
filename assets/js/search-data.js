// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-repositories",
          title: "repositories",
          description: "Here ycan find some of my opensource projects. For a full list of my projects, visit [github](https://github.com/aadhithya).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here you can find a brief version of my CV. Please download the pdf for a more informative version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-from-tum",
          title: 'Graduated from TUM! 🎓',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-dtu-mlops-summer-school-and-won-the-mlops-hackathon",
          title: 'I participated in the DTU MLOps Summer School and won the MLOps hackathon!...',
          description: "",
          section: "News",},{id: "news-i-ve-joined-ultivue-emea-srl-as-an-image-analysis-scientist",
          title: 'I’ve joined Ultivue EMEA srl as an Image Analysis Scientist.',
          description: "",
          section: "News",},{id: "news-i-released-rajini-an-open-source-esoteric-programming-language-find-the-writeup-here",
          title: 'I released rajini++, an open-source esoteric programming language! Find the writeup here.',
          description: "",
          section: "News",},{id: "news-i-ve-joined-hasty-gmbh-as-a-senior-machine-learning-engineer",
          title: 'I’ve joined Hasty GmbH as a Senior Machine Learning Engineer!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
