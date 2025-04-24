import React from 'react'
import styled from "styled-components"

function Menu() {
  return (
    <ul>
        <li>
            <a href="/home">Home</a>
        </li>
        <li>
            <a href="/works">My Works</a>
        </li>
        <li>
        <a href="/cv">My CV</a>
        </li>
    </ul>
  )
}

export default Menu