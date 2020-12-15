import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import './todo-since.scss';

export function TodoSince(props) {
  return <div className='todo-since-container'>
      <ReactTimeAgo date={props.created} locale="en-US"/>
  </div>
}