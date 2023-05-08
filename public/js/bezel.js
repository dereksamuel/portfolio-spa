class Bezel {
  static get inputProperties() {
    return ['--bezel-color', '--bezel-width', '--bezel-radius', '--bezel-filled', '--bezel-filled-bg', '--bezel-color-bg']
  }

  static get inputArguments() {
    return ['*']
  }

  static get contextOptions() {}

  parseValue(val) {
    return val.toString().replace(' ', '').replace(/px|%/g, '').split(' ')
  }

  paint(ctx, geom, properties, args) {
    ctx.lineWidth = properties.get('--bezel-width')
    ctx.strokeStyle = properties.get('--bezel-color')
    const inset = ctx.lineWidth / 2
    const [topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius] = this.parseValue(properties.get('--bezel-radius'))

    const width = geom.width
    const height = geom.height

    ctx.lineTo(topLeftRadius, inset)
    ctx.lineTo(width - topRightRadius, inset)
    ctx.lineTo(width - inset, topRightRadius)
    ctx.lineTo(width - inset, height - bottomRightRadius)
    ctx.lineTo(width - bottomRightRadius, height - inset)
    ctx.lineTo(bottomLeftRadius, height - inset)
    ctx.lineTo(inset, height - bottomLeftRadius)
    ctx.lineTo(inset, topLeftRadius)
    ctx.closePath()

    if (properties.get('--bezel-color-bg')?.length) {
      ctx.fillStyle = properties.get('--bezel-color-bg')
    }
    if (properties.get('--bezel-filled-bg')[0].trim() === 'true') {
      ctx.fill()
    }
    ctx.stroke()
  }
}

registerPaint('bezel', Bezel)