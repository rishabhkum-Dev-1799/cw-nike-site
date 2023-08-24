import { Loader as LoaderGif } from "../../assets/icons";

const Loader = () => {
    return (
      <img
        src={LoaderGif}
        alt={'loading'}
        width={50}
        height={50}
        className='w-[20px] h-[20px] text-white'
      />
    );
  };
  
  export default Loader;