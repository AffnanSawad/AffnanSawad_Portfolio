import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Passionate Web Developer & SQA Tester
            </h3>

            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-muted-foreground mt-5 ">
             Detail-oriented Software Quality Assurance (SQA) professional dedicated to ensuring the highest standards of software reliability and performance. Experienced in designing and executing test plans, identifying defects.
            </p>
            <p className="text-muted-foreground mt-5 ">
         Experienced in leading projects from initiation to delivery using agile methodologies to ensure timely, quality results and effective team collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center">
  <a
    href="#contact"
    className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold 
               shadow-md hover:bg-primary-dark transition duration-300 ease-in-out 
               focus:outline-none focus:ring-4 focus:ring-primary/40 text-center  transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/40"
  >
    Get In Touch
  </a>

<a
  href= "/cv.html"
  download
  className="inline-block px-8 py-3 rounded-full border border-primary text-primary font-semibold 
             hover:bg-primary hover:text-white shadow-sm hover:shadow-md 
             transition duration-300 ease-in-out transform hover:scale-105 
             focus:outline-none focus:ring-4 focus:ring-primary/40 text-center"
>
  Download CV
</a>

</div>



          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 mt-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-bold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold  text-lg">SQA Testing</h4>
                  <p className="text-muted-foreground">
                   Dedicated SQA tester ensuring software quality through meticulous testing and process improvement.
                  </p>
                </div>
              </div>
            </div>



            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-lg">Project Management</h4>
                  <p className="text-muted-foreground  ">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div> 
            
          </div>
        </div>
      </div>
    </section>
  );
}; 