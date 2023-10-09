import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import SavedRecipePage from '../SavedRecipePage/SavedRecipePage';
import NavBar from '../../components/NavBar/NavBar'
import GroceryList from '../NewOrderPage/GroceryList';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<GroceryList />} />
            <Route path="/recipes/history" element={<SavedRecipePage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


