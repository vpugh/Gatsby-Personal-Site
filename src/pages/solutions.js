import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import { SolutionsContainer, Title, Quote, TextDivider, Body } from '../styles/solutions-styled';

const Solutions = () => {
  return (
    <Layout padTop={true}>
      <SEO title="My Process" />
      <section>
				<SolutionsContainer>
					<Title>
						My Design Process, Getting The Solution
					</Title>
					<Quote>
						Arrival at great design comes from asking questions, careful research, and understanding the needs of the user.
					</Quote>
					<TextDivider>
						<h3 className="solutions--subtitle">Understanding the Problem</h3>
						<p className="body">
							Going to a meeting or a 1-to-1 with a teammate and listening to what the perceived problem is. This is the perfect time to ask questions to better understand the problem from the source and identify if there are other problems or if this problem is actually a symptom of a deeper problem or the output they client wants isn't what they need.
						</p>
					</TextDivider>
					<TextDivider>
						<h3 className="solutions--subtitle">Research Extensively if Possible</h3>
						<p className="body">
							Time spent researching is never wasted. As it helps to guide us toward the next step in the process it's a very crucial step for a good process. Here we are mapping out the various solutions and testing the theories against the data and information we are discovering and uncovering. Basically, we are getting all our info in order before we start work on any visuals. This is also the perfect time to discuss and research the method of development and deployment for the project. This information is vital to how the content will be created and thus how it should be structured for the user.
						</p>
					</TextDivider>
					<TextDivider>
						<h3 className="solutions--subtitle">Sketching, Wireframes &amp; Prototypes</h3>
						<p className="body">
							Your greatest idea is almost never your first one, so constant ideation and iteration are of utmost importance. They are easily done in a simple pen/pencil and paper sketch. Doing many simple and quick ideas to figure out which of them is viable to even put more effort into. In the sketches stage it's best to be vague and leave out the details until you've worked through a few ideas, maybe take a break and revisit your designs. After sketches is when we move up to lo-fidelity wireframes. Fleshing out an idea but not being overtaken by crazy amounts of detail yet. Prototypes, either actually coded or through a software service, are great for delivering your internal vision to the masses. Sometimes those subtle animations and motions are hard to explain and much easier to demonstrate.
						</p>
					</TextDivider>
					<TextDivider>
						<h3 className="solutions--subtitle">Development &amp; Deployment</h3>
						<p className="body">
							Now with the green-light from our client/stakeholders it's time to start development. From inception, there should have already been an idea of the system to be used in the creation of the project. Whether there is a CMS, a JS framework, or a static page. This decision is instrumental in shaping the visuals and should always be done in the research phase. If this step has been followed correctly, all those decisions already came into play for the design phase and will be easier to implement in coding and deployment.
						</p>
					</TextDivider>
					<Body>
						My process is built upon on figuring out the hidden information that will help shape a sustainable solution. It's a tightrope of strategic planning. careful research and human-centered design. 
						All design should be done with a purpose, not just because it looks good or cool, and always with the user in mind.
					</Body>
					<Body>
						If the project isn't satisfactorily answering the questions of what problem is being solved or what value is being brought to the customer, chances are your not making the proper decisions or are working on a project that will not benefit your customers. Products that are developed with these factors in mind will be solid in it's intent to engage, attract and satisfy the user.
					</Body>		
				</SolutionsContainer>
			</section>
    </Layout>
  )
}

export default Solutions;