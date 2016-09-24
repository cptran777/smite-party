// The Randomizer component allows the user to enter the names of their friends and have random
// gods and roles assigned to each person. 

import React from 'react';

import TeamAssignments from './TeamAssignments';

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
      url: 'https://smiteparty.herokuapp.com/randomize', 
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
        this.setState({teamAssignments: data});
      },
      error: (err) => {
        console.log('No');
      }
    });

    // This code section to be deleted once proper assignment has been confirmed
    // if (this.state.teamAssignments === null) {
    //   this.setState({teamAssignments: JSON.stringify({'Charlie': this.state.player1, 'Brent': this.state.player2, 'Kevin': this.state.player3})});
    // }

    return;
  }

  render() {
    let numPlayers = ['1', '2', '3', '4', '5'];
    return (
      <div className="Randomizer">
        <h1> Randomizer </h1>
        <div className="form-group">
          <label>Enter player names and hit submit to have random roles/gods assigned to each player!</label>
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
        {this.state.teamAssignments ? <TeamAssignments assignments={this.state.teamAssignments} /> : null}
      </div>
    )
  }
}

export default Randomizer;