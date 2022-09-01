//import images from folder function
const importAll = (r) => {
  return r.keys().map(r);
};

const mural = importAll(
  require.context("../../assets/images/ext_imgs/mural-2")
);

export const SliderData2 = [
  {
    image: mural[0],
  },
  {
    image: mural[1],
  },
];
