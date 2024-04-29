import { LuFacebook, LuLinkedin, LuTwitter } from "react-icons/lu";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import nizam from '../../assets/team/Nizam.png';

const TeamCards = () => {
  return (
    <section className="py-10">
      <Container>
        <SectionTitle
          heading={"Our Creative Team"}
          subHeading={"MEET ME HERE"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          {/* single team card  */}
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={nizam}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Ishimwe Fabrice</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m keep pushing writing code
            </p>
            <div className="flex gap-5 py-2">
              <Link
                to=""// fb link
                target="_blank"
              >
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="" // twiter link 
              target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to=""  // linked in link 
              target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Full Stack dev
              </p>
            </div>
          </div>
          {/* single team card end */}

          {/* single team card  
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={saikat}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Saikat Singha</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/singha.saikat" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/saikatsingha65/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Creative Director
              </p>
            </div>
          </div>
  

         
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={rakib}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Md. Rakibul Hasan</h3>
            <p className="text-gray-500 font-normal py-2">
              I`&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link
                to="https://www.facebook.com/Iamrakibhassan/"
                target="_blank"
              >
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com/Rhakibwd" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/mrakibulhasan/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Manager
              </p>
            </div>
          </div>
          {/* single team card end *

  
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={nelima}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Neelima Sultana</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://facebook.com" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/nelima-sultana-7b4280298/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Product Designer
              </p>
            </div>
          </div>
          {/* single team card end

          {/* single team card 
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={ali}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Mohammad Ali</h3>
            <p className="text-gray-500 font-normal py-2">
              I&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/mohammad.7060" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/md-ali77/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Web Developer
              </p>
            </div>
          </div>
          {/* single team card end 

          {/* single team card 
          <div className="relative bg-white shadow-md border rounded-md px-5 py-5">
            <img
              className="w-32 h-32 object-cover rounded-full"
              src={mamun}
              alt=""
            />
            <h3 className="text-dark_01 text-2xl">Abdullah Mamun</h3>
            <p className="text-gray-500 font-normal py-2">
              I`&apos;m proud to be a part of such a talented group of
              individuals
            </p>
            <div className="flex gap-5 py-2">
              <Link to="https://www.facebook.com/aamamun.360" target="_blank">
                <LuFacebook
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://twitter.com/AAMamun24" target="_blank">
                <LuTwitter
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
              <Link to="https://www.linkedin.com/in/aamamun24/" target="_blank">
                <LuLinkedin
                  className="inline text-2xl border border-primary text-primary/80 rounded-md p-0.5"
                  size={28}
                  fill="pink"
                />
              </Link>
            </div>
            <div className="absolute top-3 right-3">
              <p className="bg-primary/10 text-primary/70 px-1 py-1 rounded">
                Graphic Designer
              </p>
            </div>
          </div>

          {/* single team card end */}
        </div>
        
      </Container>
    </section>
  );
};

export default TeamCards;
