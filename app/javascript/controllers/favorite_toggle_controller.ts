import { Controller } from "@hotwired/stimulus";

export default class FavoriteToggleController extends Controller {
  connect(): void {
    console.log("Favorite toggle controller connected!");
  }

  toggle(): void {
    console.log("Click!")
  }
}
