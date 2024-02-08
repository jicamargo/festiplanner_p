import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

// Next 2 lines are not normal , because they are includen in the index.js file
// but I have to include them here index.js file is not importing this.
import FavoriteToggleController from "./favorite_toggle_controller.ts"
application.register("favorite-toggle", FavoriteToggleController)


export { application }
