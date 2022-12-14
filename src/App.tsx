import { observer } from 'mobx-react-lite'
import { redirect } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Auth } from './components/auth/Auth'
import './index.scss'
import { MainPage } from './pages/main-page/MainPage'
import { TasksPage } from './pages/tasks-page/TaslsPage'
import { authorisation } from './store/AuthUser'

const App = observer(() => {

  return (

    <div className="app">
      <div className='login'>
        <Auth />

      </div>
      <div className='content'>
        
        <Routes>
          <Route path='/' element={authorisation.isAuth ? <Navigate to='/tasks' /> : <MainPage />} />
          <Route path='/tasks' element={authorisation.isAuth ? <TasksPage /> : <Navigate to='/' />} />
        </Routes>
      </div>
    </div>

  )
})

export default App;


