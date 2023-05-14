const MainPage = () => {
  return (
    <div>
      <div className="w-ful h-[3rem] flex md:flex-row flex-col bg-sky-200 h-auto">
        <div className="md:basis-3/5 h-30">
          <img
            src="https://images.unsplash.com/photo-1622115837997-90c89ae689f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image"
            className=""
          />
        </div>
        <div className="md:basis-2/5 relative">
          <div className="absolute md:top-[50%] md:left-[50%] md:translate-y-[-50%] md:translate-x-[-50%] md:w-[400px]">
            <p>Lorem ipsum dolor sit.</p>
            <h2 className="text-3xl my-4 ">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quasi eius minus at incidunt sapiente maxime unde.
              Ipsam vero deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
