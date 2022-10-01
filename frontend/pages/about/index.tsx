import React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { fetchAPI } from "@/common/helpers/api"
import AnimatedText from "@/components/animatedText"
import { getStrapiMedia } from "@/common/helpers/media"

const About = ({ global, profile }) => {
  console.log("profile: ", profile)
  const { name, jobTitle, avatar, background } = profile?.attributes || {}
  return (
    <Layout global={global}>
      <Seo seo={global?.attributes?.seo} />
      <section className="py-sm-7 py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="d-none d-lg-block col-lg-2">
              <div className="position-fixed top-20 start-30 d-flex flex-column">
                <div className="profile">
                  <img
                    style={{ width: 160, height: 160 }}
                    width={160}
                    height={160}
                    src={getStrapiMedia(avatar)}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                  <h4 className="text-dark text-center">{name}</h4>
                  <div className="d-flex justify-content-center my-4">
                    <a href={""} target="_blank">
                      <i
                        className="fab fa-facebook text-lg text-dark me-4"
                        aria-hidden
                      />
                    </a>
                    <a href={""} target="_blank">
                      <i
                        className="fab fa-github text-lg text-dark me-4"
                        aria-hidden
                      />
                    </a>
                    <a href={""} target="_blank">
                      <i
                        className="fab fa-linkedin text-lg text-dark"
                        aria-hidden
                      />
                    </a>
                  </div>
                </div>
                <div className="nav-wrapper position-relative end-0">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item px-3">
                      <a href="#hero" className="nav-link scrollto active">
                        <i
                          className="fas fa-fw fa-home me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="nav-item px-3">
                      <a href="#about" className="nav-link scrollto">
                        <i
                          className="fas fa-fw fa-user me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-item px-3">
                      <a href="#resume" className="nav-link scrollto">
                        <i
                          className="fas fa-fw fa-file me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>Resume</span>
                      </a>
                    </li>
                    <li className="nav-item px-3">
                      <a href="#services" className="nav-link scrollto">
                        <i
                          className="fas fa-fw fa-server me-1"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>Services</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-md-12">
              <section
                id="hero"
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundSize: "cover",
                  backgroundImage: `url('${getStrapiMedia(background)}')`,
                }}
                className="d-flex flex-column justify-content-center px-3"
              >
                <div className="hero-container" data-aos="fade-in">
                  <h1 className="text-white">{name}</h1>
                  <p className="text-white">
                    <AnimatedText text={jobTitle?.split(".")} loop={true} />
                  </p>
                </div>
              </section>
              <section id="about" className="about">
                <div className="container">
                  <div className="section-title">
                    <h2>About</h2>
                    <p>
                      Magnam dolores commodi suscipit. Necessitatibus eius
                      consequatur ex aliquid fuga eum quidem. Sit sint
                      consectetur velit. Quisquam quos quisquam cupiditate. Et
                      nemo qui impedit suscipit alias ea. Quia fugiat sit in
                      iste officiis commodi quidem hic quas.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                      <img
                        src={getStrapiMedia(avatar)}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div
                      className="col-lg-8 pt-4 pt-lg-0 content"
                      data-aos="fade-left"
                    >
                      <h3>UI/UX Designer &amp; Web Developer.</h3>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>Birthday:</strong> <span>1 May 1995</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>Website:</strong>{" "}
                              <span>www.example.com</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>Phone:</strong> <span>+123 456 7890</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>City:</strong> <span>New York, USA</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <ul>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>Age:</strong> <span>30</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>Degree:</strong> <span>Master</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>PhEmailone:</strong>{" "}
                              <span>email@example.com</span>
                            </li>
                            <li>
                              <i className="bi bi-chevron-right"></i>{" "}
                              <strong>Freelance:</strong> <span>Available</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Officiis eligendi itaque labore et dolorum mollitia
                        officiis optio vero. Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et
                        eius omnis. Cupiditate ut dicta maxime officiis quidem
                        quia. Sed et consectetur qui quia repellendus itaque
                        neque. Aliquid amet quidem ut quaerat cupiditate. Ab et
                        eum qui repellendus omnis culpa magni laudantium
                        dolores.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="facts" className="facts">
                <div className="container">
                  <div className="section-title">
                    <h2>Facts</h2>
                    <p>
                      Magnam dolores commodi suscipit. Necessitatibus eius
                      consequatur ex aliquid fuga eum quidem. Sit sint
                      consectetur velit. Quisquam quos quisquam cupiditate. Et
                      nemo qui impedit suscipit alias ea. Quia fugiat sit in
                      iste officiis commodi quidem hic quas.
                    </p>
                  </div>

                  <div className="row no-gutters">
                    <div
                      className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                      data-aos="fade-up"
                    >
                      <div className="count-box">
                        <i className="bi bi-emoji-smile"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="232"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Happy Clients</strong> consequuntur quae
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="521"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Projects</strong> adipisci atque cum quia aut
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="count-box">
                        <i className="bi bi-headset"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="1453"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Hours Of Support</strong> aut commodi quaerat
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="count-box">
                        <i className="bi bi-people"></i>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="32"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Hard Workers</strong> rerum asperiores dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="skills" className="skills section-bg">
                <div className="container">
                  <div className="section-title">
                    <h2>Skills</h2>
                    <p>
                      Magnam dolores commodi suscipit. Necessitatibus eius
                      consequatur ex aliquid fuga eum quidem. Sit sint
                      consectetur velit. Quisquam quos quisquam cupiditate. Et
                      nemo qui impedit suscipit alias ea. Quia fugiat sit in
                      iste officiis commodi quidem hic quas.
                    </p>
                  </div>

                  <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                      <div className="progress">
                        <span className="skill">
                          HTML <i className="val">100%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>

                      <div className="progress">
                        <span className="skill">
                          CSS <i className="val">90%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>

                      <div className="progress">
                        <span className="skill">
                          JavaScript <i className="val">75%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="progress">
                        <span className="skill">
                          PHP <i className="val">80%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={80}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>

                      <div className="progress">
                        <span className="skill">
                          WordPress/CMS <i className="val">90%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>

                      <div className="progress">
                        <span className="skill">
                          Photoshop <i className="val">55%</i>
                        </span>
                        <div className="progress-bar-wrap">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={55}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="resume" className="resume">
                <div className="container">
                  <div className="section-title">
                    <h2>Resume</h2>
                    <p>
                      Magnam dolores commodi suscipit. Necessitatibus eius
                      consequatur ex aliquid fuga eum quidem. Sit sint
                      consectetur velit. Quisquam quos quisquam cupiditate. Et
                      nemo qui impedit suscipit alias ea. Quia fugiat sit in
                      iste officiis commodi quidem hic quas.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                      <h3 className="resume-title">Summary</h3>
                      <div className="resume-item pb-0">
                        <h4>Alex Smith</h4>
                        <p>
                          <em>
                            Innovative and deadline-driven Graphic Designer with
                            3+ years of experience designing and developing
                            user-centered digital/print marketing material from
                            initial concept to final, polished deliverable.
                          </em>
                        </p>
                        <ul>
                          <li>Portland par 127,Orlando, FL</li>
                          <li>(123) 456-7891</li>
                          <li>alice.barkley@example.com</li>
                        </ul>
                      </div>

                      <h3 className="resume-title">Education</h3>
                      <div className="resume-item">
                        <h4>Master of Fine Arts &amp; Graphic Design</h4>
                        <h5>2015 - 2016</h5>
                        <p>
                          <em>
                            Rochester Institute of Technology, Rochester, NY
                          </em>
                        </p>
                        <p>
                          Qui deserunt veniam. Et sed aliquam labore tempore sed
                          quisquam iusto autem sit. Ea vero voluptatum qui ut
                          dignissimos deleniti nerada porti sand markend
                        </p>
                      </div>
                      <div className="resume-item">
                        <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                        <h5>2010 - 2014</h5>
                        <p>
                          <em>
                            Rochester Institute of Technology, Rochester, NY
                          </em>
                        </p>
                        <p>
                          Quia nobis sequi est occaecati aut. Repudiandae et
                          iusto quae reiciendis et quis Eius vel ratione eius
                          unde vitae rerum voluptates asperiores voluptatem
                          Earum molestiae consequatur neque etlon sader mart
                          dila
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h3 className="resume-title">Professional Experience</h3>
                      <div className="resume-item">
                        <h4>Senior graphic design specialist</h4>
                        <h5>2019 - Present</h5>
                        <p>
                          <em>Experion, New York, NY </em>
                        </p>
                        <ul>
                          <li>
                            Lead in the design, development, and implementation
                            of the graphic, layout, and production communication
                            materials
                          </li>
                          <li>
                            Delegate tasks to the 7 members of the design team
                            and provide counsel on all aspects of the project.{" "}
                          </li>
                          <li>
                            Supervise the assessment of all graphic materials in
                            order to ensure quality and accuracy of the design
                          </li>
                          <li>
                            Oversee the efficient use of production project
                            budgets ranging from $2,000 - $25,000
                          </li>
                        </ul>
                      </div>
                      <div className="resume-item">
                        <h4>Graphic design specialist</h4>
                        <h5>2017 - 2018</h5>
                        <p>
                          <em>Stepping Stone Advertising, New York, NY</em>
                        </p>
                        <ul>
                          <li>
                            Developed numerous marketing programs (logos,
                            brochures,infographics, presentations, and
                            advertisements).
                          </li>
                          <li>
                            Managed up to 5 projects or tasks at a given time
                            while under pressure
                          </li>
                          <li>
                            Recommended and consulted with clients on the most
                            appropriate graphic design
                          </li>
                          <li>
                            Created 4+ design presentations and proposals a
                            month for clients and account managers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="services" className="services">
                <div className="container">
                  <div className="section-title">
                    <h2>Services</h2>
                    <p>
                      Magnam dolores commodi suscipit. Necessitatibus eius
                      consequatur ex aliquid fuga eum quidem. Sit sint
                      consectetur velit. Quisquam quos quisquam cupiditate. Et
                      nemo qui impedit suscipit alias ea. Quia fugiat sit in
                      iste officiis commodi quidem hic quas.
                    </p>
                  </div>

                  <div className="row">
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                    >
                      <div className="icon">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Lorem Ipsum</a>
                      </h4>
                      <p className="description">
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non
                        provident
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="icon">
                        <i className="bi bi-card-checklist"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Dolor Sitema</a>
                      </h4>
                      <p className="description">
                        Minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat tarad limino ata
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        <i className="bi bi-bar-chart"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Sed ut perspiciatis</a>
                      </h4>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <i className="bi bi-binoculars"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Magni Dolores</a>
                      </h4>
                      <p className="description">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="icon">
                        <i className="bi bi-brightness-high"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Nemo Enim</a>
                      </h4>
                      <p className="description">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque
                      </p>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="icon">
                        <i className="bi bi-calendar4-week"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Eiusmod Tempor</a>
                      </h4>
                      <p className="description">
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [profileRes] = await Promise.all([
    fetchAPI("/profile", {
      populate: {
        avatar: { populate: "*" },
        background: { populate: "*" },
        projects: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      profile: profileRes.data,
    },
    revalidate: 1,
  }
}

export default About
