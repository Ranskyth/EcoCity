export const Home = () => {
  return (
    <div>
      <header className="p-5 bg-[#2d2d2d]">
        <nav>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Contato</li>
            <li>Sobre</li>
          </ul>
        </nav>
      </header>

      <main className="h-[80vh] py-25">
        <section className="flex justify-between px-12">
            <div>
              
          <h1 className="w-64 text-4xl mb-5">
            Não sabe onde descartar seu eletrônico antigo? Ou quer ser um ponto
            de descarte? Aqui é o lugar certo!
          </h1>
          <div>
            <button className="bg-[#222] mr-5 rounded-2xl p-8">Ser um Local de descarte</button>
            <button className="bg-[#222] mr-5 rounded-2xl p-8">Locais de descarte</button>
          </div>
            </div>
          <img className="w-70 h-70" src="/eletronico_img.png" alt="" />
        </section>
      </main>
      <footer className="bg-[#222] p-8">
        <p>Todos os direitos resevardos</p>
      </footer>
    </div>
  );
};
