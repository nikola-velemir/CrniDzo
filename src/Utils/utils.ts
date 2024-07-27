export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// export const useWindowSize = (
//   componentRef: React.RefObject<HTMLDivElement>
// ) => {
//   let size = componentRef.current?.getClientRects();
//   const [widnowSize, setWidnowSize] = useState({
//     width: size?.width,
//     height: size?.height,
//   });

//   useEffect(() => {
//     const handleSize = () => {
//       setWidnowSize({
//         width: size.width,
//         height: size.height,
//       });
//     };
//     window.addEventListener("resize", handleSize);

//     // Cleanup function to remove the event listener
//     return () => {
//       window.removeEventListener("resize", handleSize);
//     };
//   }, []);
//   return widnowSize;
// };
