import { useMemo, useState } from "react";

export default function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const sum = useMemo(() => {
    console.log("Calculating");

    return data.reduce((acc, data) => acc + data, 0);
  }, [check1]);

  console.log(sum);

  return (
    <>
      <button onClick={() => setCheck1((p) => !p)}>Check1</button>
      <button onClick={() => setCheck2((p) => !p)}>Check2</button>
    </>
  );
}
