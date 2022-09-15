import { NavLink } from "react-router-dom"
import { Title, Subtitle } from "@styled"

export default function NotFound() {
  return (
    <main className="grid justify-center text-center">
      <div>
        <Title className="">Oops. There is nothing here!</Title>
      </div>
      <NavLink to="/issues">
        <Subtitle className="inline-flex underline hover:text-yellow-400">
          See all Issues
        </Subtitle>
      </NavLink>
    </main>
  )
}
