import Point from "./Point";

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      const point =
        (Point.x - center.x) * (Point.x - center.x) +
        (Point.y - center.x) * (Point.y - center.x);
      return this.getArea() < point ? false : true;
    },
  };
}
