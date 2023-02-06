import '../index.css';

function Navbar() {
  const getList = () => {
    for (let i = 0; i <= 3; i++) {
      return <h2> {a[i]} </h2>;
    }
  };
  return (
    <div className="navbar">
      <getList/>
      {/* <a href='\' >Home</a > */}
      {/* <a href='\About' >About</a > */}
      {/* <a href='\Contact' >Contact</a > */}
    </div>
  );
}
export default Navbar;
  
  
