
interface GameBannerProps{
    bannerUrl: String;
    title: String;
    adsCount:number;
}

export function GameBanner(props:GameBannerProps){
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrl} alt=""></img>
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>{props.title}</strong>
          <strong className='text-zinc-300 text-sm-small block mt-1'>{props.adsCount} anuncio(s)</strong>
        </div>
      </a>
    )
}