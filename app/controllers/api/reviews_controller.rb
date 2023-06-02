class Api::ReviewsController < ApplicationController
    before_action :set_review, only: [:update, :destroy]
  
    def create
        # if(current_user){
            @review = Review.new(review_params)
            if @review.save
                render :index
            else
                render json: @review.errors.full_messages, status: 422
            end
        # }else{
            # render json: { error: "You must be logged in to create a review." }, status: :unauthorized
        # }
      end
    end
  
    def index
        @reviews = Review.all
        render json: @reviews
    end
    
    def update
        if @review.update(review_params)
            render json: @review
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @review.destroy
        head :no_content
    end
    

    private

    def set_review
        @review = Review.find(params[:id])
    end

    def review_params
      params.require(:reviews).permit(:user_id, :product_id, :body, :rating)
    end
  end