import './UserCard.css'

const UserCard = ({ user, deletarUsuario }) => {
    return (
        <div className='userCard'>
            <img className='user-card-avatar' src={`https://robohash.org/${user._id}`} />

            <div className='user-card-info'>
                <h2>{user.nome}</h2>
                <p>Email: {user.email}</p>
                <p>Idade: {user.idade} Anos</p>

            </div>
                
            <span onClick={() => deletarUsuario(user._id)}>X</span>
        </div>
    )
}

export default UserCard
