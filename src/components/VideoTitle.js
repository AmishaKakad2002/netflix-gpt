const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[17%] px-24 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl rounded-lg px-12 p-4 hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white text-xl rounded-lg px-12 p-4 m-2 bg-opacity-80 hover:bg-opacity-65">
          ❕ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
