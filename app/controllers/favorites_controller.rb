class FavoritesController < ApplicationController
  def index
    if params[:count_only]
      render(partial: "favorites/count")     
    end
  end

  def create
    @favorite = Favorite.create(
      user: current_user,
      concert_id: params[:concert_id]
    )
    respond_to do |format|
      format.turbo_stream { head(:ok) }
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    respond_to do |format|
      format.turbo_stream { head(:ok) }
    end
  end

  private def favorite_params
    params.require(:concert_id)
  end
end
