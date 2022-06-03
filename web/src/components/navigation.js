import { useState } from "react";
import React, { Component } from "react";

export class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
              Order of Omakase
            </a>{' '}
          </div>
  
          <div
            className="collapse navbar-collapse"
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#about' className='page-scroll' data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
                  about
                </a>
              </li>
              <li>
                <a href='#mint' className='page-scroll' data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
                  mint
                </a>
              </li>
              <li>
                <a href='#faq' className='page-scroll' data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
                  faq
                </a>
              </li>
              <li>
                <a href='#team' className='page-scroll' data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
                  team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}