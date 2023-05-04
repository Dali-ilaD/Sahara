class Api::CartItemsController < ActionController::API
    wrap_parameters include: CartItem.attribute_names + ["productId", 'userId']

    def index
        
        @cart_items = User.first.cart_items.includes(:product)
    end

    def create 
        # debugger
        @cart_item = CartItem.new(cart_item_params)

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = CartItem.find(params[:id])
        if @cart_item.update(cart_item_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_items = CartItem.find(params[:id]).destroy
        head :no_content
    end


    def cart_item_params
        params.require(:cart_item).permit(:product_id, :quantity, :user_id)
    end

    
end