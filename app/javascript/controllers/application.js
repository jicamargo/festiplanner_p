import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

// Next 2 lines are not normal , because they are includen in the index.js file
// but I have to include them here index.js file is not importing this.
import CssController from "./css_controller.ts"
application.register("css", CssController)

import TextController from "./text_controller.ts"
application.register("text", TextController)

export { application }
