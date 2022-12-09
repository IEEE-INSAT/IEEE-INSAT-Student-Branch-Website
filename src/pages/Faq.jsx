import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import FooterMap from "../components/Common/FooterMap";
import MainBanner from "../components/Common/MainBanner";

class Faq extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <MainBanner
          bannerTitle="FAQ"
          bannerDescription="Frequently Asked Questions"
          section="FAQ"
        />

        <section className="faq-area ptb-120">
          <div className="container">
            <div className="faq-accordion">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is IEEE?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      IEEE is the world’s largest technical professional
                      organization dedicated to advancing technology for the
                      benefit of humanity. IEEE and its members inspire a global
                      community through its highly cited publications,
                      conferences, technology standards, and professional and
                      educational activities.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>What is INSAT?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      INSAT also known as "The National Institute of Applied
                      Science and Technology" is a Tunisian institute that is
                      affiliated with the University of Carthage. Admission is
                      very competitive and generally students must hold a very
                      good GPA on the national exam to be admitted.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can I still be a member of IEEE INSAT Student Branch?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The current IEEE INSAT Student Branch Mandate lasts from
                      September 2021 to June 2022. If you're still not a member
                      at the time being. Come back on September 2022 and you
                      will have the opportunity to be an IEEE member of the next
                      mandate.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What to do in order to become an IEEE INSAT Student Branch
                      member?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      All you have to do is pay the subscription fee which costs
                      40DT. Contact our treasurer to finalize the payment
                      procedure.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How many Chapters/Affinity Groups are there in IEEE
                      Student Branch?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      IEEE INSAT Student branch contains 7 chapters and 1
                      affinity group.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can all students from different fields join IEEE INSAT
                      Student Branch?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, the IEEE INSAT Student Branch contains diverse
                      chapters that cover all the present fields at INSAT.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            {/* <div className="faq-contact">
              <h3>Ask Your Question</h3>
              <form onSubmit={this.submitHandler}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="6"
                        placeholder="Message"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button className="btn btn-primary" type="submit">
                      Submit Now!
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </section>

        <FooterMap />
      </React.Fragment>
    );
  }
}

export default Faq;
