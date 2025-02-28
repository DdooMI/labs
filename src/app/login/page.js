export default function LoginPage() {
    return (
      <div className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form className="w-full max-w-sm">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    );
  }
  