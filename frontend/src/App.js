import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage';
import Error from './pages/Error';
import EventsPage from './pages/EventsPage'
import EventDetailPage from './pages/EventDetailPage'
import NewEventPage from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage'
import RootLayout from './pages/Root';
import EventRoot from './pages/EventRoot';

function App() {
  const router = createBrowserRouter([
    { 
      path: '',
      element: <RootLayout />,
      error: <Error/>,
      children: [
        { index: true, element: <HomePage/> },
        { path: 'events', element: <EventRoot/>,
          children: [
            { index: true, element: <EventsPage/> },
            { path: ':id', element: <EventDetailPage/> },
            { path: 'new', element: <NewEventPage/> },
            { path: ':id/edit', element: <EditEventPage/> }
          ]
        },
       
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App;
