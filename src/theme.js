const common = {
  breakpoint: {
    mobile: "500px",
  },
};

export const theme = {
  lightMode: {
    ...common,
    color: {
      background: "#FBFBFE",
      title: "#252525",
      sectionBackground: "#FFFFFF",
      text: "#6E7E91",
      portfolioItemTitle: "#0366D6",
      link: "#0366D6",
      titleBorder: "#D1D5DA",
      projectBorder: "rgba(209, 213, 218, 0.3)",
      projectBorderHover: "rgba(3, 102, 214, 0.2)",
      socialMedia: "#252525",
      togglerBackground: "#E5E5E5",
      hireMeButtonBorder: "1px solid rgba(209, 213, 218, 0.3)",
      hireMeButtonHoverShadow:
        "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;",
      emailHover: "#2188FF",
      icon: "#FFFFFF",
      spinnerMain: "#D1D5DA4D",
    },
  },
  darkMode: {
    ...common,
    color: {
      background: "#252525",
      title: "#FFFFFF",
      sectionBackground: "rgba(54, 54, 54, 0.72)",
      text: "#FFFFFF",
      portfolioItemTitle: "#FFFFFF",
      link: "#2188FF",
      titleBorder: "#E5E5E5",
      projectBorder: "rgba(209, 213, 218, 0.1)",
      projectBorderHover: "rgba(3, 102, 214, 0.5)",
      socialMedia: "#FFFFFF",
      togglerBackground: "#363636",
      hireMeButtonBorder: "1px solid rgba(209, 213, 218, 0.3)",
      hireMeButtonHoverShadow:
        "2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE",
      emailHover: "#0366D6",
      icon: "#252525",
      spinnerMain: "#363636",
    },
  },
};
