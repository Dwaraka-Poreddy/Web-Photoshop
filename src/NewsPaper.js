import React from "react";
import "./NewsPaper.css";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { Avatar } from "@material-ui/core";
import Canvas from "react-canvas-js";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import EditableText from "./EditableText";
import EditImage from "./ImageEdit/EditImage";

export default function App() {
  function handleMemeDownlod(el) {
    var canvas = document.getElementById("newsPaper");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("newsPaper"))

        .then(function (base64image) {
          console.log();
          window.saveAs(base64image, "newspaper");
        });
    });
  }
  return (
    <div id="newsPaper">
      <div className="allheader">
        <div className="header">
          <div className="header__left">
            <Link to="/">
              {/* <Avatar className="header__logo" alt="logo" src="" /> */}
              <Btn className="header__leftStepper" title="Main page" />
            </Link>
          </div>

          <p>GiftCard Generator</p>
          <div style={{ display: "flex" }} className="header__right">
            <Btn
              handleClick={() => handleMemeDownlod(this)}
              title="Export Image"
            />
          </div>
        </div>
      </div>
      <div class="news-page">
        <div class="news-page__section publisher">
          <div class="logo-shield">
            <EditImage
              src="http://redonion.se/cssgrid/images/logo-shield155.png"
              alt="Features split 01"
              width={100}
              height={100}
            />
            {/* <img
              src="http://redonion.se/cssgrid/images/logo-shield155.png"
              alt=""
            /> */}
          </div>
          <div class="publisher_name">
            <img
              src="http://redonion.se/cssgrid/images/logo-cleanup.svg"
              alt=""
            />
            <div class="tagline">
              <EditableText text=" THE WIZARD WORLD'S BEGUILING BROADSHEET OF CHOICE" />
            </div>
          </div>
        </div>
        <div class="news-page__section exclusive-story">
          <div class="exclusive-story__marker">
            <EditableText text="exclusive" />
          </div>
          <div class="exclusive-story__preview">
            <div class="preview-title">
              <span class="text--uppercase display--block">
                <EditableText text="inside the mind" />
              </span>
              <span>
                <EditableText text="of a MUGGLER" />
              </span>
            </div>
            <div class="preview-content-wrapper">
              <div class="preview-content">
                <div class="preview-content--left">
                  <EditableText
                    text="
                What are mugglers really like? Do mugglers dream of electric
                sheep? These and many more questions are discussed with the top
                authoroties in the field of"
                  />
                </div>
                <div class="preview-content--right">
                  <EditableText
                    text="
                modern muggler studies. Is it possible that mugglers are not too
                different from ourselves? Can we in fact learn from the fate of
                our underdeveloped cousins?"
                  />
                </div>
              </div>
              <div class="preview-content--link">
                <EditableText text=" Read the Full story on Page 6." />
              </div>
            </div>
          </div>
        </div>
        <div class="news-page__section stories">
          <div class="story story--main">
            <div class="column column--left">
              <div class="story-title">
                <div class="story-title--first-line">
                  <div class="title-text text--vertical">hurricane</div>
                  <div class="title-text text--normal">
                    <EditableText text="Maria Threatens" />
                  </div>
                </div>
                <div class="story-title--second-line">
                  <div class="title-text text--normal">
                    {" "}
                    <EditableText text="Quidditch Playoffs" />{" "}
                  </div>
                </div>
              </div>
              {/* ************* */}
              <div class="story-column column--second-third extra">
                <p class="story-featured-photo">
                  <EditImage
                    src="https://picsum.photos/seed/picsum/600/300"
                    alt="Features split 01"
                    // width={528}
                    // height={396}
                  />
                  {/* <img
                  style={{ width: "100%" }}
                  src="https://picsum.photos/seed/picsum/600/300"
                  alt=""
                /> */}
                </p>
                <div class="blockquote-wrapper">
                  <div class="blockquote-title">
                    <div class="text--superscript">
                      <EditableText text="Captain Oliver" />
                    </div>
                    <div class="text--normal">
                      <EditableText text="Wood not worried" />
                    </div>
                  </div>
                </div>
              </div>
              {/* ******************* */}
              <div class="story-content">
                <div class="story-column column--first">
                  <div class="paragraph first">
                    <p>
                      <EditableText
                        text="
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati."
                      />
                    </p>
                  </div>
                  <div class="paragraph">
                    <p class="text--capitalize-first">
                      <EditableText
                        text="
                    Cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus."
                      />
                    </p>
                  </div>
                  <div class="paragraph">
                    <p>
                      <EditableText
                        text="
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae
                    sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                    maiores alias consequatur aut perferendis doloribus
                    asperiores repellat."
                      />
                    </p>
                  </div>
                </div>
                <div class="story-column column--second-third">
                  <div class="blockquote-wrapper">
                    <div class="blockquote-content">
                      <EditableText
                        text="
                    We're prepared for anything. Dealing with bad weather is not
                    a problem. Quidditch is an outdoor sport, and as such,
                    Nature is a part of the game. Playing in rough conditions is
                    in fact something me and my crew are used to. "
                      />
                    </div>
                  </div>

                  <div class="columns-wrapper">
                    <div class="column first">
                      <div class="paragraph">
                        <p>
                          <EditableText
                            text="
                        Veteran Captain Oliver Wood did not seem too anxious
                        about the hurricane threat as he and some of his fellow
                        crew met reporters in the lobby at player hotel this
                        morning. At vero eos et accusamus et iusto."
                          />
                        </p>
                      </div>
                      <div class="paragraph">
                        <p>
                          <EditableText
                            text="
                        Ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui."
                          />
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="paragraph">
                        <p>
                          <EditableText
                            text="
                        Harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus."
                          />
                        </p>
                      </div>
                      <div class="paragraph">
                        <p>
                          <EditableText
                            text="
                        Temporibus autem quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et."
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column column--right">
              <div class="author">
                <div class="name">
                  <EditableText text="Rita Skeeter" />
                </div>
                <div class="footnote">
                  <EditableText text="reports" />
                </div>
              </div>
              <div class="paragraph">
                <p class="text--capitalize-first">
                  <EditableText
                    text="
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident."
                  />
                </p>
              </div>
              <div class="paragraph">
                <p>
                  <EditableText
                    text="
                Similique sunt in culpa qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est
                et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus."
                  />
                </p>
              </div>
              <div class="paragraph">
                <p>
                  <EditableText
                    text="
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat."
                  />
                </p>
              </div>
              <div class="paragraph">
                <p>
                  <EditableText
                    text="
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem."
                  />
                </p>
              </div>
              <div class="paragraph">
                <p>
                  <EditableText text="Corrupti quos dolores. " />
                </p>
              </div>
            </div>
          </div>
          <div class="story-divider"></div>
          <div class="story story--secondary">
            <div class="columns-wrapper">
              <div class="column first">
                <p class="story-title--secondary">
                  <EditableText text=" Ministry Secretary Denies Job Crisis" />
                </p>
                <div class="story-featured-photo">
                  <img
                    src="http://redonion.se/cssgrid/images/mics500.jpg"
                    alt=""
                  />
                </div>
                <div class="caption">
                  <div class="caption_content">
                    <EditableText text=" “THERE IS ENOUGH MAGIC FOR ALL" />
                  </div>
                  <div class="page-number">
                    <EditableText text="page 12" />
                  </div>
                </div>
              </div>
              <div class="column second">
                <div class="story-title--third">
                  <div class="first-part">
                    <small>
                      <EditableText text="ALBUS SEVERUS POTTER" />
                    </small>
                    <EditableText text=" Scandal" />
                  </div>
                  <div class="second-part">
                    <EditableText text="In Polyjuice" />
                    <small>
                      <EditableText
                        text="
                    Potter was discovered trying to enter girls dorm under the
                    influence of polyjuice."
                      />
                    </small>
                  </div>
                </div>
                <div class="story-content--third">
                  <img
                    src="http://redonion.se/cssgrid/images/potions200.jpg"
                    alt=""
                  />
                  <div class="paragraph">
                    <p class="text--capitalize-first">
                      <EditableText
                        text="
                    A Hogwarts spokesperson says the incident will not be taken
                    lightly, since it was only a few months ago young Potter was
                    involved in a similar incident. Parents of the Hufflepuff
                    girls are now putting preassure on the school to assure the
                    safety of their children."
                      />
                    </p>
                  </div>
                  <div class="paragraph">
                    <p>
                      <EditableText
                        text="
                    An anonymous source says the Potter boy has been harassing
                    girls and bullying his fellow students since he started at
                    Hogwarts. The source also says that because of his family
                    name, professors and staff are too scared to act. Neither
                    one of the boy's parents wanted to comment the event."
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="news-page_section weather">
          <div class="section-divider" title="Weather"></div>
          <div class="columns-wrapper column--weathers">
            <div class="column column--weather">
              <div class="weather_value text_shadow--hot">
                27 <span class="weater_value_measurement">*C</span>{" "}
              </div>
              <div class="weather_city">Adua</div>
            </div>
            <div class="column column--weather">
              <div class="weather_value">
                19 <span class="weater_value_measurement">*C</span>{" "}
              </div>
              <div class="weather_city">Hogsmeade</div>
            </div>
            <div class="column column--weather">
              <div class="weather_value">
                18 <span class="weater_value_measurement">*C</span>{" "}
              </div>
              <div class="weather_city">Idris</div>
            </div>

            <div class="column column--weather">
              <div class="weather_value text_shadow--hot">
                24 <span class="weater_value_measurement">*C</span>{" "}
              </div>
              <div class="weather_city">King's Landing</div>
            </div>

            <div class="column column--weather">
              <div class="weather_value text_shadow--cold">
                -84 <span class="weater_value_measurement">*C</span>{" "}
              </div>
              <div class="weather_city">Luna</div>
            </div>

            <div class="column column--weather">
              <div class="weather_value">
                12 <span class="weater_value_measurement">*C</span>{" "}
              </div>
              <div class="weather_city">Stormwind</div>
            </div>
          </div>
        </div>

        <div class="news-page_section story--footer">
          <div class="story-title--footer">AURORS OUT OF CONTROL?</div>
          <div class="story_excerpt_and_number">
            <div class="story_page_number">
              <div>page</div>
              <div class="number">7</div>
            </div>
            <div class="story_excerpt">
              <div>THE FULL STORY</div>
              <div class="text--lowercase">violence investigated</div>
            </div>
          </div>
        </div>

        <div class="news-page_section news-topics">
          <div class="columns-wrapper">
            <div class="column column_topic">
              <div class="topic">World</div>
              <div class="badge_number">7</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Ministry</div>
              <div class="badge_number">12</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Sport</div>
              <div class="badge_number">4</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Business</div>
              <div class="badge_number">2</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Amusements</div>
              <div class="badge_number">3</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Magic</div>
              <div class="badge_number">6</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Jobs</div>
              <div class="badge_number">13</div>
            </div>
            <div class="column column_topic">
              <div class="topic">Adventure</div>
              <div class="badge_number">14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
