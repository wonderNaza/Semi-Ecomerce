import { useParams } from "react-router-dom"

const Location = () => {
  const params = useParams()
  return (
    <div>Location {params.location}</div>
  )
}

export default Location