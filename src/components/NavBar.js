import React from 'react';

function NavBar({ color, title }) {
  const style = {
    backgroundColor: color,
    padding: '10px',
    marginBottom: '20px',
    textAlign: 'center',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return <div style={style}>{title}</div>;
}

export default NavBar;
