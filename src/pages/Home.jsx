export default function Home() {
  return (
    <>
      <section className='hero_grid_box'>
        <div className='hero_grid_cover'>
          <img
            src='/images/image-web-3-mobile.jpg'
            alt='hero cover mobile'
            className='hero_cover_mobile'
          />
          <img
            src='/images/image-web-3-desktop.jpg'
            alt='hero cover desktop'
            className='hero_cover_desktop'
          />
        </div>
        <div className='hero_grid_heading'>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className='hero_grid_description'>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfulling its promise?
          </p>
          <button>Read more</button>
        </div>
        <div className='hero_grid_new'>
          <h2>New</h2>
          <div>
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </section>

      <section className='product_grid_box'>
        <article>
          <div>
            <img src='/images/image-retro-pcs.jpg' alt='retro-pcs' />
          </div>
          <div>
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>

        <article>
          <div>
            <img src='images/image-top-laptops.jpg' alt='top-laptops' />
          </div>
          <div>
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>

        <article>
          <div>
            <img src='/images/image-gaming-growth.jpg' alt='gaming-growth' />
          </div>
          <div>
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunies</p>
          </div>
        </article>
      </section>
    </>
  );
}
