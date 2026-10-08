export type EmployeeCardProps = {
  name: string;
  job: string;
  email: string;
  src: string;
}

function EmployeeCard( {name, job , email, src}: EmployeeCardProps ){
  return(
    <div className="employee-card">
      <img className="employee-card-img" src={src} alt={name}/>
      <div className="profile">
        <p>{name}</p>
        <p>{job}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
