import React from 'react'

function ThirdComponent() {
    const links = ["MEN", "WOMEN", "KIDS", "HOME", "BUEATY", "GENZ", "STUDIO"]
    // const hrefs = ["", "", ""]
  return (
    <div>
          {links.map((linkName, id) => (
            <div key={id}>
               
                <a href='https://www.google.com/' target='_blank'>{linkName}</a>
            </div>
          ))}
    </div>
  )
}

export default ThirdComponent