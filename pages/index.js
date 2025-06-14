import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";
// import capture from "Capture1.jpg"

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const goToNextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
  
    const goToPrevImage = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };
  
    const goToImage = (index) => {
      setCurrentImage(index);
    };
    const images = [
      "/main.jpeg",
      "/CN24.jpeg",
      "/CN25.png",
      "/CN21.png",
      "/CN23.jpg",
      "/CN22.png"


    ];
    // 2nd Modal

    const goToNextImage2 = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images2.length);
    };
  
    const goToPrevImage2 = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + images2.length) % images.length);
    };
  

  
    const images2 = [
      "/Capture01.jpg",
      "/Capture02.jpg",
      "/Capture03.jpg",
      "/Capture04.jpg",
      "/Capture05.jpg",
      "/Capture06.jpg",

    ];

  return (
<>
<Navbar/>

    <div className=" ADF ADF-AC ADF-JC ADF-FDC width-100">
        <div name="Container-1" className="ADF ADF-JC ADF-AC ADF-FDC width-100">
            
            <h1 className="AT50  APA ATA-C AC-W RH1 AFS105 AZI-1 mainTxt" >
                SANKASHTI <br></br> INFRA SOLUTIONS 
            </h1>
            <div className="height-100vh width-100 main">
            </div>
        </div>
        <div className="width-100 ADF ADF-JC ABC-262626 APY75">
        <div className="width-80 Rwidth-100 RDF-FDC ADF ADF-FDR">
          <div className="ADF RDF-FDC RDF-JC RDF-AC AMX30">
            <Image alt="Your browser doesn't support images" src="/icon-1.png" height="69" width="69"></Image>
            <div className="ADF-FDC AML20 ADF RDF-FDC RDF-AC RDF-JC RMB30">
            <h3 className="AC-W  AFS20 AMY20">Find the Perfect Property</h3>
            <p className="AC-555555">Whether you're buying, selling, or investing, we offer a wide range of homes, commercial spaces, and land to suit every need. Our expert team helps match you with properties that fit your lifestyle and goals.</p>
            </div>
          </div>

          <div className="ADF RDF-FDC RDF-JC RDF-AC AMX30">
            <Image alt="Your browser doesn't support images" src="/icon-2.png" height="69" width="69"></Image>
            <div className="ADF-FDC AML20 ADF RDF-FDC RDF-AC RDF-JC RMB30">
            <h3 className="AC-W  AFS20 AMY20">Expert Guidance Every Step of the Way</h3>
            <p className="AC-555555">Real estate transactions can be complex — but with our experienced agents by your side, you'll enjoy a smooth and transparent process. From market insights to negotiation support, we handle the details so you can focus on your future.</p>
            </div>
          </div>

          <div className="ADF RDF-FDC RDF-JC RDF-AC AMX30">
            <Image alt="Your browser doesn't support images" src="/icon-3.png" height="69" width="69"></Image>
            <div className="ADF-FDC AML20 ADF RDF-FDC RDF-AC RDF-JC  RFS15">
            <h3 className="AC-W  AFS20 AMY20">Trusted by Thousands of Happy Clients</h3>
            <p className="AC-555555">Our reputation is built on trust, results, and long-term relationships. We are proud to have helped thousands of buyers, sellers, and investors achieve their real estate dreams, with outstanding service every step of the way.</p>
            </div>
          </div>

        </div>
        </div>

        <div name="Container-2" className="width-100 height-110 ABC-262626">
        
    <video width="100%" height="100%" controls  poster="/main.jpeg" >
    
      <source src="/web_video03.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video>
 
        </div>
        <div name="Container-3" id="projects" className="ABC-262626 width-100 ADF ADF-AC ADF-JC ADF-FDC APB50 RPB25 AC-FFFFFF">

            <div className="AMX150 RMX25">
            <div className="AMY75 RMY25">
            <h2 className="RFS30 AFS40 AMY25">Lastest Project</h2>
            <div className="Line"></div>
            <h3 className="AC-FFFFFF AMY25 RFS30 AFS40">Chandra niwas - 2</h3>
            <div className="">

                <p className=" AFS20 RFS15"> Welcome to Chandra Niwas 2 – the best version of premium living in the
Hatpipliya region. With state-of-the-art facilities, thoughtful design, and a commitment to sustainability, this project redefines lifestyle and community.
Designed for those who value peace without compromising on modern luxuries, this is more than a plot – it’s a lifestyle choice. It offers a seamless blend of nature and luxury, thoughtfully planned to bring you peace of mind, vibrant surroundings, and a lifestyle that exceeds expectations. Whether you're planning to build your dream home or invest in your future, Chandra Niwas 2ensures value, comfort, and community — all in one address.
Invest in a township that combines nature, architecture, and community spirit — a space where every detail is crafted to elevate daily living.
Chandra Niwas 2 isn’t just a plotted development — it's a visionary township designed for today's families and tomorrow’s dreams. With wide roads, lush gardens, and children's activity zones, it nurtures every generation under one skyline. The commercial plots offer endless business potential, while the open spaces breathe life into your daily routine.</p>

            </div>
            </div>
            </div>
            
            <div className=" AM10 ADF RC2 cardPr ADF-JC " >


            
 
 {images.map((_, index) =>
 
 (
  
   <Image alt="your browser error" src={images[index]} width={444} height={299} className="cardImg"
     key={index}
     active={index === currentImage}
     onClick={() => goToImage(index)|| setIsModalOpen(true)}   />
 ))}
            </div>

        </div>

        <div name="Container-4" className="ABC-W width-100 ADF ADF-AC ADF-JC ADF-FDC APB50 RPB25 AC-262626">

            <div className="AMX150 RMX25">
            <div className="AMY75 RMY25">
            <h2 className="RFS30 AFS40 AMY25">Other Project</h2>
            <div className="Line"></div>
            <h3 className=" AMY25 AFS40 RFS30">Chandra niwas - 1</h3>
            <div className="">

                <p className=" AFS20 RFS15"> Positioned strategically in the heart of the city, CN-1 is surrounded by essential urban conveniences while offering a peaceful retreat from daily chaos. Its plots are ideal for constructing your personal haven or securing a high-yield investment. The project is developed with an eye on long-term livability and fast-paced appreciation.
Launched in 2022 with 133 well-planned plots, Chandra Niwas 1 is a landmark township located in the heart of Hatpipliya. Inspired by CN-2’s modern amenities, CN-1 is perfect for those seeking peace, connectivity, and long-term value. Whether you’re looking for your forever home or a high-return investment, CN-1 offers a rare opportunity in the city’s most promising growth corridor.
From fully connected internal roads to underground utilities and a Vaastu-compliant layout,CN-1 reflects a meticulous approach to urban planning. With its prime location and borrowed excellence from CN-2, it’s a rare mix of comfort, class, and convenience.
Experience unmatched connectivity, appreciation potential, and a vibrant community – alliin one prime location.</p>

            </div>
            </div>
            </div>
            
            <div className=" AM10 ADF RC2 cardPr ADF-JSB" >
            <div className=" AM10 ADF RC2 cardPr ADF-JC " >

 
{images2.map((_, index) => (
  <Image alt="your browser error" src={images2[index]} width={444} height={299} className="cardImg"
    key={index}
    active={index === currentImage}
    onClick={() => goToImage(index)|| setIsModalOpen2(true)}   />
))}
           </div>

            </div>

        </div>
        
        
    </div>

    {isModalOpen && (
              <div className="modalParent">
                <div className="width-90 CMBTnPr">
<svg onClick={() => setIsModalOpen(false)} className="modalClose" width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  
  
  <line x1="30" y1="30" x2="70" y2="70" stroke="#d6d6d6" strokeWidth="10" strokeLinecap="round" />
  
  <line x1="70" y1="30" x2="30" y2="70" stroke="#d6d6d6" strokeWidth="10" strokeLinecap="round" />
</svg>
</div> 
                



<div className='modal'>

<div className="ACP PreviousBtn"  onClick={goToPrevImage}>
<svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" viewBox="0 0 24 24" fill="#ffffff">
  <path d="M18 4L6 12l12 8V4z"/>
</svg>



</div>
      
        <Image className='modalImg' width={800} height={600} src={images[currentImage]} alt='pic' />
      
      
      


      <div className="ACP nextBtn"onClick={goToNextImage} >
<svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" viewBox="0 0 24 24" fill="#ffffff">
  <path d="M6 4l12 8-12 8V4z"/>
</svg>




</div>
    </div>
              </div>

               
            )}


        {isModalOpen2 && (
              <div className="modalParent">
                <div className="width-90 CMBTnPr">
<svg onClick={() => setIsModalOpen2(false)} className="modalClose" width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  
  
  <line x1="30" y1="30" x2="70" y2="70" stroke="#d6d6d6" strokeWidth="10" strokeLinecap="round" />
  
  <line x1="70" y1="30" x2="30" y2="70" stroke="#d6d6d6" strokeWidth="10" strokeLinecap="round" />
</svg>
</div> 
                



<div className='modal'>

<div className="ACP PreviousBtn"  onClick={goToPrevImage2}>
<svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" viewBox="0 0 24 24" fill="#ffffff">
  <path d="M18 4L6 12l12 8V4z"/>
</svg>



</div>
      
        <Image className='modalImg' width={800} height={600} src={images2[currentImage]} alt='pic' />
      
      
      


      <div className="ACP nextBtn"onClick={goToNextImage2} >
<svg xmlns="http://www.w3.org/2000/svg" height="42px" width="42px" viewBox="0 0 24 24" fill="#ffffff">
  <path d="M6 4l12 8-12 8V4z"/>
</svg>




</div>
    </div>
              </div>

               
            )}    
</>
  );
}


