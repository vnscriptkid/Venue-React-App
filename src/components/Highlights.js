import React, { Component } from 'react';
import './Highlights.scss';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

class Highlights extends Component {
    state = {
        sales: 0
    }

    componentDidMount() {
        
    }

    onSalesReveal = () => {
        const timer = setInterval(() => {
            if (this.state.sales < 22) {
                this.setState({ sales: this.state.sales + 1 });
            } else {
                clearInterval(timer);
            }
        }, 50)
    }
    
    render() {
        return (
            <section className="section section--light highlights">
                <div className="container">
                    <h2 className="section-heading text-center mb-2">Highlights</h2>
                    <p className="highlights__desc mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolor. Voluptatem, maiores. Eveniet, iste ratione fugiat inventore hic quod voluptatum odit distinctio quaerat doloremque sit atque modi blanditiis nobis consequatur!</p>
                    <div className="highlights__sales-off">
                        <div className="highlights__percent">
                            <Reveal onReveal={this.onSalesReveal}>
                                <span className="highlights__number">{this.state.sales}%</span>
                            </Reveal>
                            <p className="highlights__under-number">OFF</p>
                        </div>
                        <Fade right delay={500}>
                            <div className="highlights__info">
                                <h3 className="highlights__info-title mb-1">Purchase tickets before 20th JUNE</h3>
                                <p className="highlights__info-desc mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem ab quod molestias quis, excepturi deleniti esse laborum suscipit? Eligendi animi numquam sit, ipsum dolorem vero corrupti quibusdam, iusto a nam similique impedit obcaecati? Magnam temporibus officia odio nobis iure.</p>
                                <button className="btn btn--highlights">PURCHASE TICKETS</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        );
    }
}

export default Highlights;