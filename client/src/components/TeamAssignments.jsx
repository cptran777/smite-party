// Team assignments is a stateless component that will render onto an element all of the passed 
// assignments to it through the props

let TeamAssignments = (props) => {
  
  const assignments = props.assignments;
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
  	  {team.map((member) => {
  	  	return <div>{member.name}: {person.role} as {person.god}</div>
  	  })}
  	</div>
  );

};