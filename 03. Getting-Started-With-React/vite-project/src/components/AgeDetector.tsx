type AgeDetectorProps = {
    name:string, 
    birthYear:number
}

const AgeDetector = ({name,birthYear}: AgeDetectorProps) => {
    const date = new Date();
  return (
    <div>
        <p>Hello, {name}</p>
        <h3>You are {date.getFullYear() - birthYear} years old</h3>
    </div>
  )
}

export {AgeDetector}