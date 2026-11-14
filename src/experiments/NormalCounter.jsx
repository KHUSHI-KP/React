
function NormalCounter() {
  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h2>Normal Counter</h2>

      <p>{count}</p>

      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default NormalCounter;
