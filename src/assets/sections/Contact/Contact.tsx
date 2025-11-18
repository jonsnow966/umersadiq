import { LinkedinIcon, Mail, MapPin, Phone } from "lucide-react"


function Contact() {
  return (
    <div  id='about' className="w-full min-h-screen 
    flex flex-col justify-start items-center pt-5 pb-20
    bg-bg-gray">
      <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1> 
      <hr className="w-24 border-t-4 border-blue-500 animate-pulse" />
      <p className="text-xl text-center text-gray-200 mt-10">I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life.</p>
      
      <div className='w-full h-fit pt-15 px-1 sm:px-10 2xl:px-40
      flex flex-col lg:flex-row justify-center items-center gap-10'>
          
        <div className="w-full
        grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-15  sm:gap-x-5 sm:gap-y-10
        md:mt-6 sm:mt-8 px-5 sm:px-0
        text-lg sm:text-xl lg:text-2xl xl:text-xl text-gray-400">
         
          <section className="flex-1 h-fit
          flex flex-col justify-start items-start py-5 px-5 gap-3 text-left pb-7
          bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]">
              
              <div className="w-full h-fit flex flex-col justify-start items-start gap-3">
                  
                <p className="text-white font-bold text-[32px]">Contact Information</p>

                <div className="flex justify-start items-center gap-4 mt-2">
                  <div className="flex justify-center items-center p-2
                  bg-card-fav-blue rounded-[5px]">                  
                    <Mail className="text-blue-500"/>
                  </div>
                  <p className="w-full flex flex-col">
                    <span className="text-white text-lg">Email</span>
                    <a className="text-blue-400 text-[12px] sm:text-lg" target="_blank" href="mailto:umar9733@yahoo.com">umar9733@yahoo.com</a>
                  </p>
                </div>

                <div className="flex justify-start items-center gap-4 mt-2">
                  <div className="flex justify-center items-center p-2
                  bg-card-fav-blue rounded-[5px]">                  
                    <Phone className="text-blue-500"/>
                  </div>
                  <p className="w-full flex flex-col">
                    <span className="text-white text-lg">Phone</span>
                    <a className="text-blue-400 text-[12px] sm:text-lg" target="_blank" href="https://wa.me/+923332050848">+92333-2050848</a>
                  </p>
                </div>

                <div className="flex justify-start items-center gap-4 mt-2">
                  <div className="flex justify-center items-center p-2
                  bg-card-fav-blue rounded-[5px]">                  
                    <MapPin className="text-blue-500"/>
                  </div>
                  <p className="w-full flex flex-col">
                    <span className="text-white text-lg">Location</span>
                    <a className="text-blue-400 text-[12px] sm:text-lg" target="_blank" href="https://maps.app.goo.gl/iRhp7FSMZuDz2aLU7">Islamabad, Pakistan</a>
                  </p>
                </div>

                <div className="flex justify-start items-center gap-4 mt-2">
                  <div className="flex justify-center items-center p-2
                  bg-card-fav-blue rounded-[5px]">                  
                    <LinkedinIcon className="text-blue-500"/>
                  </div>
                  <p className="w-full flex flex-col">
                    <span className="text-white text-lg">Linkedin</span>
                    <a className="text-blue-400 text-[12px] sm:text-lg" target="_blank" href="https://www.linkedin.com/in/umersadiq1/">
                    linkedin.com/in/umersadiq1/</a>
                  </p>
                </div>                      
              </div>
              
              
          </section>

          <section className="flex-1 h-fit
          flex flex-col justify-start items-start py-5 px-5 gap-3 text-left
          bg-gray-card border border-gray-700 rounded-[10px] shadow-[0px_10px_0px_5px_rgba(0,0,0,0.2)]">
              
              <div className="w-full h-fit flex flex-col justify-start items-start gap-3">
                  
                <p className="text-white font-bold text-[32px]">Lets Connect</p>
                <p className="text-[18px] text-gray-200 mt-2 mb-10">
                  I'm currently open to new opportunities and would love to hear about your project. 
                  Whether you're looking for a front-end developer or just want to say hello, feel free to reach out! 
                </p>
                
                <a className="w-full h-fit py-2 px-3 sm:py-3 sm:px-4 md:px-5 
                flex justify-center items-center gap-3
                text-sm  
                rounded-[7px] bg-blue-800 text-white
                hover:scale-101 hover:shadow-2xl cursor-pointer
                transition-all duration-500 ease-in-out"
                target="_blank" href="mailto:umar9733@yahoo.com">
                    <Mail className="text-white" size={"1rem"}/> Send Email
                </a>
                
                <a className="w-full h-fit py-2 px-3 sm:py-3 sm:px-4 md:px-5 
                flex justify-center items-center gap-3
                text-sm 
                rounded-[7px] bg-white text-gray-700
                hover:scale-101 hover:shadow-2xl hover:bg-gray-700 hover:text-white cursor-pointer
                transition-all duration-500 ease-in-out"
                target="_blank" href="https://www.linkedin.com/in/umersadiq1/">
                    <LinkedinIcon size={"1rem"}/> Connect on Linkedin
                </a>

                <div className="w-full border-b border-gray-400 mt-5"></div>
                <div className="w-full flex justify-center items-center">
                  <p className="text-sm text-gray-400 text-center">Available for freelance projects and full-time opportunities</p>
                </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact
