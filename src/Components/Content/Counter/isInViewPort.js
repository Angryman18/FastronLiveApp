const isInViewPort = ({ name }) => {
  const abc = document.querySelector(name);
  let bounding = abc.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    console.log("In the viewport!");
    return false;
  } else {
    console.log("Not in the viewport... whomp whomp");
    return false;
  }
};

export default isInViewPort;
