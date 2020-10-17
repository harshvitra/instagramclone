import React from 'react'
function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-white" style={{borderBottom:'1px solid rgb(219,219,219)'}}>
            <div className="container" style={{maxWidth:'75%'}}>
                <a class="navbar-brand" href="#">
                    <img src={'/assets/images/ig.png'} />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline my-2 my-lg-0 w-100 justify-content-center">
                        <input class="form-control mr-sm-2 form-control-sm text-center" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <ul class="navbar-nav ml-auto">
                    <button type="button" class="btn btn-primary btn-sm">LogIn</button>
                    <button type="button" class="btn btn-link btn-sm">SignUp</button>

                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Navbar
