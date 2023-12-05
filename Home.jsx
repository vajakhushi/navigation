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
