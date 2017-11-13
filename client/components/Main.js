import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  // To pass down the props to children when not using JSX, use cloneElement
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
