import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className="absolute inset-0 -z-10 h-full w-full opacity-30"
        style={{
          backgroundImage: `
                        linear-gradient(to right, 
                            transparent 0%, 
                            transparent 2%, 
                            #e5e5e5 2%, 
                            #e5e5e5 18%, 
                            transparent 18%, 
                            transparent 22%, 
                            #e5e5e5 22%, 
                            #e5e5e5 38%, 
                            transparent 38%, 
                            transparent 42%, 
                            #e5e5e5 42%, 
                            #e5e5e5 58%, 
                            transparent 58%, 
                            transparent 62%, 
                            #e5e5e5 62%, 
                            #e5e5e5 78%, 
                            transparent 78%, 
                            transparent 82%, 
                            #e5e5e5 82%, 
                            #e5e5e5 98%, 
                            transparent 98%
                        ),
                        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
                    `,
          backgroundSize: "100% 40px",
        }}
      ></div>
      <Header />
    </div>
  );
};

export default Home;
