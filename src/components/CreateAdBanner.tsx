import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
  return (
    <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden  mt-8'>
    <div className='bg-[#2A2634] px-8 py-6 self-stretch rounded-lg flex justify-between items-center'>
      <div>
        <strong className="text-2xl text-white font-black">Não encontrou o seu duo?</strong>
        <strong className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</strong>
      </div>

      <Dialog.Trigger className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex aligm-items gap-3'>
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </Dialog.Trigger>
    </div>
  </div>
  )
}