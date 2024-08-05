function Time() {
  let time = new Date();
  return (
    <p className="Lead">
      This is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()};
    </p>
  );
}

export default Time;
