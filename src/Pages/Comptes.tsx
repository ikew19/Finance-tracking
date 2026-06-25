function Comptes() {

  return (
    <div className="h-full">
      <header className="bg-stone-100 p-4 h-30 rounded-md inset-shadow-xl">
        <h1 className="text-3xl tracking-tight font-sans font-medium subpixel-antialiased">Bonjour</h1>
        <span className="block h-4" />
        <p className="text-xl tracking-tight font-sans font-light "> Gérer votre argent avec diligence</p>
      </header>

      <main className=" grid grid-cols-2 gap-8 ml-20 place-items-center justify-content-center h-2/3"> 
        <div className=" h-40 w-70 bg-stone-100 p-4 h-40 rounded-xl shadow-xl inset-shadow-3xl border-2 border-gray-300" />
        <div className="h-40 w-70 bg-stone-100 p-4 h-40 rounded-xl shadow-xl inset-shadow-3xl border-2 border-gray-300" />
        <div className="h-40 w-70 bg-stone-100 p-4 h-40 rounded-xl shadow-xl inset-shadow-3xl border-2 border-gray-300" />
        <div className="h-40 w-70 bg-stone-100 p-4 h-40 rounded-xl shadow-xl inset-shadow-3xl border-2 border-gray-300" />

      </main>
    
    </div>
  );
}

export default Comptes