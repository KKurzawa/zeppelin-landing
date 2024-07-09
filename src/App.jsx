import './App.css'

const App = () => {
  return (
    <>
      {/* large */}
      <main className='crop-circle-container hidden lg:flex flex-col items-center -mt-[7.5rem]'>
        <article className='welcome-to flex flex-row justify-center items-center text-4xl -mb-[17.5rem]'>
          <h2 className='welcome pr-2'>Welcome </h2>
          <h2 className='to'> To</h2>
        </article>
        <article className='led-detroit-container flex justify-center items-center -mb-[21rem]'>
          <h2 className='led-detroit text-9xl font-bold'>Led-Detroit</h2>
        </article>
        <article className='description flex flex-row justify-center items-center -mb-[12rem] text-4xl'>
          <h2 id='detroits' className='detroits pr-2'>Detroits</h2>
          <h2 className='ultimate pr-2'>Ultimate</h2>
          <h2 className='led-zeppelin pr-2'>Led-Zeppelin</h2>
          <h2 className='experience'>Experience</h2>
        </article>
      </main>
      {/* medium */}
      <main className='medium-crop-circle-container hidden md:flex lg:hidden flex-col items-center pt-40 pb-64'>
        <article className='medium-welcome-to flex flex-row justify-center items-center text-4xl -mb-[14.5rem]'>
          <h2 className='medium-welcome pr-2'>Welcome </h2>
          <h2 className='medium-to'> To</h2>
        </article>
        <article className='medium-led-detroit-container flex justify-center items-center -mb-[17rem]'>
          <h2 className='medium-led-detroit text-8xl font-bold'>Led-Detroit</h2>
        </article>
        <article className='medium-description flex flex-row justify-center items-center text-3xl'>
          <h2 className='medium-detroits pr-2'>Detroits</h2>
          <h2 className='medium-ultimate pr-2'>Ultimate</h2>
          <h2 className='medium-led-zeppelin pr-2'>Led-Zeppelin</h2>
          <h2 className='medium-experience'>Experience</h2>
        </article>
      </main>
      {/* small */}
      <main className='small-crop-circle-container flex md:hidden flex-col items-center pt-40 pb-60'>
        <article className='small-welcome-to flex flex-row justify-center items-center text-xl -mb-[9rem]'>
          <h2 className='small-welcome pr-2'>Welcome </h2>
          <h2 className='small-to'> To</h2>
        </article>
        <article className='small-led-detroit-container flex justify-center items-center -mb-[12rem]'>
          <h2 className='small-led-detroit text-5xl font-bold'>Led-Detroit</h2>
        </article>
        <article className='small-description flex flex-row justify-center items-center text-xl'>
          <h2 className='small-detroits pr-1'>Detroits</h2>
          <h2 className='small-ultimate pr-1'>Ultimate</h2>
          <h2 className='small-led-zeppelin pr-1'>Led-Zeppelin</h2>
          <h2 className='small-experience'>Experience</h2>
        </article>
      </main>
    </>
  )
}

export default App