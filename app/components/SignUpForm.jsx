export default function SignUpForm() {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="username">
              Username
            </label>
            <input
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="email">
              Email Address
            </label>
            <input
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="password">
              Password
            </label>
            <input
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 font-medium mb-2"
              for="confirm-password"
            >
              Confirm Password
            </label>
            <input
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            class="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p class="text-center text-gray-600 mt-4">
          Already have an account?
          <a href="/login" class="text-indigo-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
