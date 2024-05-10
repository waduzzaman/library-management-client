

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'> Affordable Price for Car Servicing </h2>
                <p>Get quality car servicing at unbeatable prices with our user-friendly web app. Drive worry-free today!</p>
                <div className="btn btn-primary mr-5">Discover More</div>
                <div className="btn btn-outline btn-secondary">Latest Project</div>
            </div>        

          </div>
          <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle  mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "className="w-full" />
          <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'> Affordable Price for Car Servicing </h2>
                <p>Get quality car servicing at unbeatable prices with our user-friendly web app. Drive worry-free today!</p>
                <div className="btn btn-primary mr-5">Discover More</div>
                <div className="btn btn-outline btn-secondary">Latest Project</div>
            </div>        

          </div>
          <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle  mr-4">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1602722053020-af31042989d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
          <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'> Affordable Price for Car Servicing </h2>
                <p>Get quality car servicing at unbeatable prices with our user-friendly web app. Drive worry-free today!</p>
                <div className="btn btn-primary mr-5">Discover More</div>
                <div className="btn btn-outline btn-secondary">Latest Project</div>
            </div>        

          </div>
          <div className="absolute rounded-xl flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle  mr-4">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"className="w-full" />
          <div className="absolute rounded-xl flex h-full items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className='text-white space-y-7 pl-12 w-1/2'>
                <h2 className='text-6xl font-bold'> Affordable Price for Car Servicing </h2>
                <p>Get quality car servicing at unbeatable prices with our user-friendly web app. Drive worry-free today!</p>
                <div className="btn btn-primary mr-5">Discover More</div>
                <div className="btn btn-outline btn-secondary">Latest Project</div>
            </div>        

          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle  mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;