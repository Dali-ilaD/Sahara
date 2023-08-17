class Api::ProductsController < ActionController::API

    
    
    def index
        # @products = Product.all.sort { |a,b| b.created_at <=> a.created_at }
        if params[:search]
            # debugger
            @products = Product.where("name LIKE '%#{params[:search]}%'")
        else 
            @products = Product.all
        end
    end

    def show
        @product = Product.find(params[:id])
    end
end
