function tester() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center">
      <div
        className="relative w-[600px] h-[470px] bg-no-repeat bg-contain border border-yellow-300"
        style={{ backgroundImage: 'url("/vintageform.jpg")' }}
      >
        <input
          type="text"
          className="absolute top-[35px] left-[10px] w-[300px] h-10 px-4 py-2 bg-transparent text-black
                    focus:outline-none focus:border-none font-serif text-xl text-transform: uppercase"
        />
        {/* Add more input fields with corresponding TailwindCSS classes for position and size */}
      </div>
    </div>
  );
}

export default tester;
/*
        height: 207.2px;
        background-image: url('{{'CARD.png' | asset_url}}');
        background-size: cover;
        background-position: center;
*/
