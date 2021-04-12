const Footer = () => {
    return (
        <div>

            <footer className="bg-dark text-center text-white">
                <div className="container p-4">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>


                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">


                                <div className="col-md-5 col-12">
                                    <strong>Send Message to developer</strong>
                                    <br></br>
                                    <br></br>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control"
                                               placeholder="Your email"/>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <textarea type="email" id="form5Example2" className="form-control"
                                                  style={{maxHeight: '300px', minHeight: '300px'}}
                                                  placeholder="message"> </textarea>
                                    </div>
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Send
                                    </button>
                                </div>


                            </div>

                        </form>
                    </section>


                    <section className="mb-4">
                        <p>
                            this website for reading , upload , download and review book

                        </p>
                    </section>


                </div>


                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://Abdo300Nasr@gmail.com/"> Abdo300Nasr@gmail.com </a>
                </div>

            </footer>

        </div>
    )
}

export default Footer
