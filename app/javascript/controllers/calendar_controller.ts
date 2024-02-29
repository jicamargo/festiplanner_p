import { Controller } from "@hotwired/stimulus"

export default class calendarController extends Controller {
  static targets = ["calendarDay"]
  calendarDayTargets: HTMLElement[]

  everyDayUnselected(): boolean {
    return this.calendarDayTargets.every((target: HTMLElement) => {
      return target.dataset.cssStatusValue === "false"
    })
  }

  filter(): void {
    const everyDayUnselected = this.everyDayUnselected()
    this.calendarDayTargets.forEach((target: HTMLElement) => {
      const show = everyDayUnselected || target.dataset.cssStatusValue === "true"
      const schedule = document.getElementById(target.dataset.scheduleId)
      if (schedule) {
        schedule.classList.toggle("hidden", !show)
      }
    })
  }

  showAll(): void {
    this.calendarDayTargets.forEach((target: HTMLElement) => {
      target.dataset.cssStatusValue = "false"
      const schedule = document.getElementById(target.dataset.scheduleId)
      if (schedule) {
        schedule.classList.toggle("hidden", false)
      }
    })
  }
}
