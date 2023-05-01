class Api::ProductsController < ActionController::API

    def show
        @product = Product.find(params[:id])
    end


    def index
        @products = Product.all.sort { |a,b| b.created_at <=> a.created_at }
      end
end
