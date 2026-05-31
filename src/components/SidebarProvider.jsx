function Sidebar({ setTotalCards }) {
  return (
    <div>
      <div className="diff-title">Difficulty</div>
      <div className="diff-btns">
        <button onClick={() => setTotalCards(10)}>Easy</button>
        <button onClick={() => setTotalCards(15)}>Normal</button>
        <button onClick={() => setTotalCards(20)}>Hard</button>
        <button onClick={() => setTotalCards(25)}>Extreme</button>
      </div>
    </div>
  );
}

export default Sidebar;
