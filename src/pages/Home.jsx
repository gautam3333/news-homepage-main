export default function Home() {
  return (
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
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
}
