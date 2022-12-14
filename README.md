<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- font awesome library  -->
    <link rel="stylesheet" href="assets/css/all.min.css" />

    <!-- bootstrap library -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

    <!-- main css file -->
    <link rel="stylesheet" href="assets/css/main.css" />
    <title>برنامج الشارقة لسلامة الغذاء</title>
  </head>
  <body>
    <!-- header start  -->
    <header class="bg-dark p-4 d-flex justify-content-between">
      <div class="toggleMenu" data-target="#accordionExample">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <nav>
        <h2 class="text-center text-light">Alsarja Food Safety program</h2>
      </nav>
    </header>

    <!-- main content -->
    <section id="viewContent">
      <div class="container-fluid">
        <!-- view types -->
        <div class="row pt-3">
          <div class="leftSide col-lg-3">
            <div class="chapters">
              <div class="accordion mb-1" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapterOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Contents
                    </button>
                  </h2>
                  <div
                    id="chapterOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <!-- introduction  -->
                      <p>Introduction</p>
                      <ul>
                        <li><a href="">Food borne disease </a></li>
                        <li><a href="">Common food hazards</a></li>
                        <li><a href="">Bacteria </a></li>
                        <li><a href="">The growth of bacteria </a></li>
                        <li><a href="">Viruses</a></li>
                      </ul>

                      <!-- ch-2 -->
                      <p>Good Hygiene Practice (GHP)</p>
                      <ul>
                        <li><a href="">Protective clothing </a></li>
                        <li><a href="">Personal hygiene</a></li>
                        <li><a href="">Hand washing</a></li>
                        <li><a href="">Separation</a></li>
                        <li><a href="">High risk food</a></li>
                        <li><a href="">Operational hygiene </a></li>
                        <li><a href="">Water safety</a></li>
                        <li><a href="">Pest control </a></li>
                        <li>
                          <a href="">High risk and low risk cleaning</a>
                        </li>
                        <li><a href="">Cleaning methods</a></li>
                        <li><a href="">Maintenance</a></li>
                        <li><a href="">Delivery and storage</a></li>
                      </ul>

                      <!-- ch-3 -->
                      <p>Temperature Control</p>
                      <ul>
                        <li><a href="">The Danger Zone</a></li>
                      </ul>

                      <!-- ch-4 -->
                      <p>Cooking</p>
                      <ul>
                        <li><a href="">Cooking checks</a></li>
                        <li><a href="">Temperature probes</a></li>
                        <li><a href="">Hot-holding and re-heating</a></li>
                      </ul>

                      <!-- ch-5 -->
                      <p>Cooling</p>
                      <ul>
                        <li><a href="">Cold storage</a></li>
                        <li><a href="">Cold display</a></li>
                        <li><a href="">Cooling hot food</a></li>
                        <li><a href="">Freezing and defrosting</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main class="mainContent col-lg-6 col-md-8 col-sm-12">
            <div class="viewType mb-4">
              <div class="reading active" data-target="content">
                <i class="fab fa-readme"></i>
                <p>Reading</p>
              </div>
              <div class="video" data-target="videos">
                <i class="fas fa-play-circle"></i>
                <p>Videos</p>
              </div>
            </div>
            <div class="programContent">
              <!-- reading content -->
              <div class="row viewChapters active" id="content">
                <div class="info">
                  <div id="ThisBook">
                    <h2 class="chapter">Introduction</h2>
                    <h2 class="title">This book</h2>
                    <p>
                      This book is an introduction to the essential requirements
                      of food safety for people working in the food industry in
                      the Emirate of Sharjah. It is designed to accompany
                      training courses for food businesses on the Sharjah Food
                      Safety Program.
                    </p>
                  </div>
                  <div id="FoodSafety">
                    <h2 class="title">Food safety</h2>
                    <p>
                      Food safety is "assurance that food will not cause harm to
                      the consumer when it is prepared and / or eaten according
                      to its intended use"
                    </p>
                  </div>
                  <div id="FoodBorneDisease">
                    <h2 class="title">Food borne disease</h2>
                    <p>
                      Food borne disease is a serious problem that causes
                      illness and death in some cases in every country in the
                      world.
                      <br />
                      Importantly, most cases of food borne disease can be
                      prevented, and there are simple steps that can be taken to
                      reduce the risks and make food safer.
                    </p>
                    <p>
                      Food borne disease is caused by consuming contaminated
                      food, drinks or water.
                    </p>
                    <h3 class="title">Who is at risk?</h3>
                    <p>
                      All people are at risk from food borne diseases. However,
                      there are certain people who are at greater risk. These
                      include young children, the elderly, pregnant women and
                      people who have weak immune systems due to illness.
                    </p>
                    <h3 class="title">What are the effects?</h3>
                    <p>
                      Food borne disease can cause a wide range of symptoms,
                      including vomiting, diarrhoea, fever and headache. It can
                      happen within hours of eating contaminated food, or take
                      weeks for symptoms to appear. It can also take hours, days
                      or weeks to recover from <br />
                      It is important to realise that in some cases, and
                      especially for people at greater risk, food borne disease
                      can be fata
                    </p>
                    <h3 class="title">What are the causes?</h3>
                    <p>
                      Microbiological hazards such as bacteria and viruses are
                      the major cause of food safety problems in most of the
                      food industry. The causes and prevention of these hazards
                      is therefore the focus of this book.
                    </p>
                  </div>
                  <div id="commonFoodHazards">
                    <h2 class="title">Common Food Hazards</h2>
                    <p>There are three main types of food hazards:</p>
                    <ul>
                      <li>
                        <img src="" alt="" />
                        <div class="moreInfo">
                          <h3 class="title">
                            1. Microbiological (biological) hazards
                          </h3>
                          <p>
                            For many food businesses microbiological hazards
                            such as bacteria and viruses are the most important.
                            They cause the illness and death of millions of
                            people every year
                          </p>
                        </div>
                      </li>
                      <li>
                        <div class="moreInfo">
                          <h2 class="title">2. Chemical hazards</h2>
                          <p>
                            Chemical contamination can be caused by cleaning and
                            pest control chemicals (e.g. detergents,
                            disinfectants, rat poison). It can cause immediate
                            toxic effects or long-term illnesses (e.g. cancer).
                            <br />
                            To control chemical hazards, all chemicals must be
                            purchased, stored and used with care.
                          </p>
                        </div>
                        <img src="" alt="" />

                        <img src="" alt="" />
                        <p>
                          Individual people can also have allergic reactions to
                          naturally occurring chemicals in certain foods (e.g.
                          nuts, seafood, milk, wheat, soya). Businesses need to
                          be aware of common food allergens so they can reduce
                          the risks of contamination and ensure correct
                          information is given to customers.
                        </p>
                      </li>
                      <li>
                        <div class="moreInfo">
                          <h3 class="title">3. Physical hazards</h3>
                          <p>
                            Physical contamination can range from unpleasant
                            quality issues (e.g. hair in food) to serious food
                            safety issues (e.g. glass in food).
                            <br />
                            To control physical hazards, food must be kept
                            covered during transport, storage and display, and
                            food handlers must follow strict personal hygiene
                            rules.
                          </p>
                        </div>
                        <img src="" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div id="bacteria">
                    <h2 class="title">Bacteria</h2>
                    <p>
                      Bacteria (e.g. Salmonella, Campylobacter, E-coli) are
                      organisms that are too small to be seen without a
                      microscope. There are thousands of different types of
                      bacteria, and many are harmless. This book will focus on
                      the types of bacteria that cause food borne disease.
                    </p>

                    <h3 class="title">Where do bacteria come from?</h3>
                    <p>
                      Bacteria can enter food production areas in many ways:
                    </p>
                    <ul>
                      <li>
                        <h3 class="title">1. Soil/dust</h3>
                        <p>
                          Soil and dust contain many bacteria that can be
                          brought into food production areas on vegetables, food
                          packaging and outdoor shoes
                        </p>
                      </li>
                      <li>
                        <h3 class="title">2. Pests / pets</h3>
                        <img src="" alt="" />
                      </li>
                      <li>
                        <h3 class="title">Water</h3>
                        <p>
                          Water from some sources can be contaminated with
                          bacteria
                        </p>
                      </li>
                      <li>
                        <h3 class="title">5. Food handlers</h3>
                        <p>
                          The human body and clothes worn outside food
                          production areas are a source of bacteria
                        </p>
                      </li>
                      <li>
                        <h3 class="title">6. Waste</h3>
                        <p>
                          Waste can contain bacteria and can also attract pests.
                        </p>
                        <img src="" alt="" />
                      </li>
                      <li></li>
                    </ul>
                  </div>
                  <div id="TheGrowthOfBacteria">
                    <h2 class="title">The Growth of Bacteria</h2>
                    <p>
                      The growth of bacteria in food and food production areas
                      increases the risk of food borne disease. <br />
                      The following factors affect the growth of bacteria:
                    </p>
                    <ul>
                      <li>
                        <h3 class="title">1. Warmth</h3>
                        <p>
                          Most bacteria will grow between 5°C and 63°C. Human
                          body temperature (37°C) is ideal for bacteria to grow.
                        </p>
                        <img src="" alt="" />
                      </li>
                      <li>
                        <h3 class="title">2. Moisture</h3>
                        <img src="" alt="" />
                        <p>
                          Most bacteria require moisture ot grow. THey grow
                          faster on moist food (e.g. cream) than dry food
                        </p>
                      </li>
                      <li>
                        <h3 class="title">3. Food</h3>
                        <p>
                          Most food that is suitable for people to eat can also
                          support the growth of bacteria, especially meat,
                          poultry, fish and dairy products
                        </p>
                        <img src="" alt="" />
                      </li>
                      <li>
                        <h3 class="title">4. Time</h3>
                        <img src="" alt="" />
                        <p>
                          In ideal conditions bacteria can grow very quickly.
                          Within a few hours large numbers may have grown.
                        </p>
                      </li>
                      <li>
                        <h3 class="title">5. Oxygen</h3>
                        <p>
                          Many bacteria need oxygen to grow. Some need an
                          absence of oxygen.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div id="viruses">
                    <h2 class="title">Viruses</h2>
                    <p>
                      Viruses are organisms that are much smaller than bacteria.
                      They cause many outbreaks of food borne disease. <br />
                      A typical virus (e.g. Norovirus) usually causes symptoms
                      such as diarrhoea and vomiting within 2 days of eating
                      contaminated food. Illness can last 7 days or more
                    </p>
                    <img src="" alt="" />
                    <p>
                      People can become infected with viruses in several ways,
                      including:
                    </p>
                    <ul style="list-style: disc">
                      <li>Consuming contaminated food or drink,</li>
                      <li>
                        Touching contaminated surfaces or objects and then
                        touching their mouths
                      </li>
                      <li>
                        Having direct contact with someone who is infected and
                        showing symptoms.
                      </li>
                    </ul>
                    <p>
                      Because viruses are so small, they can contaminate food
                      and drink very easily. The slightest contact with
                      contaminated hands or surfaces can spread a virus. <br />
                      <br />
                      Viruses are extremely contagious and spread very quickly,
                      especially through ‘closed’ environments such as cruise
                      ships, schools and hospitals. <br />
                      <br />
                      Therefore, to reduce the risk of spreading viruses, it is
                      essential for food handlers to be ‘fit for work’ (see page
                      8 for details), and to follow strict personal hygiene and
                      hand washing practices at all times. <br />
                    </p>
                  </div>
                  <div id="GoodHygienePractice">
                    <h2 class="chapter">Good Hygiene Practice (GHP)</h2>
                    <p>
                      Food can easily become contaminated by people, other food,
                      equipment, surfaces and utensils. This is called ‘cross
                      contamination’. Preventing cross contamination is
                      essential to food safety. <br />
                      <br />
                      Many bacteria can be found on the human body and on
                      clothes worn outside food production areas. To prevent
                      food being contaminated everyone in food preparation areas
                      must:
                    </p>
                    <ul style="list-style: disc">
                      <li>
                        Maintain good personal hygiene (described on page 8),
                        and
                      </li>
                      <li>Wear clean protective clothing (described below).</li>
                    </ul>

                    <p>
                      Protective clothing includes jackets, aprons, shoes,
                      hairnets and hats. A clean set of protective clothing
                      should always be worn in food production areas.
                    </p>
                    <br />
                    <img src="" alt="" />
                    <p>
                      It is important not to wear protective clothing outside
                      food production areas (e.g. on a break or between shifts)
                      because contamination from outside will be brought back
                      inside.
                    </p>
                    <div id="personalHygiene">
                      <h2 class="title">Personal Hygiene</h2>
                      <p>
                        Jewellery and watches should not be worn, as they can
                        trap dirt and bacteria. Nails must be clean and short
                        with no nail varnish, as this can hide dirt.
                      </p>
                      <img src="" alt="" />
                      <p>
                        Smoking, eating and chewing gum must not be allowed, as
                        this can contaminate hands. Employees should be careful
                        not to sneeze, cough, or touch their hair or face when
                        preparing food.
                      </p>
                      <div class="moreInfo d-flex">
                        <p>
                          Direct hand contact can be reduced by using tongs,
                          spoons and paper to move and position food.
                        </p>
                        <img src="" alt="" />
                      </div>
                      <div class="moreInfo d-flex">
                        <h3 class="title">Fitness for work</h3>
                        <img src="" alt="" />
                        <p>
                          Small cuts must be covered with a clean, waterproof
                          plaster.
                        </p>
                      </div>
                      <p>
                        Employees must not work in food production areas if
                        they:
                      </p>
                      <ul style="list-style: georgian">
                        <li>
                          have a cut that cannot be safely covered by a plaster,
                        </li>
                        <li>
                          have a cut that is septic (even if covered), as these
                          contain high levels of bacteria,
                        </li>
                        <li>
                          are suffering from any food borne disease symptoms
                          such as diarrhoea, vomiting, jaundice or fever. These
                          symptoms could mean that the employee is infectious
                          and could spread food borne disease.
                        </li>
                      </ul>
                    </div>
                    <div id="handWashing">
                      <h2 class="title">Hand Washing</h2>
                      <p>
                        Hands are one of the most common sources of cross
                        contamination in food production areas. Hands can become
                        contaminated with bacteria from a wide variety of
                        sources and spread them quickly and easily <br />
                        The three most important times for hands to be washed
                        thoroughly are:
                      </p>
                      <ol>
                        <li>
                          When entering the food preparation area (after a break
                          or going to the toilet),
                        </li>
                        <li>
                          Before preparing ‘high risk’ ready-to-eat food (see
                          page 11)
                        </li>
                        <li>
                          After preparing raw food (e.g. meat, poultry, fish or
                          eggs)
                        </li>
                      </ol>
                      <img src="assets/img/Hand wash steps.PNG" alt="" />
                    </div>
                    <div id="separation">
                      <h2 class="title">Separation</h2>
                      <p>
                        Food itself can be a source of contamination. In
                        particular, raw foods such as meat, poultry, fish and
                        eggs are often contaminated with large numbers of
                        bacteria that can easily spread to other food. This is a
                        particular risk for ‘high risk’ foods (see page 11).
                      </p>
                      <img src="" alt="" />
                      <p>
                        Different types of food must be kept separate at all
                        times: during delivery, unloading, storage, defrosting,
                        preparation, display, etc. For example, raw food and
                        ‘high risk’ food should ideally be kept in separate cold
                        storage equipment. <br /><br />
                        In situations where these foods must be stored in the
                        same equipment (e.g. a ‘general purpose’ fridge) the raw
                        meat and poultry should be kept separately on the bottom
                        shelf. All foods should also be safely covered during
                        storage.
                      </p>
                      <img src="" alt="" />
                    </div>
                    <div id="highRiskFood">
                      <h2 class="title">Hight Risk Food</h2>
                      <div class="moreInfo">
                        <p>
                          There are some types of food that are at greater risk
                          than others. These are called ‘high risk’ food and
                          need to be treated with extra care at all stages, from
                          purchase and storage to preparation and service
                          <br /><br />
                          Examples of ‘high risk’ food include: cold cooked
                          meats and seafood, sandwiches, salads, cream desserts,
                          hummus, and mayonnaise.
                        </p>
                        <img src="" alt="" />
                      </div>
                      <div class="moreInfo">
                        <img src="" alt="" />
                        <p>
                          <span class="title">
                            Why is this food high risk ? <br />
                          </span>
                          Bacteria grow quickly and easily on these kinds of
                          food. They are also ‘ready-to-eat’ food, which means
                          they will not be cooked at a later stage (i.e. before
                          they are eaten), so there is no opportunity to kill
                          the bacteria.
                        </p>
                        <p>
                          ‘High risk’ foods such as salads and sandwiches must
                          be kept cold, but they are often brought out of cold
                          storage so that they can be prepared or displayed to
                          customers. There is also often a lot of handling
                          involved during preparation.
                        </p>
                        <img src="" alt="" />
                        <p>
                          All of these factors make these types of food very
                          likely to cause food borne disease if they are not
                          treated with care at all stages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- videos content -->
              <div class="videos" id="videos">
                <h2>Videos is working</h2>
              </div>
            </div>
          </main>
          <div class="rightSide col-lg-3 col-md-4 col-sm-12">
            <h2>right side</h2>
          </div>
        </div>
      </div>
    </section>
    <!-- external library -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- main js file -->
    <script src="assets/js/main.js"></script>
  </body>
</html>
