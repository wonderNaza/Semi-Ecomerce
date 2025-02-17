import { useParams } from "react-router-dom"

const Electronic = () => {
  const params = useParams()
  return (
    <div>Electronic: {params.username} {params.age}</div>
  )
}

export default Electronic