import React from 'react';

/*********************** UTIL IMPORTS **********************/
import lib from '../util/lib'

// Team assignments is a stateless component that will render onto an element all of the passed 
// assignments to it through the props

let TeamAssignments = (props) => {
  
  const assignments = props.assignments;

  if (!assignments) {
  	return (<div></div>);
  }

  let team = [];

  for (let player in assignments) {
  	
  	let person = { name: player };
  	person.role = assignments[player][0];
  	person.god = assignments[player][1];
  	person.images = person.god.images;
  	team.push(person);

  }

  return (
  	<div className="teamAssignments">
  	  <div className="row">
  	  {team.map((member) => {
  	  	return <div className="col-sm-2" key={member.name}>
  	  	  <div className="row">
  	  	    {member.name}: {lib.capitalize(member.role)} as {lib.capitalize(member.god.name)}
  	  	  </div>
  	  	  <img src={'https://smitepartyservice.herokuapp.com/images?name=' + member.god.name} className="randomizerImg" />
  	  	  </div>
  	  })}
  	  </div>
  	</div>
  );

};

export default TeamAssignments;