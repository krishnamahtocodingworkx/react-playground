export const countUpdate = (
  val: string,
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  if (val === "inc") return setCount(count + 1);
  if (val === "dec") return setCount(count - 1);
};
