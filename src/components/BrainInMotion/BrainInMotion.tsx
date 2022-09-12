import React from 'react'
import "./BrainInMotion.scss"
import { ReactComponent as Rocket } from "../../assets/rocket.svg"
import { ReactComponent as Cart } from "../../assets/cart-full.svg"
import { ReactComponent as Code } from "../../assets/code-alt.svg"
import { ReactComponent as Robot } from "../../assets/android.svg"
import { ReactComponent as Phone } from "../../assets/headphone-alt.svg"

export default function Model (){
    return(
        <div className="model-all-container">
            <img src="https://we-are.com.ar/assets/img/about-visual.png" className="img-model"/>
            <h1 className="model-title-container">ALGUNA FRASE INSPIRADORA ALGUNA FRASE INSPIRADORA</h1>
            <div className="model-imgs-container">
                <div className="svg-text-model-container">
                    <Rocket/>
                    <p className="text-svg-model">ACELERACIÓN ECOMMERCE</p>
                </div>
                <div className="svg-text-model-container">
                    <Cart/>
                    <p className="text-svg-model">EMARKETING</p>
                </div>
                <div className="svg-text-model-container">
                    <Code/>
                    <p className="text-svg-model">IMPLEMENTACIÓN</p>
                </div>
                <div className="svg-text-model-container">
                    <Robot/>
                    <p className="text-svg-model">BUSINESS INTELLIGENCE</p>
                </div>
                <div className="svg-text-model-container">
                    <Phone/>
                    <p className="text-svg-model">CUSTOMER SERVICE</p>
                </div>
            </div>
        </div>
    )
}