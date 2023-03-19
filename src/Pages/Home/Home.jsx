import React from 'react'

const Home = (mass) => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>{mass.mas}</h2>
                    <p>{mass.nam}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste dignissimos temporibus fugit obcaecati harum deleniti quasi magnam iure, non vero neque id debitis facilis cupiditate mollitia commodi, nemo illo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iste dignissimos temporibus fugit obcaecati harum deleniti quasi magnam iure, non vero neque id debitis facilis cupiditate mollitia commodi, nemo illo!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home