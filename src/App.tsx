
import './index.css';
import logoImg from './assets/logo-nlw.svg';

import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import { Input } from './components/Form/Input';
import { CreateAdModal } from './components/CreateAdModal';
import * as Dialog  from '@radix-ui/react-dialog';
import axios from 'axios';

interface Game {
  id: String;
  title: String;
  bannerUrl: String;
  _count:{
    ads:number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])
  //none variable in final parameter execute a once time

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt=""/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {
          games.map(game => {
            return (
              <GameBanner 
                key={game.id}
                bannerUrl={game.bannerUrl} 
                title={game.title}
                adsCount={game._count.ads}
              />
            )
          })
        }
       
      </div>
      <Dialog.Root>
          <CreateAdBanner/>
          <CreateAdModal/>
        
      </Dialog.Root>
    </div>
  )
}

export default App
