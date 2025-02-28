const UserCard = ({ user }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
        <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-500">{user.phone}</p>
        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {user.website}
        </a>
      </div>
    );
  };
  
  export default UserCard;
  