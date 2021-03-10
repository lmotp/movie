import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    return (
      <>
        <div className="Detail__Container">
          <h1>{location.state.title}</h1>
          <h3>{location.state.year}</h3>
          <ul>
            {location.state.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <img
            src={location.state.poster}
            title={location.state.title}
            alt={location.state.title}
          />
          <p>{location.state.summary}</p>
        </div>
      </>
    );
  }
}

export default Detail;
