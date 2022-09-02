//import images from folder function
const importAll = (r) => {
  return r.keys().map(r);
};

const mural = importAll(
  require.context("../../assets/images/kitch_imgs/mural")
);

export const SliderData1 = [
  {
    image: mural[0],
  },
  {
    image: mural[1],
  },
];
