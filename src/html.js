import React from 'react'
import socialImage from '../content/images/background-poly.jpg'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:image" content={socialImage} />
          <meta property="og:image:width" content="1920" />
          <meta property="og:image:height" content="1199" />
          {this.props.headComponents}
          <link href="/img/icon.ico" rel="icon" />
        </head>
        <body style={{ backgroundColor: '#000' }}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
