

const App = () => {
  return (
    <div className="h-screen text-white bg-slate900">
      <div className="mx-auto p-5">
        <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-3 grid-rows-4">
          <div className="bg-sky-500 p-6 rounded-lg row-span-2">1</div>
          <div className="bg-sky-500 p-6 rounded-lg row-span-3">2</div>
          <div className="bg-sky-500 p-6 rounded-lg row-span-4">3</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-3">4</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-3">5</div>
          <div className="bg-sky-500 p-6 rounded-lg col-span-3">6</div>
        </div>
      </div>
    </div>
  )
}

export default App
