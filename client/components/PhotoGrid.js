import React from 'react';
import Photo from './Photo';

/* Create component to loop through array of posts,
& return a Photo component with all the info passed down to them.
We need the index & specific info about the post, so pass that down as well. */
const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
});

export default PhotoGrid;
