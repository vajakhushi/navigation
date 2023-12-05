import React from 'react'

function Home() {
  const data=[
    {
      id:1,
      title:"card-1",
      desc:"this is card 1",

    },
    {
      id:2,
      title:"card-2",
      desc:"this is card 2",

    },
    {
      id:3,
      title:"card-3",
      desc:"this is card 3",

    },
    {
      id:4,
      title:"card-4",
      desc:"this is card 4",

    },
  ]

 
  return (

   

   
    <div>
      {/* <div className='home'>
        <div class='row'>
          <div class="col-md-6 text-center">
          <h2>WE DESIGNING YOUR SPACE</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maxime velit nihil ipsum adipisci! Et magni perferendis, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta quis minima odit? Aperiam, voluptates. Earum, explicabo incidunt maxime corporis dolor hic non eveniet vero aut magnam suscipit nulla similique?</p>
        <button class="btn btn-outline-warning">Learn More</button>
          </div>
          <div class="col-md-6">
            <img src="https://devvlsnxxkrq9.cloudfront.net/prod/assets/_950xAUTO_crop_center-center_none/land_2.jpg" class="d-block w-300"/>
          </div>
        </div>
      </div> */}
    <div class="row col-md-12">
    <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>
    </div>

  )
}

export default Home