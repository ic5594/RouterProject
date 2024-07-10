import { useParams, Link } from 'react-router-dom'

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>{params.id}</h1>
      <h3>{params.title}</h3>
      <Link to="..">back</Link>
    </>
  )
}

export default EventDetailPage;