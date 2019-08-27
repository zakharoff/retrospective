import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import { current_user, board } from './fake_json'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Board { ...board }/>,
      document.getElementById('board-spa'),
    )
  })
