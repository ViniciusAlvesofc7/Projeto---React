import { useState } from 'react';
import './App.css'
import UserCard from './components/UserCard';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState();
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const newUsers = {
      id: Date.now(),
      name,
      email,
      age
    }

    setUsers([...users, newUsers])

  }

  return (
    <div className="app">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome'
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="number"
          placeholder='Idade'
          value={age} onChange={event => setAge(event.target.value)} max={200} min={0}
        />

        <button type='submit'>Cadastrar</button>
      </form>

      <div className='user-list'>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    </div>
  )
}

export default App
