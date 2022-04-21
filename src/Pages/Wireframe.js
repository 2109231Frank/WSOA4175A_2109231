import React, { Component } from 'react'
import "../Style/Wireframe.css";
import { Wireframelist } from '../Helpers/WireframeList';
import WireframeItem from '../Components/WireframesItem';

export default class Wireframe extends Component {
  render() {
    return (
        <div className='wireframe'>
            <h1>STYLE</h1>

            <p className='intro'>
                This page shows my initial idea for this site as well as the reasons why I changed what I did.
            </p>

            <div className='wireframelist'>
                <h2>Wireframes</h2>
                <div>
                {Wireframelist.map((wireframeItem, value) => {
                    return(
                        <WireframeItem
                        value = {value}
                        title = {wireframeItem.title}
                        image = {wireframeItem.image}
                        />
                    )
                })}
                </div>
            </div>
        </div>
    )
  }
}
