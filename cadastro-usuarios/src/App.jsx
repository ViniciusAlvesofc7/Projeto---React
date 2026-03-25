import { useEffect, useState } from 'react';
import './App.css'
import UserCard from './components/UserCard';
import axios from 'axios'

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [users, setUsers] = useState([]);

  async function buscarUsuarios() {
    const resposta = await axios.get('http://localhost:3003/usuarios')

    setUsers(resposta.data)
  }

  useEffect(() => {
    buscarUsuarios();
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post('http://localhost:3003/usuarios', {
      nome,
      email,
      idade
    })

    setNome('')
    setIdade('')
    setEmail('')

    buscarUsuarios();
  }

  async function deletarUsuario(id) {
    try {
      await axios.delete(`http://localhost:3003/usuarios/${id}`);
      buscarUsuarios(); // 🔄 atualiza lista
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Nome'
          value={nome}
          onChange={event => setNome(event.target.value)}
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
          value={idade} onChange={event => setIdade(event.target.value)} max={200} min={0}
        />

        <button type='submit'>Cadastrar</button>
      </form>

      <div className='user-list'>
        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            deletarUsuario={deletarUsuario}
          />
        ))}
      </div>
    </div>
  )
}

export default App
