import React from 'react';

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('/api/all', {
      method: 'GET'
    })
    .then(r => r.json()) // (result) => { return result.json() }
    .then(r => console.log(r)) // (result) => { console.log(result) }
  }

  render() {
    return (
      <div>
        asdhjfkasdfk
      </div>
    )
  }
}
export default App;
