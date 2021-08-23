interface BadgeProps {
  qty: number
}

function Badge({ qty }: BadgeProps) {
  return <p className="Badge">{qty}</p>
}

export default Badge
