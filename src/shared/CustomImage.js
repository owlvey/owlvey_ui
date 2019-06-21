import React from "react";

class CustomImage extends React.Component {
  state = {
    imageSource: null,
  };

  loadImage = () => {
    const { headers, src } = this.props;
    const _headers = new Headers(Object.entries(headers || {}));
    fetch(src, {
      headers: _headers,
    }).then(res => {
      if (res.ok) {
        res.blob().then(b => {
          // Start loading the image:
          this.setState({ imageSource: URL.createObjectURL(b) });
        });
      } else {
        console.error(res);
      }
    });
  };

  componentDidMount() {
    this.loadImage();
  }

  render() {
    const { imageSource } = this.state;
    const { src, ...restProps } = this.props;
    return <img {...restProps} src={imageSource} />;
  }
}

export default CustomImage;
