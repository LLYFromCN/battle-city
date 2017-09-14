import * as React from 'react'
import { ITEM_SIZE_MAP } from 'utils/constants'

type P = {
  x: number,
  y: number,
}

class BrickWallShape0 extends React.PureComponent<P> {
  static offScreen = {
    width: 4,
    height: 4,
    initProps: { x: 0, y: 0 },
    render(ctx: CanvasRenderingContext2D, offScreenCanvas: HTMLCanvasElement) {
      const { x, y } = this.props
      ctx.drawImage(offScreenCanvas, x, y)
    }
  }

  render() {
    const { x, y } = this.props
    return (
      <g role="brickwall" transform={`translate(${x},${y})`}>
        <rect width={4} height={4} fill="#636363" />
        <rect
          x={0}
          y={0}
          width={4}
          height={3}
          fill="#6B0800"
        />
        <rect
          x={0}
          y={1}
          width={4}
          height={2}
          fill="#9C4A00"
        />
      </g>
    )
  }
}

class BrickWallShape1 extends React.PureComponent<P> {
  static offScreen = {
    width: 4,
    height: 4,
    initProps: { x: 0, y: 0 },
    render(ctx: CanvasRenderingContext2D, offScreenCanvas: HTMLCanvasElement) {
      const { x, y } = this.props
      ctx.drawImage(offScreenCanvas, x, y)
    }
  }

  render() {
    const { x, y } = this.props
    return (
      <g role="brickwall" transform={`translate(${x},${y})`}>
        <rect width={4} height={4} fill="#636363" />
        <rect
          x={1}
          y={0}
          width={3}
          height={3}
          fill="#6B0800"
        />
        <rect
          x={2}
          y={1}
          width={2}
          height={2}
          fill="#9C4A00"
        />
      </g>
    )
  }
}

export default class BrickWall extends React.PureComponent<P, {}> {
  render() {
    const { x, y } = this.props

    const row = Math.floor(y / ITEM_SIZE_MAP.BRICK)
    const col = Math.floor(x / ITEM_SIZE_MAP.BRICK)

    if ((row + col) % 2 === 0) {
      return <BrickWallShape0 x={x} y={y} />
    } else {
      return <BrickWallShape1 x={x} y={y} />
    }
  }
}
