export function clickOutside(node) {
  const handleClick = (event) => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };
  document.addEventListener("click", handleClick, true);
  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}

// export function clickOutside(node, onEventFunction) {
//   const handleClick = (event) => {
//     var path = event.composedPath();

//     if (!path.includes(node)) {
//       onEventFunction();
//     }
//   };

//   document.addEventListener('click', handleClick);

//   return {
//     destroy() {
//       document.removeEventListener('click', handleClick);
//     },
//   };
// }
