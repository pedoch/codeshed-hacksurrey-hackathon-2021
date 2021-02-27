function MainLayout({ children }) {
  return (
    <div className="w-full h-screen">
      <div className="w-full shadow flex justify-between p-5">
        <a className="text-blue-900 no-underline text-xl font-bold" href="/">
          CodeShed
        </a>
        <div className="text-lg flex space-x-5">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
      <div className="flex flex-grow">{children}</div>
    </div>
  );
}

export default MainLayout;
