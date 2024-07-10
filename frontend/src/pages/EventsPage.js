import {Link} from 'react-router-dom';

const DUMMYEVENT = [
  {id: 'e1', title: 'el1 title'},
  {id: 'e2', title: 'el2 title'},
  {id: 'e3', title: 'el3 title'},
  {id: 'e4', title: 'el4 title'}
]

function EventsPage() {
  return (
    <>
      <ul>
        {DUMMYEVENT.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
    
  )
} 
export default EventsPage;