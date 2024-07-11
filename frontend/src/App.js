import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage';
import Error from './pages/Error';
import Events, { loader as eventsLoader } from './pages/Events'
import EventDetailPage, { loader as eventDetailLoader,  action as eventDetailAction} from './pages/EventDetailPage'
import NewEventPage, { action as newEventAcion} from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage'
import RootLayout from './pages/Root';
import EventRoot from './pages/EventRoot';

function App() {
  const router = createBrowserRouter([
    { 
      path: '/',
      element: <RootLayout />,
      errorElement: <Error/>,
      children: [
        { index: true, element: <HomePage/> },
        { 
          path: 'events', 
          element: <EventRoot/>,
          children: [
            { 
              index: true, 
              element: <Events/>, 
              loader: eventsLoader
            },
            {
              path: ':id',
              loader: eventDetailLoader,
              id: 'event-detail',
              children: [
                {
                  index: true, 
                  element: <EventDetailPage/>,
                  action: eventDetailAction
                },
                { path: 'edit', element: <EditEventPage/> }
              ]
            },
            { path: 'new', element: <NewEventPage/>, action: newEventAcion },
          ]
        },
       
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App;
