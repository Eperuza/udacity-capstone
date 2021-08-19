import React from 'react'

export default function Feed({userEmail}) {
  const items = ['item1', 'item2', 'item3', 'item4']
  return (
    <div className = "feed">
      {
        items.map( item => {
          return <ul>item</ul>
        })
      }
      {userEmail}
    </div>
  )
}
