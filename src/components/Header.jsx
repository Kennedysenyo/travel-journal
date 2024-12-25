import globe from "/img/globe.png";


const Header = () => {
  return (
    <header>
      <nav>
        <img src={globe} alt="globe icon" />
        <span>my travel journal.</span>
      </nav>
    </header>
  )
}

export default Header;