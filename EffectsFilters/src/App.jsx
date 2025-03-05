import img from "./assets/image.png"

const App = () => {
  return (
    <div className="h-screen p-4 parent bg-slate-900 flex flex-row">
      
      <div className="w-64 h-96 m-10 blur-md hover:blur-none backdrop-blur-sm inline-block text-slate-500 bg-slate-300/50 border rounded-lg shadow-md shadow-white text-center font-bold brightness-50 hover:brightness-100">
        <img src={img} className="w-64 h-64 p-2 cursor-pointer rounded-md"></img>
        <h1 className="text-2xl text-violet-700">Goat</h1>
        <p className="mb-4 text-violet-700">Lebron James</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-blue-500/50 hover:bg-blue-500 hover:text-black">Say Hello</button>
      </div>

      <div className="w-64 h-96 m-10 blur-md hover:blur-none backdrop-blur-sm inline-block text-slate-500 bg-slate-300/50 border rounded-lg shadow-md shadow-white text-center font-bold brightness-50 hover:brightness-100">
        <img src={img} className="w-64 h-64 p-2 cursor-pointer rounded-md"></img>
        <h1 className="text-2xl text-violet-700">Goat</h1>
        <p className="mb-4 text-violet-700">Lebron James</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-blue-500/50 hover:bg-blue-500 hover:text-black">Say Hello</button>
      </div>

      <div className="w-64 h-96 m-10 blur-md hover:blur-none backdrop-blur-sm inline-block text-slate-500 bg-slate-300/50 border rounded-lg shadow-md shadow-white text-center font-bold brightness-50 hover:brightness-100">
        <img src={img} className="w-64 h-64 p-2 cursor-pointer rounded-md"></img>
        <h1 className="text-2xl text-violet-700">Goat</h1>
        <p className="mb-4 text-violet-700">Lebron James</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-blue-500/50 hover:bg-blue-500 hover:text-black">Say Hello</button>
      </div>

      <div className="w-64 h-96 m-10 blur-md hover:blur-none backdrop-blur-sm inline-block text-slate-500 bg-slate-300/50 border rounded-lg shadow-md shadow-white text-center font-bold brightness-50 hover:brightness-100">
        <img src={img} className="w-64 h-64 p-2 cursor-pointer rounded-md"></img>
        <h1 className="text-2xl text-violet-700">Goat</h1>
        <p className="mb-4 text-violet-700">Lebron James</p>
        <button className="px-3 py-2 rounded-lg cursor-pointer bg-blue-500/50 hover:bg-blue-500 hover:text-black">Say Hello</button>
      </div>
      
    </div>
  )
}

export default App
