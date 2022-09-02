//import images from folder function
const importAll = (r) => {
  return r.keys().map(r);
};

const mural = importAll(require.context("../../assets/images/home_imgs/mural"));

export const SliderData = [
  {
    image: mural[0],
  },
  {
    image: mural[1],
  },
  {
    image: mural[2],
  },
  {
    image: mural[3],
  },
  {
    image: mural[4],
  },
];
