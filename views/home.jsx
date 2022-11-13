const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="\images\cafeInside2.jpg" alt="Inside a Pretty Cafe" />
                  <div>Photo by <a href="https://unsplash.com/@thetangledtomato?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chesley McCarty</a> on <a href="https://unsplash.com/s/photos/cafe-interior?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

