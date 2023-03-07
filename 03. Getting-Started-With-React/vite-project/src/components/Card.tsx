type CardProps = {
     name: string
}

export const Card = ({name}:CardProps) => {
  return (
    <div>
        <h2>Hello , I am {name}</h2>
    </div>
  )
}

// export default Card