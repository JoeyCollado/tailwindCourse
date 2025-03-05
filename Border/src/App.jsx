import React from 'react'

const App = () => {
  return (
    <div className='h-screen text-white bg-slate-900 parent p-5 '>
      <header className='w-full border-2 border-t-4 border-dashed'>Header</header>
      <header className='w-full border-r-2'>Header</header>
      <header className='w-full border-l-2'>Header</header>
      <header className='w-full border-t-2 border-amber-500 border-double'>Header</header>
      <header className='w-full border-b-2 border-b-4 border-rose-400 border-dotted'>Header</header>
    </div>
  )
}

export default App
