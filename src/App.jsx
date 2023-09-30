import Search from "./components/Search";

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#D6F3FF]">
      <div className="w-[480px] flex flex-col items-center shadow-lg bg-[#85DAFF]">
        <h1 className="my-5 text-3xl font-bold uppercase tracking-widest text-[#FFFFFF]">
          Weather App
        </h1>
        <Search />
      </div>
    </div>
  );
};

export default App;
