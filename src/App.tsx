
import './index.css';
import logoImg from './assets/logo-nlw.svg';
import game1 from './assets/game1.png';
import game2 from './assets/game2.png';
import game3 from './assets/game3.png';
import game4 from './assets/game4.png';
import game5 from './assets/game5.png';
import game6 from './assets/game6.png';
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game1} alt=""></img>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <strong className='text-zinc-300 text-sm-small block mt-1'>Anuncios</strong>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game2} alt=""></img>
           <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <strong className='text-zinc-300 text-sm-small block mt-1'>Anuncios</strong>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game3} alt=""></img>
           <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS : GO</strong>
            <strong className='text-zinc-300 text-sm-small block mt-1'>Anuncios</strong>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game4} alt=""></img>
           <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <strong className='text-zinc-300 text-sm-small block mt-1'>Anuncios</strong>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game5} alt=""></img>
           <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnit</strong>
            <strong className='text-zinc-300 text-sm-small block mt-1'>Anuncios</strong>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={game6} alt=""></img>
           <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Word of Warcraft</strong>
            <strong className='text-zinc-300 text-sm-small block mt-1'>Anuncios</strong>
          </div>
        </a>
      </div>
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden  mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 self-stretch rounded-lg flex justify-between items-center'>
          <div>
            <strong className="text-2xl text-white font-black">Não encontrou o seu duo?</strong>
            <strong className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</strong>
          </div>
          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex aligm-items gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
