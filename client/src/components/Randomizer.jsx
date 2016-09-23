import React from 'react';

let TeamAssignments = (props) => {
  return (<p>{props.message}</p>);
};

class Randomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamAssignments: null,
      text: null,
      player1: 'player1',
      player2: 'player2',
      player3: 'player3',
      player4: 'player4',
      player5: 'player5'
    }
  }

  handleChange(e) {
    console.log(e.target);
    let updatedState = {};
    updatedState[e.target.name] = e.target.value;
    this.setState(updatedState);
  }

  handleSubmit() {

    $.ajax({
      uri: '/randomize', 
      type: 'GET',
      data: {
        players: [
          this.state.player1,
          this.state.player2,
          this.state.player3,
          this.state.player4,
          this.state.player5
        ],
        roles: ['support', 'carry', 'mid', 'jungler', 'solo']
      },
      dataType: 'json',
      success: (data) => {
        console.log('Response: ', data);
        this.setState({text: JSON.stringify(data)});
      },
      error: (err) => {
        console.log('No');
      }
    });

    if (this.state.teamAssignments === null) {
      this.setState({teamAssignments: JSON.stringify({'Charlie': this.state.player1, 'Brent': this.state.player2, 'Kevin': this.state.player3})});
    }

    this.setState({text: this.state.teamAssignments});
    return;
  }

  render() {
    let numPlayers = ['1', '2', '3', '4', '5'];
    return (
      <div className="Randomizer">
        <div className="form-group">
          {
            numPlayers.map((num) => {
              return (
                <div className="row" key={"player" + num}>
                  <div className="col-sm-7">
                    <label>Player {num}</label>
                    <input name={'player' + num} onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Name"/>
                  </div>
                </div>
              );
            })
          }
        </div>
        <button className="btn" onClick={this.handleSubmit.bind(this)}>S u b m i t</button>
        {this.state.teamAssignments ? <TeamAssignments message={this.state.text} /> : null}
      </div>
    )
  }
}

export default Randomizer;