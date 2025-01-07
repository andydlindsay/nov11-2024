const Header = (props) => {
  console.log('props', props);

  return (
    <div>
      <h2>Header Component</h2>
      { props.children }
    </div>
  );
};

export default Header;
