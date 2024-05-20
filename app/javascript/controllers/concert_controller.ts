import { Controller } from "@hotwired/stimulus"

export default class ConcertController extends Controller {
  static targets = ["tickets"]
  ticketsTarget: HTMLElement

  static values = { id: Number, soldOut: Boolean, ticketsRemaining: Number }
  soldOutValue: boolean
  ticketsRemainingValue: number

  ticketsRemainingValueChanged(): void {
    if (this.ticketsRemainingValue === 0) {
      // add a class to the element for a red background
      this.ticketsTarget.classList.add("bg-red-200")
      this.ticketsTarget.innerText = "!Sold Out!"
    } else {
      // add a class to the element for a green background
      this.ticketsTarget.classList.add("bg-green-200")
      const ticketsRemaining = `${this.ticketsRemainingValue} Tickets Remaining`
      this.ticketsTarget.innerText = ticketsRemaining
    }

  }
}