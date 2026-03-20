import './UserCard.css'

const UserCard = ({ user }) => {
    return (
        <div className='userCard'>
            <img className='user-card-avatar' src={`https://robohash.org/${user.id}`} />

            <div className='user-card-info'>
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Idade: {user.age}</p>
            </div>
        </div>
    )
}

export default UserCard
